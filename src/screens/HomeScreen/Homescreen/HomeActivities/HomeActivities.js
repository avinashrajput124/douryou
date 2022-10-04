import React from 'react'
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView, StatusBar, TouchableOpacity, TextInput } from 'react-native';
import { Rating } from 'react-native-ratings'
import CustomHomeActivies from '../../../../Components/CustomHomeActives/CustomHomeActivies';

const HomeActivities = ({navigation}) => {
    return (
        <>
            <StatusBar
                backgroundColor="#D1070A"
                barStyle={'light-content'} />
            <ScrollView>
               
                    <CustomHomeActivies navigation={navigation}/>
                    <CustomHomeActivies navigation={navigation}/>
                    <CustomHomeActivies navigation={navigation}/>
                    <CustomHomeActivies navigation={navigation}/>
                    <CustomHomeActivies navigation={navigation}/>
                    <CustomHomeActivies navigation={navigation}/>
                    <CustomHomeActivies navigation={navigation}/>
                    <CustomHomeActivies navigation={navigation}/>
                    <CustomHomeActivies navigation={navigation}/>
                    <CustomHomeActivies navigation={navigation}/>
                    <CustomHomeActivies navigation={navigation}/>
                    <CustomHomeActivies navigation={navigation}/>
                    <CustomHomeActivies navigation={navigation}/>
                    <CustomHomeActivies navigation={navigation}/>
                    <CustomHomeActivies navigation={navigation}/>
                    <CustomHomeActivies navigation={navigation}/>

                
            </ScrollView>
        </>
    )
}

export default HomeActivities

const styles = StyleSheet.create({
  
})