import React from 'react';
import { View, StyleSheet } from 'react-native';
import {NavigationContainer, StackActions} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {createDrawerNavigator} from '@react-navigation/drawer'
import PcDetailsPage from './src/pages/PcDetailsPage';
import PcPage from './src/pages/PcPage'

const Drawer = createDrawerNavigator();

function App(){
  return(
    <View style={style.container}>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="PcPage">
          <Drawer.Screen name="Lista de PCs" component={PcPage} />
          <Drawer.Screen name="Detalhes do PC" component={PcDetailsPage} />
        </Drawer.Navigator>
        </NavigationContainer> 

    </View>
  )
}

const style = StyleSheet.create(
  {
    container: {
      flex: 1,
      backgroundColor:'#fff'
    }
  }
)

export default App;