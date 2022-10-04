import { StyleSheet, ScrollView, StatusBar, ImageBackground, Dimensions, View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import React, { useState } from 'react'
import Categorydrop from "../../../Categories/MoreCategories/Component/Categorydrop";
import Areadropdown from "../../../Categories/MoreCategories/Component/Areadropdown/Areadropdown";
import Requiredrop from "../../../Categories/MoreCategories/Component/Requiredrop";
import Floordropdown from "../../../Categories/MoreCategories/Component/Floordropdown/Floordropdown";
import AreaDrop from "../../../Categories/MoreCategories/Component/AreaDrop/AreaDrop";
import ImageCropPicker from "react-native-image-crop-picker";


const ApplyFranchise = () => {

    const [intersted_in, onIntersted_in] = useState("");
    const [Area_type, onArea_type] = useState("");
    const [number, onNumber] = useState("");
    const [quli, onQuli] = useState("");
    const [total_o, onTotal_o] = useState("");
    const [flor_num, onFlor_num] = useState("");
    const [area, onArea] = useState("");
    const [adhar_num, onAdhar_num] = useState("");
    const [pan_num, onPan_num] = useState('');
    const [invest, onInvest] = useState('')

    console.log(number + 'number')
    console.log(quli + 'quli')
    console.log(total_o + 'total_o')
    console.log(flor_num + 'floor')
    console.log(area + 'area')
    console.log(adhar_num + 'aadhar')
    console.log(pan_num + 'pan')
    console.log(invest + 'invest')

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
    function FRANCHISE() {

        // const data = { intersted_in, Area_type, number, quli, total_o, flor_num, area, adhar_num, pan_num, invest }

        let formData = new FormData();
        let localUri = photo.path;
        // console.log("local uri = " + localUri);  
        let filename = photo.split('/').pop();
        console.log("filename = " + filename);
        let match = /\.(\w+)$/.exec(filename);
        console.log("match = " + match);
        let type = match ? `image/${match[1]}` : `image`;
        console.log("type = " + type);

        formData.append('intersted_in', intersted_in)
        formData.append('Area_type', Area_type)
        formData.append('photo', { uri: photo, name: filename, type });
        formData.append('number', number)
        formData.append('quli', quli)
        formData.append('total_o', total_o)
        formData.append('flor_num', flor_num)
        formData.append('area', area)
        formData.append('adhar_num', adhar_num)
        formData.append('pan_num', pan_num)
        formData.append('invest', invest)


        fetch('https://douryouweb.herokuapp.com/douryou-user/Add-new-apply-purchase-francbise/', {
          method: 'POST',
          headers: {
            "Accept": "application/json",
            "Content-Type": "multipart/form-data"
          },
          body: formData
        }).then((result) => {
          result.json().then((response) => {
            console.log(response, "Response")
        navigation.navigate('PrabhNavigation')
          })
        })
        console.log()
    }

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
                            <Text style={styles.moretext}>FRANCHISE </Text>
                        </View>
                    </View>

                    <View style={styles.drop}>
                        <Text style={styles.headerText}>
                            Interested in :
                        </Text>
                        <View style={styles.category}>
                            <Categorydrop value={intersted_in} onChangeText={onIntersted_in} />
                        </View>
                    </View>

                    <View style={styles.drop}>
                        <Text style={styles.headerText}>
                            Area type :
                        </Text>
                        <View style={styles.category}>
                            <Areadropdown />
                        </View>
                    </View>

                    <View style={styles.input}>
                        <Text style={styles.headerText}>
                            Mobile Number :
                        </Text>
                        <TextInput style={styles.inputtext}
                            keyboardType="numeric"
                            onChangeText={onNumber}
                            placeholder="Enter Mobile Number"
                            value={number} />
                    </View>

                    <View style={styles.input}>
                        <Text style={styles.headerText}>
                            Qualification :
                        </Text>
                        <TextInput style={styles.inputtext}
                            onChangeText={onQuli}
                            placeholder="Enter Your Qualification"
                            value={quli} />
                    </View>

                    <View style={styles.input}>
                        <Text style={styles.headerText}>
                            Total Area :
                        </Text>
                        <TextInput style={styles.inputtext}
                            onChangeText={onTotal_o}
                            placeholder="Example square feet"
                            value={total_o} />
                    </View>

                    <View style={styles.drop}>
                        <Text style={styles.headerText}>
                            Floor number :
                        </Text>
                        <View style={styles.category}>
                            <Floordropdown />
                        </View>
                    </View>

                    <View style={styles.drop}>
                        <Text style={styles.headerText}>
                            Area :
                        </Text>
                        <View style={styles.category}>
                            <AreaDrop />
                        </View>
                    </View>

                    <View style={styles.input}>
                        <Text style={styles.headerText}>
                            aadhar_num Card Number :
                        </Text>
                        <TextInput style={styles.inputtext}
                            onChangeText={onAdhar_num}
                            placeholder="aadhar_num Card Number"
                            value={adhar_num} />
                    </View>

                    <View style={styles.input}>
                        <Text style={styles.headerText}>
                            pan_num card number :
                        </Text>
                        <TextInput style={styles.inputtext}
                            onChangeText={onPan_num}
                            placeholder="pan_num Card Number"
                            value={pan_num} />
                    </View>

                    <View style={styles.input}>
                        <Text style={styles.headerText}>
                            invest to invest :
                        </Text>
                        <TextInput style={styles.inputtext}
                            onChangeText={onInvest}
                            placeholder="How much You are invest to investment"
                            value={invest} />
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
                            onPress={FRANCHISE} >
                            <Text style={styles.submittext}> Submit</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </ScrollView>
        </>
    )
}

export default ApplyFranchise;

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
        color: '#D1070A',
        textAlign: 'center',
        marginTop: 30,

    },
    formhandle: {
        marginTop: 20,
        // borderWidth: 1,
        borderColor: "#D1070A",
        width: "98%",
        height: 650,
        marginLeft: 3,
    },
    drop: {
        marginLeft: 10,
        marginVertical: 10,
    },
    category: {
        height: 28,
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

})