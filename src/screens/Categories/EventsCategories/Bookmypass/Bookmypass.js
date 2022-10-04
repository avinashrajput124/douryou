import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView, StatusBar, TouchableOpacity, TextInput } from 'react-native';
import React from 'react'

const Bookmypass = ({navigation}) => {
  return (
    <>

      <StatusBar backgroundColor="#D1070A" barStyle='light-content' />
    
        <ScrollView style={styles.container}>
          <View>

          <View>
            <Image source={require('../assets/logo.png')} style={styles.mainlogo} />
          </View>

          <View style={styles.submain}>
                  <View style={styles.row}>
                    <View atyle={styles.mainimg}>
                      <Image source={require('../assets/cityimage.png')} style={styles.cityimg}/>
                    </View>
                    <View style={styles.maintext}>
                       <Text style={styles.maintext1}>Moga, Punjab</Text>
                    </View>
                    <View style={styles.maincityimg1}>
                       <Image source={require('../assets/favourite.png')} style={styles.cityimg1}/>
                    </View>
                  </View>
                   <View style={styles.heading}>
                      <Text style={styles.headingtext}>Book My Pass</Text>      
                   </View>

                   <View style={styles.event}>
                    <Text style={styles.eventtext}>Events for 1 Day</Text>
                    </View>
                   
                   <View style={styles.input}>
                    <TextInput style={styles.inputtext} placeholder="Name" placeholderTextColor="#000"/>
                    </View>

                    <View style={styles.input}>
                    <TextInput style={styles.inputtext} placeholder="Father Name" placeholderTextColor="#000"/>
                    </View>
                    
                    <View style={styles.inputaddress}>
                    <TextInput style={styles.inputtextaddress} placeholder="Address" placeholderTextColor="#000"/>
                    </View>

                    <View style={styles.input}>
                    <TextInput style={styles.inputtext} placeholder="Mobile Number" placeholderTextColor="#000"/>
                    </View>

                    <View style={styles.input}>
                    <TextInput style={styles.inputtext} placeholder="E-MAIL ID" placeholderTextColor="#000"/>
                    </View>

                    <View style={styles.input}>
                    <TextInput style={styles.inputtext} placeholder="Your Qualification" placeholderTextColor="#000"/>
                    </View>

                    <View style={styles.input}>
                    <TextInput style={styles.inputtext} placeholder="Your Interests" placeholderTextColor="#000"/>
                    </View>
                    
                    <View style={styles.entrybtn}>
                      <TouchableOpacity style={styles.submitbtn}
                      onPress={ () => navigation.navigate('Passconfirm')}  >
                      <Text style={styles.submittext}> Submit</Text>
                     </TouchableOpacity>
                    </View>
               </View>


         </View>
         </ScrollView>
          </>
  )
}

export default Bookmypass;


const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    mainlogo: {
      height: 80,
      width: "100%",
      alignSelf: "center",
      marginTop: 20,
    },

    submain:{
      height:488,
      width:"98%",
      borderWidth:1,
      borderRadius:12,
      borderColor:"#000000",
      marginHorizontal:4,
      marginTop:50,
    },
    row:{
      flexDirection:"row",
      justifyContent:"space-evenly",
      alignItems:"center",
      height:70,
      width:"99%",
      marginTop:5,
    },
    cityimg:{
      height:60,
      width:67,
    },
    maintext1:{
      color:"#000000",
      fontSize:30,
      fontWeight:"600",
    },
    cityimg1:{
      height:42,
      width:42,
    },
   heading:{
    height:30,
    width:"100%",
    justifyContent:"center",
    backgroundColor:"#D1070A",
    marginTop:3,
   },
   headingtext:{
    fontSize:14,
    fontWeight:"500",
    color:"#fff",
    textAlign:"center",
   },
  event:{
    marginLeft:10,
    marginTop:8,
   },
  eventtext:{ 
    height: 22,
    width: "35%",
    borderBottomWidth:1,
    borderBottomColor:'#000',
    fontSize:14,
    color:"#000",
      },
  input: {
     marginLeft:10,
     marginTop:5,
   },
 inputtext:{ 
    height: 36,
    width:"95%",
    borderBottomWidth:1,
    borderBottomColor:'#000',
    fontSize:14,
    color:"#000",
    },
    inputaddress: {
      marginLeft:10,
      marginTop:5,
    },
  inputtextaddress:{ 
     height: 55,
     width:"95%",
     borderBottomWidth:1,
     borderBottomColor:'#000',
     fontSize:14,
     color:"#000",
     },
     entrybtn:{
      width: "97%",
      justifyContent:"flex-end",
      alignItems:"flex-end",
      marginLeft:5,
     },
     submitbtn:{
      marginVertical:10,
      marginHorizontal:10,
      height:25,
      width:"35%",
      backgroundColor:"#fff",
      marginBottom:20,
      borderWidth:1,
      borderColor:"#000",
      borderRadius:12,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:"#D1070A",
      // borderColor:"#D1070A",
    },
    submittext:{
      textAlign:'center',
      color:"#D1070A",
      fontSize:14,
      fontWeight:"500",
      color:"#fff",
    },
   
});