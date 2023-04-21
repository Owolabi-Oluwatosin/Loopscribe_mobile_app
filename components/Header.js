import React from 'react';
import * as Icons from "react-native-heroicons/solid";
import { Image, Text, View } from 'react-native';
import chucknorris from '../assets/Logo.png';

const Header = () => {
    return (
        <View className="h-[45px] flex-row justify-between items-center z-50 mt-5 shadow-md">
            <View className='flex-row items-center'>
                <Image
                    source={chucknorris}
                    className="h-7 w-7 bg-gray-300 p-4 rounded-full"
                />
                <Text className="ml-2">Chuck Norris</Text>
            </View>
            <View>
                <Icons.EllipsisVerticalIcon color="red" fill="black" size={32}/>
            </View>
        </View>
    )
}

export default Header