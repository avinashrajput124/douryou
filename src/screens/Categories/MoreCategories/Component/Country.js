import { StyleSheet, Text, View, SaveAreaView, } from 'react-native'
import React, { useState,useEffect } from 'react'
import { Picker } from '@react-native-picker/picker';
// import AsyncStorage from '@react-native-async-storage/async-storage';

const Country = () => {
    const [country, setCountry] = useState([]);
    const store = async (value) => {
        try {
          await AsyncStorage.setItem('country', country)
        } catch (e) {
          // saving error
        }
      }

    return (

        <View style={styles.container}>


            <Picker
                selectedValue={country}
                onValueChange={(itemValue)=>setCountry(itemValue)}
                style={styles.pick}>

                <Picker.Item label="---select country---" value="select country" />
                <Picker.Item label="Afganistan" value="Afganistan" />
                <Picker.Item label="Algeria" value="Algeria" />
                <Picker.Item label="American Samoa" value="American Samoa" />
                <Picker.Item label="Andorra" value="Andorra" />
                <Picker.Item label="Angola" value="Angola" />
                <Picker.Item label="Andorra" value="Andorra" />
                <Picker.Item label="Anguilla" value="Anguilla" />
                <Picker.Item label="Antartica" value="Antartica" />
                <Picker.Item label="Argentina" value="Argentina"  />
                <Picker.Item label="Aruba" value="Aruba"  />
                <Picker.Item label="Australia" value="Australia"  />
                <Picker.Item label="Austria" value="Austria"  />
                <Picker.Item label="Azerbaijan" value="Azerbaijan" />
                <Picker.Item label="Bahrain" value="Bahrain"  />

                <Picker.Item label="Bangladesh" value="Bangladesh "/>
                <Picker.Item label="Barbados" value="Barbados" />
                <Picker.Item label="Belarus" value="Belarus" />
                <Picker.Item label="Belgium" value="Belgium" />
                <Picker.Item label="Belize" value="Belize" />
                <Picker.Item label="Benin" value="Benin" />
                <Picker.Item label="Bermuda" value="Bermuda" />
                <Picker.Item label="Bhutan" value="Bhutan" />

                <Picker.Item label="Bosnia and Herzegovina" value="Bosnia and Herzegovina"  />
                <Picker.Item label="Botswana" value="Botswana"  />
                <Picker.Item label="Bouvet Island" value="Bouvet Island"  />

                <Picker.Item label="Brazil" value="Brazil"  />
                <Picker.Item label="British Indian Ocean Territory" value="British Indian Ocean Territory"  />
                <Picker.Item label="British Virgin Islands" value="British Virgin Islands"  />
                <Picker.Item label="Brunei" value="Brunei"  />
                <Picker.Item label="Bulgaria" value="Bulgaria"  />
                <Picker.Item label="Burkina Faso" value="Burkina Faso"  />
                <Picker.Item label="Combodia" value="Combodia"  />
                <Picker.Item label="Cameroon" value="Cameroon"  />
                <Picker.Item label="Canada" value="Canada"  />
                <Picker.Item label="Cape verde" value="Cape verde"  />
                <Picker.Item label="Chile" value="Chile"  />
                <Picker.Item label="China" value="China"  />
                <Picker.Item label="Colombia" value="Colombia"  />
                <Picker.Item label="Congo" value="Congo"  />

                <Picker.Item label="Costa Rica" value="Costa Rica"  />
                <Picker.Item label="Crotia" value="Crotia"  />
                <Picker.Item label="Cuba" value="Cuba"  />
                <Picker.Item label="Czech Republic" value="Czech Republic"  />
                <Picker.Item label="Denmark" value="Denmark"  />
                <Picker.Item label="Dominica" value="Dominica"  />
                <Picker.Item label="Dominican Republic" value="Dominican Republic"  />
                <Picker.Item label="Ecuador" value="Ecuador"  />
                <Picker.Item label="Egypt" value="Egypt"  />
                <Picker.Item label="El Salvador" value="El Salvador"  />
                <Picker.Item label="Estonia" value="Estonia"  />
                <Picker.Item label="Ethiopia" value="Ethiopia" ></Picker.Item>
                <Picker.Item label="Falk Islands" value="Falk Islands" />
                <Picker.Item label="Fiji" value="Fiji" />
                <Picker.Item label="Finland" value="Finland" />
                <Picker.Item label="France" value="France" />

                <Picker.Item label="Gabon" value="Gabon"  />
                <Picker.Item label="Georgia" value="Georgia"  />
                <Picker.Item label="Germeny" value="Germeny"  />
                <Picker.Item label="Ghana" value="Ghana"  />
                <Picker.Item label="Greece" value="Greece"  />
                <Picker.Item label="Greenland" value="Greenland"  />
                <Picker.Item label="Grenada" value="Grenada"  />
                <Picker.Item label="Guadeloupe" value="Guadeloupe"  />
                <Picker.Item label="Guam" value="Guam"  />
                <Picker.Item label="Guatemala" value="Guatemala"  />
                <Picker.Item label="Guinea" value="Guinea"  />
                <Picker.Item label="Guyana" value="Guyana"  />
                <Picker.Item label="Haiti" value="Haiti"  />
                <Picker.Item label="Honduras" value="Honduras"  />
                <Picker.Item label="Hongkong" value="Hongkong"  />
                <Picker.Item label="Hungary" value="Hungary"  />
                <Picker.Item label="Iceland" value="Iceland"  />
                <Picker.Item label="India" value="India"  />
                <Picker.Item label="Indonesia" value="Indonesia"  />
                <Picker.Item label="Iran" value="Iran"  />
                <Picker.Item label="Iraq" value="Iraq"  />
                <Picker.Item label="Ireland" value="Ireland"  />
                <Picker.Item label="Israel" value="Israel"  />

                <Picker.Item label="Jamaica" value="Jamaica"  />
                <Picker.Item label="Japan" value="Japan"  />
                <Picker.Item label="Jordan" value="Jordan"  />
                <Picker.Item label="Kazakhstan" value="Kazakhstan"  />
                <Picker.Item label="Kenya" value="Kenya" />
                <Picker.Item label="Kiribati" value="Kiribati"  />
                <Picker.Item label="Kuwait" value="Kuwait"  />
                <Picker.Item label="Kyrgyzstan" value="Kyrgyzstan"  />
                <Picker.Item label="Laos" value="Laos"  />
                <Picker.Item label="Latvia" value="Latvia"  />
                <Picker.Item label="Lebanon" value="Lebanon"  />
                <Picker.Item label="Liberia" value="Liberia"  />
                <Picker.Item label="Libiya" value="Libiya"  />
                <Picker.Item label="Lithuania" value="Lithuania"  />
                <Picker.Item label="Luxembourg" value="Luxembourg"  />
                <Picker.Item label="Macau" value="Macau"  />
                <Picker.Item label="Madagaskar" value="Madagaskar"  />
                <Picker.Item label="Malawi" value="Malawi"  />
                <Picker.Item label="Malaysia" value="Malaysia"  />
                <Picker.Item label="Maldivaes" value="Maldivaes"  />
                <Picker.Item label="Mali" value="Mali"  />
                <Picker.Item label="Malta" value="Malta"  />
                <Picker.Item label="Marshall Islands" value="Marshall Islands"  />
                <Picker.Item label="Mayotte" value="Mayotte"  />
                <Picker.Item label="Mexico" value="Mexico"  />
                <Picker.Item label="Mauritius" value="Mauritius"  />


                {/* <Picker.Item label="Belgium" value="Belgium"  /> */}


            </Picker>

        </View>

    )
}

export default Country

const styles = StyleSheet.create({

    container: {
        flex: 1,
        // backgroundColor: '#fff',
    },
    picker: {
        height: 30,
        width: "95%",
        backgroundColor: '#fff'
    }

});
