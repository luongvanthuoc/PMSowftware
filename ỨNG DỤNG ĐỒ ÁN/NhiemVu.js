
import React from 'react';
import {
  Platform, StyleSheet, Text, View, ImageBackground, Image, Dimensions, TextInput, TouchableOpacity, Button
} from 'react-native';
import bgImage from './image/background.jpg'
import logo2 from './image/logo2.png'

const { width: Width } = Dimensions.get('window')


export default class DetailsScreen extends React.Component {

  static navigationOptions = {
    headerTitle: '                NHIỆM VỤ'

  };
  render() {
    return (

      <View source={bgImage} style={styles.backgroundContainer}>

      </View>


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
    backgroundColor: '#2190F3'
    

  },


});
