import { ScrollView, StyleSheet, Text, View,Image, TouchableOpacity, StatusBar } from 'react-native'
import React from 'react';


const Franchise = ({navigation}) => {
  return (
    <>
    <StatusBar backgroundColor="#EE3336" barStyle='light-content'/>
    <ScrollView style={{flex:1 , backgroundColor:"#fff"}}>
        <View>
    
            <View>
                <Image source={require('../assets/logo.png')} style={styles.logo}/>
            </View>

            <View style={{flexDirection:'row'}}>
               <View>
                 <Image source={require('../Franchise/assets/franchise.png')}  style={styles.imagejob}/>
               </View>
               <View>
                  <Text style={styles.moretext}> FRANCHISE </Text>
               </View>
            </View>

            
            <View style={styles.border}>
            <TouchableOpacity onPress={ () => navigation.navigate('FranchiseBuyer')}>
                <View style={{flexDirection:'row',justifyContent:'center',}}>
                    <View>
                    <Image source={require('../Franchise/assets/buyer.png')}  style={styles.seekerimg}/>
                    </View>
                    <View>
                        <Text style={styles.seekertext}> FRANCHISE {'\n'} BUYERS</Text>
                    </View>
                </View>
              </TouchableOpacity>
            </View>
            

           
            <View style={styles.border}>
            <TouchableOpacity onPress={ () => navigation.navigate('FranchiseSeller')}>
                <View style={{flexDirection:'row',justifyContent:'center',}}>
                    <View>
                    <Image source={require('../Franchise/assets/seller.png')}  style={styles.seekerimg}/>
                    </View>
                    <View>
                        <Text style={styles.seekertext}>  FRANCHISE {'\n'} SELLERS</Text>
                    </View>
                </View>
                </TouchableOpacity>
            </View>

            
        </View>
    </ScrollView>
    </>
  )
}

export default Franchise

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
        marginLeft:80,
      },
      moretext: {
        fontSize: 26,
        fontWeight: '700',
        color: '#EE3336',
        textAlign: 'center',
        marginTop:5,
        marginLeft:20
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
        marginRight:60,
        marginTop:8
      },
      seekertext:{
        marginRight:20,
        fontWeight:'500',
        fontSize:18,
        color:'#000000',
       marginTop:19,
       textAlign:'center'
      },
})