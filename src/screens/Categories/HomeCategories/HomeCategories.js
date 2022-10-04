import { StyleSheet,SafeAreaView, Text, View,Image, TouchableOpacity } from 'react-native';
import React from 'react'

const HomeCategories = ({navigation}) => {
  return (
   <SafeAreaView>
      <View style={{marginHorizontal:3}}>
      <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
         
         <TouchableOpacity style={styles.bordercategory} onPress={ () => navigation.navigate('HomeActivities')}>
              <View >
              <Image source = {require('../../Categories/assets/IELTS.png')} style={styles.pic}/>
              <Text style={styles.text}>ILETS</Text>
              </View>
         </TouchableOpacity>

         <TouchableOpacity style={styles.bordercategory} onPress={ () => navigation.navigate('HomeActivities')}>
              <View >
              <Image source = {require('../../Categories/assets/read.png')} style={styles.pic}/>
            <Text style={styles.text}>Study Visa</Text>
              </View>
         </TouchableOpacity>
         <TouchableOpacity style={styles.bordercategory} onPress={ () => navigation.navigate('HomeActivities')}>
              <View >
              <Image source = {require('../../Categories/assets/Passport.png')} style={styles.pic}/>
              <Text style={styles.text}>Passport</Text>
              </View>
         </TouchableOpacity>

         <TouchableOpacity style={styles.bordercategory} onPress={ () => navigation.navigate('HomeActivities')}>
              <View >
              <Image source = {require('../../Categories/assets/Loan.png')} style={styles.pic}/>
              <Text style={styles.text}>Education {"\n"} Loan</Text>
              </View>
         </TouchableOpacity> 

         
         
        </View>

        <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
    
         
         <TouchableOpacity style={styles.bordercategory} onPress={ () => navigation.navigate('HomeActivities')}>
              <View >
              <Image source = {require('../../Categories/assets/Insurance.png')} style={styles.pic}/>
              <Text style={styles.text}>Trevel {"\n"} Insurance</Text>
              </View>
         </TouchableOpacity>
         <TouchableOpacity style={styles.bordercategory} onPress={ () => navigation.navigate('HomeActivities')}>
              <View >
              <Image source = {require('../../Categories/assets/Money.png')} style={styles.pic}/>
              <Text style={styles.text}>Money  {"\n"} Exchange</Text>
              </View>
         </TouchableOpacity>

         <TouchableOpacity style={styles.bordercategory} onPress={ () => navigation.navigate('HomeActivities')}>
              <View >
              <Image source = {require('../../Categories/assets/AirTicket.png')} style={styles.pic}/>
            <Text style={styles.text}>Air Ticket</Text>
              </View>
         </TouchableOpacity>

         <TouchableOpacity style={styles.bordercategory} onPress={ () => navigation.navigate('HomeActivities')}>
              <View >
              <Image source = {require('../../Categories/assets/Transpot.png')} style={styles.pic}/>
              <Text style={styles.text}>Transport for {"\n"} Airport</Text>
              </View>
         </TouchableOpacity>
         
        </View>
           
       

        <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>

        <TouchableOpacity style={styles.bordercategory} onPress={ () => navigation.navigate('HomeActivities')}>
              <View >
              <Image source = {require('../../Categories/assets/Tourist.png')} style={styles.pic}/>
              <Text style={styles.text}>Tourist & {"\n"} Business visa</Text>
              </View>
         </TouchableOpacity>

         <TouchableOpacity style={styles.bordercategory} onPress={ () => navigation.navigate('HomeActivities')}>
              <View >
              <Image source = {require('../../Categories/assets/WorkPermit.png')} style={styles.pic}/>
              <Text style={styles.text}>Work Permit</Text>
              </View>
         </TouchableOpacity>

         <TouchableOpacity style={styles.bordercategory} onPress={ () => navigation.navigate('HomeActivities')}>
              <View >
              <Image source = {require('../../Categories/assets/JobAbroad.png')} style={styles.pic}/>
              <Text style={styles.text}>Job at {"\n"} Abroad</Text>
              </View>
         </TouchableOpacity>

         <TouchableOpacity style={styles.bordercategory} onPress={ () => navigation.navigate('HomeActivities')}>
              <View >
              <Image source = {require('../../Categories/assets/Accommodatio.png')} style={{width:40,height:40,marginVertical:10,alignSelf:'center'}}/>
              <Text style={styles.text}>Accommoda- {"\n"} tion at Abroad</Text>
              </View>
         </TouchableOpacity>
         
         
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
      
         <TouchableOpacity style={styles.bordercategory} onPress={ () => navigation.navigate('HomeActivities')}>
              <View >
              <Image source = {require('../../Categories/assets/PR.png')} style={styles.pic}/>
              <Text style={styles.text}>Permanent {"\n"} Resident</Text>
              </View>
         </TouchableOpacity>

         <TouchableOpacity style={styles.bordercategory} onPress={ () => navigation.navigate('HomeActivities')}>
              <View >
              <Image source = {require('../../Categories/assets/TourTravel.png')} style={styles.pic}/>
              <Text style={styles.text}>Tour & Travel {"\n"} Package</Text>
              </View>
         </TouchableOpacity>

         
         <TouchableOpacity style={styles.bordercategory} onPress={ () => navigation.navigate('HomeActivities')}>
              <View >
              <Image source = {require('../../Categories/assets/Internation.png')} style={styles.pic}/>
            <Text style={styles.text}>International {"\n"} Courier</Text>
              </View>
         </TouchableOpacity>


         <TouchableOpacity style={styles.bordercategory} onPress={ () => navigation.navigate('HomeActivities')}>
              <View >
              <Image source = {require('../../Categories/assets/LegalAdv.png')} style={styles.pic}/>
              <Text style={styles.text}>Legal Advisor</Text>
              </View>
         </TouchableOpacity>

         </View>

      </View>
   </SafeAreaView>
  )
}

export default HomeCategories

const styles = StyleSheet.create({
  bordercategory:{
    borderWidth:1,
     width:'23%',
     height:90,
     borderRadius:10,
     marginVertical:2.5
    
    },
    pic:{
      width:38,
      height:38,
      marginVertical:10,
      alignSelf:'center'
    },
    text:{
      color:'#000000',
      fontWeight:'bold',
      lineHeight:13,
      fontSize:11,
      textAlign:'center',
    },
})