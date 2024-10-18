import api from './api';
import { to } from '../utils/asyncHandler';

const getSubCategories = async (id) => {
    return await to(api.get(`/api/category/${id}/subcategory`));
}

export { getSubCategories };