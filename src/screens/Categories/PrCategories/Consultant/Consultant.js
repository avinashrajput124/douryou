import { StyleSheet, Text, View,Image,ScrollView,StatusBar,TouchableOpacity, } from 'react-native';
import React from 'react'

const Consultant = () => {
  return (
    <>
     <StatusBar
                backgroundColor="#D1070A"
                barStyle={'light-content'} />

            <ScrollView style={styles.container}>
                <View>
                    <View>
                        <Image source={require('../../assets/logo.png')} style={styles.mainlogo} />
                    </View>

                    <View style={styles.pr}>
                        <View style={styles.canadaimg}>
                          <Image source={require('../../assets/prform.png')} style={styles.ieltsimage} />
                        </View>
                      <View style={styles.consultanttext}>
                        <Text style={styles.prtext}>Checking from Immigration Consultant</Text>
                      </View>
                        
                    </View>

                    <View style={styles.textattech}>
                        <Text style={styles.textonly}>Attech PR Form</Text>
                    </View>

                </View>
            </ScrollView>
      
      </>
  )
}

export default Consultant

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  mainlogo:{
    width: "100%",
    height: 80,
    alignSelf: 'center',
    marginTop: 20
  },
  pr:{
    width:"100%",
    flexDirection:'row',
     justifyContent:"center",
     alignItems:"center",
  },
  ieltsimage:{
    height:71,
    width:75,
    alignSelf:'center',
    marginLeft:20,
  },
  consultanttext:{
         height:40,
         width:"51%",
  },
  prtext:{
    fontSize:18,
    fontWeight:'500',
    textAlign:'center',
    color:'#000000'
  },      
    textattech:{
       justifyContent:'center'
    },
    textonly:{
      fontSize:30,
      fontWeight:"500",
      marginTop:10,
      textAlign:'center',
     color:'#000000'
    }
  
       
})