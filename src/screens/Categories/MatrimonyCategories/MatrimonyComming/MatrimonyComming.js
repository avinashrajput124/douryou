import { StyleSheet, Text, View,Image,ScrollView,StatusBar,TouchableOpacity, } from 'react-native';
import React from 'react'

const MatrimonyComming = () => {
  return (
    <>
      <StatusBar
        backgroundColor="#D1070A"
        barStyle={'light-content'}/>

    <ScrollView style={styles.container}>
      <View>
        <View STYLE={styles.dor}>
            <Image source={require('../../assets/logo.png')}
                   style={styles.mainlogo}/>
        </View>

        <View style={styles.pas}>
          <Text style={styles.pastext}>INTERNATIONAL MATRIMONIAL</Text>
        </View>
         
        
            <View style={styles.comingmain}>               
               <Text style={styles.comingfirst}>C</Text>
               <Text style={styles.comingsecond}>OMING SOON....</Text>
            </View>
      

      </View>
    </ScrollView>
      
      </>
  )
}

export default MatrimonyComming

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
      },
      dor:{
          alignItems:"center",
          justifyContent:"center",
     
      },
      mainlogo:{
        width: '80%',
        height: 100,
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