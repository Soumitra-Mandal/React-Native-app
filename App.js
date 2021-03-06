import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Timer from './Timer';
import Home from './home';
import Imager from './converter';
import InputBox from './input';


const Drawer = createDrawerNavigator();

function App(){
  return(
  <NavigationContainer>
  <Drawer.Navigator initialRouteName="Home">
    <Drawer.Screen name="Home" component={Home} />
    <Drawer.Screen name="Timer" component={Timer} />
    <Drawer.Screen name="About" component={Imager} />
    <Drawer.Screen name="Input" component={InputBox} />


  </Drawer.Navigator>
</NavigationContainer>);
}


const styles = StyleSheet.create({
  
  navigationContainer: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: "#fff",
    padding: 8
  }
});

export default App;