import AsyncStorage from '@react-native-async-storage/async-storage';

const storeUserId = async (data) => {
    return await AsyncStorage.setItem('userId', data);
}

const getUserId = async () => {
    return await AsyncStorage.getItem('userId');
}

const storeFavorites = async (data) => {
    return await AsyncStorage.setItem('userFavorites', JSON.stringify(data));
}

const getUserFavorites = async () => {
    return await AsyncStorage.getItem('userFavorites');
}

export { storeUserId, getUserId, storeFavorites, getUserFavorites };