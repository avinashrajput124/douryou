import { StyleSheet, SafeAreaView, Text, View, TextInput, Image } from 'react-native'
import React from 'react'

const Support = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, marginTop: 20 }}>
      <View>
        <View style={styles.title}>
          <Text style={{ fontSize: 20, fontWeight: '600', color: '#000000' }}> Contact us</Text>
        </View>

        <View >
          <View style={styles.maininput}>
            <Image source={require('../../Screen/Support/assets/www.png')} style={styles.icon}  />
            <TextInput placeholder='https://google.com' style={{ fontSize: 20, paddingHorizontal: 5, }} />
          </View>

          <View style={styles.maininput}>
            <Image source={require('../../Screen/Support/assets/mail.png')} style={styles.icon} />
            <TextInput placeholder='https://google.com' style={{ fontSize: 20, paddingHorizontal: 15, }} />
          </View>

          <View style={styles.maininput}>
            <Image source={require('../../Screen/Support/assets/loction.png')} style={styles.icon}  />
            <TextInput placeholder='https://google.com' style={{ fontSize: 20, paddingHorizontal: 15, }} />
          </View>

          <View style={styles.maininput}>
            <Image source={require('../../Screen/Support/assets/whatsapp.png')} style={styles.icon}  />
            <TextInput placeholder='https://google.com' style={{ fontSize: 20, paddingHorizontal: 15, }} />
          </View>

          <View style={styles.title}>
            <Text style={{ fontSize: 20, fontWeight: '600', color: '#000000' }}> Follow us</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Support

const styles = StyleSheet.create({
  title:{
    marginHorizontal:20,
    marginTop:20,
  },
  maininput:{
     backgroundColor: '#F6F5F5',
      marginHorizontal: 20, 
      marginTop: 10,
       borderRadius: 10,
        flexDirection: 'row',
        padding:10
  },
  icon:{
    width: 30,
     height: 30,
      marginHorizontal: 10,
       marginTop: 8 ,
  },
})