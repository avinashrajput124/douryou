import { StyleSheet, Text, View, FlatList, Image, Pressable, TouchableOpacity, StatusBar, ScrollView } from 'react-native'
import React, { useState } from 'react'

const MyMatch = ({ navigation, route }) => {

  const { number, verify, name, email, intrestedin,photo } = route.params;
  console.log("name = "+name);
  console.log("photo = "+photo); 
  console.log("verify = "+verify); 
  console.log("number = "+number); 
  console.log("email = "+email); 
  console.log("interstedin = "+intrestedin); 

  function SaveData(){
 

    if(!whyjoin){
        alert('select option')
        return
    }
    // const data = { number, verify, name, email, intrestedin, whyjoin }
  
    // console.log(data,"DATA")
    // console.log(email,"EMAIL")
    // fetch('https://douryouweb.herokuapp.com/douryou-user/Add-new-douryou-logins/', {
    //   method: 'POST',
    //   headers: {
    //     "Accept":"application/json",
    //     "Content-Type":"application/json"
    //   },
    //   body: JSON.stringify(data)
   
  
    // })
            let formData = new FormData();
            // let localUri = photo.path;
            // console.log("local uri = " + localUri);  
            let filename = photo.split('/').pop();
            console.log("filename = " + filename);
            let match = /\.(\w+)$/.exec(filename);
            console.log("match = " + match);
            let type = match ? `image/${match[1]}` : `image`;
            console.log("type = " + type);
            formData.append('number',number)
            formData.append('verify',verify)
            formData.append('photo', { uri: photo, name: filename, type });
            formData.append('name',name)
            formData.append('email',email)
            formData.append('intrestedin',intrestedin)
            formData.append('whyjoin',whyjoin)


            fetch('https://douryouweb.herokuapp.com/douryou-user/Add-new-douryou-logins/', {
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

  const [checkBoxOne, setCheckBoxOne] = useState("")
  const [checkBoxTwo, setCheckBoxTwo] = useState("")
  const [checkBoxThree, setCheckBoxThree] = useState("")
  const [checkBoxFour, setCheckBoxFour] = useState("")
  const [checkBoxFive, setCheckBoxFive] = useState("")
  const [checkBoxSix, setCheckBoxSix] = useState("")
  const [checkBoxSeven, setCheckBoxSeven] = useState("")
  const [checkBoxEight, setCheckBoxEight] = useState("")
  const [checkBoxNine, setCheckBoxNine] = useState("")
  const [checkBoxTen, setCheckBoxTen] = useState("")
  const [checkBoxEleven, setCheckBoxEleven] = useState("")
  const [checkBoxTwelve, setCheckBoxTwelve] = useState("")
  const [checkBoxThirteen, setCheckBoxThirteen] = useState("")
  const [checkBoxFourteen, setCheckBoxFourteen] = useState("")
  const [checkBoxFifteen, setCheckBoxFifteen] = useState("")
  const [checkBoxSixteen, setCheckBoxSixteen] = useState("")
  const [checkBoxSeventeen, setCheckBoxSeventeen] = useState("")
  const [checkBoxEighteen, setCheckBoxEighteen] = useState("")
  const [checkBoxNineteen, setCheckBoxNineteen] = useState("")

  const [note, setNote] = useState("")
  const [loading, setLoading] = useState(false)

  const Join = [checkBoxOne,checkBoxTwo,checkBoxThree,checkBoxFour,checkBoxFive,checkBoxSix,checkBoxSeven,checkBoxEight,checkBoxNine,checkBoxTen,checkBoxEleven,
    checkBoxTwelve,checkBoxThirteen,checkBoxFourteen,checkBoxFifteen,checkBoxSixteen,checkBoxSeventeen,checkBoxEighteen,checkBoxNineteen]

     const whyjoin=Join.toString();
     
   console.log(whyjoin)
  
   
  const onSubmit = () => {

    let furtherAssistanceData = []
    if (checkBoxOne) {
      furtherAssistanceData.push(checkBoxOne)
    }
    if (checkBoxTwo) {
      furtherAssistanceData.push(checkBoxTwo)
    }
    if (checkBoxThree) {
      furtherAssistanceData.push(checkBoxThree)
    }
    if (checkBoxFour) {
      furtherAssistanceData.push(checkBoxFour)
    }
    if (checkBoxFive) {
      furtherAssistanceData.push(checkBoxFive)
    }
    if (checkBoxSix) {
      furtherAssistanceData.push(checkBoxSix)
    }
    if (checkBoxSeven) {
      furtherAssistanceData.push(checkBoxSeven)
    }
    if (checkBoxEight) {
      furtherAssistanceData.push(checkBoxEight)
    }
    if (checkBoxNine) {
      furtherAssistanceData.push(checkBoxNine)
    }
    if (checkBoxTen) {
      furtherAssistanceData.push(checkBoxTen)
    }
    if (checkBoxEleven) {
      furtherAssistanceData.push(checkBoxEleven)
    }
    if (checkBoxTwelve) {
      furtherAssistanceData.push(checkBoxTwelve)
    }
    if (checkBoxThirteen) {
      furtherAssistanceData.push(checkBoxThirteen)
    }
    if (checkBoxFourteen) {
      furtherAssistanceData.push(checkBoxFourteen)
    }
    if (checkBoxFifteen) {
      furtherAssistanceData.push(checkBoxFifteen)
    }
    if (checkBoxSixteen) {
      furtherAssistanceData.push(checkBoxSixteen)
    }
    if (checkBoxSeventeen) {
      furtherAssistanceData.push(checkBoxSeventeen)
    }
    if (checkBoxEighteen) {
      furtherAssistanceData.push(checkBoxSeventeen)
    }
    if (checkBoxNineteen) {
      furtherAssistanceData.push(checkBoxSeventeen)
    }
    const assistanceData = {
      ...businessData,
      furtherAssistanceData: furtherAssistanceData,
      note: note
    }
    // console.log(assistanceData, "assistanceData");
    console.log(furtherAssistanceData, "furtherAssistanceData");
    navigation.navigate('SetPasscode', { assistanceData })
  }
  return (
    <>
      <StatusBar
        backgroundColor='#D1070A'
        barStyle={'light-content'} />

      <ScrollView>

        <View>
          <Image source={require('../assets/logo.png')} style={styles.logo} />
        </View>

        <View style={styles.top}>
          <Text style={styles.toptext}> Why you want to join us?</Text>
        </View>

        <View style={{ padding: 20 }}>

          {/* checkbox one */}

          <View style={styles.cont}>
            <Pressable onPress={() => {
              if (checkBoxOne == "") {
                setCheckBoxOne("ILETS")
              } else {
                setCheckBoxOne("")
              }
            }} >
              {checkBoxOne == "" ?
                <View style={[{ borderColor: "#A3A1A1" }, styles.box]}></View>
                :
                <View style={[{ borderColor: '#D1070A', backgroundColor: '#D1070A', alignItems: 'center', justifyContent: 'center' }, styles.box]}></View>
              }
            </Pressable>
            <Text style={styles.text}>ILETS</Text>

          </View>

          <View style={styles.cont}>
            <Pressable onPress={() => {
              if (checkBoxTwo == "") {
                setCheckBoxTwo("Study Visa")
              } else {
                setCheckBoxTwo("")
              }
            }} >
              {checkBoxTwo == "" ?
                <View style={[{ borderColor: "#A3A1A1" }, styles.box]}></View>
                :
                <View style={[{ borderColor: '#D1070A', backgroundColor: '#D1070A', alignItems: 'center', justifyContent: 'center' }, styles.box]}></View>
              }
            </Pressable>
            <Text style={styles.text}>Study Visa</Text>

          </View>

          <View style={styles.cont}>
            <Pressable onPress={() => {
              if (checkBoxThree == "") {
                setCheckBoxThree("Passport")
              } else {
                setCheckBoxThree("")
              }
            }} >
              {checkBoxThree == "" ?
                <View style={[{ borderColor: "#A3A1A1" }, styles.box]}></View>
                :
                <View style={[{ borderColor: '#D1070A', backgroundColor: '#D1070A', alignItems: 'center', justifyContent: 'center' }, styles.box]}></View>
              }
            </Pressable>
            <Text style={styles.text}>Passport</Text>

          </View>

          <View style={styles.cont}>
            <Pressable onPress={() => {
              if (checkBoxFour == "") {
                setCheckBoxFour("Education Loan")
              } else {
                setCheckBoxFour("")
              }
            }} >
              {checkBoxFour == "" ?
                <View style={[{ borderColor: "#A3A1A1" }, styles.box]}></View>
                :
                <View style={[{ borderColor: '#D1070A', backgroundColor: '#D1070A', alignItems: 'center', justifyContent: 'center' }, styles.box]}></View>
              }
            </Pressable>
            <Text style={styles.text}>Education Loan</Text>

          </View>

          <View style={styles.cont}>
            <Pressable onPress={() => {
              if (checkBoxFive == "") {
                setCheckBoxFive("Air Ticket")
              } else {
                setCheckBoxFive("")
              }
            }} >
              {checkBoxFive == "" ?
                <View style={[{ borderColor: "#A3A1A1" }, styles.box]}></View>
                :
                <View style={[{ borderColor: '#D1070A', backgroundColor: '#D1070A', alignItems: 'center', justifyContent: 'center' }, styles.box]}></View>
              }
            </Pressable>
            <Text style={styles.text}>Air Ticket</Text>

          </View>

          <View style={styles.cont}>
            <Pressable onPress={() => {
              if (checkBoxSix == "") {
                setCheckBoxSix("Travel Insurance")
              } else {
                setCheckBoxSix("")
              }
            }} >
              {checkBoxSix == "" ?
                <View style={[{ borderColor: "#A3A1A1" }, styles.box]}></View>
                :
                <View style={[{ borderColor: '#D1070A', backgroundColor: '#D1070A', alignItems: 'center', justifyContent: 'center' }, styles.box]}></View>
              }
            </Pressable>
            <Text style={styles.text}>Travel Insurance</Text>

          </View>

          <View style={styles.cont}>
            <Pressable onPress={() => {
              if (checkBoxSeven == "") {
                setCheckBoxSeven("Money Exchange")
              } else {
                setCheckBoxSeven("")
              }
            }} >
              {checkBoxSeven == "" ?
                <View style={[{ borderColor: "#A3A1A1" }, styles.box]}></View>
                :
                <View style={[{ borderColor: '#D1070A', backgroundColor: '#D1070A', alignItems: 'center', justifyContent: 'center' }, styles.box]}></View>
              }
            </Pressable>
            <Text style={styles.text}>Money Exchange</Text>

          </View>
          <View style={styles.cont}>
            <Pressable onPress={() => {
              if (checkBoxEight == "") {
                setCheckBoxEight("Transport")
              } else {
                setCheckBoxEight("")
              }
            }} >
              {checkBoxEight == "" ?
                <View style={[{ borderColor: "#A3A1A1" }, styles.box]}></View>
                :
                <View style={[{ borderColor: '#D1070A', backgroundColor: '#D1070A', alignItems: 'center', justifyContent: 'center' }, styles.box]}></View>
              }
            </Pressable>
            <Text style={styles.text}>Transport</Text>

          </View>
          <View style={styles.cont}>
            <Pressable onPress={() => {
              if (checkBoxNine == "") {
                setCheckBoxNine("Luggage Adjustment")
              } else {
                setCheckBoxNine("")
              }
            }} >
              {checkBoxNine == "" ?
                <View style={[{ borderColor: "#A3A1A1" }, styles.box]}></View>
                :
                <View style={[{ borderColor: '#D1070A', backgroundColor: '#D1070A', alignItems: 'center', justifyContent: 'center' }, styles.box]}></View>
              }
            </Pressable>
            <Text style={styles.text}>Luggage Adjustment</Text>

          </View>

          <View style={styles.cont}>
            <Pressable onPress={() => {
              if (checkBoxTen == "") {
                setCheckBoxTen("Acommodation at Board")
              } else {
                setCheckBoxTen("")
              }
            }} >
              {checkBoxTen == "" ?
                <View style={[{ borderColor: "#A3A1A1" }, styles.box]}></View>
                :
                <View style={[{ borderColor: '#D1070A', backgroundColor: '#D1070A', alignItems: 'center', justifyContent: 'center' }, styles.box]}></View>
              }
            </Pressable>
            <Text style={styles.text}>Acommodation at Board</Text>
          </View>

          <View style={styles.cont}>
            <Pressable onPress={() => {
              if (checkBoxEleven == "") {
                setCheckBoxEleven("Job at Abroad")
              } else {
                setCheckBoxEleven("")
              }
            }} >
              {checkBoxEleven == "" ?
                <View style={[{ borderColor: "#A3A1A1" }, styles.box]}></View>
                :
                <View style={[{ borderColor: '#D1070A', backgroundColor: '#D1070A', alignItems: 'center', justifyContent: 'center' }, styles.box]}></View>
              }
            </Pressable>
            <Text style={styles.text}>Job at Abroad</Text>

          </View>

          <View style={styles.cont}>
            <Pressable onPress={() => {
              if (checkBoxTwelve == "") {
                setCheckBoxTwelve("Tour Travel Package")
              } else {
                setCheckBoxTwelve("")
              }
            }} >
              {checkBoxTwelve == "" ?
                <View style={[{ borderColor: "#A3A1A1" }, styles.box]}></View>
                :
                <View style={[{ borderColor: '#D1070A', backgroundColor: '#D1070A', alignItems: 'center', justifyContent: 'center' }, styles.box]}></View>
              }
            </Pressable>
            <Text style={styles.text}>Tour Travel Package</Text>

          </View>

          <View style={styles.cont}>
            <Pressable onPress={() => {
              if (checkBoxThirteen == "") {
                setCheckBoxThirteen("Work Permit")
              } else {
                setCheckBoxThirteen("")
              }
            }} >
              {checkBoxThirteen == "" ?
                <View style={[{ borderColor: "#A3A1A1" }, styles.box]}></View>
                :
                <View style={[{ borderColor: '#D1070A', backgroundColor: '#D1070A', alignItems: 'center', justifyContent: 'center' }, styles.box]}></View>
              }
            </Pressable>
            <Text style={styles.text}>Work Permit</Text>

          </View>

          <View style={styles.cont}>
            <Pressable onPress={() => {
              if (checkBoxFourteen == "") {
                setCheckBoxFourteen("Permanent Resident")
              } else {
                setCheckBoxFourteen("")
              }
            }} >
              {checkBoxFourteen == "" ?
                <View style={[{ borderColor: "#A3A1A1" }, styles.box]}></View>
                :
                <View style={[{ borderColor: '#D1070A', backgroundColor: '#D1070A', alignItems: 'center', justifyContent: 'center' }, styles.box]}></View>
              }
            </Pressable>
            <Text style={styles.text}>Permanent Resident</Text>

          </View>

          <View style={styles.cont}>
            <Pressable onPress={() => {
              if (checkBoxFifteen == "") {
                setCheckBoxFifteen("International Courier")
              } else {
                setCheckBoxFifteen("")
              }
            }} >
              {checkBoxFifteen == "" ?
                <View style={[{ borderColor: "#A3A1A1" }, styles.box]}></View>
                :
                <View style={[{ borderColor: '#D1070A', backgroundColor: '#D1070A', alignItems: 'center', justifyContent: 'center' }, styles.box]}></View>
              }
            </Pressable>
            <Text style={styles.text}>International Courier</Text>

          </View>

          <View style={styles.cont}>
            <Pressable onPress={() => {
              if (checkBoxSixteen == "") {
                setCheckBoxSixteen("Tourist business Visa")
              } else {
                setCheckBoxSixteen("")
              }
            }} >
              {checkBoxSixteen == "" ?
                <View style={[{ borderColor: "#A3A1A1" }, styles.box]}></View>
                :
                <View style={[{ borderColor: '#D1070A', backgroundColor: '#D1070A', alignItems: 'center', justifyContent: 'center' }, styles.box]}></View>
              }
            </Pressable>
            <Text style={styles.text}>Tourist business Visa</Text>

          </View>

          <View style={styles.cont}>
            <Pressable onPress={() => {
              if (checkBoxSeventeen == "") {
                setCheckBoxSeventeen("Legal Advisor")
              } else {
                setCheckBoxSeventeen("")
              }
            }} >
              {checkBoxSeventeen == "" ?
                <View style={[{ borderColor: "#A3A1A1" }, styles.box]}></View>
                :
                <View style={[{ borderColor: '#D1070A', backgroundColor: '#D1070A', alignItems: 'center', justifyContent: 'center' }, styles.box]}></View>
              }
            </Pressable>
            <Text style={styles.text}>Legal Advisor</Text>

          </View>

          <View style={styles.cont}>
            <Pressable onPress={() => {
              if (checkBoxEighteen == "") {
                setCheckBoxEighteen("Online ILETS Classes")
              } else {
                setCheckBoxEighteen("")
              }
            }} >
              {checkBoxEighteen == "" ?
                <View style={[{ borderColor: "#A3A1A1" }, styles.box]}></View>
                :
                <View style={[{ borderColor: '#D1070A', backgroundColor: '#D1070A', alignItems: 'center', justifyContent: 'center' }, styles.box]}></View>
              }
            </Pressable>
            <Text style={styles.text}>Online ILETS Classes</Text>

          </View>

          <View style={styles.cont}>
            <Pressable onPress={() => {
              if (checkBoxNineteen == "") {
                setCheckBoxNineteen("Materimony")
              } else {
                setCheckBoxNineteen("")
              }
            }} >
              {checkBoxNineteen == "" ?
                <View style={[{ borderColor: "#A3A1A1" }, styles.box]}></View>
                :
                <View style={[{ borderColor: '#D1070A', backgroundColor: '#D1070A', alignItems: 'center', justifyContent: 'center' }, styles.box]}></View>
              }
            </Pressable>
            <Text style={styles.text}>Matrimony</Text>

          </View>

        </View>


        {/* <TouchableOpacity onPress={() => navigation.navigate('PrabhNavigation')} style={styles.Btn}> */}
        <TouchableOpacity onPress={SaveData} style={styles.Btn}>
          <View >
            <Text style={styles.btn}>Submit</Text>
          </View>
        </TouchableOpacity>

      </ScrollView>
    </>
  )
}
export default MyMatch
const styles = StyleSheet.create({
  logo: {
    width: '70%',
    height: 70,
    alignSelf: 'center',
    marginTop: '10%'
  },
  top: {
    alignItems: 'center',

  },
  toptext: {
    fontWeight: "600",
    fontSize: 20,
    color: "#000000",
  },
  root: {
    padding: 20,
    // backgroundColor: "#fff",
    // paddingBottom: 250,
    flexGrow: 1
  },
  text: {
    color: "#000",
    marginHorizontal: 10,
    fontSize: 18,
    fontWeight: 'bold'
  },
  cont: {
    flexDirection: "row",
    paddingVertical: 15
  },
  box: {
    height: 22,
    width: 22,
    borderWidth: 1,
    borderRadius: 5,
  },
  Btn: {
    alignItems: 'center',
    marginVertical: 20,
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