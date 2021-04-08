import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../assets/styles/globalStyles'

export default function ReviewDetails({route, navigation}) {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>{route.params.title}</Text>
      <Text style={globalStyles.titleText}>{route.params.age}</Text>
    </View>
  );
}