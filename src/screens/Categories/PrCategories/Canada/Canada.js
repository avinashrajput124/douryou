import { StyleSheet, Text, View, Image, ScrollView, StatusBar, TouchableOpacity, } from 'react-native';
import React from 'react'

const Canada = () => {
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
                          <Image source={require('../../assets/canada.png')} style={styles.ieltsimage} />
                        </View>
                      <View style={styles.canadatext}>
                        <Text style={styles.prtext}>Canada</Text>
                      </View>
                        
                    </View>

                    <View style={styles.textattech}>
                        <Text style={styles.textonly}>Attech CRS Calculater</Text>
                    </View>

                </View>
            </ScrollView>
        </>
    )
}

export default Canada

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
        flexDirection:'row',
         alignSelf:'center',
         justifyContent:"center",
         alignItems:"center",
      },
      ieltsimage:{
        height:71,
        width:75,
        alignSelf:'center',
        marginRight:30,
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