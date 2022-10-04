import { ScrollView, StyleSheet, Text, View, TouchableOpacity, Image,Dimensions } from 'react-native'
import React,{useState} from 'react'
import { Rating } from 'react-native-ratings'
// import { TextInput } from 'react-native-paper'
import YoutubePlayer from 'react-native-youtube-iframe'


const hotels = [
    {
      id: '1',
      videoId: "tghIoadPRgE",
      name: 'Double Tree Hotel',
      location: 'Goa',
      price: 750,
      // image: require('./assets/hotel1.jpg'),
      details: "Tucked between lush forest and the calming waters of the Mandovi River, we are located 10 minutes from the UNESCO World Heritage Site at Old Goa. Goa capital city Panaji and Miramar Beach are both 15 minutes away, as is a choice of shoping, dining, and nightlife. Goa International Airport can be reached in 45 minutes.",
    },
]

const AdsActivityPremium = ({ navigation }) => {

    const [playing, setPlaying] = useState(false);

    return (
        <ScrollView>
            <View>
                <View style={styles.Name}>
                    <View>


                        {/* <View style={{ position: 'absolute', zIndex: 1, alignSelf: 'flex-end', borderRadius: 10, }}> */}
                            <View style={styles.youtube}>
                                <YoutubePlayer
                                    height={300}
                                    play={playing}
                                    videoId={'3lfQ2vtUyX0'}
                                    // onChangeState={onStateChange}
                                />
                            </View>
                        {/* </View> */}



                        <View>
                            {/* <TouchableOpacity>
                                <Image source={require('./assets/Ads.png')} style={styles.img} />
                            </TouchableOpacity> */}
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
                        <Text style={{ color: "#000", fontSize: 16, marginLeft: 15, }}>Published By :-</Text>
                    </View>

                    <View style={{ marginTop: 5, flexDirection: 'row' }}>
                        <View>
                            <TouchableOpacity onPress={() => navigation.navigate('ProfileDetails')}>
                                <Image source={require('./assets/rose.jpg')} style={styles.dp} />
                            </TouchableOpacity>
                        </View>
                        <View>

                            <TouchableOpacity>
                                <Text style={styles.link}>Eazyvisa Immigration Cusultalt
                                .
                                </Text>
                            </TouchableOpacity>
                            <Text style={styles.address}>Sco-40-41, Sector-34A, Chandigarh</Text>
                        </View>
                    </View>

                    <View style={styles.bar}>
                        <View >
                            <TouchableOpacity>
                                <View>
                                    <Text style={{ fontSize: 20, TextAlign: "center", fontWeight: '400', color: '#EFD757', fontStyle: 'italic', }}>
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

export default AdsActivityPremium

const styles = StyleSheet.create({
    youtube: {
        overflow: "hidden",
        borderRadius: 14
    },
    Name: {
        height: 238,
        width: '97%',
        marginHorizontal: 5,
        borderRadius: 12,
        borderColor: '#999999',
        padding: 1,
        marginTop: 12,
    },
    img: {
        height: 238,
        width: '100%',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
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
    listboarder: {
        borderWidth: 1,
        height: 50,
        width: '97%',
        marginTop: 10,
        marginHorizontal: 5,
        borderRadius: 6,
        padding: 8
    },
  
      link: {
        fontWeight: '500',
        fontSize: 17,
        color: '#040271',
        // marginVertical: 2,
        width: Dimensions.get('window').width * 0.70
      },
      address: {
        fontSize: 16,
        fontWeight: '500',
        color: '#000',
        width: Dimensions.get('window').width * 0.60
      },

    listboarderdescription: {
        borderWidth: 1,
        height: 115,
        width: '97%',
        marginTop: 10,
        marginHorizontal: 5,
        borderRadius: 6,
        padding: 8
    },
    icon: {
        height: 26,
        width: 26,
        marginHorizontal: 5,
        marginTop: 3
    },
    text: {
        marginTop: 3,
        fontSize: 17,
        fontWeight: '600',
        color: '#000000',
    },
    profile: {
        borderWidth: 1,
        height: 'auto',
        width: '97%',
        marginHorizontal: 5,
        borderRadius: 8,
        borderColor: '#999999',
        // padding: 1, 
        marginVertical: 12,
    },

    bar: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: '#D1070A',
        marginTop: 14,
        height: 31,
        borderRadius: 5
    },
    dp: {
        height: 87,
        width: 88,
        marginHorizontal: 10,
        // overflow:'hidden'
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
        marginLeft: 9,
        marginTop: 10
    },
    like: {
        height: 20,
        width: 21,
        marginLeft: 80,
        marginTop: 7
    },
    righticon: {
        height: 17,
        width: 15,
        marginLeft: 15,
        marginTop: 7,
        margin: 20
    },
    message: {
        height: 20,
        width: 21,
        marginLeft: 20,
        marginTop: 6
    },
    partOneIcon: {
        height: 50,
        width: 50,
        // margin: 8,
    },
})