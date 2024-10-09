import { useEffect, useState } from "react";

// Async
import { storeFavorites, getUserFavorites } from "../../../../utils/AsyncStorageFunctions";

const CardHook = () => {
    const [checked, setChecked] = useState([]);

    // Pegar dados
    useEffect(() => {
        const fetchFavorites = async () => {
            const data = await getUserFavorites()
                .then((data) => {
                    const parsedData = JSON.parse(data);
                    return Array.isArray(parsedData) ? parsedData : [parsedData];
                });

            setChecked(data);
        };

        fetchFavorites();
    }, []);

    // Função para atualizar os favoritos
    const updateFavorite = async (item) => {
        const itemExists = checked.includes(item);

        let formated;

        if (itemExists) {
            // Se o item já está, removê-lo
            formated = checked.filter((el) => el !== item);
        } else {
            // Caso contrário, adicionar o item à lista
            formated = checked[0] !== null ? [...checked, item] : [item];
        }

        await storeFavorites(formated);
        setChecked(formated);
    };

    return { checked, updateFavorite };
}

export default CardHook;