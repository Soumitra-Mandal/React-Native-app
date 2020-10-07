import React from 'react';
import { StyleSheet, Text, View, ScrollView} from 'react-native';

export default function Home ({navigation}) {
 
    return (
<>
<View style = {homestyles.container}>
    <Text style={homestyles.heading}>Soumitra</Text>
</View>
<ScrollView>
<Text style={homestyles.para}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam hendrerit auctor euismod. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque vel dolor dui. In fermentum ligula elementum sem venenatis, a vehicula est tincidunt.</Text>
<Text style={homestyles.para1}>Duis sed imperdiet orci. Sed fringilla felis eget mauris pharetra, sit amet consequat dolor aliquam. Vestibulum at gravida tellus. Vestibulum eu diam in augue euismod ultricies.</Text>
</ScrollView>
</>
    );
  
}

const homestyles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center', 
      position:'absolute',
      top:'8%',
      left:'25%',
      backgroundColor:'black' 
        
    },
    heading:{
        fontWeight:"bold",
        fontSize:20,
        color:"white",
        padding:3,
        margin:3
        
  },
  para:{
      width:'60%',
      position:'relative',
      top:'40%',
      left:'25%'
},para1:{
    width:'60%',
      position:'relative',
      top:'80%',
      left:'25%'
}
});