import {SafeAreaView, StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React from 'react'


const CustomNavBar = ({route, navigation,nano, ...props}) => {
  return (
   <SafeAreaView style={{flex:1}}>
      <View style={styles.main}>
         <TouchableOpacity>
            <View>
                <Image source={require('../CustomNavBar/assets/NewHome.png')}  style={styles.nav}/>
            </View>
         </TouchableOpacity>

        <View>
        <TouchableOpacity onPress={() =>props.nano}>
           <Image source={require('../CustomNavBar/assets/IELTS.png')}  style={styles.nav}/> 
         </TouchableOpacity>
        </View>

        <View>
        <TouchableOpacity onPress={() =>props.navigation.navigate('MatrimonyCategories')}>
                <Image source={require('../CustomNavBar/assets/Metrimony.png')}  style={styles.nav}/>
         </TouchableOpacity>
        </View>

         <TouchableOpacity>
            <View>
                <Image source={require('../CustomNavBar/assets/event.png')}  style={styles.nav}/>
            </View>
         </TouchableOpacity>

         <TouchableOpacity>
            <View>
                <Image source={require('../CustomNavBar/assets/pr.png')}  style={styles.nav}/>
            </View>
         </TouchableOpacity>

         <TouchableOpacity>
            <View>
                <Image source={require('../CustomNavBar/assets/more.png')}  style={styles.nav}/>
            </View>
         </TouchableOpacity>
        
      </View>
   </SafeAreaView>
  )
}

export default CustomNavBar

const styles = StyleSheet.create({
    main:{
        flexDirection:'row',
        justifyContent:'space-around',
        marginTop:10,
    },
    nav:{
        height:42,
        width:45
    },
})