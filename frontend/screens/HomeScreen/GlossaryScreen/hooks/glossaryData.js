import { useState, useEffect } from "react";
import { Alert } from "react-native";
//api
import { getGlossaryByModule } from "../../../../services/glossaryService";

const getGlossaryData = (id) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        const FetchData = () => {
            return getGlossaryByModule(id)
                .then((response) => setData(response))
                .catch((err) => Alert.alert('Erro', err.message))
                .finally(() => setLoading(false));
        }

        FetchData();

    }, [])

    return { loading, data }
};

export { getGlossaryData };