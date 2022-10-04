import { StyleSheet, SafeAreaView, Text, View, FlatList, Image, TouchableOpacity, Button, Pressable, Dimensions } from 'react-native'
import React, { useState, useEffect } from 'react'


const CustomFlatList = ({ navigation }) => {

  const [data, setData] = useState([]);
  const [favselect, setFavSelect] = useState(true)
  const [favselects, setFavSelects] = useState(true)

  useEffect(() => {
    fetch('https://douryouweb.herokuapp.com/douryou-user/all-seller-todays-deals-list/')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  const [videocount, setVideoCount] = useState(0);
  const increment = () => {
    if (videocount <= videocount) {
      setVideoCount(videocount + 1)
    }
  }
  const [likecount, setLikeCount] = useState(0);
  const increments = () => {
    if (likecount <= likecount) {
      setLikeCount(likecount + 1)
    }
  }

  // const Offer= [PORFENSSIONAL_Plan,BUSINESS_Plan,ULTIMATE_Plan]

  //  console.log({todaysdeals.PORFENSSIONAL_Plan},'Plan')
  // const Plan = []

  // if(PORFENSSIONAL_Plan==true){
  //  Offer.append('PORFENSSIONAL_Plan')
  // }else if(BUSINESS_Plan==true){
  //   Offer.append('BUSINESS_Plan')
  // }
  // else if(ULTIMATE_Plan==true){
  //   Offer.append('ULTIMATE_Plan')
  // }


  return (

    <SafeAreaView>
      <View style={styles.container}>

        <FlatList
          // horizontal
          showsHorizontalScrollIndicator={false}
          data={data.todaysdeals}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (

            <View style={styles.Name}>

              <View style={{ marginRight: 10 }}>
                <View style={styles.heart}>
                  <TouchableOpacity onPress={() => setFavSelect(!favselect)}>
                    {favselect ?
                      (
                        <Image source={require('../CustomFlatList/assets/Favorite.png')} tintColor='#000' style={styles.partOneIcon} />
                      )
                      :
                      (
                        <Image source={require('../CustomFlatList/assets/Favorite.png')} style={styles.partOneIcon} />
                      )
                    }
                  </TouchableOpacity>
                </View>

              </View>

              <TouchableOpacity onPress={() => increment()}>
                <Image source={{ uri: 'https://img.etimg.com/thumb/msid-82178247,width-300,imgsize-1209426,,resizemode-4,quality-100/1.jpg' }}
                  style={{
                    height: 397, width: '100%', borderTopRightRadius: 16,
                    borderTopLeftRadius: 16,
                  }} />
              </TouchableOpacity>

              <View style={styles.bar}>

                <TouchableOpacity>
                  <View>
                    <Text style={styles.offer}>{item.from_compny_profile.CompanyName} </Text>
                  </View>
                </TouchableOpacity>

              </View>


              <View style={styles.dpaddres}>

                <View>
                  <TouchableOpacity onPress={() => navigation.navigate('AdsActivityPremium')}>
                    <Image source={{ uri: 'UploadAdsPhoto' }} style={styles.dp} />
                  </TouchableOpacity>
                </View>

                <View style={{ marginVertical: 5, marginHorizontal: 5 }}>
                  <Text style={styles.company}>{item.from_compny_profile.CompanyName}</Text>
                  <TouchableOpacity>
                    <Text style={styles.link}>{item.from_compny_profile.CompanyWebsiteLink}</Text>
                  </TouchableOpacity>
                  <Text style={styles.address}>{item.from_compny_profile.CompanyAddress}</Text>
                </View>

              </View>

              <View style={{ flexDirection: 'row',justifyContent:'space-evenly' }}>

                <View style={{flexDirection:'row'}}>

                  <View>
                    <Image source={require('../CustomFlatList/assets/eye.png')} style={styles.eye} />
                  </View>
                  <View style={styles.viewcount}>
                    <Text >{videocount}</Text>
                  </View>

                  <View style={{ flexDirection: 'row' }}>
                   
                   <View>
                     <Image source={require('../CustomFlatList/assets/thumb.png')} style={styles.like} />
                   </View>
             
                   <View style={styles.viewcount}>
                     <Text >{likecount}</Text>
                   </View>
                 </View>
                 
                </View>
                  
                <View style={{ flexDirection: 'row' }}>
                  <TouchableOpacity onPress={() => increments()}>
                    <Image source={require('../CustomFlatList/assets/thumb.png')} style={styles.thum} />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image source={require('../CustomFlatList/assets/message.png')} style={styles.message} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={async () => {
                    await share();
                  }}>
                    <Image source={require('../CustomFlatList/assets/share.png')} style={styles.share} />
                  </TouchableOpacity>
                </View>

              </View>

            
            </View>

        
           
          )}
        >
        </FlatList>

            <View>
              <Text style={{marginVertical:30}}></Text>
              </View>

      </View>
    </SafeAreaView>

  )
}
export default CustomFlatList

const styles = StyleSheet.create({
  stars: {
    backgroundColor: 'red'
  },
  container: {
    margin: 9,
  },
  Name: {
    borderWidth: 1,
    height: 'auto',
    width: Dimensions.get('window').width * 0.95,
    borderRadius: 19,
    borderColor: '#999999',
    marginVertical:10
  },
  partOneIcon: {
    height: 25,
    width: 25,
    margin: 8,
  },
  heart: {
    position: 'absolute',
    zIndex: 1,
    alignSelf: 'flex-end',
    backgroundColor: '#fff',
    borderRadius: 15,
     margin: 4,
  },
  img: {
    height: 199,
    width: '100%',
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
    position: 'reletive',
    zIndex:-1,
    overflow: 'hidden'
  },
  bar: {
    flexDirection:'row',
    justifyContent:'space-around',
    backgroundColor:'#D1070A',
    marginTop: 2
  },
  offer: {
    fontSize: 15,
    fontWeight:'400',
    color:'#EFD757',
    fontStyle:'italic',
    marginTop:5
  },
  dpaddres: {
    marginTop: 5,
    flexDirection: 'row'
  },
  dp: {
    height: 90,
    width: 90,
    marginHorizontal: 10,
    borderRadius: 8,
    marginVertical: 3,
  },
  company: {
    fontWeight: '600',
    fontSize: 20,
    color: '#000',
    marginVertical: 1,
    width: Dimensions.get('window').width * 0.70
  },
  link: {
    fontWeight: '500',
    fontSize: 16,
    color: '#040271',
    marginVertical: 2,
    width: Dimensions.get('window').width * 0.70
  },
  address: {
    fontSize: 15,
    fontWeight: '500',
    color: '#000',
    width: Dimensions.get('window').width * 0.70
  },
  viewcount: {
    marginLeft:1,
    marginTop: 8,
    width: Dimensions.get('window').width /4,
    // width: Dimensions.get('window').width * 0.2,
  },
  eye: {
    height: 15,
    width: 21,
    margin: 10,
    // marginLeft:30
  },
  like: {
    height: 19,
    width: 21,
    margin: 7,
    marginLeft:-20
  },
  share: {
    height: 17,
    width: 15,
    marginTop: 8,
    margin: 20,
    marginLeft: 20
  },
  thum: {
    height: 20,
    width: 22,
    marginTop: 6,
    marginRight: 9

  },
  message: {
    height: 20,
    width: 21,
    marginLeft: 12,
    marginTop: 6
  },

})