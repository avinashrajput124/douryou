import { ScrollView, StyleSheet, Text, View, Image,Dimensions,FlatList, TextInput, TouchableOpacity, StatusBar } from 'react-native'
import React, { useState } from 'react'

const LuggageBuyer = () => {

  const data1 = [
    {
      id: '1',
      pic: require('../../../../Categories/assets/rose.jpg'),
      Label: "Name:",
      name: 'PrabhJot Singh',
      Labell: 'FrinchiesSeller:',
      franchiesBuyer: 'First Seller'
    },
    {
      id: '2',
      pic: require('../../../../Categories/assets/rose.jpg'),
      Label: "Name:",
      name: 'PrabhJot Singh',
      Labell: 'FrinchiesSeller:',
      franchiesBuyer: 'First Seller'
    },
    {
      id: '3',
      pic: require('../../../../Categories/assets/rose.jpg'),
      Label: "Name",
      name: 'PrabhJot Singh',
      Labell: 'FrinchiesSeller:',
      franchiesBuyer: 'First Seller'
    },
    {
      id: '4',
      pic: require('../../../../Categories/assets/rose.jpg'),
      Label: "Name",
      name: 'PrabhJot Singh',
      Labell: 'FrinchiesSeller:',
      franchiesBuyer: 'First Seller'
    },
    {
      id: '5',
      pic: require('../../../../Categories/assets/rose.jpg'),
      Label: "Name",
      name: 'PrabhJot Singh',
      Labell: 'FrinchiesSeller:',
      franchiesBuyer: 'First Seller'
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

          <View style={{ flexDirection: 'row', justifyContent: 'center',marginVertical:10 }}>
            <View>
              <Image source={require('../../Luggage/assets/reciver.png')} style={styles.imagejob} />
            </View>
            <View>
              <Text style={styles.moretext}>LUGGAGE{'\n'}RECIVER</Text>
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
                  <Text style={styles.name}>{item.franchiesBuyer}</Text>
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

export default LuggageBuyer

const styles = StyleSheet.create({
  logo: {
    width: '80%',
    height: 80,
    alignSelf: 'center',
    marginTop: 30
  },
  imagejob: {
    height: 50,
    width: 50,
    marginTop: 22,
    marginHorizontal: 10
  },
  moretext: {
    fontSize: 18,
    fontWeight: '500',
    color: '#000000',
    textAlign: 'center',
    marginTop: 25,
  },
  border: {

    borderWidth: 1,
    width: Dimensions.get('window').width * 0.95,
    height: 'auto',
    borderRadius: 5,
    marginHorizontal: 10,
    flexDirection: 'row',
    marginVertical:10
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