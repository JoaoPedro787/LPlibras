import React from "react";
import { Modal, FlatList, Text, useWindowDimensions, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";

const DropDownC = ({ data, modalVisibility, style, closeModal }) => {
    const { width } = useWindowDimensions();

    return (
        <Modal
            transparent={true}
            visible={modalVisibility}
            animationType="fade"
        >
            <TouchableWithoutFeedback
                onPress={() => closeModal(modalVisibility)}>

                <View
                    style={{ flex: 1 }}>
                    <FlatList
                        data={data}
                        contentContainerStyle={{ alignItems: 'center', width: width * 0.5, alignSelf: 'flex-end', borderRadius: 15, backgroundColor: '#FFF', top: style, marginTop: 10 }}
                        keyExtractor={(_item, i) => i.toString()}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                style={{ width: width * 0.5, alignItems: 'flex-start', padding: 10 }}
                                >
                                <Text>
                                    {item.label}
                                </Text>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            </TouchableWithoutFeedback>

        </Modal>
    );
};

export { DropDownC };
