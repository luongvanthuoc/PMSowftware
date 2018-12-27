import React, { Component } from 'react';
 
import { StyleSheet, View, TextInput, Text, ActivityIndicator, TouchableOpacity,Dimensions } from 'react-native';

const {width: Width} = Dimensions.get('window')
 
export default class EditGC extends React.Component
{

    static navigationOptions = {
        header: null,
    
      };



    constructor()
    {
        super();
 
        this.state = { 
 
          stt: '', 
 
          noidung: '', 
 
          ActivityIndicator_Loading: false, 
 
        }
    }
 
    Insert_Data_Into_MySQL = () =>
    {
        this.setState({ ActivityIndicator_Loading : true }, () =>
        {
            fetch('http://192.168.2.3/ghichu/Ins.php',
            {
                method: 'POST',
                headers: 
                {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(
                {
                  stt : this.state.stt,
 
                  noidung : this.state.noidung,
 
                })
 
            }).then((response) => response.json()).then((responseJsonFromServer) =>
            {
                alert(responseJsonFromServer);
 
                this.setState({ ActivityIndicator_Loading : false });
 
            }).catch((error) =>
            {
                console.error(error);
 
                this.setState({ ActivityIndicator_Loading : false});
            });
        });
    }
 
    render()
    {
        return(
 
            <View style = { styles.background }>
            
                

                <Text style = { styles.textmod }>Nhập nội dung cần lưu</Text>
 
                <TextInput 
                  style = { styles.nhapnoidung }
                  
                  onChangeText = {(TextInputText) => this.setState({ noidung: TextInputText })} />

 
                <TouchableOpacity style={styles.buttonLogin}
                  activeOpacity = { 0.5 } 
                  
                  onPress = { this.Insert_Data_Into_MySQL }>
 
                    <Text style = { styles.TextStyle }>THÊM VÀO GHI CHÚ</Text>
 
                </TouchableOpacity > 

                <TouchableOpacity style={styles.buttonLogin}
                  activeOpacity = { 0.5 } 
                  
                  onPress={() => this.props.navigation.navigate('LamMoi')}>
 
                    <Text style = { styles.TextStyle }>CẬP NHẬT</Text>
 
                </TouchableOpacity >

                <TouchableOpacity style={styles.buttonLogin} onPress={() => this.props.navigation.navigate('Menu')}>
              <Text style={styles.textLogin}> MENU </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonLogin} onPress={() => this.props.navigation.navigate('GhiChu')}>
              <Text style={styles.textLogin}> HỦY </Text>
            </TouchableOpacity>
 
                {
        
                this.state.ActivityIndicator_Loading ? <ActivityIndicator color='#009688' size='large'style={styles.ActivityIndicatorStyle} /> : null
                
                }
                
            </View>
        );
    }
}
 
const styles = StyleSheet.create(
    {

        background: {
            flex: 1,
            width: null,
            height: null,
            backgroundColor: '#2190F3',
            alignItems: 'center',
        },

        nhapthutu: {
            color: 'white',
            borderColor: 'black',

        },
        nhapnoidung: {
            backgroundColor: 'white',
            width: 400,
            height: 350,
            borderColor: 'black',
            alignItems: 'center',
            color: 'black',
        },

        textmod: {
            color: 'white',
            fontSize: 20,
            fontWeight: '500',
            marginTop: 10,
            opacity: 0.5
        },
        buttonLogin: {

            backgroundColor: '#673AB7',
            marginTop: 30,
            borderRadius: 5,
            fontSize: 16,
            
            borderRadius: 5,
            fontSize: 16,
           
            backgroundColor: '#216FF3',
            color: 'white',
    
            alignItems: 'center',


        },
    });