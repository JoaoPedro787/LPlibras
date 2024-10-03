import api from './api';
import { to } from '../utils/asyncHandler';

const getUserStatus = async (id) => {
    return await to(api.get(`/api/user/${id}/status`));
}

export { getUserStatus };