import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity } from 'react-native';
import { globalStyles } from '../assets/styles/globalStyles'

export default function Home({navigation}) {
  const [reviews, setReviews] = useState([
    {title: 'this is title 1', age: 23, key: 1},
    {title: 'this is title 2', age: 27, key: 2},
    {title: 'this is title 3', age: 49, key: 3},
    {title: 'this is title 4', age: 43, key: 4}
  ])
  return (
    <View style={globalStyles.container}>
      <FlatList
      data={reviews}
      renderItem={({item}) => (
        <TouchableOpacity onPress={() => {navigation.navigate('ReviewDetails', item)}}>
          <Text style={globalStyles.titleText}>{item.title}</Text>
        </TouchableOpacity>
      )}
      />
    </View>
  );
}