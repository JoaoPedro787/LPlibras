import React from "react";
import { useEffect, useState } from "react";
import { Alert } from "react-native";
import { getUserStatus } from '../../../../services/userStatusService';
import { getUserId } from '../../../../utils/AsyncStorageFunctions';
import { useFocusEffect } from '@react-navigation/native';

const useProfileData = () => {
  const [profilePath, setProfilePath] = useState('');
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [userData, setUserData] = useState([]);
  const [userInfo, setUserInfo] = useState([]);
  const [progressData, setProgressData] = useState([]);

  useFocusEffect(
    React.useCallback(() => {
      const fetchData = async () => {
        const id = await getUserId();
        return getUserStatus(id)
          .then((response) => setData(response))
          .catch((err) => Alert.alert('Erro', err.message))
          .finally(() => setLoading(false));
      };

      fetchData();
    }, [])
  );

  // Separando os dados
  useEffect(() => {
    if (data.length > 0) {
      setProgressData(data[1].modulos);
      setUserData(data[0].usuario);
    }
  }, [data]);

  // Informações do usuário
  useEffect(() => {
    if (userData) {
      // Perfil
      setProfilePath(userData.foto_perfil);

      // Formatando objeto para array
      const formatedData = Object.entries(userData).map(([key, value]) => ({ key: key, value: value }));

      // Filtrando
      const userInfo = formatedData.filter((el) => el.key !== 'foto_perfil');

      setUserInfo(userInfo);
    }
  }, [userData]);

  return {
    profilePath,
    isLoading,
    progressData,
    userInfo,
  };
};

export default useProfileData;