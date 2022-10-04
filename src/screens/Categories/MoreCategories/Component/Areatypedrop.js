import React,{useState} from "react";
import { StyleSheet, View } from "react-native";
import {Picker} from  '@react-native-picker/picker';


export default function Areatypedrop () {
   
        const [selectedLanguage, setSelectedLanguage] = useState("language");
        console.log(selectedLanguage)
        return (
            <View style={styles.container}>
    
           
       <Picker
        selectedValue={selectedLanguage}
        onValueChange={(itemValue) =>
        setSelectedLanguage(itemValue)} 
        style={styles.pick}>

        <Picker.Item label="---select item---" value="disable" style={{color:"#000", backgroundColor:"#fff"}}/>
        <Picker.Item label= "Commercial" value= "Commercial" style={{color:"#000", backgroundColor:"#fff"}}/>
        <Picker.Item label= "Residential" value= "Residential" style={{color:"#000", backgroundColor:"#fff"}}/>
        <Picker.Item label= "SCO" value="SCO" style={{color:"#000", backgroundColor:"#fff"}}/>
        <Picker.Item label= "Booth" value= "Booth" style={{color:"#000", backgroundColor:"#fff"}}/>
        <Picker.Item label= "Plo" value= "Plot" style={{color:"#000", backgroundColor:"#fff"}}/>
					
					
    </Picker>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex:1,
        backgroundColor: '#fff',
    },
    picker:{
        height:30,
        width:"95%",
    }

});
 