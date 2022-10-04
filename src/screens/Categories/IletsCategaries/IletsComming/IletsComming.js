import { StyleSheet, Text, View,Image,ScrollView,StatusBar,TouchableOpacity, } from 'react-native';
import React from 'react';

const IletsComming = ({navigation}) => {
  return (
    <>
      <StatusBar
        backgroundColor="#D1070A"
        barStyle={'light-content'}/>

    <ScrollView style={styles.container}>
      <View>
        <View style={styles.dor}>
            <Image source={require('../../assets/logo.png')}
                   style={styles.mainlogo}/>
        </View>

        <View style={styles.pas}>
          <Text style={styles.pastext}> ONLINE IELTS CLASSEOOM</Text>
        </View>
         
         <View>
            <View style={styles.comingmain}>               
               <Text style={styles.comingfirst}>C</Text>
               <Text style={styles.comingsecond}>OMING SOON....</Text>
            </View>

        </View>        

      </View>
    </ScrollView>
      
      </>
  )
}

export default IletsComming

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#fff'
      },
      dor:{
          alignItems:"center",
          justifyContent:"center",
     
      },
      mainlogo:{
        width: '80%',
        height: 80,
        alignSelf: 'center',
        marginTop: 20
          
      },
      pas:{
          alignItems:'center',
          justifyContent:"center",
        },
        pastext:{
          fontSize:23,
          fontWeight:"700",
          color:'#EE3336',
          lineHeight:30,
        },
       
        comingmain:{
          flexDirection:"row",
          height:55,
          width:374,
          alignItems:"center",
          justifyContent:"center",
          marginVertical:280,
  
        },
       comingfirst:{
          fontSize:43,
          color:"#000000"
        },
       comingsecond:{
          fontSize:23,
          color:"#000000",
          marginTop:5
        },
})