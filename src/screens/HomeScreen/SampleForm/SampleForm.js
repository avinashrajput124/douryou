import { SafeAreaView, StyleSheet, Text, View, TextInput ,Pressable, TouchableOpacity, Image} from 'react-native'
import React,{useState} from 'react'

const SampleForm = ({ navigation }) => {
    const [radio, setRadio] = useState({
        radio1: false,
        radio2: false,
        
      });
    return (
        <SafeAreaView style={styles.main}>
            <View style={{ marginTop: 30 }}>
                <View style={styles.border}>
                    <TextInput placeholder='Name' style={styles.Input} />
                </View>
                <View style={styles.border}>
                    <TextInput placeholder='Email' style={styles.Input} />
                </View>
                <View style={styles.border}>
                    <TextInput placeholder='Mobile Number' style={styles.Input} keyboardType='numeric'/>
                </View>
                <View style={styles.gender}>
                    <Text style={styles.Gender}>Select your gender :</Text>
                </View>

                <View style={{ flexDirection:'row',marginVertical:15,marginLeft:20}}>
                <Pressable onPress={() => setRadio({ radio1: true, radio2: false, })} style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ justifyContent: "center", alignItems: "center", borderWidth: 1, borderColor: "#D1070A", borderRadius: 999, width: 18, height: 18 }}>
                        {radio.radio1 && <View style={{ margin: 2, height: 10, width: 10, backgroundColor: "#D1070A", borderWidth: 1, borderColor: "#D1070A", borderRadius: 999, overflow: "hidden" }}>
                        </View>}
                    </View>
                    <Text style={{ marginLeft: 10, fontSize: 13, color:'#000000' }}>Male</Text>
                </Pressable>

                <Pressable onPress={() => setRadio({ radio1: false, radio2: true, })} style={{ flexDirection: 'row', alignItems: 'center' ,}}>
                    <View style={{ justifyContent: "center", alignItems: "center", borderWidth: 1, borderColor: "#D1070A", borderRadius: 999, width: 18, height: 18,marginLeft:20 }}>
                        {radio.radio2 && <View style={{ margin: 2, height: 10, width: 10, backgroundColor: "#D1070A", borderWidth: 1, borderColor: "#D1070A98", borderRadius: 999, overflow: "hidden" }}>
                        </View>}
                    </View>
                    <Text style={{ marginLeft: 10, fontSize: 13 ,  color:'#000000'}}>Female</Text>
                </Pressable>
                </View>

                <View style={styles.gender}>
                    <Text style={styles.Gender}> Uplaod Document :</Text>
                    <View style={styles.Uplaod}>
                       <TouchableOpacity>
                       <Image source={require('../../HomeScreen/SampleForm/assets/upload.png')} style={styles.upload}/>
                       </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.Button}>
                    <TouchableOpacity>
                        <Text style={styles.btntext}> Continue</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </SafeAreaView>
    )
}

export default SampleForm

const styles = StyleSheet.create({
    main: {
        flex: 1,
    },
    border: {
        borderWidth: 2,
        marginVertical: 5,
        marginHorizontal: 20,
        borderColor: '#E5E5E5',
        borderRadius: 8
    },
    Input: {
        fontSize: 17,
        paddingHorizontal: 20
    },
    gender: {
        marginHorizontal: 20
    },
    Gender: {
        color: '#000000',
        fontWeight: '400',
        fontSize: 15,
    },
    Uplaod:{
        backgroundColor:'#E4E3E3',
        height:100,
        borderRadius:10,
        marginTop:10,
        justifyContent:'center'
    },
    upload:{
        width:70,
        height:60,
        alignSelf:'center'
    },
    Button:{
       alignItems:'center',
       marginTop:50,
       backgroundColor:"#D1070A",
       marginHorizontal:120,
       padding:10,
      borderRadius:10
    },
    btntext:{
        color:'#FFFFFF',
        fontWeight:'600',
        fontSize:22
    },
})