import api from './api';
import { to } from '../utils/asyncHandler';

const getGlossaryByModule = async (id) => {
    return await to(api.get(`/api/glossary/${id}`));
}

export { getGlossaryByModule };