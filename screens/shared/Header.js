import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Header({navigation, title}){
    const openMenu = () => {
       navigation.openDrawer();
    }
    return (
      <View style={styles.header}>
          <Ionicons name='menu' size={22} style={styles.icon} onPress={openMenu}></Ionicons>
          <View>
              <Text style={styles.text}>{title}</Text>
          </View>
      </View>
    )
}

const styles = StyleSheet.create({
    header:{
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text:{
        fontWeight: 'bold',
        fontSize: 20,
        letterSpacing: 2,
        color: 'red'
    },
    icon:{
        position: 'absolute',
        left: 16
    }
})