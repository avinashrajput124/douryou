import { StyleSheet, Text, View,Image,ScrollView,StatusBar,TouchableOpacity, } from 'react-native'
import React from 'react'
import CustomJobConsltants from '../../../Components/CustomJobConsltants/CustomJobConsltants'

const Favourites = ({navigation}) => {
  return (
    <>
       <StatusBar
        backgroundColor="#D1070A"
        barStyle={'light-content'}/>
    <ScrollView style={styles.container}>
      <View>
        <View style={styles.dor}>
            <Image source={require('../Favourites/assets/logo.png')} style={styles.mainlogo}/>
        </View>
        <View style={styles.pas}>
            <View  style={styles.pasimage}>
              <Image source={require('../Favourites/assets/fav.png')} style={styles.img}/>
            </View>
            <View>
                 <Text style={styles.text}>Favourites</Text>
             </View>
          </View>
        
          <View style={styles.border}>
              <TouchableOpacity >
                <View style={{flexDirection:'row',justifyContent:'center',}}>
                    <View>
                    <Image source={require('../Favourites/assets/post.png')}  style={styles.seekerimg}/>
                    </View>
                    <View>
                        <Text style={styles.post}>My Post</Text>
                    </View>
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.border}>
              <TouchableOpacity >
                <View style={{flexDirection:'row',justifyContent:'center',}}>
                    <View>
                    <Image source={require('../Favourites/assets/ads.png')}  style={styles.seekerimg}/>
                    </View>
                    <View>
                        <Text style={styles.seekertext}>Favourites  {'\n'}ADS</Text>
                    </View>
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.border}>
              <TouchableOpacity>
                <View style={{flexDirection:'row',justifyContent:'center',}}>
                    <View>
                    <Image source={require('../Favourites/assets/interview.png')}  style={styles.seekerimg}/>
                    </View>
                    <View>
                        <Text style={styles.seekertext}> Favourites {'\n'} Interviews</Text>
                    </View>
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.border}>
              <TouchableOpacity >
                <View style={{flexDirection:'row',justifyContent:'center',}}>
                    <View>
                    <Image source={require('../Favourites/assets/event.png')}  style={styles.seekerimg}/>
                    </View>
                    <View>
                        <Text style={styles.seekertext}>Favourites {'\n'} Events</Text>
                    </View>
                </View>
              </TouchableOpacity>
            </View>



        <View style={{marginVertical:20}}>
        <CustomJobConsltants navigation={navigation}/>
        </View>
      </View>
    </ScrollView>

      </>
  )
}

export default Favourites

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#fff'
      },
      mainlogo:{
          height:80,
          width:"80%",
          alignSelf:"center",
          marginTop:20,
        
      },
      pas:{
        flexDirection:'row',
        alignItems:"center",
        justifyContent:"flex-start",
        marginLeft:90,
      },
      pasimage:{
        alignItems:"center",
        justifyContent:"center",
        marginRight:8,
      },
      img:{
        height:47,
        width:47,
        alignSelf:"center"
      },
      text:{
        fontSize:26,
        fontWeight:"700",
        color:'#EE3336',
        lineHeight:36,
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
        marginRight:80,
        marginTop:8
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
})