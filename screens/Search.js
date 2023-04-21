import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Feather } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';
import { TextInput, View, FlatList, ActivityIndicator, Image } from 'react-native';
import { useTheme } from '@react-navigation/native';
import chucknorris from '../assets/Logo.png';
import SearchCard from '../components/SearchCard';
import { addToSearch, selectFromSearch } from '../features/searchSlice';

const Search = () => {
    const data = useSelector(selectFromSearch);
    const dispatch = useDispatch();
    const { colors } = useTheme();
    const [value, setValue] = useState('');
    const [loading, setLoading] = useState(false);

    const fetchData = () => {
        setLoading(true);
        fetch(`https://api.chucknorris.io/jokes/search?query=${value}`)
            .then(res => res.json()).then(data => {
                setLoading(false);
                dispatch(addToSearch(data.result));
            });
    }
    return (
        <>
            <StatusBar style="auto" />
            <View>
                <View className="mx-2 mt-6 rounded" style={{
                    padding: 5,
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    elevation: 5,
                    backgroundColor: colors.headerColor
                }}>
                    <Image
                        source={chucknorris}
                        className="h-7 w-7 bg-gray-300 p-4 rounded-full"
                    />
                    <TextInput
                        className="rounded-md pl-2 w-[73%] bg-[#EDF2F7] text-[#2D3748]"
                        value={value}
                        onChangeText={(text) => setValue(text)}
                    />
                    <Feather name="search" size={24} color="#2D3748" onPress={() => fetchData()} />
                </View>
                {loading &&
                    <View className="flex-row justify-center items-center">
                        <ActivityIndicator size="large" color="#2D3748" />
                    </View>}
                <FlatList data={data} renderItem={({ item }) => {
                    return <SearchCard
                        item={item}
                    />
                }}
                    keyExtractor={item => item.id}
                />
            </View>
        </>
    )
}

export default Search;