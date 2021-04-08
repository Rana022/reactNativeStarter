import * as React from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import ReviewDetails from '../screens/ReviewDetails';
import Header from '../screens/shared/Header';

const Stack = createStackNavigator();

function Navigator() {
  return (
      <Stack.Navigator 
        initialRouteName="Home" 
      >
        <Stack.Screen
         name="ReviewDetails"
         component={ReviewDetails} 
         //options={{ title: 'Overview' }}
         />
        <Stack.Screen
         name="Home" 
         component={Home} 
         options={ ({navigation}) => {
           return {
            headerTitle: () => <Header navigation={navigation} title='Home' />
           }
         } }
         />
      </Stack.Navigator>
  );
}

export default Navigator;