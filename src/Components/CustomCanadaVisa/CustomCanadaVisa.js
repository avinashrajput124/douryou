import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomCanadaVisa = () => {
    return (
        <View>
            <View style={styles.main}>
                <View style={{ flexDirection: 'row',padding:10 ,}}>
                    <TouchableOpacity>
                    <Image source={require('../../Components/CustomCanadaVisa/assets/dp.png')} style={styles.dp} />
                    </TouchableOpacity>
                    <View style={{marginHorizontal:10}}>
                        <Text style={{ fontSize: 20, fontWeight: '500', color: '#000000' }}> Posted by </Text>
                        <Text style={{ fontSize: 13, fontWeight: '400', color: '#999999' }}> posted by</Text>
                    </View>
                </View>
                <TouchableOpacity>
                <View>
                  <Image source={require('../../Components/CustomCanadaVisa/assets/Visa.png')} style={styles.img} />
                </View>
                </TouchableOpacity>

                <View style={{flexDirection:'row',marginVertical:20,justifyContent:'space-between'}}>

                   <View style={{flexDirection:'row'}}>
                   <TouchableOpacity style={styles.Like}>
                    <View>
                        <Image source={require('../../Components/CustomCanadaVisa/assets/like.png')} style={styles.like} />
                     </View>
                   </TouchableOpacity>

                   <TouchableOpacity style={styles.Like}>
                    <View>
                        <Image source={require('../../Components/CustomCanadaVisa/assets/msg.png')} style={styles.msg} />
                     </View>
                   </TouchableOpacity>
                   </View>

                   <TouchableOpacity style={styles.Share}>
                    <View >
                        <Image source={require('../../Components/CustomCanadaVisa/assets/share.png')} style={styles.share} />
                    </View>
                   </TouchableOpacity>

                </View>
            </View>
        </View>
    )
}

export default CustomCanadaVisa

const styles = StyleSheet.create({
    main:{
         borderWidth: 1,
         borderColor:'#999999',
        marginHorizontal:15,
        marginVertical:10,
        borderRadius:20,
    //    elevation:,
    },
    dp:{
        height:60,
        width:60,
    },
    img:{
        height:150,
        width:'100%',
    },
    Like:{
        height:30,
        margin:5
    },
    like:{
        marginTop:3,
        marginLeft:5,
        height:24,
        width:29
    },
    msg:{
        marginLeft:12,
        height:28,
        width:28
    },
    Share:{
        marginRight:20

    },
    share:{
        height:29,
        width:28
    },
})