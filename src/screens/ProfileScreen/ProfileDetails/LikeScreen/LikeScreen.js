import { StyleSheet, Text, View,Dimensions } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'

const LikeScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <View style={{ marginTop: 15 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 5 }}>
                    <View style={styles.box}></View>
                    <View style={styles.box}></View>
                    <View style={styles.box}></View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 5 }}>
                    <View style={styles.box}></View>
                    <View style={styles.box}></View>
                    <View style={styles.box}></View>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 5 }}>
                    <View style={styles.box}></View>
                    <View style={styles.box}></View>
                    <View style={styles.box}></View>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 5 }}>
                    <View style={styles.box}></View>
                    <View style={styles.box}></View>
                    <View style={styles.box}></View>
                </View>

            </View>
        </SafeAreaView >
    )
}

export default LikeScreen

const styles = StyleSheet.create({
    box: {
        height: Dimensions.get('window').height * 0.20,
        width: Dimensions.get('window').width * 0.30,
        borderWidth: 1,
        borderRadius: 8
    },
})