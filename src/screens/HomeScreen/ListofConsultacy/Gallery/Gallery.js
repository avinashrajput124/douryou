import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, } from 'react-native'
import React,{useState}from 'react'
import { Rating, } from 'react-native-ratings';

const Gallery = () => {
    const [color, setColor] = useState(-1)

  return (
    <ScrollView style={{flex:1,backgroundColor:'#fff'}}>
      <View style={styles.main}>
        <View style={styles.publishText}>
            <View>
                <Image source={require('../../ListofConsultacy/ConsultacydetailPage/assets/img.png')} style={styles.img} />
            </View>
            <View>
                <Text style={styles.company}> Freedom worldwind</Text>
                <Text style={styles.addres}> Mohali</Text>
            </View>
            <View style={{ marginLeft: 20 }}>
                <Rating
                    type='custom'
                    ratingColor='#EFD757'
                    // starContainerStyle={{backgroundColor:'#000'}}
                    ratingCount={5}
                    imageSize={20}
                    style={{ paddingVertical: 10, marginHorizontal: 15, }} />
            </View>

            <TouchableOpacity>
                <View style={styles.Imgphn}>
                    <Image source={require('../../ListofConsultacy/ConsultacydetailPage/assets/msg.png')} style={styles.share} />
                </View>
            </TouchableOpacity>

            <TouchableOpacity>
                <View style={styles.Imgmassage}>
                    <Image source={require('../../ListofConsultacy/ConsultacydetailPage/assets/msg.png')} style={styles.massage} />
                </View>
            </TouchableOpacity>

        </View>

        <View style={{ borderBottomColor: '#808080', borderBottomWidth: 1, marginHorizontal: 20 }}></View>

        <View style={styles.title}>
            <Text style={styles.titletext}> About us</Text>
        </View>
        <View style={styles.title}>
            <Text style={styles.titletext2}> Contact person and details</Text>
        </View>

        <View style={styles.publishText}>
            <View>
                <Image source={require('../../ListofConsultacy/ConsultacydetailPage/assets/img.png')} style={styles.img2} />
            </View>

            <View style={{ flexDirection: 'row', }}>
                <View>
                    <Text style={styles.company}>Anoop Gupta</Text>
                    <Text style={styles.addres}> 98565242523</Text>
                </View>
                <View style={{ marginLeft: '50%', marginTop: 20 }}>
                    <Text>CEO</Text>
                </View>
            </View>

        </View>

        <View style={{ borderBottomColor: '#808080', borderBottomWidth: 1, marginHorizontal: 20 }}></View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10, marginTop: 20, padding: 10 }}>
            <TouchableOpacity onPress={() => setColor(1)}>
                <View>
                    <Text style={{ color: color == '1' ? '#D1070A' : null }}>Previous Ads</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setColor(2)}>
                <View>
                    <Text style={{ color: color == '2' ? '#D1070A' : null }}>Certificates</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setColor(3)}>
                <View>
                    <Text style={{ color: color == '3' ? '#D1070A' : null }}>Gallery</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setColor(4)}>
                <View>
                    <Text style={{ color: color == '4' ? '#D1070A' : null }}>Reviews</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setColor(5)}>
                <View>
                    <Text style={{ color: color == '5' ? '#D1070A' : null }}>Results</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setColor(6)}>
                <View>
                    <Text style={{ color: color == '6' ? '#D1070A' : null }}>Interview</Text>
                </View>
            </TouchableOpacity>
        </View>

        <View style={{flexDirection:'row',justifyContent:'space-evenly',marginVertical:10}}>
            <TouchableOpacity>
            <View>
              <Image source={require('../../ListofConsultacy/ConsultacydetailPage/assets/img.png')} style={styles.flatimg} />
            </View>
            </TouchableOpacity>
              
            <TouchableOpacity>
            <View>
              <Image source={require('../../ListofConsultacy/ConsultacydetailPage/assets/img.png')} style={styles.flatimg} />
            </View>
            </TouchableOpacity>
        </View>

        <View style={{flexDirection:'row',justifyContent:'space-evenly',marginVertical:10}}>
        <TouchableOpacity>
            <View>
              <Image source={require('../../ListofConsultacy/ConsultacydetailPage/assets/img.png')} style={styles.flatimg} />
            </View>
            </TouchableOpacity>  
            <TouchableOpacity>
            <View>
              <Image source={require('../../ListofConsultacy/ConsultacydetailPage/assets/img.png')} style={styles.flatimg} />
            </View>
            </TouchableOpacity>
        </View>

        <View style={{flexDirection:'row',justifyContent:'space-evenly',marginVertical:10}}>
        <TouchableOpacity>
            <View>
              <Image source={require('../../ListofConsultacy/ConsultacydetailPage/assets/img.png')} style={styles.flatimg} />
            </View>
            </TouchableOpacity>  
            <TouchableOpacity>
            <View>
              <Image source={require('../../ListofConsultacy/ConsultacydetailPage/assets/img.png')} style={styles.flatimg} />
            </View>
            </TouchableOpacity>
        </View>
        
       
        </View>
    </ScrollView>
  )
}

export default Gallery

const styles = StyleSheet.create({
    main: {
        marginTop: 30,
        backgroundColor:'#fff',
       flex:1
    },
    publishText: {
        borderRadius: 20,
        padding: 10,
        flexDirection: 'row',
        marginHorizontal: 10,
        marginVertical: 5
    },
    img: {
        width: 70,
        height: 70,
        borderRadius: 10,
    },
    company: {
        marginTop: 5,
        color: '#000000',
        fontSize: 18,
        fontWeight: '400',
        marginLeft: 10
    },
    addres: {
        fontSize: 12,
        fontWeight: '400',
        color: '#000000',
        marginLeft: 10
    },
    Imgphn: {
        backgroundColor: '#3B5998',
        marginTop: 40,
        height: 35,
        width: 35,
        borderRadius: 999,
        position: 'relative',
        right: 100
    },
    Imgmassage: {
        marginTop: 40,
        height: 35,
        width: 35,
        borderRadius: 999,
        backgroundColor: '#983B84',
        position: 'relative',
        right: 90,
    },
    share: {
        width: 14,
        height: 15,
        margin: 10,
    },
    massage: {
        width: 14,
        height: 14,
        margin: 11,
    },
    title: {
        marginHorizontal: 20,
        marginTop: 10
    },
    titletext: {
        fontSize: 20,
        fontWeight: '600',
        color: '#000000'
    },
    titletext2: {
        fontSize: 20,
        fontWeight: '500',
        color: '#000000'
    },
    img2: {
        width: 60,
        height: 60,
        borderRadius: 10,
    },
   
   flatimg:{
    height:140,
    width:180,
    borderRadius:10
   },
    
})