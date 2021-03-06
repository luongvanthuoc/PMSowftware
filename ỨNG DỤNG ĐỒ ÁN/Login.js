import React from 'react';

import {Platform, StyleSheet, Text, View,ImageBackground, Image, Dimensions, TextInput, TouchableOpacity,Button
} from 'react-native';


import bgImage from './image/background.jpg'
import logo from './image/logo.png'
import { ViewPagerAndroid } from 'react-native-gesture-handler';


const {width: Width} = Dimensions.get('window')



export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
    };

  render() {
    return (
      

          <ImageBackground source={bgImage} style={styles.backgroundContainer}>
            <View style={styles.logoContainer}>
              <Image source={logo} style={styles.logo} />
              <Text style={styles.logoText}> WELCOME TO PMS </Text>

            </View>

            <View style={styles.inputContainer}>

              <TextInput
                style={styles.input}
                placeholder={'USER ID'}
                placeholderTextColor={'#A5B8D9'}
                underLineColorAndroid='transparent'
              />
            </View>

            <View style={styles.inputContainer}>

              <TextInput
                style={styles.input}
                placeholder={'PASSWORD'}
                secureTextEntry={true}
                placeholderTextColor={'#A5B8D9'}
                underLineColorAndroid='transparent'
              />
            </View>

            <TouchableOpacity style={styles.buttonLogin} onPress={() => this.props.navigation.navigate('Menu')}>
              <Text style={styles.textLogin}> LOGIN </Text>
            </TouchableOpacity>

          </ImageBackground>

      
    );
  }
}


const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: 'center',
    alignItems: 'center',
  
  },
 
  logo: {
    width: 120,
    height: 120,
  },
  logoContainer: {
    alignItems: 'center'
  },
  logoText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
    marginTop: 10,
    opacity: 0.5
  },
  input: {
    width: Width - 55,
    height: 45,
    borderRadius: 5,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: '#216FF3',
    color: '#A5B8D9',
    marginHorizontal: 25

  },
  inputContainer:{
    marginTop: 20
  },
  buttonLogin: {
    
    backgroundColor: '#673AB7',
    marginTop: 30,
    borderRadius: 5,
    fontSize: 16,

    
  },
  textLogin:{
    alignItems: 'center',
    color: 'white',
    fontSize: 16,
    opacity: 0.5
  }
  
 
  
  
});