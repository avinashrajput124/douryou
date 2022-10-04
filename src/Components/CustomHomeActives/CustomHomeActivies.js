import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView, StatusBar, TouchableOpacity, TextInput, Dimensions } from 'react-native';
import React,{useState} from 'react';
import { Rating } from 'react-native-ratings'

const CustomHomeActivies = ({navigation}) => {

  const [count, setCount] = useState(0);
  const increment = () => {
     if(count<=count){
      setCount(count + 1)
     }
  }
  return (
    <View>
        <View style={styles.Name}>
            <View style={styles.row}>
              <View>
                <TouchableOpacity onPress={ () => navigation.navigate('ProfileDetails')}>
                  <Image source={require('./assets/dp.png')} style={styles.dp} />
                </TouchableOpacity>
              </View>

              <View >
                <TouchableOpacity onPress={ () => navigation.navigate('ProfileDetails')}>
                  <Text style={styles.link}>Eazyvisa Immigration Cusultalt </Text>
                </TouchableOpacity>
                <Text style={styles.address}>Sco-40-41,Sector-34A, Chandigarh</Text>
              </View>
            </View>

           
           <View style={{ flexDirection: 'row' }}>
                <View style={{ flexDirection: 'row', justifyContent:'space-evenly'}}>
                  <View style={{marginLeft:5}}>
                    <TouchableOpacity>
                      <Image source={require('./assets/eye.png')} style={styles.eye} />
                    </TouchableOpacity>
                  </View>
                  

                   
                  <View style={{flexDirection:'row'}}>
                    <TouchableOpacity onPress={() => increment()}>
                      <View>
                         <Image source={require('./assets/like.png')} style={styles.like} />
                      </View>
                    </TouchableOpacity>
                    <View style={{marginLeft:10,marginTop:10,width:'30%'}}>
                          <Text>{count}</Text>
                        </View>
                  </View>

                </View>
                <View style={{ flexDirection: 'row',justifyContent:'flex-end', marginLeft:90 }}>
                   <TouchableOpacity>
                      <Image source={require('./assets/like.png')} style={styles.like}/>
                   </TouchableOpacity>
                   <TouchableOpacity>
                      <Image source={require('./assets/message.png')} style={styles.message}/>
                   </TouchableOpacity>
                   <TouchableOpacity>
                      <Image source={require('./assets/share.png')} style={styles.share}/>
                   </TouchableOpacity>
                </View>
              </View>
        

            <View style={styles.bar}>
              <TouchableOpacity>
                <View>
                  <Text style={styles.professional}>  Professional </Text>
                </View>
              </TouchableOpacity>


              <View style={{ marginLeft: 10, marginTop: 6 }}>
                <Rating
                  ratingColor='#EFD757'
                  ratingCount={5}
                  imageSize={20}
                  tintColor="#D1070A"
                />
              </View>
            </View>
          </View>
    </View>
  )
}

export default CustomHomeActivies

const styles = StyleSheet.create({
    Name: {
        height:'auto',
        // width: '98%',
        width:Dimensions.get('window').width*0.97,
        borderWidth: 1,
        marginTop: 10,
        marginHorizontal: 5,
        borderRadius: 6,
        borderColor:'#000000'
      },
      row: {
        marginTop: 10,
        flexDirection: 'row',
      },
      dp: {
        width: 85,
        height: 85,
        borderRadius: 12,
        marginHorizontal: 7
      },
      link: {
        fontWeight: '400',
        fontSize: 17,
        color: '#040271',
        marginVertical: 2,
        width:Dimensions.get('window').width*0.60
      },
      address: {
        fontWeight: '400',
        fontSize: 16,
        color: '#000',
        marginTop: 10,
        width:Dimensions.get('window').width*0.60
      },
      bar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#D1070A',
        padding: 10,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        marginTop:-5
      },
      professional: {
        fontSize: 20,
        fontWeight: '500',
        color: '#EFD757',
        fontStyle: 'italic',
    
      },
      listboarder: {
        borderWidth: 1,
        height: 53,
        width: '98%',
        marginHorizontal: 5,
        marginVertical: 10,
        borderRadius: 10,
        padding: 8
      },
      icon: {
        height: 36,
        width: 36,
        marginHorizontal: 10
      },
      text: {
        fontSize: 17,
        fontWeight: '500',
        color: '#000000',
        marginTop: 5,
    
      },
      boder: {
        borderWidth: 1,
        width: '98%',
        height: 163,
        marginHorizontal: 5,
        marginVertical: 10,
        borderRadius: 10,
        padding: 8,
        borderColor: '#000000'
      },
      Flex: {
        flexDirection: 'row',
        justifyContent: 'center'
      },
      Pic: {
        height: 36,
        width: 36,
      },
      Text: {
        fontSize: 17,
        fontWeight: '500',
        color: '#000000',
        marginHorizontal: 20,
        marginVertical: 5
      },
      Flex2: {
        flexDirection: 'row',
        marginHorizontal: 10,
        marginVertical: 20
      },
      dppic: {
        height: 82,
        width: 82,
        borderRadius: 5,
      },
      input: {
        marginHorizontal: 10,
      },
      profile: {
        color: '#000000',
        fontSize: 17,
        fontWeight: '400'
      },
      Boder: {
        height: 618,
        width: '98%',
        borderWidth: 1,
        borderColor: '#000000',
        marginHorizontal: 5,
        marginVertical: 10,
        borderRadius: 10,
      },
      FLEX: {
        flexDirection: 'row',
        marginVertical: 30,
        justifyContent: 'space-around'
      },
      iconn: {
        height: 34,
        width: 31
      },
      box: {
        height: 118,
        width: 118,
        borderWidth: 1,
      },
      lsatborder:{
        borderWidth:1,
        height:40,
        marginHorizontal: 5,
        marginVertical: 10,
        borderRadius: 10,
        padding:2,
        marginBottom:30
    
      },
      eye: {
        height: 15,
        width: 21,
        marginLeft:9,
        marginTop:10
      },
      like: {
        height: 21,
        width: 21,
        marginLeft:70,
        marginTop:7
      },
      share:{
        height:16,
        width:15,
        marginLeft:15,
        marginTop:9,
        margin:20
      },
      message:{
        height: 20,
        width: 21,
       marginLeft:20,
       marginTop:8
      },
})
