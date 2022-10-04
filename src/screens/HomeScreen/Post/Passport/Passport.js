import React, { useState } from 'react'
import { StyleSheet, ScrollView, StatusBar, View, Text, TextInput, TouchableOpacity, Image,ImageBackground } from "react-native";
import Servicebutton from '../../../Categories/MoreCategories/Component/Passportbutton';
import Passportbutton from '../../../Categories/MoreCategories/Component/Passportbutton'
import CustomDate from '../../../../Components/CustomDate/CustomDate'
import ImageCropPicker from 'react-native-image-crop-picker';


export default function Passport() {


    console.disableYellowBox = true
    const [name, onName] = React.useState();
    const [fname, onFname] = React.useState();
    const [city_name, onCity_name] = React.useState();
    const [number, onNumber] = React.useState();
    const [passport, onChangePassport] = React.useState()
    const [email, onEmail] = React.useState();
    const [dob, onDob] = React.useState();
    const [photo, setPhoto] = useState('https://www.whatsappimages.in/wp-content/uploads/2022/03/Black-Wallpaper-Download-Free.jpg');

    console.log(name)
    console.log(fname)
    console.log(city_name)
    console.log(number)
    console.log(passport)
    console.log(email)
    console.log(dob, "Date+29620562062056065206520950")
    // console.log(type_of_passport)
    // console.log(locatype_of_services)
    console.log(photo)

    const [type_of_passport, setType_of_passport] = useState(null);
    const passportData = [
        { value: 'Ordinary Passport' },
        { value: 'Official Passport' },
        { value: 'Diplomatic Passport' },
        { value: 'Emergency Passport' },
        { value: 'Family Passport' },
        { value: 'Collective Passport' },
    ];

    // service button
    const [locatype_of_services, setLocatype_of_services] = useState(null);
    const data = [
        { value: 'New Passport' },
        { value: 'Certificate Emergency' },
        { value: 'Re isssues' },
        { value: 'Lost / Damage' },
    ];

    const [showoption, setShowoption] = useState(false);
    const openGalleryFront = () => {
        ImageCropPicker.openPicker({ width: 100, height: 100, cropping: true })
            .then(photo => {
                console.log(photo);
                setShowoption(false)
                setPhoto(photo.path)
            });
    }

    function PASSPORT(props) {

        // const data = {name,fname,dob,city_name,number,email,type_of_passport,locatype_of_services,photo}


        let formData = new FormData();
    // let localUri = photo.path;
    // console.log("local uri = " + localUri);  
    let filename = photo.split('/').pop();
    console.log("filename = " + filename);
    let match = /\.(\w+)$/.exec(filename);
    console.log("match = " + match);
    let type = match ? `image/${match[1]}` : `image`;
    console.log("type = " + type);
    formData.append('name',name)
    formData.append('fname',fname)
    formData.append('photo', { uri: photo, name: filename, type });
    formData.append('dob',dob)
    formData.append('city_name',city_name)
    formData.append('number',number)
    formData.append('email',email)
    formData.append('type_of_passport',type_of_passport)
    formData.append('locatype_of_services',locatype_of_services)
   


    fetch('https://douryouweb.herokuapp.com/douryou-user/Add-new-passport/', {
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
                        <Text style={styles.pastext}> Passport</Text>
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
                            onChangeText={onName}
                            value={name} />
                    </View>

                    <View style={styles.input}>
                        <Text style={styles.headerText}>
                            Father / Husband Name
                        </Text>

                        <TextInput style={styles.inputtext}
                            onChangeText={onFname}
                            value={fname} />
                    </View>

                    <View style={styles.input}>
                        <Text style={styles.headerText}>
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
                            onChangeText={onCity_name}
                            value={city_name} />
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

                    <View style={styles.pas}>
                        <Text style={styles.pitext}> Passport Information</Text>
                    </View>

                    {/* -------button touchable  type of passport---------*/}

                    {/* <Passportbutton data={passportData} onSelect={(value) => type_of_passport(value)} /> */}
                    <Passportbutton data={passportData} onSelect={setType_of_passport} />

                    {/* -------button touchable  type of Service---------*/}

                    <Servicebutton data={data} onSelect={setLocatype_of_services} />


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
                            // onPress={() => ('Button with adjusted color pressed')} 
                            onPress={() => PASSPORT()} >
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
        fontWeight: "600",
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
        width: "95%",
        borderBottomWidth: 1,
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
    // uploadtext: {
    //     alignItems: 'center',
    //     justifyContent: "center",
    //     marginBottom: 2,
    // },

    // uploadtext1: {
    //     fontSize: 20,
    //     fontWeight: "600",
    //     color: '#D1070A'
    // },
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
            width: 340,
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

