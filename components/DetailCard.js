import React, { useState, useLayoutEffect } from 'react'
import { Image, View, Text, ActivityIndicator } from 'react-native';
import moment from 'moment';
import chucknorris from '../assets/Logo.png';
import getRandomImage from '../utils/getRandomImage';


const DetailCard = ({ category }) => {
    const [loading, setLoading] = useState(false);
    const [details, setDetails] = useState([]);

    useLayoutEffect(() => {
        if (category) {
            setLoading(true);
            fetch(`https://api.chucknorris.io/jokes/random?category=${category}`)
                .then(res => res.json()).then(data => {
                    setLoading(false);
                    setDetails(data);
                }).catch(console.error);
        }
    }, []);

    return (
        <>
            {
                !details && loading ?
                    <View className="flex-col justify-center items-center">
                        <ActivityIndicator size="large" color="#2D3748" />
                    </View> :
                    <View className="p-2">
                        <Text className="w-[25%] h-[8px] mx-auto bg-gray-200 rounded-full mb-6"></Text>
                        <View className="flex-row justify-between items-start">
                            <Image
                                source={category ? getRandomImage(category) : chucknorris}
                                className="h-16 w-16 bg-gray-300 p-4 rounded-full"
                            />
                            <View>
                                <Text className="text-4xl text-[#2D3748] capitalize"> {category} </Text>
                                <Text className="text-xl text-[#A0AEC0]"> {moment(details?.created_at).fromNow()} </Text>
                            </View>
                        </View>
                        <View className="mt-2">
                            <Text> {details?.value} </Text>
                        </View>
                    </View>
            }
        </>
    )
}

export default DetailCard;