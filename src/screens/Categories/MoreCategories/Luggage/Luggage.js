import { ScrollView, StyleSheet, Text, View,Image, TouchableOpacity, StatusBar } from 'react-native'
import React from 'react';
// import CustomJobConsltants from '../../../../Components/CustomJobConsltants/CustomJobConsltants';

const Luggage = ({navigation}) => {
  return (
    <>
    <StatusBar backgroundColor="#EE3336" barStyle='light-content'/>
    <ScrollView style={{flex:1,backgroundColor:"#fff"}}>
        <View>
    
            <View>
                <Image source={require('../assets/logo.png')} style={styles.logo}/>
            </View>

            <View style={{flexDirection:'row',justifyContent:'center'}}>
               <View>
                 <Image source={require('../Luggage/assets/luggage.png')}  style={styles.imagejob}/>
               </View>
               <View>
                  <Text style={styles.moretext}> LUGGAGE {'\n'}ADJUSTMENT </Text>
               </View>
            </View>

           
            <View style={styles.border}>
            <TouchableOpacity onPress={ () =>navigation.navigate('LuggageBuyer')}>
                <View style={{flexDirection:'row',justifyContent:'center',}}>
                    <View>
                    <Image source={require('../Luggage/assets/reciver.png')}  style={styles.seekerimg}/>
                    </View>
                    <View>
                        <Text style={styles.seekertext}>LUGGAGE {'\n'} RECIVER</Text>
                    </View>
                </View>
                </TouchableOpacity>
            </View>
            

          
            <View style={styles.border}>
            <TouchableOpacity onPress={ () => navigation.navigate('LuggageSender')}>
                <View style={{flexDirection:'row',justifyContent:'center',}}>
                    <View>
                    <Image source={require('../Luggage/assets/sender.png')}  style={styles.seekerimg}/>
                    </View>
                    <View>
                        <Text style={styles.seekertext}>LUGGAGE {'\n'} SENDER</Text>
                    </View>
                </View>
                </TouchableOpacity>
            </View>
          

            <View style={{marginVertical:20}}>
                {/* <CustomJobConsltants/> */}
            </View>
        </View>
    </ScrollView>
    </>
  )
}

export default Luggage

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
        marginTop:18,
        marginRight:20
      },
      moretext: {
        fontSize: 17,
        fontWeight: '500',
        color: '#000000',
        textAlign: 'center',
        marginTop:22,
      },
      border:{
        borderWidth:1,
        marginHorizontal:10,
        borderRadius:10,
        height:80,
        marginTop:20
      },
   seekerimg:{
        height:60, 
        width:60,
       marginRight:20,
        marginTop:8
      },
      seekertext:{
        marginRight:50,
        fontWeight:'500',
        fontSize:18,
        color:'#000000',
       marginTop:19
      },
})