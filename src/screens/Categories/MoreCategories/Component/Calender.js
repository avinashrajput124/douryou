import React, { useState } from 'react';
import moment from 'moment';
import {  Text } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker'
 
  const Calender= () => {
  const [birthDate, setBirthDate] = useState(new Date());
  const [show, showModal] = useState(false);
  const toggle = () => showModal(!show);
  return (
    <DateTimePickerModal
      value={birthDate}
      onChange={(event, date) => setBirthDate(date)}
      show={show}
      toggle={toggle}
    >
      <Text style={{marginVertical:5, fontWeight:"500"}}>
        {birthDate ? moment(birthDate).format('MMMM DD, YYYY') : '-'}
      </Text>
    </DateTimePickerModal>
  );
};export default Calender;