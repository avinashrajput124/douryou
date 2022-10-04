import { StyleSheet, ScrollView, StatusBar, View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import React, { useState } from 'react';
import Categorydrop from '../Component/Categorydrop';
import Requiredrop from '../Component/Requiredrop';
import CustomUpload from '../../../../Components/CustomUpload/CustomUpload'

const User = () => {

  const [title, onChangeTitle] = useState("");
  const [phone, onChangePhone] = useState("");
  const [quali, onChangeQuali] = useState("");
  const [description, onChangeDescription] = useState("");
  console.log(title)

  return (
    
    <>
    <StatusBar backgroundColor="#D1070A" barStyle='light-content'/>
    <ScrollView style={{flex:1, backgroundColor:"#fff"}}>
        <View>
    
            <View>
                <Image source={require('../User/assets/logo.png')} style={styles.logo}/>
            </View>

            <View style={{flexDirection:'row',justifyContent:'center'}}>
               <View>
                 <Image source={require('../User/assets/user.png')}  style={styles.imagejob}/>
               </View>
               <View>
                  <Text style={styles.moretext}>USER </Text>
               </View>
            </View>

         

       
        </View>
    </ScrollView>
    </>
  )
}

export default User

const styles = StyleSheet.create({
    logo: {
        width: '80%',
        height: 80,
        alignSelf: 'center',
        marginTop: 30
      },
      imagejob:{
        height:50, 
        width:50,
        marginTop:20,
        marginRight:20
      },
      moretext: {
        fontSize: 18,
        fontWeight: '500',
        color: '#000000',
        textAlign: 'center',
        marginTop:30,
        
      },
      formhandle:{
        marginTop:20,
        borderWidth:1,
        borderColor:"#D1070A",
        width:"98%",
        height:750,
        marginLeft:3,
      },
      drop: {
        marginLeft:10,
        marginVertical:10,
      },
      category:{
        height:28,
      },

   input: {
        justifyContent: "center",
        alignItems: "center",
        alignItems:"flex-start",
        marginLeft:10,
        marginTop:15,
      },
   headerText: {
        fontSize: 18,
        color:'#D1070A',
        fontWeight: "500"
      },
     inputtext:{ 
        height: 40,
        width: "97%" ,
        borderBottomWidth:1.2,
        borderBottomColor:'#D1070A',
        fontSize:15,
        color:"#000"
    },
    submitbtn:{
      marginVertical:10,
      marginHorizontal:10,
      height:50,
      width:"95%",
      backgroundColor:"#D1070A",
      marginBottom:20,
      borderRadius:20,
      justifyContent:'center',
      alignItems:'center',
    },
    submittext:{
      textAlign:'center',
      color:"#fff",
      fontSize:20,
      fontWeight:"800",
    }

})