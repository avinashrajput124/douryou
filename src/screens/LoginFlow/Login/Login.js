import { StyleSheet, ScrollView, number, Text, View, TouchableOpacity, Image ,StatusBar} from 'react-native'
import React,{useState} from 'react';
import PhoneInput from 'react-native-phone-number-input';
import auth from '@react-native-firebase/auth';



const Login = ({ navigation }) => {
   
    const [number, setNumber] = useState("");
    
    console.log(number,"number is here")

    const onSignInPressed = async () => {
        const confirmation = await auth().signInWithPhoneNumber(number);
       
        if (number && number.length > 9) {
            navigation.navigate('VerifyCode', {
                phoneno: number,
                firebase:confirmation
            });
        }
    }
    return (
        <> 
        <StatusBar
        backgroundColor="#D1070A"
        barStyle={'light-content'} />
        
        <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
            <View>
                <View style={styles.main}>
                    <View>
                        <Image source={require('../../LoginFlow/assets/logo.png')} style={styles.logo} />
                    </View>
                    <View>
                        <Text style={styles.wel}> WELCOME</Text>
                    </View>
                    <View>
                        <Text style={styles.text}> We will send an SMS message to  {'\n'} verify your phone number</Text>
                    </View>
                </View>

                <View style={styles.PhoneInput}>
                    <PhoneInput
                        defaultValue={number}
                        defaultCode='IN'
                        containerStyle={{
                            height: 60,
                            borderRadius: 10,
                            borderWidth: 1

                        }}
                        textContainerStyle={{
                            paddingTop: 0,
                            fontWeight: '600',
                            height: 58,
                            paddingBottom: -10,
                            borderRadius:10
                        }}
                        onChangeFormattedText={(text) => {
                            setNumber(text)
                        }}
                        
                    />

                </View>
                <View style={styles.SMS}>
                    <Text style={styles. smstext}> Carrier SMS charges may apply</Text>
                </View>
                <View style={styles.Btn}>
                    <TouchableOpacity onPress={onSignInPressed}>
                        <Text style={styles.btn}> Submit</Text>
                    </TouchableOpacity>
                </View>

               

            </View>
        </ScrollView>
        </>
    )
}

export default Login

const styles = StyleSheet.create({
    main:{
        marginVertical:40
    },
    logo: {
        width: "80%",
        height: 80,
        alignSelf: 'center',
        marginTop: '15%'
    },
    wel: {
        marginVertical: 30,
        textAlign: 'center',
        fontSize: 25,
        color: '#000000',
        fontWeight: '600'
    },
    text: {
        textAlign: 'center',
        fontSize: 18,
        color: '#000000',
        fontWeight: '600'
    },
    PhoneInput: {
        marginTop: '20%',
        marginHorizontal: 35
    },
    SMS:{
        alignSelf:"center",
        marginTop:20
    },
    smstext:{
        color:'#7F8184',
        fontWeight:'500',
        fontSize:20,
    },
    Btn: {
        alignItems: 'center',
        marginTop: '15%',

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
    bottomBtn: {
        padding: 5,
        paddingHorizontal: 7,
        borderRadius: 5,
        marginHorizontal: 13
    },
    bottomBtnImg: {
        height: 45,
        width: 45
    }

})