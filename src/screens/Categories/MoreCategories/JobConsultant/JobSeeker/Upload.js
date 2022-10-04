import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

const Upload = () => {



  const [imagefront, setImagefront] = useState(null);
  const [showoption, setShowoption] = useState(false)
  const [showoptiontwo, setShowoptiontwo] = useState(false)

  const [idproof, setIdproof] = useState('')

 
  const openGalleryFront = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then(imagefront => {
      console.log(imagefront);
      setShowoption(false)
      setImagefront(imagefront.path)
    });
  }

  // const openGalleryBack = () => {
  //       ImagePicker.openPicker({
  //         width: 300,
  //         height: 400,
  //         cropping: true
  //       }).then(imageback => {
  //         console.log(imageback);
  //         setShowoptiontwo(false)
  //         setImageback(imageback.path)
  //       });
  //     }

  return (
 
      <View style={styles.main}>

           <View style={{alignSelf:'center',marginVertical:10}}>
              <View  style={styles.border}>
                  <TouchableOpacity onPress={() => openGalleryFront()}>
                  <View>
                    <Image source= {require('../assets/camera.png')} style={styles.camera}/>
                  </View>
                  </TouchableOpacity>
              </View>
               <View>
                <TouchableOpacity>
                {imagefront&& <Image source={{uri:imagefront}} style={styles.dp}/> }
                </TouchableOpacity>
               </View>
           </View>

      
    </View>

   
  );

}
 export default Upload;
 const styles = StyleSheet.create({
  main:{
    alignItems:"center",
    justifyContent:"center",
  },

  dp:{
    width:100,
    height:100, 
 },
 border:{
    width:35,
    height:34,
    borderRadius:999,
    padding:4,
    marginLeft:70,
    position:'absolute',
    zIndex:1,
    backgroundColor:'#D9D9D9'
 },
 camera:{
    width:24,
    height:24,
    marginLeft:1,
 },

 
  cross: {
    width: 28,
    height: 28,
    position:"absolute",
    zIndex:10,
    elevation:10,
    marginLeft:44,
  },
  imageload:{
    width:120, 
   height:100,
   elevation:3,
   zIndex:3,
   position:"relative",
  },
});





