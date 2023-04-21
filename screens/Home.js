import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, ActivityIndicator, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../components/Header';
import CategoryCard from '../components/CategoryCard';
import { addToCategory, selectFromCategoryList } from '../features/categorySlice';

const Home = () => {
  const category = useSelector(selectFromCategoryList);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    fetch(`https://api.chucknorris.io/jokes/categories`).then(res => res.json()).then(data => {
      setLoading(false);
      dispatch(addToCategory(data));
    }).catch(console.error);
  }, []);

  return (
    <>
      <StatusBar style="auto" />
      <View className='flex-1 mx-2'>
        <Header />
        {loading &&
          <View className="flex-col justify-center items-center">
            <ActivityIndicator size="large" color="#2D3748" />
          </View>}
        <FlatList data={category} renderItem={({ item }) => {
          return <CategoryCard
            category={item}
          />
        }}
          keyExtractor={item => item}
        />
      </View>
    </>
  )
}

export default Home;
