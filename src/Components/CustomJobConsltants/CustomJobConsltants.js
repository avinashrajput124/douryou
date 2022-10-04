import { ScrollView, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { Rating } from 'react-native-ratings'

const CustomJobConsltants = ({ navigation }) => {

  const [videocount, setVideoCount] = useState(0);
  const increment = () => {
    if (videocount <= videocount) {
      setVideoCount(videocount + 1)
    }
  }



  return (
    <ScrollView>
      <View>
        <View style={styles.Name}>

          <View>
            <View>
              <TouchableOpacity onPress={() => navigation.navigate('AdsActivityYoutube')}>
                <Image source={require('../CustomFlatList/assets/Ads.png')} style={styles.img} />
                <Image source={require('../CustomFlatList/assets/youtube.png')} style={styles.Youtubeicon} />
              </TouchableOpacity>
            </View>

          </View>

          <View style={styles.bar}>
            <TouchableOpacity>
              <View>
                <Text style={{ fontSize: 15, fontWeight: '400', color: '#EFD757', fontStyle: 'italic', marginTop: 5 }}>  Professional </Text>
              </View>
            </TouchableOpacity>
            <View>
              <Text style={{ fontSize: 23, fontWeight: 'bold', color: '#ffff' }}>  STUDY VISA </Text>
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
          <View style={{ marginTop: 5, flexDirection: 'row' }}>
            <View>
              <Image source={require('../../Components/CustomFlatList/assets/rose.jpg')} style={styles.dp} />
            </View>
            <View style={{marginVertical:5,marginHorizontal:5}}>
                  <Text style={{ fontWeight: '600', fontSize: 20, color: '#000',marginVertical:1 }}>Canada Study Visa</Text>
                  <TouchableOpacity onPress={() => navigation.navigate('AdsActivityPremium')}>
                    <Text style={{ fontWeight: '500', fontSize: 16, color: '#040271' ,marginVertical:2}}>Eazyvisa Immigration Cusultalt</Text>
                  </TouchableOpacity>
                  <Text style={{ fontWeight: '500', fontSize: 13, color: '#000',marginVertical:2 }}>Sco-40-41,Sector-34A, Chandigarh</Text>
                </View>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: "space-evenly" }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
              <View style={{ marginLeft: 5 }}>
                {/* <TouchableOpacity> */}
                <Image source={require('../CustomFlatList/assets/eye.png')} style={styles.eye} />
                {/* </TouchableOpacity> */}
              </View>


              <View style={{ flexDirection: 'row' }}>
                {/* <TouchableOpacity> */}
                <View>
                  <Image source={require('../CustomFlatList/assets/thumb.png')} style={styles.like} />
                </View>
                {/* </TouchableOpacity> */}
                <View style={{ marginLeft: 10, marginTop: 8, width: '30%' }}>
                  <Text>{videocount}</Text>
                </View>
              </View>

            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginLeft: 30 }}>
              <TouchableOpacity onPress={() => increment()}>
                <Image source={require('../CustomFlatList/assets/thumb.png')} style={styles.thum} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={require('../CustomFlatList/assets/message.png')} style={styles.message} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={require('../CustomFlatList/assets/share.png')} style={styles.share} />
              </TouchableOpacity>
            </View>

          </View>

        </View>
      </View>
    </ScrollView>
  )
}

export default CustomJobConsltants

const styles = StyleSheet.create({
  Name: {
    borderWidth: 1,
    height: 395,
    width: '97%',
    marginHorizontal: 5,
    borderRadius: 12,
    borderColor: '#999999',
    padding: 1,
    marginTop: 10
  },
  img: {
    height: 234,
    width: '100%',
    borderTopRightRadius: 15,
    borderTopLeftRadius: 10
  },
  Youtubeicon: {
    position: 'absolute',
    height: 40,
    width: 30,
    marginLeft: '35%',
    marginTop: 90,
    opacity: 0.6,
    borderRadius: 60
  },
  bar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#D1070A',
    marginTop: 2
  },
  dp: {
    height: 80,
    width: 80,
    marginHorizontal: 10,
    borderRadius: 8,
    marginVertical: 3,
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
    marginTop: 10
  },
  like: {
    height: 19,
    width: 21,
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
    height: 20,
    width: 22,
    marginTop: 6,
    // marginRight:9
    marginLeft: 10

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
    margin: 8,
  },
})