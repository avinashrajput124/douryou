import { ScrollView, StyleSheet, Text, View ,TouchableOpacity,Image} from 'react-native'
import React from 'react'
import { Rating } from 'react-native-ratings'
import { TextInput } from 'react-native-paper'
const AdsActivityYoutube = () => {
  return (
    <ScrollView>
        <View>
        <View style={styles.Name}>
              <View>
                  <View>
                   <TouchableOpacity>
                    <Image source={require('./assets/Ads.png')} style={styles.img} />
                    <Image source={require('./assets/youtube.png')} style={styles.Youtubeicon} />
                   </TouchableOpacity>
                  </View>
                  
              </View>
            </View>


            <View style={styles.listboarder}>
            <View style={{ flexDirection: 'row', }}>

              <View>
                <Image source={require('./assets/category.png')} style={styles.icon} />
              </View>
              <View>
               
                  <Text style={styles.text}>Category :-</Text>
                
              </View>
            </View>
          </View>


          <View style={styles.listboarder}>
            <View style={{ flexDirection: 'row', }}>

              <View>
                <Image source={require('./assets/title.png')} style={styles.icon} />
              </View>
              <View>
               
                  <Text style={styles.text}>  Post Title :-</Text>
                
              </View>
            </View>
          </View>
           
          <View style={styles.listboarder}>
            <View style={{ flexDirection: 'row', }}>

              <View>
                <Image source={require('./assets/date.png')} style={styles.icon} />
              </View>
              <View>
               
                  <Text style={styles.text}> Post Date & Time</Text>
                
              </View>
            </View>
          </View>

          <View style={styles.listboarderdescription}>
            <View style={{ flexDirection: 'row', }}>

              <View>
                <Image source={require('./assets/des.png')} style={styles.icon} />
              </View>
              <View>
                
                  <Text style={styles.text}> Description</Text>
                  <Text style={styles.text}>
                    entet text here
                  </Text>
                
              </View>
            </View>
          </View>
           
           

            <View style={styles.profile}>

                <View>
                    <Text style={{color:"#000", fontSize:16, marginLeft:15,}}>Published By :-</Text>
                </View>

              <View style={{ marginTop: 5, flexDirection: 'row' }}>
                <View>
                  <Image source={require('../../../Components/CustomFlatList/assets/rose.jpg')} style={styles.dp} />
                </View>
                <View>
               
                  <TouchableOpacity>
                    <Text style={{ fontWeight: '500', fontSize: 19, color: '#040271',marginVertical:5 }}>Eazyvisa Immigration Cusultalt</Text>
                  </TouchableOpacity>
                  <Text style={{ fontWeight: '500', fontSize: 18, color:'#000',marginVertical:4 }}>Sco-40-41,{"\n"}Sector-34A, Chandigarh</Text>
                </View>
              </View>

              <View style={styles.bar}>
                <View >
                  <TouchableOpacity>
                  <View>
                    <Text style={{ fontSize: 20, TextAlign:"center",  fontWeight: '400', color: '#EFD757', fontStyle: 'italic',  }}> 
                     Professional </Text>
                  </View>
                </TouchableOpacity>
                </View>

                

                <View style={{ marginLeft: 10, marginTop: 6 }}>
                  <Rating
                    ratingColor='#EFD757'
                    ratingCount={5}
                    imageSize={15}
                    tintColor="#D1070A"
                  />
                </View>
              </View>
              </View>


        </View>
    </ScrollView>
  )
}

export default AdsActivityYoutube;

const styles = StyleSheet.create({
    Name: {
        
        height: 238,
        width: '97%',
        marginHorizontal: 5,
        borderRadius: 12,
        borderColor: '#999999',
        padding: 1, 
        marginTop:12,       
      },
      img: {
        height: 238,
        width: '100%',
        borderTopRightRadius: 15,
        borderTopLeftRadius:10,
        borderBottomLeftRadius:12,
        borderBottomRightRadius:12,
      },
      Youtubeicon:{
        position:'absolute',
        height:40,
        width:30,
        marginLeft:'35%',
        marginTop:90,
        opacity:0.6,
        borderRadius:60
      },
      listboarder: {
        borderWidth: 1,
        height: 40,
        width: '98%',
        marginTop:10,
        marginHorizontal: 5,
        borderRadius: 6,
        padding: 8
      },

      listboarderdescription: {
        borderWidth: 1,
        height: 115,
        width: '98%',
        marginTop:10,
        marginHorizontal: 5,
        borderRadius: 6,
        padding: 8
      },
      icon: {
        height: 26,
        width: 26,
        marginHorizontal: 5
      },
      text: {
        fontSize: 17,
        fontWeight: '600',
        color: '#000000',
      },
      profile: {
        borderWidth: 1,
        height: 155,
        width: '97%',
        marginHorizontal: 7,
        borderRadius: 8,
        borderColor: '#999999',
        padding: 1, 
        marginVertical:12,       
      },

      bar: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: '#D1070A',
        marginTop: 4.5,
        height:35,
        // borderRadius:7,
        borderBottomLeftRadius:7,
        borderBottomRightRadius:7,
        width: '100%',
      },
      dp: {
        height: 88,
        width: 88,
        marginHorizontal: 10,
        borderRadius: 4
      },
      company: {
        fontSize: 19,
        fontWeight: '400',
        color: '#000000',
        lineHeight: 20,
        marginVertical: 20,
        color: '#D1070A'
      },
      date: {
        color: '#D1070A'
      },
     eye: {
        height: 15,
        width: 21,
        marginLeft:9,
        marginTop:10
      },
      like: {
        height: 20,
        width: 21,
        marginLeft:80,
        marginTop:7
      },
      righticon:{
        height:17,
        width:15,
        marginLeft:15,
        marginTop:7,
        margin:20
      },
      message:{
        height: 20,
        width: 21,
       marginLeft:20,
       marginTop:6
      },
})