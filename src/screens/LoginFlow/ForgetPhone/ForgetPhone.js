import { StyleSheet, ScrollView, number, Text, View, TouchableOpacity, Image, TextInput } from 'react-native'
import React from 'react'

const ForgetPhone = ({navigation}) => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
    <View>
       <View style={styles.main}>
          <Text style={styles.Logo}> Forgot {'\n'} Phonenumber </Text>
          <View>
             <Text style={styles.text}>You can always reset your Phonenumber so
                {'\n'} don't be stressed about it</Text>
          </View>
       </View>
      <View style={styles.Input}>
        <TextInput placeholder='Phone number' keyboardType='numeric' style={styles.input}/>
      </View>
       
       <View style={styles.Btn}>
          <TouchableOpacity>
             <Text style={styles.btn}> Continue </Text>
          </TouchableOpacity>
       </View>


    </View>
 </ScrollView>
  )
}

export default ForgetPhone

const styles = StyleSheet.create({
    Logo: {
        color: '#D1070A',
        marginTop: 60,
        fontSize: 40,
        fontWeight: 'bold',
        marginLeft:20
     },
     text: {
        marginLeft: 30,
        fontSize: 14,
     },
     Input:{
        marginTop:'25%',
        marginHorizontal:35
     },
     input:{
        backgroundColor:'#F7F7F7',
       paddingHorizontal:20,
       paddingVertical:15,
       borderRadius:10
     },
     Btn: {
        alignItems: 'center',
        marginTop: '15%',
     },
     btn: {
        backgroundColor: '#D1070A',
        paddingHorizontal: 100,
        paddingVertical: 15,
        color: '#FFFFFF',
        fontSize: 25,
        borderRadius: 15,
        fontWeight: "600"
     },
})