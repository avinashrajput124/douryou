import { StyleSheet, Text, View, Image, ScrollView, StatusBar, TouchableOpacity, } from 'react-native';
import React from 'react'

const IletsCategories = ({ navigation }) => {
  return (
    <>
      <StatusBar
        backgroundColor="#D1070A"
        barStyle={'light-content'} />
      <ScrollView style={styles.container}>
        <View>
          <View style={styles.dor}>
            <Image source={require('../../Categories/assets/logo.png')} style={styles.mainlogo} />
          </View>  

            <View style={styles.toptext}>
              <Text style={styles.text}>ONLINE IELTS CLASSROOM</Text>
            </View>
         

          <View style={styles.border}>
            <TouchableOpacity onPress={() => navigation.navigate('IletsComming')}>
              <View style={{ flexDirection: 'row', justifyContent: 'center', }}>
                <View>
                  <Image source={require('../../Categories/assets/online.png')} style={styles.seekerimg} />
                </View>
                <View>
                  <Text style={styles.post}>ONLINE IELTS {'\n'} INSTITUTE</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.border}>
          <TouchableOpacity onPress={() => navigation.navigate('IletsComming')}>
              <View style={{ flexDirection: 'row', justifyContent: 'center', }}>
                <View>
                  <Image source={require('../../Categories/assets/classroom.png')} style={styles.room} />
                </View>
                <View>
                  <Text style={styles.seekertext}>MY IELTS {'\n'} CLASSROOM</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.border}>
          <TouchableOpacity onPress={() => navigation.navigate('IletsComming')}>
              <View style={{ flexDirection: 'row', justifyContent: 'center', }}>
                <View>
                  <Image source={require('../../Categories/assets/freetest.png')} style={styles.weekly} />
                </View>
                <View>
                  <Text style={styles.seekertext}> ONLINE WEEKLY {'\n'} FREE IELTS TEST</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.border}>
          <TouchableOpacity onPress={() => navigation.navigate('IletsComming')}>
              <View style={{ flexDirection: 'row', justifyContent: 'center', }}>
                <View>
                  <Image source={require('../../Categories/assets/group.png')} style={styles.group} />
                </View>
                <View>
                  <Text style={styles.seekertext}>GROUP {'\n'} REVISION</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>

          {/* <View>
            <View style={styles.comingmain}>
              <Text style={styles.comingfirst}>C</Text>
              <Text style={styles.comingsecond}>OMING SOON....</Text>
            </View>
          </View> */}

        </View>
      </ScrollView>

     

    </>
  )
}


export default IletsCategories

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff'
  },
  mainlogo:{
      height:90,
      width:"90%",
      alignSelf:"center",
      marginTop:20,  
  },
  toptext:{
  alignSelf:'center',
  marginVertical:10
  },
  text:{
    fontSize:25,
    fontWeight:"700",
    color:'#EE3336',
    lineHeight:35,
    textAlign:'center'
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
    marginRight:50,
    marginTop:8,
    marginLeft:10
  },
  room:{
    height:60, 
    width:60,
    marginRight:50,
    marginTop:8,
  },
  weekly:{
    height:60, 
    width:60,
    marginRight:40,
    marginTop:8,
    marginLeft:10
  },
  group:{
    height:60, 
    width:60,
    marginRight:75,
    marginTop:8,
  },
  post:{
    marginRight:35,
    fontWeight:'500',
    fontSize:18,
    color:'#000000',
    marginTop:19,
    textAlign:'center'
  },
  seekertext:{
    marginRight:10,
    fontWeight:'500',
    fontSize:18,
    color:'#000000',
   marginTop:19,
   textAlign:'center'
  },
  comingmain: {
    marginTop:40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  comingfirst: {
    fontSize: 43,
    color: '#000000'
  },
  comingsecond: {
    fontSize: 23,
    color: '#000000',
    marginTop: 5,
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