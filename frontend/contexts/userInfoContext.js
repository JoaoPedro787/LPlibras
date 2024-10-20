import React from "react";
import { useEffect, useState, createContext } from "react";
import { Alert } from "react-native";
import { getUserStatus } from '../services/userStatusService';
import { getUserId } from '../utils/AsyncStorageFunctions';
import { useFocusEffect } from '@react-navigation/native';

export const UserInfoContext = createContext({});

export const UserInfoProvider = ({ children }) => {
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
    if (data) {
      setProgressData(data.modulos);
      setUserData(data.usuario);
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

  return (
    <UserInfoContext.Provider value={{ isLoading, progressData, profilePath, userInfo }}>
      {children}
    </UserInfoContext.Provider>
  )
}