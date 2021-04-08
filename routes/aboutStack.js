import * as React from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import About from '../screens/About';
import Header from '../screens/shared/Header';

const Stack = createStackNavigator();

function Navigator() {
  return (
      <Stack.Navigator initialRouteName="About">
        <Stack.Screen
         name="About" 
         component={About} 
         options={ ({navigation}) => {
          return {
           headerTitle: () => <Header navigation={navigation} title='About' />
          }
        } }
         />
      </Stack.Navigator>
  );
}

export default Navigator;