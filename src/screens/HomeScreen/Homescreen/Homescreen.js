import { StyleSheet, ScrollView, number, Text, View, TouchableOpacity, Image, TextInput, FlatList, Modal, Buttons, Dimensions } from 'react-native'
import React, { useState, useEffect } from 'react';
import HomeCategories from '../../Categories/HomeCategories/HomeCategories';
import CustomCanadaVisa from '../../../Components/CustomCanadaVisa/CustomCanadaVisa';
import CustomNavBar from '../../../Components/CustomNavBar/CustomNavBar';
import CustomFlatList from '../../../Components/CustomFlatList/CustomFlatList';
import CustomListSecond from '../../../Components/CustomListSecond/CustomListSecond';
import CustomListThird from '../../../Components/CustomListThird/CustomListThird';
// import PrabhNavigation from '../../../Navigate/PrabhNavigation/PrabhNavigation';


const Homescreen = ({ navigation }) => {

  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);

  const increment = () => {
    if (count <= count) {
      setCount(count + 1)
    }
  }
  const bell = () => {
    if (count1 <= count1) {
      setCount1(count1 + 1)
    }
  }

  return (
    <>
      <View style={{ backgroundColor: '#fff' }}>
        <View style={styles.navbar}>
          <View>
            <Image source={require('../../HomeScreen/assets/logoname.png')} style={styles.Logo} />
          </View>
          <View style={{ flexDirection: 'row', padding: 5, justifyContent: 'space-around' }}>

            <View style={styles.SearchBtn}>
              <TouchableOpacity onPress={() => navigation.navigate('SearchScreen')}>
                <Image source={require('../../HomeScreen/assets/search.png')} style={styles.search} />
              </TouchableOpacity>
            </View>

            <View>

              <TouchableOpacity onPress={() => increment()}>
                <Image source={require('../../HomeScreen/assets/chat1.png')} style={styles.message} />
                <View>
                  <View style={{ backgroundColor: '#D1070A', borderRadius: 999, height: 17, width: 17, position: 'absolute', marginTop: -30, marginLeft: 29 }}>
                    <Text style={{ color: '#fff', textAlign: 'center', marginTop: -1, fontWeight: '400' }}>{count}</Text>
                  </View>
                </View>
              </TouchableOpacity>

            </View>

            <View>
              <TouchableOpacity onPress={() => bell()}>
                <Image source={require('../../HomeScreen/assets/bell.png')} style={styles.bell} />
                <View>
                  <View style={{ backgroundColor: '#D1070A', borderRadius: 999, height: 17, width: 17, position: 'absolute', marginTop: -31, marginLeft: 23 }}>
                    <Text style={{ color: '#fff', textAlign: 'center', marginTop: -1, fontWeight: '400' }}>{count1}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>

          </View>
        </View>
      </View>

      <ScrollView style={{ flex: 0.1, backgroundColor: "#fff" }}>

        <View style={{ backgroundColor: "#fff" }}>


          <View style={styles.dppostlike}>
            <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')}>
              <View >
                <Image source={require('../../HomeScreen/Homescreen/assets/rose.jpg')} style={styles.dp} />
              </View>
            </TouchableOpacity>
            <View style={styles.postreq}>
              <TouchableOpacity onPress={() => navigation.navigate('Post')}>
                <View style={styles.input} >
                  <Text style={{ fontSize: 15, marginTop: 13, paddingLeft: 10 }}>Post your Requirements.....</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity onPress={() => navigation.navigate('Favourites')}>
                <Image source={require('../../HomeScreen/assets/fav.png')} style={styles.heart} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.Browse}>
            <Text style={styles.browse}> Browse Categories </Text>
          </View>

          {/* (navigation)=>{navigation} navigation={navigation}*/}
          <HomeCategories navigation={navigation} />

          <View>
            <View style={styles.Post}>
              <Text style={styles.post}>Douryou TV</Text>
            </View>
            <CustomFlatList navigation={navigation} />
          </View>

          <View>
            <View style={styles.Post2}>
              <Text style={styles.post}>Premium Offers of you</Text>
            </View>
            <CustomListSecond navigation={navigation} />
          </View>

          <View>
            <View style={styles.Post3}>
              <Text style={styles.post}>Latest Deals for you</Text>
            </View>
            <CustomListThird navigation={navigation} />
          </View>

        </View>
      </ScrollView>

    </>

  )
}
export default Homescreen

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    marginHorizontal: 20,
    height: 50,
  },
  Logo: {
    color: '#D1070A',
    marginTop: 5,
    height: 44,
    width: 155
  },
  message: {
    height: 26,
    width: 27,
    marginTop: 13,
    marginHorizontal: 10,
    position: 'relative'
  },
  bell: {
    height: 30,
    width: 25,
    marginTop: 10,
    marginHorizontal: 7,
  },
  dppostlike: {
    flexDirection: 'row',
    marginHorizontal:10,
    marginTop: 20
  },
  postreq: {
    width: Dimensions.get('window').width * 0.65,
    marginLeft: 10,
    margin:5
  },
  input: {
    borderWidth: 1,
    fontWeight: '400',
    paddingHorizontal: 2,
    borderRadius: 10,
    height: 50
  },
  dp: {
    borderRadius: 5,
    width:58,
    height: 58,
  },
  heart: {
    width: 55,
    height: 55,
    
  },
  search: {
    height: 40,
    width: 40,
    marginTop: 9,
    // marginHorizontal: 8,
  },
  Browse: {
    marginVertical: 10,
  },
  browse: {
    color: '#000000',
    fontSize: 20,
    fontWeight: '500',
    marginHorizontal: 4,
  },
  Post: {
    marginTop: 10,
    backgroundColor: '#D1070A',
    // width: Dimensions.get('window').width * 0.4,
    width: '38%',
    borderRadius: 8,
    padding: 8,
    marginLeft: 10,
  },
  Post2: {
    marginTop: 20,
    backgroundColor: '#D1070A',
    // width: Dimensions.get('window').width * 0.6,
    width: '65%',
    borderRadius: 10,
    padding: 8,
    marginLeft: 10,
  },
  Post3: {
    marginTop: 20,
    backgroundColor: '#D1070A',
    // width: Dimensions.get('window').width * 0.5,
    width: '60%',
    borderRadius: 10,
    padding: 8,
    marginLeft: 10,
  },
  post: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  }, 
  iconbar: {
    flexDirection: 'row',
    backgroundColor: '#F6F5F5',
    padding: 13,
    justifyContent: 'space-between',
    marginHorizontal: 25,
    borderRadius: 12,
    bottom: 20
  },
  icons: {
    height: 24,
    width: 29,
  },
  iconperson: {
    height: 23,
    width: 20,
  },
  container: {
    marginTop: 20
  },
  Name: {
    borderWidth: 1,
    height: 180,
    width: 250,
    marginHorizontal: 10,
    borderRadius: 10,
    borderColor: '#999999',
    padding: 1,
  },
  imgg: {
    height: 100,
    width: '100%',
    borderRadius: 10
  },
  imgg2: {
    height: 177,
    width: '100%',
    borderRadius: 10
  },
  company: {
    fontSize: 19,
    fontWeight: '400',
    color: '#000000',
    lineHeight: 20,
    marginVertical: 20,
    color: '#D1070A'
  },
  date: {
    color: '#D1070A'
  },
  ads: {
    width: '110%',
    height: 150,
    borderRadius: 10,
  },
  main: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 7,
    height: 50
  },
  nav: {
    height: 41,
    width: 41
  },
})