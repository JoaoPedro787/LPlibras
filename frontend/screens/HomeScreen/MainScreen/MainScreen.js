import React, { useContext, useState } from "react";
import { SafeAreaView, FlatList, ActivityIndicator, View } from "react-native";

// Styles
import Styles from "./styles/mainScreenStyle";
import Colors from "../../../styles/colors";

// Context
import { UserInfoContext } from "../../../contexts/userInfoContext";

// Class
import TaskC from "./components/tasksC";
import PaginatorC from "./components/paginatorC";

const MainScreen = ({ route }) => {
    const { isLoading, progressData } = useContext(UserInfoContext);

    const [currentIndex, setIndex] = useState(0);

    const { modulo } = route.params;

    const formatedData = progressData
        .filter((item) => item.id_modulo === modulo)
        .flatMap((item) => item.categorias.map((item) => item));

    return (
        <SafeAreaView style={Styles.bgContainer}>
            {isLoading
                ?
                <ActivityIndicator
                    size={'large'}
                    color={Colors.Orange}
                    style={{ flex: 1 }}
                />
                : (
                    <View
                        style={{ flex: 1 }}>
                        <FlatList
                            data={formatedData}
                            horizontal={true}
                            pagingEnabled
                            onMomentumScrollEnd={(event) => {
                                const index = Math.floor(
                                    event.nativeEvent.contentOffset.x /
                                    event.nativeEvent.layoutMeasurement.width
                                );

                                setIndex(index);
                            }}
                            showsHorizontalScrollIndicator={false}
                            renderItem={({ item }) => <TaskC item={item} />}
                            keyExtractor={(el) => el.i_id_glossario}
                        />
                        <PaginatorC data={formatedData} currentIndex={currentIndex} />
                    </View>
                )}
        </SafeAreaView>
    );
};

export default MainScreen;