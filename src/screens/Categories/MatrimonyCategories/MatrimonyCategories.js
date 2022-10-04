import { StyleSheet, Text, View,Image,ScrollView,StatusBar,SafeAreaView, TouchableOpacity, } from 'react-native';
import React from 'react'

const MatrimonyCategories = ({navigation}) => {
  return (
    <>
      <StatusBar backgroundColor="#D1070A" barStyle={'light-content'}/>
        <SafeAreaView style={styles.container}>
      
      <View style={styles.hold}>
        
        <View style={styles.dor}>
            <Image source={require('../../Categories/assets/logo.png')} style={styles.mainlogo}/>
        </View>
        <View>
          <Text style={styles.pastext}>INTERNATIONAL MATRIMONIAL</Text>
        </View>

            <View style={styles.matimage}>               
               <Image source={require('../../Categories/assets/matrimonial.png')} style={styles.Matrimonialimage}/>
            </View>
          <TouchableOpacity style={styles.proceed} onPress={() => navigation.navigate('MatrimonyComming')}>
            <Text style={styles.proceedtext}>PROCEED</Text>
          </TouchableOpacity>      

      </View>
   
    </SafeAreaView>
      
    </>
  )
}

export default MatrimonyCategories

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff'
    
  },
  hold:{
    alignItems:"center",
    justifyContent:"center",
  },
  dor:{
      alignItems:"center",
      justifyContent:"center",
 
  },
  mainlogo:{
      height:100,
      width:400,
      alignSelf: 'center',
      marginTop: 20
      
  },

    pastext:{
      fontSize:23,
      fontWeight:"700",
      color:'#EE3336',
      lineHeight:30,
    },
   
    matimage:{
      alignItems:"center",
      justifyContent:"center",
      marginTop:30,
      marginLeft:30

    },

    Matrimonialimage:{
      height:360,
      width:308,
    },
    proceed:{
      height:30,
      width:132,
      backgroundColor:"#D1070A",
      borderRadius:10,
      marginVertical:60,
      alignItems:"center",
      justifyContent:"center",
    },
    proceedtext:{
      fontSize:16,
      fontWeight:"600",
      color:'#fff',
      textAlign:"center",
    }
})