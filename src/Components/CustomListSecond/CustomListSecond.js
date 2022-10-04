import { StyleSheet, SafeAreaView, Text, View, FlatList, Image, TouchableOpacity, Button, } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Rating, } from 'react-native-ratings';
import { Share } from 'react-native';
// import VideoPlayer from 'react-native-video-player';

const CustomFlatList = ({ navigation }) => {

  const url = "https://www.excellencetechnology.in/privacy-policy/";
  const title = "Awesome Contents";
  const message = "Please check this out.";

  const options = {

    url,

  };console.log(options)

  const share = async (customOptions = options) => {
    try {
      await Share.open(customOptions);
    } catch (err) {
      console.log(err);
    }
  };

  const data1 = [
    {
      id: '1',
      company: 'Immigration solutions 2022',
      img: 'Pic',
      name: 'https://www.youtube.com/watch?v=TBlixHMv_GQ',
    },
    {
      id: '2',
      name: 'Prabjot Singh',
      company: 'Immigration solutions 2022',
      name: 'https://www.youtube.com/watch?v=TBlixHMv_GQ',
    },
    {
      id: '3',
      name: 'Rupinder Singh',
      company: 'Immigration solutions 2022',
      name: 'https://www.youtube.com/watch?v=TBlixHMv_GQ',
    }
  ];
  const [favselect, setFavSelect] = useState(true)
  const [favselect2, setFavSelect2] = useState(true)
  const [favselect3, setFavSelect3] = useState(true)

  const [date, setDate] = useState(null);

  useEffect(() => {
    let today = new Date();
    let date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
    setDate(date);
  }, []);

  const [videocount, setVideoCount] = useState(0);
  const increment = () => {
    if (videocount <= videocount) {
      setVideoCount(videocount + 1)
    }
  }

  return (

    <SafeAreaView>

      <View style={styles.container}>
        <FlatList
          horizontal
          // showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          data={data1}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (


            <View style={styles.Name}>

              <View style={{ marginRight: 10 }}>
                <View style={{
                  position: 'absolute', zIndex: 1, alignSelf: 'flex-end',
                  backgroundColor: '#fff', borderRadius: 15, margin: 4,
                }}>
                  <TouchableOpacity onPress={() => setFavSelect(!favselect)}>
                    {favselect ?
                      (
                        <Image source={require('../CustomFlatList/assets/Favorite.png')} tintColor='#000' style={styles.partOneIcon} />
                      )
                      :
                      (
                        <Image source={require('../CustomFlatList/assets/Favorite.png')} style={styles.partOneIcon} />
                      )
                    }
                  </TouchableOpacity>
                </View>
              </View>

              <View>
              
                <View>

                  <TouchableOpacity onPress={() => navigation.navigate('AdsActivityPremium')}>
                    

                    <Image source={require('../CustomFlatList/assets/Ads.png')} style={styles.img} />
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

                <View style={{ marginLeft: 10, marginTop: 6,flexDirection:'row' }}>
                  
                  <Image source={require('./assets/Star.png')} style={{height:15,width:15}}/>
                  <Image source={require('./assets/Star.png')} style={{height:15,width:15}}/>
                  <Image source={require('./assets/Star.png')} style={{height:15,width:15}}/>
                  <Image source={require('./assets/Star.png')} style={{height:15,width:15}}/>
                  <Image source={require('./assets/Star.png')} style={{height:15,width:15}}/>
                </View>
              </View>

              <View style={{ marginTop: 5, flexDirection: 'row' }}>
                <View>
                  <TouchableOpacity onPress={() => navigation.navigate('AdsActivityPremium')}>
                    <Image source={require('../CustomFlatList/assets/rose.jpg')} style={styles.dp} />
                  </TouchableOpacity>
                </View>
                <View style={{ marginVertical: 5, marginHorizontal: 5 }}>
                  <Text style={{ fontWeight: '600', fontSize: 20, color: '#000', marginVertical: 1 }}>Canada Study Visa</Text>
                  <TouchableOpacity onPress={() => navigation.navigate('AdsActivityPremium')}>
                    <Text style={{ fontWeight: '500', fontSize: 16, color: '#040271', marginVertical: 2 }}>Eazyvisa Immigration Cusultalt</Text>
                  </TouchableOpacity>
                  <Text style={{ fontWeight: '500', fontSize: 13, color: '#000', marginVertical: 2 }}>Sco-40-41,Sector-34A, Chandigarh</Text>
                </View>
              </View>

              <View style={{ flexDirection: 'row', }}>

                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>

                  <View style={{ marginLeft: 5 }}>
                    <View>
                    <Image source={require('../CustomFlatList/assets/eye.png')} style={styles.eye} />
                    </View>

                  </View>


                  <View style={{ flexDirection: 'row' }}>
                   
                    <View>
                      <Image source={require('../CustomFlatList/assets/thumb.png')} style={styles.like} />
                    </View>
              
                    <View style={{ marginLeft: 10, marginTop: 8, width: '30%' }}>
                      <Text >{videocount}</Text>
                    </View>
                  </View>

                </View>

                <View style={{ flexDirection: 'row', marginLeft: 30 }}>
                  <TouchableOpacity onPress={() => increment()}>
                    <Image source={require('../CustomFlatList/assets/thumb.png')} style={styles.thum} />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image source={require('../CustomFlatList/assets/message.png')} style={styles.message} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={async () => {
                    await share();
                  }}>
                    <Image source={require('../CustomFlatList/assets/share.png')} style={styles.share} />
                  </TouchableOpacity>
                </View>

              </View>


            </View>
          )}
        ></FlatList>
      </View>
    </SafeAreaView>



  )
}

export default CustomFlatList

const styles = StyleSheet.create({
  stars: {
    backgroundColor: 'red'
  },

  container: {
    marginTop: 20,
  },
  Name: {
    borderWidth: 1,
    height: 510,
    width: 352,
    marginHorizontal: 10,
    borderRadius: 18,
    borderColor: '#999999',
    // padding: 1,
  },

  img: {
    height: 347,
    width: 350,
    borderTopRightRadius: 13,
    borderTopLeftRadius: 15,
    overflow: 'hidden',
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
    marginLeft: 18
  },
  thum: {
    height: 20,
    width: 22,
    marginTop: 6,
    marginRight: 5

  },
  message: {
    height: 20,
    width: 21,
    marginLeft: 15,
    marginTop: 6
  },
  partOneIcon: {
    height: 25,
    width: 25,
    margin: 8,
  },
})