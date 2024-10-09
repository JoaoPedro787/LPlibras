import React, { useState } from "react";
import { Modal, TouchableOpacity, View, Image, FlatList, Text } from "react-native";
import Colors from "../../../../styles/colors";
import AntDesign from '@expo/vector-icons/AntDesign';
import { getImages } from "../src/getImages";
import Texts from "../../../../src/components/texts";

const ModalC = ({ modalValue, handleClose, data }) => {
    const [width, setWidth] = useState();

    const onLayout = (evt) => {
        setWidth(evt.nativeEvent.layout.width);
    };

    return (
        <Modal
            transparent={true}
            animationType='slide'
            visible={modalValue}
        >
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ backgroundColor: '#FFF', width: '80%', height: '50%', borderRadius: 20, overflow: 'hidden' }}>
                    {/* Header */}
                    <View style={{ backgroundColor: Colors.Orange, flex: 1, alignItems: 'flex-end', justifyContent: 'center', paddingHorizontal: 15 }}>
                        {/* Fecha o modal */}
                        <TouchableOpacity onPress={() => handleClose(modalValue)}>
                            <AntDesign name="closecircle" size={30} color={'#FFF'} />
                        </TouchableOpacity>
                    </View>

                    {/* Content */}
                    <View style={{ flex: 5 }} onLayout={onLayout}>
                        {/* Lista com os favoritos, futuramente ao clicar irá ao índice do atual item */}
                        {data.length === 0
                            ?
                            <View
                                style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                <Text
                                    style={[Texts.f32, { color: Colors.Orange }]}>
                                    Não há favoritos!
                                </Text>
                            </View>
                            :
                            <FlatList
                                data={data}
                                keyExtractor={(_item, index) => index}
                                showsHorizontalScrollIndicator={false}
                                horizontal={true}
                                pagingEnabled
                                contentContainerStyle={{ flexGrow: 1 }}
                                renderItem={({ item }) => (
                                    <View style={{ width }}>
                                        <Image
                                            style={{ width: '100%', height: '100%' }}
                                            resizeMode={'contain'}
                                            source={getImages[item]}
                                        />
                                    </View>
                                )}
                            />
                        }
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default ModalC;