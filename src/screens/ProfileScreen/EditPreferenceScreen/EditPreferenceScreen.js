import { StyleSheet, SafeAreaView, ScrollView, StatusBar, View, Text, Pressable, TouchableOpacity,Image} from 'react-native'
import React , {useState} from 'react'

const EditPreferenceScreen = () => {

    const [radio, setRadio] = useState({
        radio1: false,
        radio2: false,
        radio3: false,
        radio4: false,
        radio5: false,
        radio6: false,
        radio7: false,
        radio8: false,
        radio9: false,
        radio10: false,
        radio11: false,
        radio12: false,
        radio13: false,
        radio14: false,
        radio15: false,
        radio16: false,
        radio17: false,
        radio18: false,
        radio19: false,
      });

  return (
    <>
    <StatusBar backgroundColor="#D1070A" barStyle="light-content" />
      <ScrollView style={styles.container}>
        <View>
          <View style={styles.main}>
            <View>
              <Image source={require('../../LoginFlow/assets/logo.png')} style={styles.logo} />
            </View>

          </View>
          <View style={styles.top}>
            <Text style={styles.toptext}> Why you want to join us?</Text>
          </View>
          <View style={styles.prbtn}>
            <Pressable onPress={() =>
              setRadio({
                radio1: true, radio2: false, radio3: false, radio4: false, radio5: false, radio6: false, radio7: false, radio8: false, radio9: false,
                radio10: false, radio11: false, radio12: false, radio13: false, radio14: false, radio15: false, radio16: false, radio17: false, radio18: false,
              })}
              style={styles.pr}>
              <View style={styles.out}>
                {radio.radio1 &&
                  <View style={styles.in}>
                  </View>}
              </View>
              <Text style={styles.name}>IELTS</Text>
            </Pressable>

            <Pressable onPress={() =>
              setRadio({
                radio1: false, radio2: true, radio3: false, radio4: false, radio5: false, radio6: false, radio7: false, radio8: false, radio9: false,
                radio10: false, radio11: false, radio12: false, radio13: false, radio14: false, radio15: false, radio16: false, radio17: false, radio18: false,
              })}
              style={styles.pr}>
              <View style={styles.out}>
                {radio.radio2 &&
                  <View style={styles.in}>
                  </View>}
              </View>
              <Text style={styles.name}>Passport</Text>
            </Pressable>

            <Pressable onPress={() =>
              setRadio({
                radio1: false, radio2: false, radio3: true, radio4: false, radio5: false, radio6: false, radio7: false, radio8: false, radio9: false,
                radio10: false, radio11: false, radio12: false, radio13: false, radio14: false, radio15: false, radio16: false, radio17: false, radio18: false,
              })}
              style={styles.pr}>
              <View style={{ flexDirection: 'row' }}>
                <View style={styles.out}>
                  {radio.radio3 &&
                    <View style={styles.in}>
                    </View>}
                </View>
                <Text style={styles.name}>Study Visa</Text>
              </View>
            </Pressable>

            <Pressable onPress={() =>
              setRadio({
                radio1: false, radio2: false, radio3: false, radio4: true, radio5: false, radio6: false, radio7: false, radio8: false, radio9: false,
                radio10: false, radio11: false, radio12: false, radio13: false, radio14: false, radio15: false, radio16: false, radio17: false, radio18: false,
              })}
              style={styles.pr}>
              <View style={{ flexDirection: 'row' }}>
                <View style={styles.out}>
                  {radio.radio4 &&
                    <View style={styles.in}>
                    </View>}
                </View>
                <Text style={styles.name}>Education Loan</Text>
              </View>
            </Pressable>
            <Pressable onPress={() =>
              setRadio({
                radio1: false, radio2: false, radio3: false, radio4: false, radio5: true, radio6: false, radio7: false, radio8: false, radio9: false,
                radio10: false, radio11: false, radio12: false, radio13: false, radio14: false, radio15: false, radio16: false, radio17: false, radio18: false,
              })}
              style={styles.pr}>
              <View style={{ flexDirection: 'row' }}>
                <View style={styles.out}>
                  {radio.radio5 &&
                    <View style={styles.in}>
                    </View>}
                </View>
                <Text style={styles.name}>Air Ticket</Text>
              </View>
            </Pressable>
            <Pressable onPress={() =>
              setRadio({
                radio1: false, radio2: false, radio3: false, radio4: false, radio5: false, radio6: true, radio7: false, radio8: false, radio9: false,
                radio10: false, radio11: false, radio12: false, radio13: false, radio14: false, radio15: false, radio16: false, radio17: false, radio18: false,
              })}
              style={styles.pr}>
              <View style={{ flexDirection: 'row' }}>
                <View style={styles.out}>
                  {radio.radio6 &&
                    <View style={styles.in}>
                    </View>}
                </View>
                <Text style={styles.name}>Travel Insurance</Text>
              </View>
            </Pressable>
            <Pressable onPress={() =>
              setRadio({
                radio1: false, radio2: false, radio3: false, radio4: false, radio5: false, radio6: false, radio7: true, radio8: false, radio9: false,
                radio10: false, radio11: false, radio12: false, radio13: false, radio14: false, radio15: false, radio16: false, radio17: false, radio18: false,
              })}
              style={styles.pr}>
              <View style={{ flexDirection: 'row' }}>
                <View style={styles.out}>
                  {radio.radio7 &&
                    <View style={styles.in}>
                    </View>}
                </View>
                <Text style={styles.name}>Money Exchange</Text>
              </View>
            </Pressable>
            <Pressable onPress={() =>
              setRadio({
                radio1: false, radio2: false, radio3: false, radio4: false, radio5: false, radio6: false, radio7: false, radio8: true, radio9: false,
                radio10: false, radio11: false, radio12: false, radio13: false, radio14: false, radio15: false, radio16: false, radio17: false, radio18: false,
              })}
              style={styles.pr}>
              <View style={{ flexDirection: 'row' }}>
                <View style={styles.out}>
                  {radio.radio8 &&
                    <View style={styles.in}>
                    </View>}
                </View>
                <Text style={styles.name}>Transport</Text>
              </View>
            </Pressable>
            <Pressable onPress={() =>
              setRadio({
                radio1: false, radio2: false, radio3: false, radio4: false, radio5: false, radio6: false, radio7: false, radio8: false, radio9: true,
                radio10: false, radio11: false, radio12: false, radio13: false, radio14: false, radio15: false, radio16: false, radio17: false, radio18: false,
              })}
              style={styles.pr}>
              <View style={{ flexDirection: 'row' }}>
                <View style={styles.out}>
                  {radio.radio9 &&
                    <View style={styles.in}>
                    </View>}
                </View>
                <Text style={styles.name}>Luggage Adujustment</Text>
              </View>
            </Pressable>
            <Pressable onPress={() =>
              setRadio({
                radio1: false, radio2: false, radio3: false, radio4: false, radio5: false, radio6: false, radio7: false, radio8: false, radio9: false,
                radio10: true, radio11: false, radio12: false, radio13: false, radio14: false, radio15: false, radio16: false, radio17: false, radio18: false,
              })}
              style={styles.pr}>
              <View style={{ flexDirection: 'row' }}>
                <View style={styles.out}>
                  {radio.radio10 &&
                    <View style={styles.in}>
                    </View>}
                </View>
                <Text style={styles.name}>Acommodation at Board</Text>
              </View>
            </Pressable>
            <Pressable onPress={() =>
              setRadio({
                radio1: false, radio2: false, radio3: false, radio4: false, radio5: false, radio6: false, radio7: false, radio8: false, radio9: false,
                radio10: false, radio11: true, radio12: false, radio13: false, radio14: false, radio15: false, radio16: false, radio17: false, radio18: false,
              })}
              style={styles.pr}>
              <View style={{ flexDirection: 'row' }}>
                <View style={styles.out}>
                  {radio.radio11 &&
                    <View style={styles.in}>
                    </View>}
                </View>
                <Text style={styles.name}>Jobs at Abroad</Text>
              </View>
            </Pressable>
            <Pressable onPress={() =>
              setRadio({
                radio1: false, radio2: false, radio3: false, radio4: false, radio5: false, radio6: false, radio7: false, radio8: false, radio9: false,
                radio10: false, radio11: false, radio12: true, radio13: false, radio14: false, radio15: false, radio16: false, radio17: false, radio18: false,
              })}
              style={styles.pr}>
              <View style={{ flexDirection: 'row' }}>
                <View style={styles.out}>
                  {radio.radio12 &&
                    <View style={styles.in}>
                    </View>}
                </View>
                <Text style={styles.name}>Tour Travel Package</Text>
              </View>
            </Pressable><Pressable onPress={() =>
              setRadio({
                radio1: false, radio2: false, radio3: false, radio4: false, radio5: false, radio6: false, radio7: false, radio8: false, radio9: false,
                radio10: false, radio11: false, radio12: false, radio13: true, radio14: false, radio15: false, radio16: false, radio17: false, radio18: false,
              })}
              style={styles.pr}>
              <View style={{ flexDirection: 'row' }}>
                <View style={styles.out}>
                  {radio.radio13 &&
                    <View style={styles.in}>
                    </View>}
                </View>
                <Text style={styles.name}>Work Permit</Text>
              </View>
            </Pressable>
            <Pressable onPress={() =>
              setRadio({
                radio1: false, radio2: false, radio3: false, radio4: false, radio5: false, radio6: false, radio7: false, radio8: false, radio9: false,
                radio10: false, radio11: false, radio12: false, radio13: false, radio14: true, radio15: false, radio16: false, radio17: false, radio18: false,
              })}
              style={styles.pr}>
              <View style={{ flexDirection: 'row' }}>
                <View style={styles.out}>
                  {radio.radio14 &&
                    <View style={styles.in}>
                    </View>}
                </View>
                <Text style={styles.name}>Permanent Resident</Text>
              </View>
            </Pressable>

            <Pressable onPress={() =>
              setRadio({
                radio1: false, radio2: false, radio3: false, radio4: false, radio5: false, radio6: false, radio7: false, radio8: false, radio9: false,
                radio10: false, radio11: false, radio12: false, radio13: false, radio14: false, radio15: true, radio16: false, radio17: false, radio18: false,
              })}
              style={styles.pr}>
              <View style={{ flexDirection: 'row' }}>
                <View style={styles.out}>
                  {radio.radio15 &&
                    <View style={styles.in}>
                    </View>}
                </View>
                <Text style={styles.name}>Tourist  busines Visa</Text>
              </View>
            </Pressable>
            <Pressable onPress={() =>
              setRadio({
                radio1: false, radio2: false, radio3: false, radio4: false, radio5: false, radio6: false, radio7: false, radio8: false, radio9: false,
                radio10: false, radio11: false, radio12: false, radio13: false, radio14: false, radio15: false, radio16: true, radio17: false, radio18: false,
              })}
              style={styles.pr}>
              <View style={{ flexDirection: 'row' }}>
                <View style={styles.out}>
                  {radio.radio16 &&
                    <View style={styles.in}>
                    </View>}
                </View>
                <Text style={styles.name}>International Courier</Text>
              </View>
            </Pressable>
            <Pressable onPress={() =>
              setRadio({
                radio1: false, radio2: false, radio3: false, radio4: false, radio5: false, radio6: false, radio7: false, radio8: false, radio9: false,
                radio10: false, radio11: false, radio12: false, radio13: false, radio14: false, radio15: false, radio16: false, radio17: true, radio18: false,
              })}
              style={styles.pr}>
              <View style={{ flexDirection: 'row' }}>
                <View style={styles.out}>
                  {radio.radio17 &&
                    <View style={styles.in}>
                    </View>}
                </View>
                <Text style={styles.name}>Legal Adviser</Text>
              </View>
            </Pressable>
            <Pressable onPress={() =>
              setRadio({
                radio1: false, radio2: false, radio3: false, radio4: false, radio5: false, radio6: false, radio7: false, radio8: false, radio9: false,
                radio10: false, radio11: false, radio12: false, radio13: false, radio14: false, radio15: false, radio16: false, radio17: false, radio18: true,
              })}
              style={styles.pr}>
              <View style={{ flexDirection: 'row' }}>
                <View style={styles.out}>
                  {radio.radio18 &&
                    <View style={styles.in}>
                    </View>}
                </View>
                <Text style={styles.name}>Online IELTS Classes</Text>
              </View>
            </Pressable>
                    
            <Pressable onPress={() =>
              setRadio({
                radio1: false, radio2: false, radio3: false, radio4: false, radio5: false, radio6: false, radio7: false, radio8: false, radio9: false,
                radio10: false, radio11: false, radio12: false, radio13: false, radio14: false, radio15: false, radio16: false, radio17: false, radio18: false,radio19:true
              })}
              style={styles.pr}>
              <View style={{ flexDirection: 'row' }}>
                <View style={styles.out}>
                  {radio.radio18 &&
                    <View style={styles.in}>
                    </View>}
                </View>
                <Text style={styles.name}>Matrimony</Text>
              </View>
            </Pressable>


          </View>
          <View style={styles.btn}>
            <TouchableOpacity style={styles.btnsubmit} >
              <Text style={styles.button}> Save Preference</Text>
            </TouchableOpacity>
          </View>
        </View>

      </ScrollView>
      </>
  )
}

export default EditPreferenceScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        marginTop: StatusBar.currentHeight,
    
      },
      logo: {
        width: "80%",
        height: 80,
        alignSelf: 'center',
       
    },
      top: {
        alignItems: 'center',
    
      },
      toptext: {
        fontWeight: "600",
        fontSize: 20,
        color: "#000000",
      },
      pr: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 2,
      },
      prbtn: {
        margin: 12,
      },
      out: {
        padding: 2,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        borderColor: "#D1070A",
        height: 20,
        width: 20,
        borderWidth: 2,
      },
      in: {
        margin: 2,
        height: 16,
        width: 16,
        backgroundColor: "#D1070A",
        borderWidth: 1,
        borderColor: "#D1070A",
        //borderRadius: 999, 
        overflow: "hidden",
    
      },
      name: {
        marginLeft: 16,
        fontSize: 20,
        fontWeight: "400",
        color:"#000",
      },
      btn: {
        alignSelf: 'center',
        width: '60%',
        marginVertical: 50
    
      },
      btnsubmit: {
        backgroundColor: "#D1070A",
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        borderRadius: 15,
      },
      button: {
        color: "white",
        fontSize: 26,
      }
})