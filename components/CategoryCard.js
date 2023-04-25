import React, { useState } from 'react';
import * as Icons from "react-native-heroicons/solid";
import { View, Text, Image, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import getMoment from '../utils/getMoment';
import DetailCard from './DetailCard';
import getRandomImage from '../utils/getRandomImage';
import { useNavigation } from '@react-navigation/native';

const CategoryCard = ({ category }) => {
    const navigation = useNavigation();
    const [isModalVisible, setIsModalVisible] = useState(false);

    const toggleModal = () => {
        setIsModalVisible(!isModalVisible);
    };

    return (
        <>
            <TouchableOpacity onPress={toggleModal} className="mb-6">
                <View className="w-full rounded-md shadow-sm mt-2">
                    <View className="flex-row justify-between items-center">
                        <View className="flex-row justify-between items-center">
                            <View className="h-12 w-12 rounded-full bg-gray-300 ml-2 mt-1">
                                <Image className="h-10 w-10 p-6" source={getRandomImage(category)} />
                            </View>
                            <View className="p-2">
                                <Text className="font-semibold text-2xl text-[#2D3748] capitalize">{category}</Text>
                                <Text className="pt-1 text-[#A0AEC0]">
                                    {getMoment().month}, {getMoment().year} — {getMoment().time}
                                </Text>
                                <Text className="text-[#4A5568] text-md mt-1">Get Jokes</Text>
                            </View>
                        </View>
                        <View className="mr-1">
                            <Icons.HandRaisedIcon fill="#2D3748" color="#2D3748" size={32} />
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
            <Modal visible={isModalVisible} transparent={true} animationType="slide">
                <TouchableOpacity style={styles.overlay} onPress={toggleModal} />
                <View style={styles.modal}>
                    <DetailCard category={category} />
                    <TouchableOpacity onPress={toggleModal}>
                        <Text className="text-center bg-[#2D3748] rounded-md text-white p-4 m-4">
                            Close Detail
                        </Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </>
    )
}

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modal: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'white',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        paddingHorizontal: 20,
        paddingBottom: 20,
    }
});

export default CategoryCard;