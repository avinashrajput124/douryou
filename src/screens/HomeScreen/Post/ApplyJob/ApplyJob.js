import React, { useState } from 'react'
import { StyleSheet, ScrollView, StatusBar, Dimensions, ImageBackground, Image, View, Text, TextInput, TouchableOpacity } from "react-native";
import ImageCropPicker from 'react-native-image-crop-picker';


export default function ApplyJob() {

    console.disableYellowBox = true

    const [email, onEmail] = useState("");
    const [qualification, onQulification] = useState("");
    const [experiance, onExperiance] = useState("");
    const [salary_expected, onSalary_expected] = useState("");
    const [intersted_field, onIntersted_field] = useState("");
    const [designation, onDesignation] = useState("");
    const [experiance_field, onExperiance_field] = useState("");
    const [location, onLocation] = useState("");

    const [photo, setPhoto] = useState('https://www.whatsappimages.in/wp-content/uploads/2022/03/Black-Wallpaper-Download-Free.jpg');

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

    function JOB() {

        let formData = new FormData();
        let filename = photo.split('/').pop();
        console.log("filename = " + filename);
        let match = /\.(\w+)$/.exec(filename);
        console.log("match = " + match);
        let type = match ? `image/${match[1]}` : `image`;
        console.log("type = " + type);
    
        formData.append('email', email)
        formData.append('qualification', qualification)
        formData.append('photo', { uri: photo, name: filename, type });
        formData.append('experiance',experiance)
        formData.append('salary_expected',salary_expected)
        formData.append('intersted_field',intersted_field)
        formData.append('designation', designation)
        formData.append('experiance_field',experiance_field)
        formData.append('location',location)
    
        fetch('https://douryouweb.herokuapp.com/douryou-user/Add-new-job-requirement/', {
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
            <   StatusBar
                backgroundColor="#D1070A"
                barStyle={'light-content'} />

            <ScrollView style={styles.container}>
                <View>
                    <View>
                        <Image source={require('../assets/logo.png')} style={styles.logo} />
                    </View>

                    <View style={styles.line}></View>

                    <View style={styles.pas}>
                        <Text style={styles.pitext}> Personal Information</Text>
                    </View>

                    <View style={styles.input}>
                        <Text style={styles.headerText}>
                            Email ID:
                        </Text>
                        <TextInput style={styles.inputtext}
                            onChangeText={onEmail}
                            placeholder="Enter your Email"
                            value={email} />
                    </View>

                    <View style={styles.input}>
                        <Text style={styles.headerText}>
                            qualification :
                        </Text>
                        <TextInput style={styles.inputtext}
                            onChangeText={onQulification}
                            placeholder="What is Your qualification"
                            value={qualification} />
                    </View>

                    <View style={styles.input}>
                        <Text style={styles.headerText}>
                            Experience :
                        </Text>
                        <TextInput style={styles.inputtext}
                            onChangeText={onExperiance}
                            placeholder="Enter Your Experience"
                            value={experiance} />
                    </View>

                    <View style={styles.input}>
                        <Text style={styles.headerText}>
                            salary_expected Expected :
                        </Text>
                        <TextInput style={styles.inputtext}
                            onChangeText={onSalary_expected}
                            placeholder="Enter Your salary_expected Expecttion"
                            value={salary_expected} />
                    </View>

                    <View style={styles.input}>
                        <Text style={styles.headerText}>
                            Intersted field :
                        </Text>
                        <TextInput style={styles.inputtext}
                            onChangeText={onIntersted_field}
                            placeholder="Your interest_fielded Field"
                            value={intersted_field} />
                    </View>

                    <View style={styles.input}>
                        <Text style={styles.headerText}>
                            Designation :
                        </Text>
                        <TextInput style={styles.inputtext}
                            onChangeText={onDesignation}
                            placeholder="Designation"
                            value={designation} />
                    </View>

                    <View style={styles.input}>
                        <Text style={styles.headerText}>
                            Experience Field :
                        </Text>
                        <TextInput style={styles.inputtext}
                            onChangeText={onExperiance_field}
                            placeholder="Field"
                            value={experiance_field} />
                    </View>

                    <View style={styles.input}>
                        <Text style={styles.headerText}>
                            Location :
                        </Text>
                        <TextInput style={styles.inputtext}
                            onChangeText={onLocation}
                            placeholder="Enter your Location"
                            value={location} />
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
                            onPress={JOB} >
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
        marginTop: 30
    },
    // mainlogo: {
    //     height: 80,
    //     width: "97%",
    //     alignSelf: "center",
    //     marginTop: 20,
    // },
    pas: {
        alignItems: 'center',
        justifyContent: "center",
        marginTop: 5,
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

    pitext: {
        fontSize: 15,
        fontWeight: "900",
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
        fontWeight: "500"
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
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    submittext: {
        textAlign: 'center',
        color: "#fff",
        fontSize: 25,
        fontWeight: "800",
    }


});

