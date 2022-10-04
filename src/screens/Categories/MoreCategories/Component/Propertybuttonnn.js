import React, { useState } from 'react';
import { View, Text, Pressable,StyleSheet, } from 'react-native';


export default function Propertybuttonnn({ data, onSelect }) {
  const [userOption, setUserOption] = useState(null);
  const selectHandler = (value) => {
    onSelect(value);
    setUserOption(value);
  };
  return (
    <>
    <View style={styles.servicetype}>

    <View style={styles.type}>
          <Text style={styles.typetext}> Any Other Property</Text>
        </View>

    <View style={styles.passtypecontainer}>
      {data.map((item) => {
        return (
          <Pressable
            style={
              item.value === userOption ? styles.selected : styles.unselected
            }
            onPress={() => selectHandler(item.value)}>
            <Text style={item.value === userOption ? styles.textactive : styles.text}> {item.value}</Text>
          </Pressable>
        );
      })}
    </View>
    </View>
    </> );
}
const styles = StyleSheet.create({
  servicetype:{
     
    height:150,
    width:"95%",
    borderWidth:1.2,
    padding:10,
    marginHorizontal:10,
    borderColor:'#D1070A',
    marginVertical:8,

  },
  type:{
    alignItems:'flex-start',
    justifyContent:"center",
    marginBottom:2,
  },

  typetext:{
    fontSize:16,
    fontWeight:"600",
    color:'#D1070A'
  },


  passtypecontainer:{
    flexDirection:'row',
   
    flexWrap: "wrap",
  },
  
    unselected: {
      height:50,
      width:95,
      alignItems: "center",
      borderColor:'#D1070A',
      borderWidth:1,
      padding:5,
     marginBottom:2,
     marginLeft:5,
     borderRadius:10,
     justifyContent:"center",
     alignItems:"center",
   
  
    },
    selected: {
      backgroundColor: '#D1070A',
      height:50,
      width:95,
      alignItems: "center",
      borderColor:'#D1070A',
      borderWidth:1,
      padding:5,
     marginBottom:2,
     marginLeft:5,
     borderRadius:10,
     justifyContent:"center",
     alignItems:"center"
    
    },
    textactive:{
      color:"white",
    },
    text:{
      color:"#D1070A",
    }
  });