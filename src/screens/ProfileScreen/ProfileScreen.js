import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Pressable, Modal, StatusBar, Linking,  } from 'react-native'
import React, { useState } from 'react';
import ImageCropPicker from 'react-native-image-crop-picker';
import Share from "react-native-share";

const ProfileScreen = ({ navigation }) => {


  

  const url = "https://www.excellencetechnology.in/privacy-policy/";
  const title = "Awesome Contents";
  const message = "Please check this out.";

  const options = {

    url,

  };

const share = async (customOptions = options) => {
    try {
      await Share.open(customOptions);
    } catch (err) {
      console.log(err);
    }
  };
  

  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);

  const increment = () => {
    if (count <= count) {
      setCount(count + 1)
    }
  }
  const bell = () => {
    if (count1 <= count1) {
      setCount1(count1 + 1)
    }
  }

  const [show, setShow] = useState(true)
  const [name, onChangeName] = useState("Robert wilson")
  const [text, onChangeText] = React.useState("prabh@gmail.com");
  const [number, onChangeNumber] = React.useState(null);
  const [txt, onChangText] = React.useState("Mohali,Punjab");

  const onPressFunction = () => {
    alert('its me working')
  }

  const [modal, setModal] = useState(false);

  const [image, setImage] = useState()
  const onGallery = () => {
    ImageCropPicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {
      console.log(image);
    }, []);
  }
  const onCamera = () => {
    ImageCropPicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
    });
  }


  return (

    <>
      <StatusBar backgroundColor="#EE3336" barStyle='light-content' />

      <ScrollView style={styles.mainConst}>

        <View style={styles.LOGO}>
          <Image source={require('../ProfileScreen/assets/logo.png')} style={styles.logo} />
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
          <View>
            <TouchableOpacity onPress={() => navigation.navigate('ProfileDetails')}>
              <Image source={require('./assets/rose.jpg')} style={styles.dp} />
            </TouchableOpacity>
          </View>

          <View style={{ marginTop: 15, marginRight: 10 }}>
            <TouchableOpacity onPress={() => navigation.navigate('Favourites')}>
              <Image source={require('../ProfileScreen/assets/like.png')} style={styles.like} />
            </TouchableOpacity>
          </View>

          <View style={{ marginTop: 15, marginRight: 10 }}>
            <TouchableOpacity onPress={() => increment()}>
              <Image source={require('../../screens/HomeScreen/assets/chat1.png')} style={styles.message} />
              <View>
                <View style={{ backgroundColor: '#D1070A', borderRadius: 999, height: 17, width: 17, position: 'absolute', marginTop: -30, marginLeft: 23 }}>
                  <Text style={{ color: '#fff', textAlign: 'center', marginTop: -1, fontWeight: '400' }}>{count}</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>

          <View style={{ marginTop: 15, marginRight: 5 }}>
            <TouchableOpacity onPress={() => bell()}>
              <Image source={require('../../screens/HomeScreen/assets/bell.png')} style={styles.bell} />
              <View>
                <View style={{ backgroundColor: '#D1070A', borderRadius: 999, height: 17, width: 17, position: 'absolute', marginTop: -31, marginLeft: 16 }}>
                  <Text style={{ color: '#fff', textAlign: 'center', marginTop: -1, fontWeight: '400' }}>{count1}</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 15 }}>
          <View style={styles.name}>
            <Text style={styles.nameText}>Robert wilson</Text>
          </View>
          {/* <TouchableOpacity onPress={() => setModal(!modal)} >
          <Image source={require('../ProfileScreen/assets/dot.png')} style={styles.dotConst} />
        </TouchableOpacity> */}
        </View>

        <View style={styles.borderConst}>
          <View>
            <View style={styles.lineConst}>
              <TextInput
                onChangeText={onChangeName}
                value={name}
                placeholder="Robert wilson"
                color={'#808080'}
              />
            </View>

            <View style={styles.lineConst}>
              <TextInput
                onChangeText={onChangeText}
                color={'#808080'}
                value={text}
              />
            </View>
            <View style={styles.lineConst}>
              <TextInput
                onChangeText={onChangText}
                color={'#808080'}
                value={txt}

              />
            </View>
            <View style={styles.lineConst}>
              <TextInput
                onChangeText={onChangeNumber}
                value={number}
                placeholder="7206455839"
                keyboardType="numeric"
              />
            </View>
            <View>
              <View style={styles.btnConst}>
                <TouchableOpacity>
                  <Text style={styles.textColor}>
                    Save profile
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>


        <View style={{ borderWidth: 1, borderRadius: 15, height: 70, marginVertical: 5 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View>
              <Image source={require('../ProfileScreen/assets/invit.png')} style={styles.imglouout} />
            </View>
            <View>
              <Text style={styles.textlogout}>
                Invite friends to douryou
              </Text>
            </View>
            <View>
              <TouchableOpacity onPress={async () => {
          await share();
        }}>
                <Image source={require('../ProfileScreen/assets/Arrow.png')} style={styles.logout} />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={{ borderWidth: 1, borderRadius: 15, height: 70, marginVertical: 5 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <View>
              <Image source={require('../ProfileScreen/assets/preference.png')} style={styles.inviteimg} />
            </View>
            <View>
              <Text style={styles.invitetext}>
                Edit your preference
              </Text>
            </View>
            <View>
              <TouchableOpacity onPress={() => navigation.navigate('EditPreferenceScreen')}>
                <Image source={require('../ProfileScreen/assets/Arrow.png')} style={styles.arrow} />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={{ borderWidth: 1, borderRadius: 15, height: 70, marginVertical: 5 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <View>
              <Image source={require('../ProfileScreen/assets/Help.png')} style={styles.inviteimg} />
            </View>
            <View>
              <Text style={styles.invitetext}>
                Help and Support
              </Text>
            </View>
            <View>
              <TouchableOpacity onPress={() => navigation.navigate('HelpSupportScreen')}>
                <Image source={require('../ProfileScreen/assets/Arrow.png')} style={styles.arrow} />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={{ borderWidth: 1, borderRadius: 15, height: 70, marginVertical: 5 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View>
              <Image source={require('../ProfileScreen/assets/policy.png')} style={styles.imglouout} />
            </View>
            <View>
              <Text style={styles.invitetext}>
                Privacy Policy
              </Text>
            </View>
            <View>
              <TouchableOpacity onPress={() => Linking.openURL('https://www.excellencetechnology.in/privacy-policy/')}>
                <Image source={require('../ProfileScreen/assets/Arrow.png')} style={styles.logout} />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={{ borderWidth: 1, borderRadius: 15, height: 70, marginVertical: 5 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View>
              <Image source={require('../ProfileScreen/assets/disclamier.png')} style={styles.imglouout} />
            </View>
            <View>
              <Text style={styles.textlogout}>
                Disclaimer
              </Text>
            </View>
            <View>
              <TouchableOpacity onPress={() => Linking.openURL('https://www.excellencetechnology.in/privacy-policy/')}>
                <Image source={require('../ProfileScreen/assets/Arrow.png')} style={styles.logout} />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={{ borderWidth: 1, borderRadius: 15, height: 70, marginVertical: 5 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View>
              <Image source={require('../ProfileScreen/assets/Logout.png')} style={styles.imglouout} />
            </View>
            <View>
              <Text style={styles.textlogout}>
                Logout
              </Text>
            </View>
            <View>
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Image source={require('../ProfileScreen/assets/Arrow.png')} style={styles.logout} />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={{ marginVertical: 20 }}></View>

      </ScrollView>
    </>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  mainConst: {
    padding: 20,
    flex: 1,
    backgroundColor: '#fff'
  },
  LOGO: {
    alignItems: 'center'
  },
  logo: {
    width: '70%',
    height: 90
  },
  dp: {
    height: 80,
    width: 80
  },
  like: {
    height: 40,
    width: 50,
    padding: 15
  },
  message: {
    height: 30,
    width: 31,
    marginTop: 5
  },
  dot: {
    height: 17,
    width: 17,
    position: "absolute",
    marginLeft: 15,
    marginTop: 5,
  },
  bell: {
    height: 30,
    width: 24,
    marginTop: 5,
    marginRight: 10,
  },
  dotConst: {
    height: 23,
    width: 22,
    marginRight: 15
  },
  name: {
    alignItems: "center",
    justifyContent: "center",
  },
  nameText: {
    color: '#000',
    fontSize: 17,
    fontWeight: '600',
  },
  lineConst: {
    borderBottomColor: '#808080',
    borderBottomWidth: 1,
  },
  borderConst: {
    borderWidth: 1,
    borderRadius: 10,
    height: 270,
    padding: 10,
    bottom: 15,
    marginTop: '8%',
  },
  btnConst: {
    backgroundColor: '#D1070A',
    width: "35%",
    padding: 5,
    margin: 5,
    borderRadius: 8,
    marginVertical: 15,
    marginLeft: '65%'
  },
  textColor: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center'
  },
  icon: {
    height: 30,
    width: 60
  },

  inviteimg: {
    height: 50,
    width: 50,
    marginTop: 10,
  },
  invitetext: {
    marginTop: 20,
    color: '#000',
    fontWeight: '400',
    fontSize: 17,
  },
  arrow: {
    height: 21,
    width: 40,
    marginTop: 20,
  },
  imglouout: {
    height: 50,
    width: 50,
    marginTop: 10,
    marginLeft: 20,
  },
  textlogout: {
    marginTop: 20,
    color: '#000',
    fontWeight: '400',
    fontSize: 17,
  },
  logout: {
    height: 21,
    width: 40,
    marginTop: 20,
    marginRight: 20.
  },

})