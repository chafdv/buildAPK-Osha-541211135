import {
    View,
    Text,
    Image,
    Button,
    Linking,
    ScrollView,
    StyleSheet,
  } from 'react-native';
  
  import React, { useState } from 'react';
  
  const Portofolio = () => {
    const [like, setLike] = useState(0);
    const [dislike, setDislike] = useState(0);
  
    const likefunction = () => {
      setLike(like + 1);
    };
    const dislikefunction = () => {
      setDislike(dislike + 1);
    };
  
    const contactme = 'https://instagram.com/oshalfdv?igshid=MzRlODBiNWFlZA==';
    const styles = StyleSheet.create({
      container: {
        backgroundColor: '#CCE2CB',
        padding: 20,
        alignItems: 'center',
      },
      image: {
        width: 250,
        height: 250,
        borderRadius: 125,
        margin: 20,
      },
      // Define other styles as needed
    });
  
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={require('../assets/ocha.jpg')} />
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 20,
            textAlign: 'center',
            color: 'black',
          }}>
          Osha Alfida Valyana
        </Text>
        <Text
          style={{
            fontWeight: 'normal',
            textAlign: 'center',
            color: 'black',
            marginTop: 20,
            padding: 20,
          }}>
          {' '}
          Saya
          <Text style={{ fontWeight: 'bold' }}> Osha Alfida Valyana.</Text>{' '}
          Seorang Siswi SMK Telkom Purwokerto dari Jurusan Rekayasa Perangkat
          Lunak. Passion saya, bergerak di bagian desain{' '}
          <Text style={{ fontWeight: 'bold' }}>Ui/Ux</Text>.
        </Text>
        <Button
          title="Contact Me"
          color="black"
          onPress={() => Linking.openURL(contactme)}
        />
  
        <Text
          style={{
            marginTop: 20,
            fontWeight: 'bold',
            fontSize: 20,
            textAlign: 'center',
            color: 'black',
          }}>
          My Project
        </Text>
        <Image
          style={{ marginTop: 10, width: 300, height: 200, borderRadius: 10 }}
          source={require('../assets/figma.jpg')}
        />
  
        <View style={{ marginTop: 10, marginLeft: -105 }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 20,
              textAlign: 'left',
              color: 'black',
            }}>
            Figma
          </Text>
          <Text
            style={{
              fontWeight: 'normal',
              fontSize: 20,
              textAlign: 'left',
              color: 'gray',
            }}>
            Mobile UI Design
          </Text>
        </View>
  
        <View style={{ marginTop: -36, marginLeft: 160 }}>
          <Button
            title="Check this out!"
            color="black"
            onPress={() => Linking.openURL('Figma')}
          />
        </View>
  
        <Image
          style={{ width: 300, height: 200, borderRadius: 10, marginTop: 10 }}
          source={require('../assets/figma.jpg')}
        />
        <View style={{ marginTop: 10, marginLeft: -170 }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 20,
              textAlign: 'left',
              color: 'black',
            }}>
            Fitnice Mobile App
          </Text>
          <Text
            style={{
              fontWeight: 'normal',
              fontSize: 20,
              textAlign: 'left',
              color: 'gray',
            }}>
            Mobile Ui Design
          </Text>
        </View>
  
        <View style={{ marginTop: -36, marginLeft: 160 }}>
          <Button
            title="Check this out!"
            color="black"
            onPress={() => Linking.openURL('Figma')}
          />
        </View>
        <Text style={styles.text}>{like}</Text>
        <Button onPres={likefunction} />
        <Text style={styles.title}>Like</Text>
      </View>
    );
  }
  
  export default Portofolio;
  