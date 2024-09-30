import api from './api';
import { to } from '../utils/asyncHandler';

const newUser = async (data) => {
    return await to(api.post('/api/user', data));
}

const checkUser = async (data) => {
    return await to(api.post('/api/user/check', data));
}

const getUser = async (id) => {
    return await to(api.get(`/api/user/${id}`));
}

const updateUser = async (id, data) => {
    return await to(api.put(`/api/user/${id}`,data));
}

export { newUser, checkUser, getUser, updateUser };