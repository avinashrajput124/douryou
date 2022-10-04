import { StyleSheet, Text, View, TextInput, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const SearchScreen = ({navigation}) => {
    return (
        <ScrollView>
            <View>
                <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
                    <View>
                        <TouchableOpacity onPress={ () => navigation.goBack('HomeScreen')}>
                        <Image source={require('../SearchScreen/assets/arrow.png')} style={styles.arrow} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.input}>
                        <TextInput placeholder='Search' style={styles.TextInput} />
                    </View>
                </View>

            </View>
        </ScrollView>
    )
}

export default SearchScreen

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        marginVertical: 10,
        // marginHorizontal: 30,
        height: 35,
        width: '75%',
        borderRadius: 7,
        // marginLeft: '20%'
    },
    TextInput: {
        fontSize: 18,
        padding: 5,
        paddingHorizontal: 10
    },
    arrow:{
        marginVertical: 15,
        width:30,
        height:28,
        
    },
})