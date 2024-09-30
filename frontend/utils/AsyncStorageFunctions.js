import AsyncStorage from '@react-native-async-storage/async-storage';

const storeUserId = async(data)=>{
    return await AsyncStorage.setItem('userId',data);
}

const getUserId = async()=>{
    return await AsyncStorage.getItem('userId');
}

export {storeUserId,getUserId};