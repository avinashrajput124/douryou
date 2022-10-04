import React,{useState} from "react";
import { StyleSheet, View } from "react-native";
import {Picker} from  '@react-native-picker/picker';


export default function Areadrop () {
   
        const [selectedLanguage, setSelectedLanguage] = useState("language");
        // console.log(selectedLanguage)
        return (
            <View style={styles.container}>
    
           
            <Picker
                 selectedValue={selectedLanguage}
                 onValueChange={(itemValue) =>
                 setSelectedLanguage(itemValue)} 
                  style={styles.pick}>

                  <Picker.Item label="---select item---" value="disable" style={{color:"#000", backgroundColor:"#fff"}}/>
                   <Picker.Item label= "Owned" value= "Owned" style={{color:"#000", backgroundColor:"#fff"}}/> 
                   <Picker.Item label= "Lease" value="Lease" style={{color:"#000", backgroundColor:"#fff"}}/>
                    <Picker.Item label= "Rental" value= "Rental" style={{color:"#000", backgroundColor:"#fff"}}/>
                  				
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
 
