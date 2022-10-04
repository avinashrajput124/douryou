import { StyleSheet, Text, View, Image, ScrollView, StatusBar, TouchableOpacity, TextInput, Dimensions, } from 'react-native';
import React, { useState } from 'react'
import { Rating } from 'react-native-ratings'
import TopTabNavigation from '../../../Navigate/TopTabNavigation/TopTabNavigation'


const ProfileDetails = ({ navigation }) => {

  const [videocount, setVideoCount] = useState(0);
  const increment = () => {
    if (videocount <= videocount) {
      setVideoCount(videocount + 1)
    }
  }
  const [likecount, setLikeCount] = useState(0);
  const increments = () => {
    if (likecount <= likecount) {
      setLikeCount(likecount + 1)
    }
  }

  return (
    <>
      <StatusBar
        backgroundColor="#D1070A"
        barStyle={'light-content'} />
      <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
        <View>
          <View style={styles.Name}>
            <View style={styles.row}>
              <View>
                <TouchableOpacity>
                  <Image source={require('../ProfileDetails/assets/rose.jpg')} style={styles.dp} />
                </TouchableOpacity>
              </View>

              <View >
                <TouchableOpacity>
                  <Text style={styles.link}>Eazyvisa Immigration Cusultalt</Text>
                </TouchableOpacity>
                <Text style={styles.address}>Sco-40-41,Sector-34A, Chandigarh</Text>
              </View>
            </View>

            <View style={styles.bar}>
              <TouchableOpacity>
                <View>
                  <Text style={styles.professional}>Professional </Text>
                </View>
              </TouchableOpacity>


              <View style={{ marginLeft: 10, marginTop: 6 }}>
                <Rating
                  ratingColor='#EFD757'
                  ratingCount={5}
                  imageSize={20}
                  tintColor="#D1070A"
                />
              </View>
            </View>
          </View>

          <View style={styles.listboarder}>
            <View style={{ flexDirection: 'row', }}>

              <View>
                <Image source={require('../ProfileDetails/assets/About.png')} style={styles.icon} />
              </View>
              <View>
                <TouchableOpacity>
                  <Text style={styles.text}> About us</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity>
                 <View style={styles.read}>
                    <Text style={styles.readtext}>Read More</Text>
                  </View>
                </TouchableOpacity>

            </View>
          </View>

          <View style={styles.listboarder}>
            <View style={{ flexDirection: 'row', }}>

              <View>
                <Image source={require('../ProfileDetails/assets/our.png')} style={styles.icon} />
              </View>
              <View>
                <TouchableOpacity>
                  <Text style={styles.text}> Our Specialization</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity>
                 <View style={styles.read2}>
                    <Text style={styles.readtext}>Read More</Text>
                  </View>
                </TouchableOpacity>
            </View>
          </View>

          <View style={styles.listboarder}>
            <View style={{ flexDirection: 'row', }}>

              <View>
                <Image source={require('../ProfileDetails/assets/we.png')} style={styles.icon} />
              </View>
              <View>
                <TouchableOpacity>
                  <Text style={styles.text}> We are Sever in these categories</Text>
                </TouchableOpacity>
              </View>
             
                <TouchableOpacity>
                 <View style={styles.read3}>
                    <Text style={styles.readtext}>Read More</Text>
                  </View>
                </TouchableOpacity>
            
            </View>
          </View>

          
            <View style={styles.boder}>
              <View style={styles.Flex}>
                <View>
                  <Image source={require('../ProfileDetails/assets/person.png')} style={styles.Pic} />
                </View>
                <View>
                  <Text style={styles.Text}>Contacting Persson & Details</Text>
                </View>
              </View>

              <View style={styles.Flex2}>
                <View>
                  <Image source={require('../ProfileDetails/assets/dppic.png')} style={styles.dppic} />
                </View>
                <View style={styles.input}>
                  <View style={{ flexDirection: 'row', }}>
                    <View>
                      <Text style={styles.profile}>Name</Text>
                    </View>

                  </View>
                  <View>
                    <Text style={styles.profile}>Contact No.</Text>
                  </View>
                  <View>
                    <Text style={styles.profile}>Desigation</Text>
                  </View>

                </View>
              </View>

            </View>

          <View style={styles.Boder}>

            <TopTabNavigation navigation={navigation} />

          </View>

        </View>
      </ScrollView>

      <View style={{ backgroundColor: '#fff', height: 60 }}>
        <View style={styles.lsatborder}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>

            <View style={{ flexDirection: 'row' }}>

              <View>
                <Image source={require('./assets/eye.png')} style={styles.eye} />
              </View>
              <View style={styles.viewcount}>
                <Text >{videocount}</Text>
              </View>

              <View style={{ flexDirection: 'row' }}>

                <View>
                  <Image source={require('../ProfileDetails/assets/like.png')} style={styles.like} />
                </View>

                <View style={styles.viewcount}>
                  <Text >{likecount}</Text>
                </View>
              </View>

            </View>

            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity onPress={() => increments()}>
                <Image source={require('../ProfileDetails/assets/like.png')} style={styles.thum} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={require('../ProfileDetails/assets/message.png')} style={styles.message} />
              </TouchableOpacity>
              <TouchableOpacity onPress={async () => {
                await share();
              }}>
                <Image source={require('../ProfileDetails/assets/share.png')} style={styles.share} />
              </TouchableOpacity>
            </View>

          </View>
        </View>
      </View>
    </>
  )
}

export default ProfileDetails

const styles = StyleSheet.create({
  Name: {
    height: 155,
    width: Dimensions.get('window').width * 0.97,
    // width: '97%',
    borderWidth: 1,
    marginTop: 10,
    // marginHorizontal: 7,
    margin: 5,
    borderRadius: 6,
  },
  row: {
    marginTop: 10,
    flexDirection: 'row',
  },
  dp: {
    width: 90,
    height: 90,
    borderRadius: 8,
    marginHorizontal: 7
  },
  link: {
    fontWeight: '500',
    fontSize: 17,
    color: '#040271',
    // marginVertical: 2,
    width: Dimensions.get('window').width * 0.60
  },
  address: {
    fontSize: 17,
    fontWeight: '500',
    color: '#000',
    width: Dimensions.get('window').width * 0.60
  },
  bar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#D1070A',
    marginTop: 7,
    padding: 10,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  professional: {
    fontSize: 20,
    fontWeight: '500',
    color: '#EFD757',
    fontStyle: 'italic',

  },
  listboarder: {
    borderWidth: 1,
    height: 53,
    width: Dimensions.get('window').width * 0.97,
    marginHorizontal: 7,
    marginVertical: 9,
    borderRadius: 10,
    padding: 8
  },
  read: {
    marginLeft: '59%',
    marginTop: 7,
    color: '#D1070A',
    fontSize: 15,
    textDecorationLine: 'underline',
    fontWeight: 'bold'
  },
  read2: {
    marginLeft: '45%',
    marginTop: 7,
    color: '#D1070A',
    fontSize: 15,
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
  read3: {
    marginLeft:'9%',
    marginTop: 7,
    // color: '#D1070A',
    // fontSize: 15,
    // textDecorationLine: 'underline',
    // fontWeight: 'bold'
  },
  readtext:{
    color: '#D1070A',
    fontSize: 15,
    textDecorationLine: 'underline',
    fontWeight: 'bold'
  },
  icon: {
    height: 30,
    width: 30,
    marginHorizontal: 5
  },
  text: {
    fontSize: 15,
    fontWeight: '500',
    color: '#000000',
    marginTop: 5,

  },
  boder: {
    borderWidth: 1,
    width: Dimensions.get('window').width * 0.97,
    height: 'auto',
    marginHorizontal: 7,
    marginVertical: 10,
    borderRadius: 10,
    padding: 8,
    borderColor: '#000000'
  },
  Flex: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  Pic: {
    height: 36,
    width: 36,
  },
  Text: {
    fontSize: 17,
    fontWeight: '500',
    color: '#000000',
    marginHorizontal: 20,
    marginVertical: 5
  },
  Flex2: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical: 20
  },
  dppic: {
    height: 95,
    width: 95,
    borderRadius: 5,
  },
  input: {
    marginHorizontal: 10,
  },
  profile: {
    color: '#000000',
    fontSize: 17,
    fontWeight: '600',
    marginVertical: 5
  },
  Boder: {
    height: 750,
    width: Dimensions.get('window').width * 0.97,
    borderWidth: 1,
    borderColor: '#000000',
    marginHorizontal: 7,
    marginVertical: 10,
    borderRadius: 2,
  },
  FLEX: {
    flexDirection: 'row',
    marginVertical: 30,
    justifyContent: 'space-around'
  },
  iconn: {
    height: 34,
    width: 31
  },
  box: {
    height: 118,
    width: 118,
    borderWidth: 1,
  },
  lsatborder: {
    borderWidth:1,
    height: 40,
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 10,
    padding: 2,
    marginBottom: 30,
    backgroundColor: '#fff'
  },
  date: {
    color: '#D1070A'
  },
  viewcount: {
    marginLeft:15,
    marginTop: 8,
    width: Dimensions.get('window').width*0.09,
  },
  eye: {
    height: 15,
    width: 21,
    marginTop: 10
  },
  like: {
    height: 21,
    width: 20,
    marginLeft: 50,
    marginTop: 7
  },
  share: {
    height: 17,
    width: 15,
    marginTop: 8,
    margin: 20,
    marginLeft: 25
  },
  thum: {
    height: 21,
    width: 20,
    marginTop: 6,
    marginRight:10
    // marginLeft: 15

  },
  message: {
    height: 20,
    width: 21,
    marginLeft: 27,
    marginTop: 6
  },
  partOneIcon: {
    height: 25,
    width: 25,
    margin: 8
  },

})