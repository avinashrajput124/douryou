import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity,StatusBar } from 'react-native'
import React from 'react'

const Post = ({ navigation }) => {
    return (
        <>
        <StatusBar
        backgroundColor="#D1070A"
        barStyle={'light-content'}/>
       
        <ScrollView style={styles.main}>
            <View>
                <View style={styles.Top}>
                  <Image source={require('../../HomeScreen/Post/assets/logo.png')}  style={styles.img}/>
                </View>
                <View style={styles.Text}>
                    <Text style={styles.text}>POST YOUR REQUIREMENTS</Text>
                </View>
                <TouchableOpacity onPress={ () => navigation.navigate('RequirementForm')}>
                <View style={styles.border}>
                   <View>
                        <Image source={require('../../HomeScreen/Post/assets/requriment.png')}  style={styles.list}/>
                   </View>
                   <View style={styles.innerText}>
                      <Text style={styles.textlist}>Your {'\n'} Requirements</Text>
                   </View>
                </View>
                </TouchableOpacity>

                <TouchableOpacity  onPress={ () => navigation.navigate('Passport')}>
                <View style={styles.border}>
                   <View>
                        <Image source={require('../../HomeScreen/Post/assets/passport.png')}  style={styles.list}/>
                   </View>
                   <View style={styles.innerText}>
                      <Text style={styles.textlist}>Apply {'\n'} In Passport</Text>
                   </View>
                </View>
                </TouchableOpacity>
                
                <TouchableOpacity  onPress={ () => navigation.navigate('Educationloan')}>
                   <View style={styles.border}>
                        <View>
                            <Image source={require('../../HomeScreen/Post/assets/loan.png')}  style={styles.list}/>
                    </View>
                    <View style={styles.innerText}>
                        <Text style={styles.textlist}>Apply {'\n'} Educational Loan</Text>
                    </View>
                    </View>
                 </TouchableOpacity>

                 
                 <TouchableOpacity  onPress={ () => navigation.navigate('TravelInsurance')}>
                    <View style={styles.border}>
                    <View>
                            <Image source={require('../../HomeScreen/Post/assets/insurance.png')}  style={styles.list}/>
                    </View>
                    <View style={styles.innerText}>
                        <Text style={styles.textlist}>Apply {'\n'} Travel Insurance</Text>
                    </View>
                    </View>
                </TouchableOpacity>
                
                <TouchableOpacity  onPress={ () => navigation.navigate('ApplyJob')}>
                <View style={styles.border}>
                    <View>
                            <Image source={require('../../HomeScreen/Post/assets/job.png')}  style={styles.list}/>
                        
                    </View>
                    <View style={styles.innerText}>
                        <Text style={styles.textlist}>   Apply for Job</Text>
                    </View>
                    </View>
                </TouchableOpacity>

                
                <TouchableOpacity  onPress={ () => navigation.navigate('ApplyFranchise')}>
                  <View style={styles.border}>
                   <View>
                        <Image source={require('../../HomeScreen/Post/assets/purchase.png')}  style={styles.list}/>
                  
                   </View>
                   <View style={styles.innerText}>
                      <Text style={styles.textlist}>Apply {'\n'}Purchase Franchise</Text>
                   </View>
                </View>
                </TouchableOpacity>
                
                <TouchableOpacity  onPress={ () => navigation.navigate('PostLuggage')}>
                <View style={styles.border}>
                   <View>
                        <Image source={require('../../HomeScreen/Post/assets/luggage.png')}  style={styles.list}/>
                    
                   </View>
                   <View style={styles.innerText}>
                      <Text style={styles.textlist}>Apply {'\n'}Luggage Adistment</Text>
                   </View>
                </View>
                </TouchableOpacity>
            </View>
        </ScrollView>
        </>
    )
}

export default Post

const styles = StyleSheet.create({
    main: {
        flex: 1,
        // #D1070A
    },
    Top:{
        alignItems:'center',
        marginVertical:20
    },
    img:{
        height:70,
        width:'70%',
    },
    Text:{
        alignItems:'center',
    },
    text:{
        color:'#000000',
        fontSize:20,
        fontWeight:'600',
        lineHeight:24,
    },
    border:{
        flexDirection:'row',
        alignSelf:'center',
        borderWidth:1,
        borderColor:'#A6A6A6',
        width:'96%',
        height:90,
        borderRadius:20,
        marginVertical:10,
    },
    list:{
        marginTop:10,
        marginHorizontal:50,
        height:70,
        width:70
    },
    innerText:{
        justifyContent:'center',
    },
    textlist:{
      
        textAlign:'center',
        fontSize:18,
        fontWeight:'500',
        color:'#000000'
    },
})