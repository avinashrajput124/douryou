import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView, StatusBar, TouchableOpacity, TextInput } from 'react-native';
import React,{useState} from 'react'

const EventsCategories = ({navigation}) => {

  const [videocount, setVideoCount] = useState(0);
  const increment = () => {
    if (videocount <= videocount) {
      setVideoCount(videocount + 1)
    }
  }

  return (
    <>

      <StatusBar backgroundColor="#D1070A" barStyle='light-content' />
    
        <ScrollView style={styles.container}>
          <View>
          <View>
            <Image source={require('./assets/logo.png')} style={styles.mainlogo} />
          </View>

          <View style={styles.pas}>
            <View style={styles.pasimage}>
              <Image source={require('./assets/event.png')} style={styles.eventimg} />
            </View>
            <View style={styles.pastext}>
              <Text style={styles.text}>Events</Text>
            </View>
          </View>

          {/*  card start  */}

          <View style={styles.submain}>
            <View style={styles.row}>
              <View atyle={styles.mainimg}>
                <Image source={require('../EventsCategories/assets/cityimage.png')} style={styles.cityimg} />
              </View>
              <View style={styles.maintext}>
                <Text style={styles.maintext1}>Moga, Punjab</Text>
              </View>
              <View style={styles.maincityimg1}>
                <Image source={require('./assets/favourite.png')} style={styles.cityimg1} />
              </View>
            </View>
            <View style={styles.heading}>
              <Text style={styles.headingtext}>EDUCATION FAIR</Text>
            </View>

            <View style={styles.event}>
              <Text style={styles.eventtext}>Events for 1 Day</Text>
            </View>

            <View style={styles.input}>
              <TextInput style={styles.inputtext} placeholder="Date" placeholderTextColor="#000" />
            </View>

            <View style={styles.input}>
              <TextInput style={styles.inputtext} placeholder="Time" placeholderTextColor="#000" />
            </View>

            <View style={styles.inputaddress}>
              <TextInput style={styles.inputtextaddress} placeholder="Address" placeholderTextColor="#000" />
            </View>

            <View style={styles.input}>
              <TextInput style={styles.inputtext} placeholder="Present Consultant" placeholderTextColor="#000" />
            </View>

            <View style={styles.entrybtn}>
              <View >
                <TouchableOpacity style={styles.submitbtn}>
                  <Text style={styles.submittext}> Free Entry</Text>
                </TouchableOpacity>
              </View>

              <View >
                <TouchableOpacity onPress={ () => navigation.navigate('Bookmypass')} 
                style={[styles.submitbtn, styles.backcolor]} >
                  <Text style={[styles.submittext, styles.textcolor]}> Book My Pass</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* bottom of  card icon  */}


            <View style={{ flexDirection: 'row', }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                  <View style={{ marginLeft: 5 }}>
                    {/* <TouchableOpacity> */}
                    <Image source={require('../EventsCategories/assets/eye.png')} style={styles.eye} />
                    {/* </TouchableOpacity> */}
                  </View>


                  <View style={{ flexDirection: 'row' }}>
                    {/* <TouchableOpacity> */}
                    <View>
                      <Image source={require('../EventsCategories/assets/thumb.png')} style={styles.like} />
                    </View>
                    {/* </TouchableOpacity> */}
                    <View style={{ marginLeft: 10, marginTop: 8, width: '30%' }}>
                      <Text>{videocount}</Text>
                    </View>
                  </View>

                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginLeft: 30 }}>
                  <TouchableOpacity onPress={() => increment()}>
                    <Image source={require('../EventsCategories/assets/thumb.png')} style={styles.thum} />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image source={require('../EventsCategories/assets/message.png')} style={styles.message} />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image source={require('../EventsCategories/assets/share.png')} style={styles.share} />
                  </TouchableOpacity>
                </View>

              </View>

          </View>

          {/* Second card start  */}

        

          </View>
        </ScrollView>

       
      


    </>
  )
}

export default EventsCategories

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff'
  },
  mainlogo: {
    height: 80,
    width: "100%",
    alignSelf: "center",
    marginTop: 20,
  },
  pas: {
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10
  },
  pasimage: {
    alignItems: "center",
    justifyContent: "center",
    marginRight: 19,
  },
  eventimg: {
    height: 49,
    width: 49,
    alignSelf: "center"
  },
  text: {
    fontSize: 30,
    fontWeight: "500",
    color: '#000',
    lineHeight: 36,

  },
  submain: {
    height: 430,
    width: '98%',
    borderWidth: 1,
    borderRadius: 12,
    borderColor: "#000000",
    marginHorizontal: 5,
    marginVertical: 10,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: 70,
    width: 319,
    marginLeft: 5,
    marginTop: 5,
  },
  cityimg: {
    height: 60,
    width: 67,
  },
  maintext1: {
    color: "#000000",
    fontSize: 30,
    fontWeight: "600",
  },
  maincityimg1: {
    marginTop: -5,
  },
  cityimg1: {
    height: 42,
    width: 42,
  },

  heading: {
    height: 30,
    width: '100%',
    justifyContent: "center",
    backgroundColor: "#D1070A",
    marginTop: 3,
  },
  headingtext: {
    fontSize: 14,
    fontWeight: "500",
    color: "#fff",
    textAlign: "center",
  },
  event: {
    marginLeft: 19,
    marginTop: 8,
  },
  eventtext: {
    height: 24,
    width: 129,
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    fontSize: 14,
    color: "#000",
  },
  input: {
    marginLeft: 15,
    marginTop: 10,
  },
  inputtext: {
    height: 36,
    width: '95%',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    fontSize: 14,
    color: "#000",
  },
  inputaddress: {
    marginLeft: 15,
    marginTop: 5,
  },
  inputtextaddress: {
    height: 55,
    width: '95%',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    fontSize: 14,
    color: "#000",
  },
  entrybtn: {
    width: '98%',
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 5,
  },
  submitbtn: {
    marginVertical: 10,
    marginHorizontal: 10,
    height: 25,
    width: 112,
    backgroundColor: "#fff",
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  submittext: {
    textAlign: 'center',
    color: "#D1070A",
    fontSize: 14,
    fontWeight: "500",
  },
  backcolor: {
    backgroundColor: "#D1070A",
    borderColor: "#D1070A",
  },
  textcolor: {
    color: "#fff",
  },
  eye: {
    height: 15,
    width: 21,
    marginTop: 10
  },
  like: {
    height: 20,
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
    height: 20,
    width: 20,
    marginTop: 6,
    marginRight:9,
    marginLeft:10
    
  },
  message: {
    height: 20,
    width: 21,
    marginLeft: 20,
    marginTop: 6
  },
  partOneIcon: {
    height: 25,
    width: 25,
    margin: 8
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