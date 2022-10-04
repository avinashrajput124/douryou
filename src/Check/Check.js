import { StyleSheet, ScrollView, StatusBar, ImageBackground, Dimensions, View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import React,{useState} from 'react'
import ImageCropPicker from 'react-native-image-crop-picker'

const Check = () => {

  const [photo, setPhoto] = useState('https://www.whatsappimages.in/wp-content/uploads/2022/03/Black-Wallpaper-Download-Free.jpg')
  console.log(photo,"Pic Seen")
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
  return (
    <View>
       <View style={styles.uploadtype}>
                        <View
                            style={{ alignSelf: 'center', marginVertical: 10 }}>
                            <View style={styles.border}>
                                <TouchableOpacity onPress={() => openGalleryFront()}>
                                    <View>
                                        <Image source={require('../screens/HomeScreen/Post/assets/camera.png')} style={styles.camera} />
                                    </View>
                                </TouchableOpacity>
                                <View>

                                    <ImageBackground source={{ uri: photo }} style={styles.dp} />

                                </View>
                            </View>

                        </View>
                    </View>
    </View>
  )
}

export default Check

const styles = StyleSheet.create({
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
})