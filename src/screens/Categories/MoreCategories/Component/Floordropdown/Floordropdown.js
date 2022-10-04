import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Picker } from '@react-native-picker/picker';


const Floordropdown = () => {

    const [selectedLanguage, setSelectedLanguage] = useState("language");
    console.log(selectedLanguage)
    return (
        <View style={styles.container}>


            <Picker
                selectedValue={selectedLanguage}
                onValueChange={(itemValue) =>
                    setSelectedLanguage(itemValue)}
                style={styles.pick}>


                <Picker.Item label="---select item---" value="disable" style={{ color: "#000", backgroundColor: "#fff" }} />
                <Picker.Item label="Ground floor" value="Ground floor" style={{ color: "#000", backgroundColor: "#fff" }} />
                <Picker.Item label="First floor" value="First floor" style={{ color: "#000", backgroundColor: "#fff" }} />
                <Picker.Item label="Second floor" value="Second floor" style={{ color: "#000", backgroundColor: "#fff" }} />
                <Picker.Item label="Third floor" value="Third floor" style={{ color: "#000", backgroundColor: "#fff" }} />
                <Picker.Item label="Forth floor" value="Forth floor" style={{ color: "#000", backgroundColor: "#fff" }} />
                <Picker.Item label="Fifth floor" value="Fifth floor" style={{ color: "#000", backgroundColor: "#fff" }} />
                <Picker.Item label="Sixth floor" value="Sixth floor" style={{ color: "#000", backgroundColor: "#fff" }} />
                <Picker.Item label="Other" value="Other" style={{ color: "#000", backgroundColor: "#fff" }} />
                
                
            </Picker>





            {/* </Picker> */}

        </View>
    );
}
export default Floordropdown;

const styles = StyleSheet.create({
    container: {
        color: "#fff"
    },
    picker: {
        height: 30,
        width: "95%",
        // backgroundColor:"#fff"
    }

});

