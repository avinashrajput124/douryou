import React, { useState } from 'react'
import { StyleSheet, ScrollView, StatusBar, View, Text, TextInput, Dimensions, ImageBackground, TouchableOpacity, Image } from "react-native";
import Country from '../../../Categories/MoreCategories/Component/Country';
import ImageCropPicker from 'react-native-image-crop-picker';

export default function Postdesc() {

  console.disableYellowBox = true
  const [name, onName] = useState("");
  const [fname, onFname] = useState("");
  const [address, onAddress] = useState("");
  const [number, onNumber] = useState("");
  const [alt_number, onAlt_number] = useState("");
  const [passpost_no, onPasspost_no] = useState("");
  const [adhr_no, onAdhr_no] = useState("");
  const [city, onCity] = useState("");
  const [flight_date, onFlight_date] = useState("");
  const [flight_name_num, onFlight_name_num] = useState("");
  const [desc, onDesc] = useState("");
  const [detail_lug, onDetail_lug] = useState("");
  const [total_wight, onTotal_wight] = useState("");
  const [amount_offer, onAmount_offer] = useState("");
  const [Recv_name, onRecv_name] = useState("");
  const [Recv_fname, onRecv_fname] = useState("");
  const [Recv_address, onRecv_address] = useState("");
  const [Recv_mb_num, onRecv_mb_num] = useState("");
  const [Recv_passpost_num, onRecv_passpost_num] = useState("");
  const [country,onCountry]=useState()
  
  console.log(country,"COUNTRY_VALUE")

 

  const [photo, setPhoto] = useState('https://www.whatsappimages.in/wp-content/uploads/2022/03/Black-Wallpaper-Download-Free.jpg');
  console.log(photo, "PHOTO")
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

  function LUGGAGE() {

    let formData = new FormData();
    // let localUri = photo.path;
    // console.log("local uri = " + localUri);  
    let filename = photo.split('/').pop();
    console.log("filename = " + filename);
    let match = /\.(\w+)$/.exec(filename);
    console.log("match = " + match);
    let type = match ? `image/${match[1]}` : `image`;
    console.log("type = " + type);

    formData.append('name', name)
    formData.append('fname', fname)
    formData.append('photo', { uri: photo, name: filename, type });
    formData.append('address', address)
    formData.append('number', number)
    formData.append('alt_number', alt_number)
    formData.append('passpost_no', passpost_no)
    formData.append('adhr_no', adhr_no)
    formData.append('city', city)
    formData.append('flight_date', flight_date)
    formData.append('flight_name_num', flight_name_num)
    formData.append('desc', desc)
    formData.append('detail_lug', detail_lug)
    formData.append('total_wight', total_wight)
    formData.append('amount_offer', amount_offer)
    formData.append('Recv_name', Recv_name)
    formData.append('Recv_fname', Recv_fname)
    formData.append('Recv_address', Recv_address)
    formData.append('Recv_mb_num', Recv_mb_num)
    formData.append('Recv_passpost_num', Recv_passpost_num)


    fetch('https://douryouweb.herokuapp.com/douryou-user/Add-new-apply-luggage-adliodtmett/', {
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
            <Image source={require('../../Post/assets/logo.png')}
              style={styles.logo} />
          </View>

          <View style={styles.pas}>
            <Text style={styles.pastext}>PostLuggage</Text>
          </View>
          <View style={styles.line}></View>

          <View style={styles.pas}>
            <Text style={styles.pitext}> Personal Information</Text>
          </View>

          <View style={styles.input}>
            <Text style={styles.headerText}>
              Name :
            </Text>
            <TextInput style={styles.inputtext}
              onChangeText={onName}
              placeholder="Enter your Name"
              value={name} />
          </View>

          <View style={styles.input}>
            <Text style={styles.headerText}>
              fname Name :
            </Text>
            <TextInput style={styles.inputtext}
              onChangeText={onFname}
              placeholder="Enter your  fname Name"
              value={fname} />
          </View>

          <View style={styles.input}>
            <Text style={styles.headerText}>
              Address :
            </Text>
            <TextInput style={styles.inputtext}
              onChangeText={onAddress}
              placeholder="Enter your Address"
              value={address} />
          </View>

          <View style={styles.input}>
            <Text style={styles.headerText}>
              number no :
            </Text>
            <TextInput style={styles.inputtext}
              onChangeText={onNumber}
              placeholder="Enter your 10 DIgit number Number"
              value={number} />
          </View>

          <View style={styles.input}>
            <Text style={styles.headerText}>
              Alternate number No :
            </Text>
            <TextInput style={styles.inputtext}
              onChangeText={onAlt_number}
              placeholder="Enter your 10 DIgit number Number"
              value={alt_number} />
          </View>

          <View style={styles.input}>
            <Text style={styles.headerText}>
              passpost_no Number :
            </Text>
            <TextInput style={styles.inputtext}
              onChangeText={onPasspost_no}
              placeholder="Enter your passpost_no Number"
              value={passpost_no} />
          </View>

          <View style={styles.input}>
            <Text style={styles.headerText}>
              adhr_no Number :
            </Text>
            <TextInput style={styles.inputtext}
              onChangeText={onAdhr_no}
              placeholder="Enter your adhr_no Number"
              value={adhr_no} />
          </View>

          <View style={styles.input}>
            <Text style={styles.headerText}>
              City:
            </Text>
            <TextInput style={styles.inputtext}
              onChangeText={onCity}
              placeholder="Enter City Name"
              value={city} />
          </View>

          <View style={styles.drop}>
            <Text style={styles.headerText}>
              Country Name :
            </Text>
            <View style={styles.inputtextCountry}>
              <Country 
              value={country}
              onChangeText={onCountry}
              />

            </View>
          </View>


          <View style={styles.input}>
            <Text style={styles.headerText}>
              Flight Date and Time :
            </Text>
            <TextInput style={styles.inputtext}
              onChangeText={onFlight_date}
              placeholder="Enter your Flight Date and Time"
              value={flight_date} />
          </View>

          <View style={styles.input}>
            <Text style={styles.headerText}>
              Flight Name and No :
            </Text>
            <TextInput style={styles.inputtext}
              onChangeText={onFlight_name_num}
              placeholder="Enter your Flight Name and Number"
              value={flight_name_num} />
          </View>

          <View style={styles.input}>
            <Text style={styles.headerText}>
              Description of desc :
            </Text>
            <TextInput style={styles.inputtext}
              onChangeText={onDesc}
              placeholder="Describe About your desc"
              value={desc} />
          </View>

          <View style={styles.input}>
            <Text style={styles.headerText}>
              Details of desc :
            </Text>
            <TextInput style={styles.inputtext}
              onChangeText={onDetail_lug}
              placeholder="Enter Your desc Details"
              value={detail_lug} />
          </View>

          <View style={styles.input}>
            <Text style={styles.headerText}>
              Total total_weight :
            </Text>
            <TextInput style={styles.inputtext}
              onChangeText={onTotal_wight}
              placeholder="How much total_weight of your desc"
              value={total_wight} />
          </View>

          <View style={styles.input}>
            <Text style={styles.headerText}>
              amount_offer Offer :
            </Text>
            <TextInput style={styles.inputtext}
              onChangeText={onAmount_offer}
              placeholder="How much amount_offer you Offer for Luggagae"
              value={amount_offer} />
          </View>

          <View style={styles.input1}>
            <Text style={styles.headerText1}>
              Receiver Details
            </Text>
          </View>

          <View style={styles.input}>
            <Text style={styles.headerText}>
              Receiver Name :
            </Text>
            <TextInput style={styles.inputtext}
              onChangeText={onRecv_name}
              placeholder="Enter Receiver Name"
              value={Recv_name} />
          </View>

          <View style={styles.input}>
            <Text style={styles.headerText}>
              Receiver  fname Name :
            </Text>
            <TextInput style={styles.inputtext}
              onChangeText={onRecv_fname}
              placeholder="Enter Receiver fname Name"
              value={Recv_fname} />
          </View>

          <View style={styles.input}>
            <Text style={styles.headerText}>
              Receiver Address :
            </Text>
            <TextInput style={styles.inputtext}
              onChangeText={onRecv_address}
              placeholder="Enter Receiver Address"
              value={Recv_address} />
          </View>

          <View style={styles.input}>
            <Text style={styles.headerText}>
              Receiver number No :
            </Text>
            <TextInput style={styles.inputtext}
              onChangeText={onRecv_mb_num}
              placeholder="Enter Receiver number Number"
              value={Recv_mb_num} />
          </View>

          <View style={styles.input}>
            <Text style={styles.headerText}>
              Receiver passpost_no No :
            </Text>
            <TextInput style={styles.inputtext}
              onChangeText={onRecv_passpost_num}
              placeholder="Enter Receiver passpost_no Number"
              value={Recv_passpost_num} />
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
              onPress={LUGGAGE} >
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

  },
  pastext: {
    fontSize: 20,
    fonttotal_weight: "900",
    color: '#D1070A'
  },
  line: {
    padding: 5,
    borderBottomColor: '#e6e6e6',
    borderBottomWidth: 1,
  },

  drop: {
    marginTop: 15,
    marginLeft: 15,
    marginBottom: -20,
  },

  pitext: {
    fontSize: 15,
    fonttotal_weight: "900",
    color: '#D1070A'
  },

  drop: {
    marginTop: 25,
    marginLeft: 15,
    marginBottom: -20,
  },

  input: {
    justifyContent: "center",
    alignItems: "center",
    alignItems: "flex-start",
    marginLeft: 10,
    marginTop: 15,
  },
  headerText: {
    fontSize: 18,
    color: '#D1070A',
    fonttotal_weight: "500"
  },
  input1: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 2,
    marginTop: 15,

  },

  headerText1: {
    width: 330,
    textAlign: "center",
    fontSize: 18,
    color: '#fff',
    fonttotal_weight: "500",
    backgroundColor: "#D1070A",
  },

  inputtext: {
    height: 40,
    width: "97%",
    borderBottomWidth: 1.2,
    borderBottomColor: '#D1070A',
    fontSize: 15,
  },
  inputtextCountry: {
    // height: 40,
    width: "97%",
    borderBottomWidth: 1.2,
    borderBottomColor: '#D1070A',
    // fontSize: 15,
    marginBottom: 10
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

