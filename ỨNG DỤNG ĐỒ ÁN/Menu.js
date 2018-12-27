
import React from 'react';
import {Platform, StyleSheet, Text, View,ImageBackground, Image, Dimensions, TextInput, TouchableOpacity, Button
} from 'react-native';
import bgImage from './image/background.jpg'
import logo2 from './image/logo2.png'

const {width: Width} = Dimensions.get('window')


export default class DetailsScreen extends React.Component {

  static navigationOptions = {
    header: null,
    };
    render() {
      return (

        <ImageBackground source={bgImage} style={styles.backgroundContainer}>


        <View style={{ flex: 1, flexDirection: 'row', opacity: 0.5 }}>

          <View style={{ width: 150, height: 150, backgroundColor: '216FF3' }} >
            <Image source={logo2} style={styles.logo} />
          </View>
          <View style={{ width: 175, height: 150, backgroundColor: '216FF3' }} >
            <Text style={styles.TextAccounttop}> HELLO </Text>
            <Text style={styles.TextAccount}>
             'LƯƠNG VĂN THUỘC'
            </Text>
            <TouchableOpacity style={styles.textLoginAccount} onPress={() => this.props.navigation.navigate('Login')}>
              <Text style={styles.textLoginAccount1}> ĐĂNG XUẤT </Text>
            </TouchableOpacity>
          </View>

        </View>



        <View style={styles.ActionButton}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('GhiChu')} style={styles.buttonLogin}>
            <Text style={styles.textLogin}> GHI CHÚ </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.props.navigation.navigate('LuuTru')} style={styles.buttonLogin}>
            <Text style={styles.textLogin}> LƯU TRỮ </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.props.navigation.navigate('NhiemVu')} style={styles.buttonLogin}>
            <Text style={styles.textLogin}> NHIỆM VỤ </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.props.navigation.navigate('ThungRac')} style={styles.buttonLogin}>
            <Text style={styles.textLogin}> THÙNG RÁC </Text>
          </TouchableOpacity>
        </View>

      

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
    logo:{
      width: 140,
      height: 140,
      marginTop: 20,
      marginLeft: 10
    
    },
  
    buttonLogin: {
      
      backgroundColor: '#216FF3',
      marginTop: 30,
      borderRadius: 5,
      fontSize: 16,
      width: Width - 55,
      height: 45,
      alignItems: 'center',
      
  
      
    },
    textLogin:{
     marginTop: 10,
      color: 'white',
      fontSize: 16,
      opacity: 0.6,
  
    },
    ActionButton:{
      alignItems: 'center',
      marginBottom: 60
  
    
    },
    TextAccount:{
      marginTop: 10,
      marginLeft: 20,
      fontSize: 16,
      backgroundColor: 'gray',
      color: 'white',
  
    },
    TextAccounttop: {
      marginTop: 30,
      marginLeft: 55,
      fontSize: 17,
      alignItems: 'center',
      color: 'white',
    },
    textLoginAccount:{
      alignItems: 'center',
      marginTop: 20,
      borderRadius: 5,
      fontSize: 16,
  
    },
    textLoginAccount1:{
      alignItems: 'center',
      borderRadius: 5,
      fontSize: 13,
      backgroundColor: 'red',
      color: 'white',
  
    },
    
   
    
    
  });
  