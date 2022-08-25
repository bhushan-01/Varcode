import { StyleSheet, Text, View,Button } from 'react-native'
import React, {useState } from 'react'

const Practice = () => {
const [Counter, setCounter] = useState(0)
  return (
    <View>
      <Button title="Increment" onPress={()=>setCounter(Counter + 1)} />

      <Text>{Counter}</Text>
    </View>
  );
}

export default Practice

const styles = StyleSheet.create({})



















// import { StyleSheet, Text, View,Button,Platform,Dimensions } from 'react-native'
// import React, {useState } from 'react'
// import DateTimePickerModal from 'react-native-modal-datetime-picker';

// const { width, height } = Dimensions.get('window')


// const Practice = () => {

//  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

//  const showTimePicker = () => {
//    setTimePickerVisibility(true);
//  };

//  const hideTimePicker = () => {
//    setTimePickerVisibility(false);
//  };

//  const handleconfirm = Time => {
//    console.warn('A date has been picked: ', Time);
//    hideTimePicker();
//  };




//   const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

//   const showDatePicker = () => {
//     setDatePickerVisibility(true);
//   };

//   const hideDatePicker = () => {
//     setDatePickerVisibility(false);
//   };

//   const handleConfirm = date => {
//     console.warn('A date has been picked: ', date);
//     hideDatePicker();
//   };

//   return (
//     <View>
//       <Button title="Show Date Picker" onPress={showDatePicker} />
//       <DateTimePickerModal
//         isVisible={isDatePickerVisible}
//         mode="date"
//         onConfirm={handleConfirm}
//         onCancel={hideDatePicker}
//       />
//       <Button title="Show time Picker" onPress={showTimePicker} />
//       <DateTimePickerModal
//         isVisible={isTimePickerVisible}
//         mode="time"
//         onConfirm={handleconfirm}
//         onCancel={hideTimePicker}
//       />
//     </View>
//   );
// };

// export default Practice

// const styles = StyleSheet.create({})    