import React, { useState, useCallback, useRef } from "react";
import { Animated, Button, View, Text, SafeAreaView, StyleSheet, ScrollView, TextInput, Touchable, TouchableOpacity, FlatList, Dimensions, Image } from "react-native"
import YoutubePlayer from 'react-native-youtube-iframe';

const { width } = Dimensions.get("screen");
const cardWidth = width / 1.2;

const COLORS = {
  white: '#FFF',
  dark: '#000',
  primary: '#52c0b4',
  secondary: '#e0f4f1',
  light: '#f9f9f9',
  grey: '#908e8c',
  orange: '#f5a623',
};

const hotels = [
  {
    id: '1',
    videoId: "3lfQ2vtUyX0",
    name: 'Double Tree Hotel',
    location: 'Goa',
    price: 750,
    // image: require('./assets/hotel1.jpg'),
    details: "Tucked between lush forest and the calming waters of the Mandovi River, we are located 10 minutes from the UNESCO World Heritage Site at Old Goa. Goa capital city Panaji and Miramar Beach are both 15 minutes away, as is a choice of shoping, dining, and nightlife. Goa International Airport can be reached in 45 minutes.",
  },
  {
    id: '2',
    videoId: "iuqfU9Ll300",
    name: 'villa Riviera',
    location: 'Goa',
    price: 1250,
    // image: require('./assets/hotel2.jpg'),
    details: "Villa Riviera is located in Saipem, a few minutes away from Candolim beach, a very popular beach in Goa. If you wish to spend a day near the beach, the sandy beach of Candolim is easily accessible by a short drive. Many shops, restaurants, beach shacks are located near the Candolim beach",
  },

  {
    id: '3',
    videoId: "3cchY1q44bk",
    name: 'Hotel Silver Line',
    location: ' Mussoorie',
    price: 999,
    // image: require('./assets/hotel4.jpg'),
    details: "Located in Mussoorie, within a 9-minute walk of Mussoorie Mall Road and half a kilometer of Camel's Back Road, Hotel Silver Line provides accommodations with a restaurant as well as free private parking for guests who drive. This 3-star hotel offers a 24-hour front desk and room service."
  },
];

export default function CustomFlatList({ navigation }) {

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


  const [favselect, setFavSelect] = useState(true)
  const [favselect2, setFavSelect2] = useState(true)
  const [favselect3, setFavSelect3] = useState(true)

  const scrollX = React.useRef(new Animated.Value(0)).current;
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  const change = (e) => {
    setActiveCardIndex(Math.round(e.nativeEvent.contentOffset.x / cardWidth));
    console.log(Math.round(e.nativeEvent.contentOffset.x / cardWidth));
  }
  const Card = ({ hotel, index }) => {

    const inputRange = [(index - 1) * cardWidth, index * cardWidth, (index + 1) * cardWidth];
    const opacity = scrollX.interpolate({
      inputRange,
      outputRange: [0.7, 0, 0.7]
    })
    const scale = scrollX.interpolate({
      inputRange,
      outputRange: [0.8, 1, 0.8]
    })
    //     disabled = { activeCardIndex != index
    // }

    const [playing, setPlaying] = useState(false);

    const onStateChange = useCallback((state) => {
      if (state === "ended") {
        setPlaying(false);
        Alert.alert("video has finished playing!");
      }
    }, []);

    const togglePlaying = useCallback(() => {
      setPlaying((prev) => !prev);
    }, []);
    return (
      <TouchableOpacity activeOpacity={1} onPress={togglePlaying} >
        <Animated.View style={{ ...style.card, transform: [{ scale }] }}>
          {/* <Animated.View style={{ ...style.cardOverLay, opacity }}></Animated.View> */}

          <View style={{ marginRight: 10 }}>
            <View style={style.heart}>
              <TouchableOpacity onPress={() => setFavSelect(!favselect)}>
                {favselect ?
                  (
                    <Image source={require('../CustomFlatList/assets/Favorite.png')} tintColor='#000' style={style.partOneIcon} />
                  )
                  :
                  (
                    <Image source={require('../CustomFlatList/assets/Favorite.png')} style={style.partOneIcon} />
                  )
                }
              </TouchableOpacity>
            </View>
          </View>

          <View style={style.youtube}>
        
           <YoutubePlayer
              height={300}
              play={playing}
              videoId={hotel.videoId}
              onChangeState={onStateChange}
              onPress={() => increment()}
            />
          
          </View>

          <View style={style.cardDetails}>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
              {/* <View >
              <Button title={playing ? "pause" : "play"} onPress={togglePlaying} />
            </View> */}


            </View>
            <View style={{ marginTop: 5, flexDirection: 'row' }}>
              <View>
                <TouchableOpacity onPress={() => navigation.navigate('AdsActivityPremium')}>
                  <Image source={require('../CustomFlatList/assets/rose.jpg')} style={style.dp} />
                </TouchableOpacity>
              </View>
              <View style={{ marginVertical: 5, marginHorizontal: 5 }}>
                <Text style={style.company}>Canada Study Visa</Text>
                <TouchableOpacity onPress={() => navigation.navigate('AdsActivityPremium')}>
                  <Text style={style.link}>Eazyvisa Immigration Cusultalt</Text>
                </TouchableOpacity>
                <Text style={style.address}>Sco-40-41,Sector-34A, Chandigarh</Text>
              </View>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>

              <View style={{ flexDirection: 'row' }}>

                <View>
                  <Image source={require('../CustomFlatList/assets/eye.png')} style={style.eye} />
                </View>
                <View style={style.viewcount}>
                  <Text >{videocount}</Text>
                </View>

                <View style={{ flexDirection: 'row' }}>

                  <View>
                    <Image source={require('../CustomFlatList/assets/thumb.png')} style={style.like} />
                  </View>

                  <View style={style.viewcount}>
                    <Text >{likecount}</Text>
                  </View>
                </View>

              </View>

              <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={() => increments()}>
                  <Image source={require('../CustomFlatList/assets/thumb.png')} style={style.thum} />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image source={require('../CustomFlatList/assets/message.png')} style={style.message} />
                </TouchableOpacity>
                <TouchableOpacity onPress={async () => {
                  await share();
                }}>
                  <Image source={require('../CustomFlatList/assets/share.png')} style={style.share} />
                </TouchableOpacity>
              </View>

            </View>

          </View>
        </Animated.View>
      </TouchableOpacity>
    )
  }

  return (
    <View>

      <Animated.FlatList onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], { useNativeDriver: true })} horizontal data={hotels} contentContainerStyle={{ paddingVertical: 30, paddingLeft: 20, paddingRight: cardWidth / 2 - 40 }} showsHorizontalScrollIndicator={false} renderItem={({ item, index }) => <Card hotel={item} index={index}> </Card>} snapToInterval={cardWidth} ></Animated.FlatList>

    </View>
  );
}
const style = StyleSheet.create({
  youtube: {
    overflow: "hidden",
    borderRadius: 14,
   
  },
  dp: {
    height: 80,
    width: 80,
    marginHorizontal: 10,
    borderRadius: 8,
    marginVertical: 3,
  },

  card: {
    height:350,
    width: cardWidth,
    elevation: 15,
    borderRadius: 12,
    backgroundColor: "#E3FBF3"
  },
  company: {
    fontWeight: '600',
    fontSize: 20,
    color: '#000',
    // marginVertical: 1,
    width: Dimensions.get('window').width * 0.50
  },
  link: {
    fontWeight: '500',
    fontSize: 16,
    color: '#040271',
    // marginVertical: 2,
    width: Dimensions.get('window').width * 0.50
  },
  address: {
    fontSize: 15,
    fontWeight: '500',
    color: '#000',
    width: Dimensions.get('window').width * 0.60
  },
  cardDetails: {
    height: 'auto',
    // borderRadius:15,
    backgroundColor: "#E5E7E9",
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  partOneIcon: {
    height: 22,
    width: 22,
    margin: 8,
  },
  heart: {
    position: 'absolute',
    zIndex: 1,
    alignSelf: 'flex-end',
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 4,
  },
  viewcount: {
    marginLeft:1,
    marginTop: 8,
    width: Dimensions.get('window').width /5,
    // width: Dimensions.get('window').width * 0.2,
  },
  eye: {
    height: 15,
    width: 21,
    margin: 10,
    // marginLeft:30
  },
  like: {
    height: 19,
    width: 21,
    margin: 7,
    marginLeft:-20
  },
  share: {
    height: 17,
    width: 15,
    marginTop: 8,
    margin: 20,
    marginLeft:10
  },
  thum: {
    height: 20,
    width: 22,
    marginTop: 6,
    marginRight: 9

  },
  message: {
    height: 20,
    width: 21,
    marginLeft: 12,
    marginTop: 6
  },
});
