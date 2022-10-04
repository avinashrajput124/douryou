import { StyleSheet,Dimensions, ScrollView, StatusBar, View, Text, TextInput, Image, TouchableOpacity, ImageBackground } from "react-native";
import React, { useState } from 'react'
import Categorydrop from "../../../Categories/MoreCategories/Component/Categorydrop";
import Requiredrop from "../../../Categories/MoreCategories/Component/Requiredrop";
import ImageCropPicker from 'react-native-image-crop-picker';


const RequirementForm = () => {

  // const [selectedLanguage] =route.params
  const [select_catgry, onSelect_catgry] = useState("");
  const [title, onChangeTitle] = useState("");
  const [phone, onChangePhone] = useState("");
  const [quali, onChangeQuali] = useState("");
  const [drop, onDrop] = useState("");
  const [description, onChangeDescription] = useState("");
  const [photo, setPhoto] = useState('https://www.whatsappimages.in/wp-content/uploads/2022/03/Black-Wallpaper-Download-Free.jpg');

  console.log(select_catgry, 'select_catgry')
  console.log(description, 'description')
  console.log(photo, 'photodescription')
  console.log(drop,"DROPPPP")

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

  function REQUIREMENTS() {
    // 'https://douryouweb.herokuapp.com/douryou-user/Add-new-job-requirement/'
    let formData = new FormData();
    // let localUri = photo.path;
    // console.log("local uri = " + localUri);  
    let filename = photo.split('/').pop();
    console.log("filename = " + filename);
    let match = /\.(\w+)$/.exec(filename);
    console.log("match = " + match);
    let type = match ? `image/${match[1]}` : `image`;
    console.log("type = " + type);
    formData.append('select_catgry',select_catgry)
    formData.append('title',title)
    formData.append('photo', { uri: photo, name: filename, type });
    formData.append('phone',phone)
    formData.append('quali',quali)
    formData.append('drop',drop)
    formData.append('description',description)


    fetch('https://douryouweb.herokuapp.com/douryou-user/Add-new-your-requirement/', {
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

  // const selectcatgry =[Categorydrop]
  // console.log(Categorydrop,"selectttttttttttttttttttt")

  return (
    <>
      <StatusBar backgroundColor="#D1070A" barStyle='light-content' />
      <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
        <View>

          <View>
            <Image source={require('../assets/logo.png')} style={styles.logo} />
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <View>
              {/* <Image source={require('../User/assets/user.png')}  style={styles.imagejob}/> */}
            </View>
            <View>
              <Text style={styles.moretext}>REQUIREMENTS FORM </Text>
            </View>
          </View>

          <View style={styles.formhandle}>
            <View style={styles.drop}>
              <Text style={styles.headerText}>
                Select Category :
              </Text>
              <View style={styles.category}>

                <Categorydrop value="select_catgry" onChangeText={onSelect_catgry} />

              </View>
            </View>

            <View style={styles.input}>
              <Text style={styles.headerText}>
                Add Title:
              </Text>
              <TextInput style={styles.inputtext}
                onChangeText={onChangeTitle}
                placeholder="Add your Title"
                value={title} />
            </View>

            <View style={styles.input}>
              <Text style={styles.headerText}>
                Mobile Number :
              </Text>
              <TextInput style={styles.inputtext}
                keyboardType="numeric"
                onChangeText={onChangePhone}
                placeholder="Enter 10 digit  Mobile Number"
                value={phone} />
            </View>

            <View style={styles.input}>
              <Text style={styles.headerText}>
                Qualification :
              </Text>
              <TextInput style={styles.inputtext}
                onChangeText={onChangeQuali}
                placeholder="What is Your Qualification"
                value={quali} />
            </View>

            <View style={styles.drop}>
              <Text style={styles.headerText}>
                When you Required :
              </Text>
              <View style={styles.category}>
                <Requiredrop value="drop" onChangeText={onDrop} />
              </View>
            </View>

            <View style={styles.input}>
              <Text style={styles.headerText}>
                Describe your Requirement
              </Text>
              <TextInput style={styles.inputtext}
                onChangeText={onChangeDescription}
                placeholder="Describe your Requirements"
                value={description} />
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

                    <ImageBackground source={{ uri:photo }} style={styles.dp} />

                  </View>
                </View>

              </View>
            </View>



          </View>

          <View >
            <TouchableOpacity style={styles.submitbtn}
              onPress={REQUIREMENTS} >
              <Text style={styles.submittext}> Submit</Text>
            </TouchableOpacity>
          </View>


        </View>
      </ScrollView>
    </>
  )
}

export default RequirementForm;

const styles = StyleSheet.create({
  logo: {
    width: '80%',
    height: 80,
    alignSelf: 'center',
    marginTop: 30
  },
  imagejob: {
    height: 50,
    width: 50,
    marginTop: 20,
    marginRight: 20
  },
  moretext: {
    fontSize: 18,
    fontWeight: '500',
    color: '#000000',
    textAlign: 'center',
    marginTop: 30,

  },
  formhandle: {
    marginTop: 20,
    // borderWidth: 1,
    borderColor: "#D1070A",
    // width: "98%",
    // height: 650,
    marginLeft: 3,
  },
  drop: {
    marginLeft: 10,
    marginVertical: 10,
  },
  category: {
    height: 28,
  },
  border: {
    width: 55,
    height: 34,
    borderRadius: 999,
    padding: 4,
    alignSelf: 'center'
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
        height: 280,
        alignSelf: 'center',
        overflow: "hidden"
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
    fontWeight: "500"
  },
  inputtext: {
    height: 40,
    width: "97%",
    borderBottomWidth: 1.2,
    borderBottomColor: '#D1070A',
    fontSize: 15,
    color: "#000"
  },
  uploadtype: {
    height: 370,
    width: Dimensions.get('window').width*0.95,
    borderWidth: 1.2,
    marginHorizontal: 10,
    borderColor: '#D1070A',
    marginVertical: 5,

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
    fontWeight: "800",
  }

})