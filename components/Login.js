import * as React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  Button,
  Linking,
  ScrollView,
} from 'react-native';

import CustomButton from './CustomButton';

const ToPort = () => {
  navigation.navigate('Portofolio');
};

const Login = ({ navigation }) => {
  return (
    <View style={{ backgroundColor: '#D2B48C' }}>
      <Image
        style={{
          width: 200,
          height: 200,
          borderRadius: 0,
          marginTop: 120,
          marginBottom: 20,
          marginLeft: 50,
        }}
        source={require('../assets/logo.png')}
      />
      <Text
        style={{
          marginLeft: 20,
          fontWeight: 'bold',
          fontSize: 30,
          textAlign: 'left',
          color: 'black',
          marginBottom: 5,
        }}>
        Welcome Back!
      </Text>
      <Text
        style={{
          marginLeft: 20,
          marginTop: 0,
          marginBottom: 20,
          fontWeight: 'medium',
          fontSize: 15,
          textAlign: 'left',
          color: '#808080',
        }}>
        Silahkan masuk untuk melanjutkan
      </Text>
      <TextInput
        placeholder="Username"
        placeholderTextColor="gray"
        style={{
          borderWidth: 2,
          margin: 20,
          marginTop: -5,
          textAlign: 'left',
          color: 'black',
          borderColor: 'gray',
          backgroundColor: 'white',
          padding: 20,
          borderRadius: 10,
        }}
      />

      <TextInput
        placeholder="Password"
        placeholderTextColor="gray"
        style={{
          borderWidth: 2,
          margin: 20,
          marginTop: -5,
          textAlign: 'left',
          color: 'black',
          borderColor: 'gray',
          backgroundColor: 'white',
          padding: 20,
          borderRadius: 10,
        }}
      />

      <Text
        style={{
          marginTop: -20,
          padding: 20,
          fontWeight: 'medium',
          fontSize: 15,
          textAlign: 'right',
          color: '#808080',
        }}>
        Forgot Pasword?
      </Text>
      <View style={{ padding: 80, marginTop: -60 }}>
        <CustomButton
          title="Login"
          color="black"
          onPress={() => navigation.navigate('Portofolio')}
        />
      </View>
      <Text
        style={{
          marginTop: -90,
          padding: 20,
          fontWeight: 'medium',
          fontSize: 15,
          textAlign: 'center',
          color: 'black',
        }}>
        ------------ atau ------------
      </Text>
      <View style={{ padding: 80, marginTop: -90 }}>
        <CustomButton title="Google" color="black" />
      </View>
      <Text
        style={{
          marginTop: -70,
          padding: 20,
          fontWeight: 'medium',
          fontSize: 15,
          textAlign: 'center',
          color: '#808080',
        }}>
        Belum punya akun?{' '}
        <Text style={{ color: '#72a4d4', fontWeight: 'Bold' }}>
          Daftar Sekarang
        </Text>
      </Text>
    </View>
  );
};

export default Login;
