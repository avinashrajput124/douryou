import { StyleSheet,SafeAreaView, Text, View ,StatusBar,Image,TouchableOpacity} from 'react-native'
import React from 'react'


const WellComeScreen = ({navigation}) => {

  return (
    <>
    <StatusBar
        backgroundColor="#D1070A"
        barStyle={'light-content'}/>
        <SafeAreaView style={{flex:1,backgroundColor:'#fff'}}>
            <View>
                <View>
                    <Image source={require('../assets/logo.png')} style={styles.img}/>
                </View>
                <View>
                    {/* <TouchableOpacity onPress={() => navigation.navigate('Login')}> */}
                        <Text style={styles.text}>Welcome </Text>
                    {/* </TouchableOpacity> */}
                </View>
            </View>
        </SafeAreaView>
    </>
  )
}

export default WellComeScreen

const styles = StyleSheet.create({
    img:{
        width:"80%",
        height:80,
        alignSelf:'center',
        marginTop:'60%'
    },
    text:{
        color:'#D1070A',
        fontSize:30,
        fontWeight:'400',
        textAlign:'center',
        marginTop:'30%'
    },
})