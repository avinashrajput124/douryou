import React, { useState } from 'react';
import { StyleSheet, ScrollView, StatusBar,ImageBackground, View, Text, TextInput, Image, TouchableOpacity, Dimensions } from "react-native";
import Housebutton from '../../../Categories/MoreCategories/Component/Housebutton';
import Propertbutton from '../../../Categories/MoreCategories/Component/Propertybutton';
import CustomDate from '../../../../Components/CustomDate/CustomDate';
import ImageCropPicker from 'react-native-image-crop-picker';


export default function Educationloan({ props }) {

   const [text,onText] = useState("")
   const [fname,onFname] = useState("")
   const [city,onCity] = useState("")
   const [number,onNumber] = useState("")
   const [email,onEmail] = useState("")
   const [physical,onPhysical] = useState("")
   const [purpose,onPurpose] = useState("")
   const [country,onCountry] = useState("")
   const [trip,onTrip] = useState("")
   const [loantime,onLoantime] = useState("")
   const [bankname,onBankname] = useState("")
   const [loanamount,onLoanamount] = useState("")
   const [itravlue,onItravlue] = useState("")
   const [photo, setPhoto] = useState('https://www.whatsappimages.in/wp-content/uploads/2022/03/Black-Wallpaper-Download-Free.jpg');


   const [showoption, setShowoption] = useState(false);
   const openGalleryFront = () => {
     ImageCropPicker
         .openPicker({width: 100, height: 100, cropping: true})
         .then(photo => {
             console.log(photo);
             setShowoption(false)
             setPhoto(photo.path)
         });
 }

   function Education(){

    const data ={text,fname,city,number,email,physical,purpose,country,trip,loantime,bankname,loanamount,
      itravlue,housetype,otherproperty}
    
    let formData = new FormData();
    // let localUri = photo.path;
    // console.log("local uri = " + localUri);  
    let filename = photo.split('/').pop();
    console.log("filename = " + filename);
    let match = /\.(\w+)$/.exec(filename);
    console.log("match = " + match);
    let type = match ? `image/${match[1]}` : `image`;
    console.log("type = " + type);
    formData.append('text',text)
    formData.append('fname',fname)
    formData.append('photo', { uri: photo, name: filename, type });
    formData.append('city',city)
    formData.append('number',number)
    formData.append('email',email)
    formData.append('physical',physical)
    formData.append('purpose',purpose)
    formData.append('physical',physical)
    formData.append('country',country)
    formData.append('trip',trip)
    formData.append('loantime',loantime)
    formData.append('bankname',bankname)
    formData.append('loanamount',loanamount)
    formData.append('itravlue',itravlue)
    formData.append('housetype',housetype)
    formData.append('otherproperty',otherproperty)


    fetch('https://douryouweb.herokuapp.com/douryou-user/Add-new-education-lone/', {
        method: 'POST',
        headers: {
            "Accept": "application/json",
            "Content-Type": "multipart/form-data"
        },
        body: formData
    }).then((result) => {
        result.json().then((response) => {
            console.log(response, "Response")
          
        })
    })
    console.log()

   }

  //   radiobutton1
  const [housetype, onHousetype] = useState(null);
  const data = [
    { value: 'Owner' },
    { value: 'Rental' },
    { value: 'Lease' },
    { value: 'None' },

  ];

  //   radiobutton2
  const [otherproperty, onOtherproperty] = useState(null);
  const passportData = [
    { value: 'House' },
    { value: 'Apartments and Flats' },
    { value: 'Village Hpuse' },
    { value: 'Villas' },
    { value: 'Kothi' },
    { value: 'None' },

  ];


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
            <Text style={styles.pastext}> Educational Loan</Text>
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
              value={fname} 
              />
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
              value={city} 
              />
          </View>

          <View style={styles.input}>
            <Text style={styles.headerText}>
              Mobile No
            </Text>
            <TextInput style={styles.inputtext}
              keyboardType="numeric"
              onChangeText={onNumber}
              value={number} 
              />
          </View>

          <View style={styles.input}>
            <Text style={styles.headerText}>
              Email Id
            </Text>
            <TextInput style={styles.inputtext}
              onChangeText={onEmail}
              value={email} 
              />
          </View>

          <View style={styles.input1}>
            <Text style={styles.headertext1}> Loan Information</Text>
          </View>

          <View style={styles.input}>
            <Text style={styles.headerText}>
              Are you physical fit
            </Text>
            <TextInput style={styles.inputtext}
              onChangeText={onPhysical}
              value={physical} 
              />
          </View>

          <View style={styles.input}>
            <Text style={styles.headerText}>
              Purpose of going Abroad
            </Text>
            <TextInput style={styles.inputtext}
              onChangeText={onPurpose}
              value={purpose} 
              />
          </View>

          <View style={styles.input}>
            <Text style={styles.headerText}>
              Which Country do you want to go?
            </Text>
            <TextInput style={styles.inputtext}
              onChangeText={onCountry}
              value={country}
               />
          </View>

          <View style={styles.input} >
            <Text style={styles.headertext2}>
              Date of Travel
            </Text>
            <View style={styles.inputtext}>
              <CustomDate />
            </View>
          
          </View>

          <View style={styles.input} >
            <Text style={styles.headertext2}>
              Return  Date of Travel
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
              value={trip} 
              />
          </View>

          <View style={styles.input}>
            <Text style={styles.headerText}>
              When to take Loan
            </Text>
            <TextInput style={styles.inputtext}
              onChangeText={onLoantime}
              value={loantime} 
              />
          </View>

          <View style={styles.input}>
            <Text style={styles.headerText}>
              Which preffered bank you want Loan from?
            </Text>
            <TextInput style={styles.inputtext}
              onChangeText={onBankname}
              value={bankname}
               />
          </View>

          <View style={styles.input}>
            <Text style={styles.headerText}>
              How much loan do you want to take
            </Text>
            <TextInput style={styles.inputtext}
              onChangeText={onLoanamount}
              value={loanamount}
               />
          </View>

          <View style={styles.input1}>
            <Text style={styles.headertext1}> Financial Information</Text>
          </View>

          <View style={styles.input}>
            <Text style={styles.headerText}>
              Your current ITR value
            </Text>
            <TextInput style={styles.inputtext}
                onChangeText={onItravlue}
                value={itravlue}
               />
          </View>

          {/* -------button touchable  type of passport---------*/}
          <Housebutton data={data} onSelect={onHousetype} />


          {/* -------button touchable  type of Service---------*/}


          <Propertbutton data={passportData} onSelect={onOtherproperty} />

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

                    <ImageBackground source={{ uri:photo }} style={styles.dp} />

                  </View>
                </View>

              </View>
            </View>

          <View >
            <TouchableOpacity style={styles.submitbtn}onPress={Education} >
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
    marginTop: StatusBar.currentHeight,
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
    fontWeight: "900",
    color: '#D1070A'
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
    marginLeft: 10,
    marginTop: 15,
  },
  headerText: {
    fontSize: 18,
    color: '#D1070A',
    fontWeight: "600"
  },

  input1: {
    justifyContent: "center",
    alignItems: "center",
    // marginLeft:2,
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

  inputtext: {
    height: 40,
    width: "97%",
    borderBottomWidth: 1.2,
    borderBottomColor: '#D1070A',
    fontSize: 15,
  },

  uploadtype: {
    height: 370,
    width: Dimensions.get('window').width*0.95,
    // width: "93%",
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
  dp:{
    borderRadius: 25,
        marginTop: 23,
        width:Dimensions.get('window').width*0.9,
        // width: 340,
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
    borderRadius: 20,
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

