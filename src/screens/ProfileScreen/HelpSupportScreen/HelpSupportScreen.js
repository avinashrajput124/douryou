import { StyleSheet, Text, View, Image, ScrollView, StatusBar, TouchableOpacity, } from 'react-native';
import React from 'react'


const HelpSupportScreen = () => {
    return (
        <>
            <StatusBar
                backgroundColor="#D1070A"
                barStyle={'light-content'} />

            <ScrollView style={styles.container}>
                <View>
                    <View>
                        <Image source={require('../../Categories/assets/logo.png')} style={styles.mainlogo} />
                    </View>
                    <View>
                        <View style={styles.comingmain}>
                            <Text style={styles.comingfirst}>C</Text>
                            <Text style={styles.comingsecond}>OMING SOON....</Text>
                        </View>

                    </View>


                </View>
            </ScrollView>
        </>
    )
}

export default HelpSupportScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#fff'
    },

    mainlogo: {
        width: "100%",
        height: 80,
        alignSelf: 'center',
        marginVertical:30
    },
    comingmain:{
        flexDirection:"row",
        height:55,
        width:374,
        alignItems:"center",
        justifyContent:"center",
        marginVertical:280,

      },
     comingfirst:{
        fontSize:43,
        color:"#000000",
        marginLeft:50
      },
     comingsecond:{
        fontSize:23,
        color:"#000000",
        marginTop:5
      },

})