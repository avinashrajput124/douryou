import { StyleSheet, ScrollView, number, ImagePicker, Text, View, TouchableOpacity, Image, TextInput, TouchableHighlight, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import ImageCropPicker from 'react-native-image-crop-picker';
// import axios from 'axios';


const CreateProfie = ({ navigation, route }) => {

   const { number, verify } = route.params;
   const [name, setName] = useState('')
   const [email, setEmail] = useState('')
   const [intrestedin, setIntrestedin] = useState('')
   // const [idproof, setIdproof] = useState('')
   
   console.log(number)
   console.log(name)
   console.log(email)
   console.log(verify)
   console.log(intrestedin)


  

   const [photo, setPhoto] = useState('https://www.whatsappimages.in/wp-content/uploads/2022/03/Black-Wallpaper-Download-Free.jpg');


   const [showoption, setShowoption] = useState(false);


   function DataSave() {
      if(!(name && email && intrestedin && photo)){
            alert('Enter all felid')
            return
      }
      // const data = { }
      navigation.navigate('MyMatch',{
         number, verify, name, email, intrestedin,photo
      })
       }

       const openGalleryFron = () => {
         ImageCropPicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(photo => {
            console.log(photo);
            // let formData = new FormData();
            // let localUri = photo.path;
            // console.log("local uri = " + localUri);
            // let filename = localUri.split('/').pop();
            // console.log("filename = " + filename);
            // let match = /\.(\w+)$/.exec(filename);
            // console.log("match = " + match);
            // let type = match ? `image/${match[1]}` : `image`;
            // console.log("type = " + type);
            // formData.append('name', "kuldeep");
            // formData.append('photo', { uri: localUri, name: filename, type });
            // formData.append('number', "123456789");
            // formData.append('email', "kuldeep@gmail.com");
            // formData.append('intrestedin', "Work");
            
            // console.log(type,"Type-Check")
            setShowoption(false)
            setPhoto(photo.path)
        });
      }
   return (
      <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
         <View>
            <View style={styles.main}>
               <View>
                  <Image source={require('../../LoginFlow/assets/logo.png')} style={styles.logo} />
               </View>
               <View>
                  <Text style={styles.wel}> Let's create your profile</Text>
               </View>
            </View>

            <View style={{ alignSelf: 'center', marginVertical: 10 }}>
               <View style={styles.border}>
                  <TouchableOpacity onPress={() => openGalleryFron()}>
                     <View>
                        <Image source={require('../CreateProfile/assets/Camera.png')} style={styles.camera} />
                     </View>
                  </TouchableOpacity>
               </View>
               <View>

                  <ImageBackground source={{ uri: photo }} style={styles.dp} />

               </View>
            </View>

            <View style={styles.Input}>
               <TextInput placeholder='Enter Your Name' value={name} placeholderTextColor="#969696" style={styles.input} onChangeText={setName} />

               <TextInput placeholder='Enter Your E-mail Id' value={email} placeholderTextColor="#969696" keyboardType=''
                  style={styles.input} onChangeText={setEmail} />

               <TextInput placeholder='Enter Your District' value={intrestedin} placeholderTextColor="#969696" keyboardType=''
                  style={styles.input} onChangeText={setIntrestedin} />

            </View>

            <View style={styles.Btn}>
               {/* <TouchableOpacity onPress={() => navigation.navigate('MyMatch')} > */}
               <TouchableOpacity onPress={() => DataSave()}>
                  <Text style={styles.btn}> Submit </Text>
               </TouchableOpacity>
            </View>


         </View>
      </ScrollView>
   )
}

export default CreateProfie

const styles = StyleSheet.create({
   main: {
      marginVertical: 10
   },
   logo: {
      width: "80%",
      height: 80,
      alignSelf: 'center',
      marginTop: '15%'
   },
   wel: {
      marginVertical: 20,
      textAlign: 'center',
      fontSize: 25,
      color: '#000000',
      fontWeight: '600'
   },
   dp: {
      // width: 130,
      // height: 130,
      // padding:10,
      // borderBottomRightRadius:10,
      // borderBottomLeftRadius:10   
      borderRadius: 8,
      // marginTop: 23,
      width: 130,
      height: 130,
      alignSelf: 'center',
      overflow: "hidden"
   },
   border: {
      width: 35,
      height: 34,
      borderRadius: 999,
      padding: 4,
      marginTop: -5,
      marginLeft: -5,
      position: 'absolute',
      zIndex: 1,
      backgroundColor: '#D9D9D9'
   },
   camera: {
      width: 24,
      height: 24,
      marginLeft: 1,
   },
   Input: {
      marginHorizontal: 20,
      marginTop: 10
   },
   input: {
      backgroundColor: '#fff',
      paddingHorizontal: 20,
      paddingVertical: 15,
      borderRadius: 10,
      marginVertical: 5,
      color: '#969696',
      fontSize: 17,
      fontWeight: '600',
      borderWidth: 1,
   },
   Btn: {
      alignItems: 'center',
      // marginTop: '15%',
      marginVertical:20
   },
   btn: {
      backgroundColor: '#D1070A',
      paddingHorizontal: 100,
      paddingVertical: 15,
      color: '#FFFFFF',
      fontSize: 25,
      borderRadius: 15,
      fontWeight: "600"
   },
})