import React,{useState} from "react";
import { StyleSheet, View } from "react-native";
import {Picker} from  '@react-native-picker/picker';


export default function Flordrop () {
   
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
                    <Picker.Item label= "Ground Floor" value= "Ground Floor" style={{color:"#000", backgroundColor:"#fff"}}/>
                    <Picker.Item label= "First Floor" value= "First Floor" style={{color:"#000", backgroundColor:"#fff"}} />
                    <Picker.Item label= "Second Floor" value= "Second Floor" style={{color:"#000", backgroundColor:"#fff"}}/>
                    <Picker.Item label= "Third Floor" value= "Third Floor" style={{color:"#000", backgroundColor:"#fff"}}/>
                    <Picker.Item label= "Fouth Floor" value= "Fourth Floor" style={{color:"#000", backgroundColor:"#fff"}}/>
					<Picker.Item label= "Fith Floor" value= "Fifth Floor" style={{color:"#000", backgroundColor:"#fff"}}/>
					<Picker.Item label= "Sixth Floor" value= "Sixth Floor" style={{color:"#000", backgroundColor:"#fff"}}/>
                    <Picker.Item label= "Other" value= "Other" style={{color:"#000", backgroundColor:"#fff"}} />
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
