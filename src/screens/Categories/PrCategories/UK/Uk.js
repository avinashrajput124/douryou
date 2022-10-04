import { StyleSheet, Text, View, Image, ScrollView, StatusBar, TouchableOpacity, } from 'react-native';
import React from 'react'

const UK = () => {
    return (
        <>
            <StatusBar
                backgroundColor="#D1070A"
                barStyle={'light-content'} />

            <ScrollView style={styles.container}>
                <View>
                    <View style={styles.dor}>
                        <Image source={require('../../assets/logo.png')} style={styles.mainlogo} />
                    </View>

                    <View style={styles.pr}>
                        <View style={styles.canadaimg}>
                          <Image source={require('../../assets/uk.png')} style={styles.ieltsimage} />
                        </View>
                      <View style={styles.canadatext}>
                        <Text style={styles.prtext}>UK</Text>
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

export default UK

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
    
      mainlogo:{
        width:"100%",
        height: 118,
        alignSelf: 'center',
        marginTop: 20
      },
      pr:{
        flexDirection:'row',
         alignSelf:'center'
      },
      ieltsimage:{
        height:71,
        width:75,
        alignSelf:'center',
        marginRight:30
      },
      prtext:{
        fontSize:18,
        fontWeight:'500',
        textAlign:'center',
        marginTop:20,
        color:'#000000'
      },      
        textattech:{
           width:"100%",
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