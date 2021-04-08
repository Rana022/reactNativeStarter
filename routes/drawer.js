import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import homeStack from './stackNavigator';
import aboutStack from './aboutStack';


const Drawer = createDrawerNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="homeStack">
        <Drawer.Screen name="homeStack" component={homeStack} />
        <Drawer.Screen name="aboutStack" component={aboutStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}