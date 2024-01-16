import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import CustomButton from './CustomButton';

const CustomInput = (props) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={props.placeholder}
        value={props.value}
        onChangeText={(text) => setUsername(text)}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
  },
});
 
export default CustomInput;