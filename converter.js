import {React} from 'react';
import { StyleSheet, Text, View, Image, TextInput} from 'react-native';

  const Imager = ()=> {
    return (
        <View style={convstyles.container}>
        <Image
        style={convstyles.imager}
        source={{
          uri: 'https://i.pinimg.com/originals/25/73/26/257326e230467a71781d564ee22fa906.jpg',
        }}
        ></Image>
    <Text style={{fontSize:20,position:'absolute',top:195}}>Anyone can be a hero!</Text>
        </View>
    )
}



const convstyles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      width:'100%',
      height:'100%',
      backgroundColor:'white'
        
    },
    imager:{
        position: 'absolute',
        top:100,
        left:'20%',
        width: 244,
        height: 100,
        backgroundColor:'red'

    }
});

export default Imager;

