import { StyleSheet, ScrollView, number, Text, View, TouchableOpacity, Image, TextInput, Dimensions } from 'react-native'
import React, { useState, useEffect } from 'react';
import RnOtpTimer from 'rn-otp-timer';

const VerifyCode = ({ navigation, route }) => {

   const { phoneno, message, firebase } = route.params;
   const [confirm, setConfirm] = useState(firebase)
   const [number, setNumber] = useState(phoneno);
   const [code, setCode] = useState("");
   const [numbId, setNumbId] = useState("");


   console.log(code,'hello')


   const verCode = async () => {
      try {
         const result = await confirm.confirm(code);
         console.log('Signed In', result)

         console.log(result.user.uid, "Hello111")

         const verify = result.user.uid

         setNumbId(result);
         navigation.navigate("CreateProfie", {
            number, verify
         })
      } catch (error) {
         console.log('code', code)
         alert('Invalid code.');
      }
   }
   useEffect(() => {
      setConfirm(firebase)
      console.log('check confirm', firebase)
   })

   //   const [number, setNumber] = useState("");
   console.log(number, "number is here")

   const Resend = async () => {
      const confirmation = await auth().signInWithPhoneNumber(number);
      if (number && number.length > 9) {
         navigation.navigate('VerifyCode', {
            phoneno: number,
            firebase: confirmation
         });

      }
   }

   return (
      <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
         <View>

            <View style={styles.main}>
               <View>
                  <Image source={require('../../LoginFlow/assets/logo.png')} style={styles.logo} />
               </View>
               <View>
                  <Text style={styles.wel}>Verifiy Your Number</Text>
               </View>
               <View>
                  <Text style={styles.text}> Waiting to automatically delect an  {'\n'} SMS sent</Text>
               </View>
            </View>

            <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 10 }}>
               <View>
                  <Text style={{ color: '#000', fontSize: 20, fontWeight: '600' }}>{number}</Text>
               </View>
               <View>
                  <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                     <Text style={{ color: '#D1070A', fontSize: 18, fontWeight: '400', marginHorizontal: 5, marginTop: 2 }}>Wrong number?</Text>
                  </TouchableOpacity>
               </View>
            </View>

            <View style={{ flexDirection: "row", alignSelf: "center", justifyContent: "space-evenly", marginTop: 10 }}>
               <TextInput
                  maxLength={6}
                  keyboardType={'numeric'}
                  style={{
                     fontWeight: '600',
                     alignSelf: 'center',
                     justifyContent:'center',
                     //  padding: 10,
                     fontSize: 20,
                     height: 50,
                     width: Dimensions.get('screen').width*0.50,
                     borderWidth: 1,
                     letterSpacing: 15,
                     borderBottomColor: "#D1070A",
                     margin: 10,
                     borderTopColor: "#fff",
                     borderRightColor: "#fff",
                     borderLeftColor: "#fff",
                     borderStyle: 'dashed',
                  }}
                  value={code}
                  onChangeText={(text) => setCode(text)}
               />
            </View>

            <View style={styles.CODE}>
               <Text style={{ color: '#999999', }}>

               </Text>
               <TouchableOpacity>
                  <Text style={styles.Code}>
                  <RnOtpTimer
                            minutes={0}
                            seconds={60}
                            resendButtonStyle={styles.button}
                            resendButtonTextStyle={styles.buttonText}
                            resendButtonAction={Resend}
                        /></Text>
               </TouchableOpacity>
            </View>

            <View style={styles.Btn}>
               <TouchableOpacity onPress={verCode}>
                  <Text style={styles.btn} > Submit </Text>
               </TouchableOpacity>
            </View>


         </View>
      </ScrollView>
   )
}

export default VerifyCode

const styles = StyleSheet.create({
   main: {
      marginVertical: 40,
   },
   logo: {
      width: "80%",
      height: 80,
      alignSelf: 'center',
      marginTop: '20%'
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
   OTP: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 40,
   },
   InputOtp: {
      borderBottomWidth: 2,

      textAlign: 'center',
      borderColor: '#E4E3E3'
   },
   Second: {
      marginLeft: 40,
      marginTop: 20
   },
   CODE: {
      justifyContent: 'center',
      alignSelf: 'center'

   },
   Code: {
      color: '#545F74',
      fontSize: 15,
      marginLeft: 5
   },
})