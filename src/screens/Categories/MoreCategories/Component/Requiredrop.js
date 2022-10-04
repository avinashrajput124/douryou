import React,{useState} from "react";
import { StyleSheet, View } from "react-native";
import {Picker} from  '@react-native-picker/picker';


export default function Requiredrop () {
   
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
          <Picker.Item  label= "Urgently" value= "Urgently" style={{color:"#000", backgroundColor:"#fff"}}/>
          <Picker.Item label= "1 Week" value= "1 Week" style={{color:"#000", backgroundColor:"#fff"}}/>
          <Picker.Item label= "15 Days" value= "15 Days" style={{color:"#000", backgroundColor:"#fff"}}/>
          <Picker.Item label= "1 Month" value= "1 Month" style={{color:"#000", backgroundColor:"#fff"}}/>
          <Picker.Item label= "3 Months" value= "3 Months" style={{color:"#000", backgroundColor:"#fff"}}/>
          <Picker.Item label= "6 Months" value= "6 Months" style={{color:"#000", backgroundColor:"#fff"}}/>
				
					
                    </Picker>
			

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex:1,
    },
    picker:{
        height:30,
        width:"95%",
    }

});