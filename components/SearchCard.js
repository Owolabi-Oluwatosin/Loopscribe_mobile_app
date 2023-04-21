import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import moment from 'moment';
import chucknorris from '../assets/Logo.png';
import getRandomImage from '../utils/getRandomImage';

const SearchCard = ({ item }) => {
    return (
        <TouchableOpacity className="bg-white rounded-md shadow mb-2 mx-2 mt-2">
            <View className="p-2">
                <View className="flex-row justify-between items-start">
                    <Image
                        source={item.categories[0] ? getRandomImage(item.categories[0]) : chucknorris}
                        className="h-16 w-16 bg-gray-300 p-4 rounded-full"
                    />
                    <View>
                        <Text className="text-xl text-[#A0AEC0]"> {moment(item?.created_at).fromNow()} </Text>
                    </View>
                </View>
                <View className="mt-2">
                    <Text> {item?.value} </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default SearchCard;