import { StyleSheet, ScrollView, StatusBar, Image, View, Text,FlatList, TextInput, TouchableOpacity, Dimensions, } from "react-native";
import React, { useState } from 'react'

const JobSeeker = () => {

  const data1 = [
    {
      id: '1',
      pic: require('../../../../Categories/assets/rose.jpg'),
      Label: "Name:",
      name: 'PrabhJot Singh',
      Labell: 'Job Offer:',
      jobOffer: 'Job Seeker'
    },
    {
      id: '2',
      pic: require('../../../../Categories/assets/rose.jpg'),
      Label: "Name:",
      name: 'PrabhJot Singh',
      Labell: 'Job Offer:',
      jobOffer: 'Job Seeker'
    },
    {
      id: '3',
      pic: require('../../../../Categories/assets/rose.jpg'),
      Label: "Name",
      name: 'PrabhJot Singh',
      Labell: 'Job Offer:',
      jobOffer: 'Job Seeker'
    },
    {
      id: '4',
      pic: require('../../../../Categories/assets/rose.jpg'),
      Label: "Name",
      name: 'PrabhJot Singh',
      Labell: 'Job Offer:',
      jobOffer: 'Job Seeker'
    },
    {
      id: '5',
      pic: require('../../../../Categories/assets/rose.jpg'),
      Label: "Name",
      name: 'PrabhJot Singh',
      Labell: 'Job Offer:',
      jobOffer: 'Job Seeker'
    },
  ];



  return (

    <>
      <StatusBar backgroundColor="#D1070A" barStyle='light-content' />
      <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
        <View>

          <View>
            <Image source={require('../../assets/logo.png')} style={styles.logo} />
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <View>
              <Image source={require('../assets/speeks.png')} style={styles.imagejob} />
            </View>
            <View>
              <Text style={styles.moretext}> JOBS SEEKERS </Text>
            </View>
          </View>

          <FlatList         
          showsHorizontalScrollIndicator={false}
          data={data1}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (


            <View style={styles.border}>

              <View>
                <Image source={item.pic} style={styles.Img}/>
              </View>

              <View>

                <View style={styles.label}>
                <View>
                  <Text style={styles.Name}>{item.Label}</Text>
                </View>
                <View>
                  <Text style={styles.name}>{item.name}</Text>
                </View>
              </View>
              <View style={styles.label}>
                <View>
                  <Text style={styles.Name}>{item.Labell}</Text>
                </View>
                <View>
                  <Text style={styles.name}>{item.jobOffer}</Text>
                </View>
                </View>

              </View>

            </View>
          )}
        ></FlatList>

        </View>
      </ScrollView>
    </>
  )
}

export default JobSeeker

const styles = StyleSheet.create({
  logo: {
    width: '80%',
    height: 80,
    alignSelf: 'center',
    marginTop: 30
  },
  imagejob: {
    height: 60,
    width: 60,
    marginTop: 22,

  },
  moretext: {
    fontSize: 26,
    fontWeight: '700',
    color: '#EE3336',
    textAlign: 'center',
    marginTop: 30,
  },
  border: {
   marginVertical:10,
    borderWidth: 1,
    width: Dimensions.get('window').width * 0.95,
    height: 'auto',
    borderRadius: 5,
    marginHorizontal: 10,
    flexDirection: 'row'
  },
  Img: {
    height: 90,
    width: 90,
    marginHorizontal: 10,
    borderRadius: 10,
    marginVertical: 3,
  },
  label: {
    marginHorizontal: 3,
    marginVertical: 5,
    flexDirection: 'row',
  },
  Name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  name: {
    fontSize: 15,
    fontWeight: '500',
    color: '#000',
    margin: 1,
    width: Dimensions.get('window').width * 0.60,
  },
  job: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000'
  }

})