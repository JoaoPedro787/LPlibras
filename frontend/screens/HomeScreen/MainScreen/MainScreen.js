import React, { useContext } from "react";
import { SafeAreaView, FlatList, ActivityIndicator } from "react-native";

// Styles
import Styles from "./styles/mainScreenStyle";
import Colors from "../../../styles/colors";

// Context
import { UserInfoContext } from "../../../contexts/userInfoContext";

// Class
import TaskC from "./components/tasksC";

const ProfileScreen = () => {
    const { isLoading, progressData } = useContext(UserInfoContext);
    const formatedData = progressData.flatMap((item) => item.categorias.map((item) => item));

    return (
        <SafeAreaView style={Styles.bgContainer}>
            {isLoading
                ?
                <ActivityIndicator
                    size={'large'}
                    color={Colors.Orange}
                    style={{ flex: 1 }}
                />
                :
                <FlatList
                    data={formatedData}
                    horizontal={true}
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => <TaskC item={item} />}
                    keyExtractor={(item) => item.id_categoria}
                />
            }
        </SafeAreaView>
    );
};

export default ProfileScreen;