import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';

const CustomButton = (props) => {
  const handleLogin = () => {
    // Implement your login logic here
    console.log('Logging in');
  };

  const handleForgotPassword = () => {
    // Implement your logic for forgot password here
    console.log('Forgot Password');
  };

  const handleGoogleLogin = () => {
    // Implement your Google login logic here
    console.log('Logging in with Google');
  };

  const handleRegister = () => {
    // Implement your logic for registration here
    console.log('Redirect to Registration Page');
  };

  return (
    <TouchableOpacity style={styles.loginBtn} onPress={props.onPress}>
      <Text style={styles.loginText}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  loginBtn: {
    width: '80%',
    backgroundColor: '#35A29F',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  loginText: {
    color: 'white',
  },
});
export default CustomButton;