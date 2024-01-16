import {
    View,
    Text,
    Image,
    TextInput,
    Button,
    Linking,
    ScrollView,
  } from 'react-native';
  
  export default function App({ navigation }) {
    return (
      <View style={{ backgroundColor: '#D2B48C' }}>
        <Image
          style={{
            width: 200,
            height: 200,
            borderRadius: 0,
            marginTop: 120,
            marginBottom: 20,
            marginLeft: 70,
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
          Selamat Datang,
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
          Silahkan daftar terlebih dahulu...
        </Text>
        <TextInput
          placeholder="Nama Lengkap"
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
        <TextInput
          placeholder="Ulangi Password"
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
        <View style={{ padding: 80, marginTop: -60 }}>
          <Button
            title="Daftar"
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
            color: '#808080',
          }}>
          Udah punya akun?{' '}
        </Text>
        <Text style={{ color: '#72a4d4', fontWeight: 'Bold' }}>Login</Text>
      </View>
    );
  }
  