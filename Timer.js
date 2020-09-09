import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, Text, View } from 'react-native';

var interval='';
export default class Timer extends React.Component {
  

  state = {time: 0, isstopped:true };


 resetTimer = () => {
  this.setState({time:0});
}

startTimer=()=>{
  if(this.state.isstopped===true){
    interval = setInterval(()=>{   
      this.setState({time: this.state.time + 1});        
},1000);
  }
  else{
    clearInterval(interval);
  }
this.setState({isstopped:!this.state.isstopped});

}

  render() {
    return (
      <View style = {timerstyles.container}>
      <Text style ={{fontWeight:"bold", fontSize:25}}>{this.state.time} s</Text>
      <View style = {timerstyles.start}>
      <Button  color="#66cd5e" onPress ={this.startTimer} title={this.state.isstopped ? 'START' : 'STOP'}/>
      </View>
      <View style = {timerstyles.stop}>
      <Button color="black"  onPress ={this.resetTimer} title="RESET"/>
      </View>
      <StatusBar style="auto" />
    </View>
    );
  }
}

const timerstyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center', 
        
    },
    start:{
        position:"absolute",
        left:115,
        top:450
    },
    stop:{
        position:"absolute",
        right:115,
        top:450

    },
    

  });
