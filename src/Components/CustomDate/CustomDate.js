import { StyleSheet, Text, View ,Pressable, TouchableOpacity, Dimensions} from 'react-native'
import React,{useState} from 'react'
import DatePicker from 'react-native-date-picker'

export default CustomDate = () => {

  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)
  const [dolabel, setDolabel] = useState('Select Date')
  console.log(dolabel)
  

  return (
    <View >
              {/* <Text style={styles.textonly}>Date Prefrence</Text> */}
              <View style={styles.timing}>
                <TouchableOpacity onPress={() => setOpen(true)} >
                  <View >
                    <Text  placeholder="Date" style={styles.datetext}>{dolabel}</Text>
                    <DatePicker
                      modal
                      // index={index}
                      mode='date'
                      open={open}
                      placeholder="date"
                      date={date}
                      onConfirm={(date) => {
                        setOpen(false)
                        setDate(date)  
                      setDolabel(date.toDateString())
                      }}
                      onCancel={() => {
                        setOpen(false)
                      }} />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
  )
}



const styles = StyleSheet.create({
  datetext:{
    // height: 30,
    width:Dimensions.get('window').width-26,
    // width:360,
    // borderBottomWidth: 1,
    // borderBottomColor: '#D1070A',
    fontSize: 15,
    // marginTop:10,
    color:'#000'
  }
})