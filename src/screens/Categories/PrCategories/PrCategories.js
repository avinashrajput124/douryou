import { StyleSheet, Text, View, Image, ScrollView, StatusBar, TouchableOpacity, } from 'react-native';
import React from 'react'

const PrCategories = ({ navigation }) => {
  return (
    <>
      <StatusBar
        backgroundColor="#D1070A"
        barStyle={'light-content'} />

      <ScrollView style={styles.container}>
        <View>
          <View style={styles.dor}>
            <Image source={require('../assets/logo.png')}
              style={styles.mainlogo} />
          </View>

          <View style={styles.pas}>
            <Image source={require('../assets/prmeter.png')} style={styles.pasimage} />
            <Text style={styles.pastext}>Check Your PR Score</Text>
          </View>

          <View style={styles.contenthold}>
            <TouchableOpacity style={styles.touch} onPress={() => navigation.navigate('Consultant')}>
              <View>
                <Image source={require('../assets/prform.png')} style={styles.ieltsimage} />
              </View>
              <View>
                <Text style={styles.textonly}>Checking from Consultants</Text>
              </View>
            </TouchableOpacity>
          </View>


          <View style={styles.contenthold}>
            <TouchableOpacity style={styles.touch} onPress={() => navigation.navigate('Canada')}>
              <View>
                <Image source={require('../assets/canada.png')} style={styles.ieltsimage} />
              </View>
              <View>
                <Text style={styles.textonly}>Canada</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.contenthold}>
            <TouchableOpacity style={styles.touch} onPress={() => navigation.navigate('Usa')}>
              <View>
                <Image source={require('../assets/usa.png')} style={styles.ieltsimage} />
              </View>
              <View>
                <Text style={styles.textonly}>USA</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.contenthold}>
            <TouchableOpacity style={styles.touch} onPress={() => navigation.navigate('UK')}>
              <View>
                <Image source={require('../assets/uk.png')} style={styles.ieltsimage} />
              </View>
              <View>
                <Text style={styles.textonly}>UK</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.contenthold}>
            <TouchableOpacity style={styles.touch} onPress={() => navigation.navigate('Australia')}>
              <View>
                <Image source={require('../assets/aus.png')} style={styles.ieltsimage} />
              </View>
              <View>
                <Text style={styles.textonly}>Australia</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.contenthold}>
            <TouchableOpacity style={styles.touch} onPress={() => navigation.navigate('NewZealand')}>
              <View>
                <Image source={require('../assets/nz.png')} style={styles.ieltsimage} />
              </View>
              <View>
                <Text style={styles.textonly}>New-Zealand</Text>
              </View>
            </TouchableOpacity>
          </View>

        <View style={{marginTop:30}}>
          <Text style={{marginTop:30}}></Text>
        </View>

        </View>

      </ScrollView>

    </>
  )
}

export default PrCategories

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainlogo: {
    width: '80%',
    height: 80,
    alignSelf: 'center',
    marginTop: 20,
  },
  pas: {
    alignItems: 'center',
    height: 30,
    width: "100%",
    flexDirection: 'row',
    justifyContent: "center",
    marginVertical: 20,
  },
  pasimage: {
    height: 49,
    width: 55,
  },
  pastext: {
    fontSize: 16,
    fontWeight: "500",
    color: '#000',
    lineHeight: 30,
    marginLeft: 20,
  },
  contenthold: {
    height: 90,
    width: "97%",
    borderWidth: 1,
    borderColor: "#A6A6A6",
    borderRadius: 22,
    marginLeft: 5,
    // marginTop: 5,
    marginVertical:2,
    alignItems: "center",
    justifyContent: "center",
  },
  touch: {
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  ieltsimage: {
    height: 68,
    width: 72,
    marginRight: 10,
  },
  textonly: {
    width: 122,
    textAlign: "center",
    fontSize: 16,
    color: "#000000",
    lineHeight: 22,
    fontWeight: "500",
  },
})