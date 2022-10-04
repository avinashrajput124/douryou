import React,{useState} from "react";
import { StyleSheet, View } from "react-native";
import {Picker} from  '@react-native-picker/picker';


export default function Interestdrop () {
   
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
           <Picker.Item label= "IELTS" value="IELTS" style={{color:"#000", backgroundColor:"#fff"}}/>
           <Picker.Item label="Study Visa" value= "Study Visa" style={{color:"#000", backgroundColor:"#fff"}}/>
           <Picker.Item label= "Passport" value= "Passport" style={{color:"#000", backgroundColor:"#fff"}}/>
           <Picker.Item label= "Education Loan" value= "Education Loan" style={{color:"#000", backgroundColor:"#fff"}}/>
           <Picker.Item label= "Air Ticket" value= "Air Ticket" style={{color:"#000", backgroundColor:"#fff"}}/>
           <Picker.Item label= "Travel Insurance" value= "Travel Insurance" style={{color:"#000", backgroundColor:"#fff"}}/>
           <Picker.Item label="Money Exchange" value= "Money Exchange" style={{color:"#000", backgroundColor:"#fff"}}/>
                         <Picker.Item label="Transportation" value= "Transportation" style={{color:"#000", backgroundColor:"#fff"}} />
                         <Picker.Item label= "Tour Travel" value= "Tour Travel" style={{color:"#000", backgroundColor:"#fff"}}/>
                         <Picker.Item label= "Work Permit" value= "Work Permit" style={{color:"#000", backgroundColor:"#fff"}}/>
                         <Picker.Item label= "Permanent Residence" value= "permanent Residence" style={{color:"#000", backgroundColor:"#fff"}}/>
                         <Picker.Item label= "International Courier" value= "International Courier" style={{color:"#000", backgroundColor:"#fff"}}/>
                         <Picker.Item label= "Tourist business Visa" value= "Tourist business Visa" style={{color:"#000", backgroundColor:"#fff"}}/>
                         
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
 
