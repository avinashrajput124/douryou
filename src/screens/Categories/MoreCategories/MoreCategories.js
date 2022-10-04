import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity,StatusBar } from 'react-native'
import React from 'react'

const MoreCategories = ({navigation}) => {
  return (
    <>
     <StatusBar backgroundColor="#EE3336" barStyle='light-content'/>
    
    <ScrollView style={{ flex: 1, backgroundColor:"#fff"}}>
      <View style={{ flex: 1, backgroundColor:"#fff"}}>


        <View style={{ flex: 1, backgroundColor:"#fff"}}>
          <Image source={require('../MoreCategories/assets/logo.png')} style={styles.logo} />
        </View>
        <View>
          <Text style={styles.moretext}> MORE CATEGORIES </Text>
        </View>
        
        <TouchableOpacity onPress={() => navigation.navigate('JobConsultant')}>
        <View style={{ borderWidth: 1, borderRadius: 15, height: 100, marginTop:20,marginHorizontal:10 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <View>
              <Image source={require('../MoreCategories/assets/job.png')} style={styles.imglouout} />
            </View>
            <View>
              <Text style={styles.textlogout}>
               JOBS FROM IMMIGRATION &  {'\n'}ILETS CONSULTANTS
              </Text>
            </View>
          </View>
        </View>
        </TouchableOpacity >

        <TouchableOpacity onPress={() => navigation.navigate('Franchise')}>
          <View style={{ borderWidth: 1, borderRadius: 15, height: 100, marginTop: 20,marginHorizontal:10 }}>
            <View style={{ flexDirection: 'row', justifyContent:'space-around' }}>
              <View>
                <Image source={require('../MoreCategories/assets/franchise.png')} style={styles.imgfranchise} />
              </View>
              <View>
                <Text style={styles.textfranchise}>
                  FRANCHISE
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Luggage')}>
          <View style={{ borderWidth: 1, borderRadius: 15, height: 100, marginTop: 20,marginHorizontal:10 }}>
            <View style={{ flexDirection: 'row', justifyContent:'space-around' }}>
              <View>
                <Image source={require('../MoreCategories/assets/luggage.png')} style={styles.imgfranchise} />
              </View>
              <View>
                <Text style={styles.textfranchise}>
                  LUGGAGE {'\n'} ADJUSTMENT
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('User')}>
          <View style={{ borderWidth: 1, borderRadius: 15, height: 100, marginTop: 20,marginHorizontal:10 }}>
            <View style={{ flexDirection: 'row', justifyContent:'space-around' }}>
              <View>
                <Image source={require('../MoreCategories/assets/user.png')} style={styles.imgfranchise} />
              </View>
              <View>
                <Text style={styles.textfranchise}>
                   USER {'\n'} REQUIRMENT
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
    </>
  )
}

export default MoreCategories

const styles = StyleSheet.create({
  logo: {
    width: '80%',
    height: 80,
    alignSelf: 'center',
    marginTop: 30
  },
  moretext: {
    fontSize: 25,
    fontWeight: '700',
    color: '#EE3336',
    textAlign: 'center'
  },
  imglouout:{
    height:60, 
    width:60,
    marginTop:22,
    marginLeft:20,
  },
  textlogout:{
    marginTop:25,
    color:'#000',
    fontWeight:'700',
    fontSize:17,
   textAlign:'center'
  },
  imgfranchise:{
    marginRight:50,
    height:60, 
    width:60,
    marginTop:20,
    marginLeft:20,
  },
  textfranchise:{
    marginRight:70,
    marginTop:32,
    color:'#000',
    fontWeight:'700',
    fontSize:17,
   textAlign:'center'
  },
  main: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 7,
    height: 50
  },
  nav: {
    height: 41,
    width: 45
  },
})