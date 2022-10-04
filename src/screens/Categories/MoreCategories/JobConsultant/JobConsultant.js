import { ScrollView, StyleSheet, Text, View,Image, TouchableOpacity, StatusBar } from 'react-native'
import React from 'react';
// import CustomJobConsltants from '../../../../Components/CustomJobConsltants/CustomJobConsltants';

const JobConsultant = ({navigation}) => {
  return (
    <>
    <StatusBar backgroundColor="#EE3336" barStyle='light-content'/>
    <ScrollView style={{flex:1, backgroundColor:"#fff"}}>
        <View >
    
            <View>
                <Image source={require('../assets/logo.png')} style={styles.logo}/>
            </View>

            <View style={{flexDirection:'row',justifyContent:'center'}}>
               <View>
                 <Image source={require('../assets/job.png')}  style={styles.imagejob}/>
               </View>
               <View>
                  <Text style={styles.moretext}> JOBS FROM IMMIGRATION {'\n'} & ILETS CONSULTANTS </Text>
               </View>
            </View>

            
            <View style={styles.border}>
            <TouchableOpacity onPress={() => navigation.navigate('JobSeeker')}>
                <View style={{flexDirection:'row',justifyContent:'center',}}>
                    <View>
                    <Image source={require('../JobConsultant/assets/speeks.png')}  style={styles.seekerimg}/>
                    </View>
                    <View>
                        <Text style={styles.seekertext}> JOB SEEKERS</Text>
                    </View>
                </View>
              </TouchableOpacity>
            </View>
           

          
            <View style={styles.border}>
            <TouchableOpacity onPress={() => navigation.navigate('JobOffer')}>
                <View style={{flexDirection:'row',justifyContent:'center',}}>
                    <View>
                    <Image source={require('../JobConsultant/assets/offers.png')}  style={styles.seekerimg}/>
                    </View>
                    <View>
                        <Text style={styles.seekertext}> JOB OFFERS</Text>
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

export default JobConsultant

const styles = StyleSheet.create({
    logo: {
        width: '80%',
        height: 80,
        alignSelf: 'center',
        marginTop: 30
      },
      imagejob:{
        height:60, 
        width:60,
        marginTop:22,
        marginLeft:22,
      },
      moretext: {
        fontSize: 20,
        fontWeight: '500',
        color: '#EE3336',
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
        marginTop:22
      },
})