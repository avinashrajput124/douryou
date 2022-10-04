import React, { useState } from 'react'
import { StyleSheet, ScrollView, StatusBar, View, Text, Dimensions, ImageBackground, TextInput, TouchableOpacity, Image } from "react-native";
import CustomDate from '../../../../Components/CustomDate/CustomDate';
import ImageCropPicker from 'react-native-image-crop-picker';



export default function Travelinsurance() {

  console.disableYellowBox = true

  const [text, onText] = useState("");
  const [fname, onFname] = useState("");
  const [city, onCity] = useState("");
  const [number, onNumber] = useState(null);
  const [email, onEmail] = useState("");
  const [physical, onPhysical] = useState("");
  const [purpose, onPurpose] = useState("");
  const [country, onCountry] = useState("");
  const [trip, onTrip] = useState("");
  const [policytime, onPolicytime] = useState(null);
  const [companyname, onCompanyname] = useState("");
  const [insuranceamount, onInsuranceamount] = useState(null)

  const [photo, setPhoto] = useState('https://www.whatsappimages.in/wp-content/uploads/2022/03/Black-Wallpaper-Download-Free.jpg');
    console.log(photo,"PHOTO")
  const [showoption, setShowoption] = useState(false);
  const openGalleryFront = () => {
    ImageCropPicker
      .openPicker({ width: 100, height: 100, cropping: true })
      .then(photo => {
        console.log(photo);
        setShowoption(false)
        setPhoto(photo.path)
      });
  }
  
  function Travel() {

    // const data = { text, fname, city, number, email, physical, purpose, country, trip, policytime, companyname, insuranceamount }

    let formData = new FormData();
    // let localUri = photo.path;
    // console.log("local uri = " + localUri);  
    let filename = photo.split('/').pop();
    console.log("filename = " + filename);
    let match = /\.(\w+)$/.exec(filename);
    console.log("match = " + match);
    let type = match ? `image/${match[1]}` : `image`;
    console.log("type = " + type);

    formData.append('text', text)
    formData.append('fname', fname)
    formData.append('photo', { uri: photo, name: filename, type });
    formData.append('city', city)
    formData.append('number', number)
    formData.append('email', email)
    formData.append('physical', physical)
    formData.append('purpose', purpose)
    formData.append('country', country)
    formData.append('trip', trip)
    formData.append('policytime', policytime)
    formData.append('companyname', companyname)
    formData.append('insuranceamount', insuranceamount)


    fetch('https://douryouweb.herokuapp.com/douryou-user/Add-new-travel-insurance/', {
      method: 'POST',
      headers: {
        "Accept": "application/json",
        "Content-Type": "multipart/form-data"
      },
      body: formData
    }).then((result) => {
      result.json().then((response) => {
        console.log(response, "Response")
        // navigation.navigate('PrabhNavigation')
      })
    })
    console.log()

  }

  return (
    <>
      <StatusBar
        backgroundColor="#D1070A"
        barStyle={'light-content'} />
      <ScrollView style={styles.container}>
        <View>
          <View>
            <Image source={require('../assets/logo.png')} style={styles.logo} />
          </View>
          <View style={styles.pas}>
            <Text style={styles.pastext}> Travel Insurance</Text>
          </View>
          <View style={styles.line}></View>

          <View style={styles.pas}>
            <Text style={styles.pitext}> Personal Information</Text>
          </View>

          <View style={styles.input}>
            <Text style={styles.headerText}>
              Name
            </Text>
            <TextInput style={styles.inputtext}
              onChangeText={onText}
              value={text} />
          </View>

          <View style={styles.input}>
            <Text style={styles.headerText}>
              Father / Husband Name
            </Text>
            <TextInput style={styles.inputtext}
              onChangeText={onFname}
              value={fname} />
          </View>

          <View style={styles.input} >
            <Text style={styles.headertext2}>
              Date OF Birth
            </Text>

            <View style={styles.inputtext}>
              <CustomDate />
            </View>

          </View>

          <View style={styles.input}>
            <Text style={styles.headerText}>
              City Name
            </Text>
            <TextInput style={styles.inputtext}
              onChangeText={onCity}
              value={city} />
          </View>

          <View style={styles.input}>
            <Text style={styles.headerText}>
              Mobile No
            </Text>
            <TextInput style={styles.inputtext}
              keyboardType="numeric"
              onChangeText={onNumber}
              value={number} />
          </View>

          <View style={styles.input}>
            <Text style={styles.headerText}>
              Email Id
            </Text>
            <TextInput style={styles.inputtext}
              onChangeText={onEmail}
              value={email} />
          </View>

          <View style={styles.input1}>
            <Text style={styles.headertext1}> Travel Insurance Information</Text>
          </View>

          <View style={styles.input}>
            <Text style={styles.headerText}>
              Are you physical fit
            </Text>
            <TextInput style={styles.inputtext}
              onChangeText={onPhysical}
              value={physical} />
          </View>

          <View style={styles.input}>
            <Text style={styles.headerText}>
              Purpose of going Abroad
            </Text>
            <TextInput style={styles.inputtext}
              onChangeText={onPurpose}
              value={purpose} />
          </View>

          <View style={styles.input}>
            <Text style={styles.headerText}>
              Which Country do you want to go?
            </Text>
            <TextInput style={styles.inputtext}
              onChangeText={onCountry}
              value={country} />
          </View>

          <View style={styles.input} >
            <Text style={styles.headertext2}>
              Date OF Travel
            </Text>
            <View style={styles.inputtext}>
              <CustomDate />
            </View>
          </View>

          <View style={styles.input} >
            <Text style={styles.headertext2}>
              Return Date OF Travel
            </Text>
            <View style={styles.inputtext}>
              <CustomDate />
            </View>

          </View>

          <View style={styles.input}>
            <Text style={styles.headerText}>
              Type of Trip
            </Text>
            <TextInput style={styles.inputtext}
              onChangeText={onTrip}
              value={trip} />
          </View>

          <View style={styles.input}>
            <Text style={styles.headerText}>
              When to take Policy
            </Text>
            <TextInput style={styles.inputtext}
              onChangeText={onPolicytime}
              value={policytime} />
          </View>

          <View style={styles.input}>
            <Text style={styles.headerText}>
              Which company policy you want to take?
            </Text>
            <TextInput style={styles.inputtext}
              onChangeText={onCompanyname}
              value={companyname} />
          </View>

          <View style={styles.input}>
            <Text style={styles.headerText}>
              How much Insurance do you want to take
            </Text>
            <TextInput style={styles.inputtext}
              onChangeText={onInsuranceamount}
              value={insuranceamount} />
          </View>

          <View style={styles.uploadtype}>
            <View
              style={{ alignSelf: 'center', marginVertical: 10 }}>
              <View style={styles.border}>
                <TouchableOpacity onPress={() => openGalleryFront()}>
                  <View>
                    <Image source={require('../../Post/assets/camera.png')} style={styles.camera} />
                  </View>
                </TouchableOpacity>
                <View>

                  <ImageBackground source={{ uri: photo }} style={styles.dp} />

                </View>
              </View>

            </View>
          </View>

          <View >
            <TouchableOpacity style={styles.submitbtn}
              onPress={Travel} >
              <Text style={styles.submittext}> Submit</Text>
            </TouchableOpacity>
          </View>

        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight,
  },
  logo: {
    width: '80%',
    height: 80,
    alignSelf: 'center',
    marginVertical: 20
  },
  pas: {
    alignItems: 'center',
    justifyContent: "center",
    marginTop: 15,
  },
  pastext: {
    fontSize: 20,
    fontWeight: "900",
    color: '#D1070A'
  },
  input1: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 2,
    marginTop: 15,
  },
  headertext1: {
    width: 330,
    textAlign: "center",
    fontSize: 18,
    color: '#fff',
    fontWeight: "500",
    backgroundColor: "#D1070A",
  },
  line: {
    padding: 5,
    borderBottomColor: '#e6e6e6',
    borderBottomWidth: 1,
  },
  linedate: {
    width: 330,
    padding: 5,
    borderBottomColor: '#D1070A',
    borderBottomWidth: 1,
  },
  headertext2: {
    fontSize: 18,
    color: '#D1070A',
    fontWeight: "600",
    marginBottom: 20,
  },
  pitext: {
    fontSize: 15,
    fontWeight: "700",
    color: '#D1070A'
  },
  input: {
    justifyContent: "center",
    alignItems: "center",
    alignItems: "flex-start",
    marginLeft: 15,
    marginTop: 15,
  },
  headerText: {
    fontSize: 18,
    color: '#D1070A',
    fontWeight: "600"
  },
  inputtext: {
    height: 40,
    width: "97%",
    borderBottomWidth: 1.2,
    borderBottomColor: '#D1070A',
    fontSize: 15,
  },
  uploadtype: {
    height: 370,
    width: "93%",
    borderWidth: 1.2,
    marginHorizontal: 10,
    borderColor: '#D1070A',
    marginVertical: 5,
  },
  camera: {
    width: 40,
    height: 34,
    alignSelf: 'center',
    // marginVertical:10,
    marginTop: 10
  },
  dp: {
    borderRadius: 25,
    marginTop: 23,
    width: Dimensions.get('window').width * 0.9,
    height: 280,
    alignSelf: 'center',
    overflow: "hidden"
  },
  submitbtn: {
    marginVertical: 10,
    marginHorizontal: 10,
    height: 50,
    width: "95%",
    backgroundColor: "#D1070A",
    marginBottom: 20,
    borderRadius: 11,
    justifyContent: 'center',
    alignItems: 'center',
  },
  submittext: {
    textAlign: 'center',
    color: "#fff",
    fontSize: 20,
    fontWeight: "700",
  }


});
