import React, { useEffect, useState } from "react";
import { Alert } from 'react-native'
import { getSubCategories } from '../../../services/subCategoryService';

const FetchData = (id) => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        const dataFetch = () => {
            return getSubCategories(id)
                .then((response) => setData(response))
                .catch((err) => Alert.alert('Erro', err.message))
                .finally(() => setLoading(false));
        };

        dataFetch();
    }, []);

    return { isLoading, data };
};

export { FetchData };