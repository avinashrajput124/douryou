import { SafeAreaView,StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const Addetails = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.main}>
        <View>
             <View>
                <Image source={require('../../HomeScreen/AdDetails/assets/photo.png')} style={styles.Topimg}/>
             </View>
             <View style={{marginTop:10,marginHorizontal:10}}>
                <Text style={styles.title}>Title</Text>
             </View>
             <View style={{marginHorizontal:10}}>
                <Text style={styles.category}> Category </Text>
             </View>
             <View style={{marginHorizontal:10,marginVertical:5}}>
                <Text>Current Date & Time</Text>
             </View>

             <View style={{borderBottomWidth:1,marginVertical:10,margin:10}}></View>

             <View style={{marginHorizontal:10}}>
                <Text style={styles.category}> Description :</Text>
                <Text style={styles.description}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                 Nam porttitor, nisl quis tristique ornare, nisi orci condimentum
                  nisl, eget posuere nisi felis varius purus. Donec vehicula nisl 
                  est, eu molestie ipsum convallis sit amet. Nunc eu augue id purus
                   feugiat posuere. Pellentesque sed dui vel tortor molestie luctus.
                </Text>
             </View>

             <View style={{borderBottomWidth:1,marginVertical:20,margin:10}}></View>

             <View style={{marginHorizontal:10}}>
                <Text style={styles.category}> Published by :</Text>
                <View style={styles.publishText}>
                     <View>
                     <Image source={require('../../HomeScreen/SampleForm/assets/img.png')} style={styles.img}/>
                     </View>
                      <View>
                          <Text style={styles.company}> Innovate Abroad Consultacy</Text>
                          <Text style={styles.addres}> Sco 21,22,23, First floor, Sector 82</Text>
                          <Text style={styles.addres}> Mohali, Punjab</Text>
                      </View>
                </View>
             </View>
        </View>
    </SafeAreaView>
  )
}

export default Addetails

const styles = StyleSheet.create({
    main:{
        flex:1,
    },
    Topimg:{
       width:'100%',
       height:250
    },
    title:{
        fontSize:23,
        fontWeight:'500',
        color:'#000000'
    },
    category:{
        color:'#000000',
        fontSize:14,
        fontWeight:'400',
    },
    description:{
     marginHorizontal:5,
    textAlign:'justify',
    fontWeight:'400',
    fontSize:14,
    color:'#000000'
    },
    publishText:{
       backgroundColor:'#F6F5F5',
       borderRadius:10,
       height:70,
       marginTop:5,
       flexDirection:'row'
    },
    img:{
        width:70,
        height:50,
        borderRadius:10,
        marginHorizontal:10,
        marginTop:10
    },
    company:{
        marginTop:5,
        color:'#000000',
        fontSize:18,
        fontWeight:'400',
    },
    addres:{
        fontSize:12,
        fontWeight:'400',
        color:'#000000'
    },
})