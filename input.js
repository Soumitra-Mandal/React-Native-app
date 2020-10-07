import React from 'react';
import { StyleSheet, Text, View, Image, TextInput} from 'react-native';

export default class InputBox extends React.Component {
    state = {
        val:''
    }

    render (){
        return(
            <View style ={inputstyles.input} >
        <TextInput
                style={{ height: 40, width:100, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text =>this.setState({val:text})}
                value={this.state.val}
              />
        <Text>{this.state.val}</Text>

            </View>
            
        
                );
    }
     
      
    
}

const inputstyles = StyleSheet.create({
    
    input:{
        alignItems: 'center',
        justifyContent: 'center',
        width:'100%',
        height:'100%',
        backgroundColor:'white'
    }
});

