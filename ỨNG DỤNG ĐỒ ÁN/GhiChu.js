import React from 'react';
import {
  Platform, StyleSheet, Text, View, ImageBackground, Image, Dimensions, TextInput, TouchableOpacity, Button, FlatList
} from 'react-native';


const { width: Width } = Dimensions.get('window')


export default class GhiChu extends React.Component {

  static navigationOptions = {
    headerTitle: '                 GHI CHÚ'

  };



  constructor(props) {
    super(props);
    this.state = { isLoading: true }
  }
  


  componentDidMount() {
    fetch("http://192.168.2.3/ghichu/Select_Ghichu.php/ghichu/Select_Ghichu.php")
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <View style= {styles.background}>


        <View style={styles.flatList}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({ item }) => <Text style= {styles.TextFlat}>{item.stt} : {item.noidung}</Text>}
        />
        </View>

        <TouchableOpacity style={styles.buttonLogin} onPress={() => this.props.navigation.navigate('EditGC')}>
              <Text style={styles.textLogin}> THÊM MỚI GHI CHÚ </Text>
            </TouchableOpacity>



      </View>
    );


  }

}



const styles = StyleSheet.create({
background:{
  flex: 1,
    width: null,
    height: null,
    backgroundColor: '#2190F3'
  },
  flatList:{
    backgroundColor: 'black',
    borderTopWidth: 5,
    borderRightWidth: 7,
    borderBottomWidth: 5,
    borderLeftWidth: 7,
    width: null,
    height: 350,
    borderColor: '#d4c4fb',
    marginTop: 30
    
  
   
      
    },

  TextFlat:{
    color: '#2190F3',
    alignItems: 'center',
  },

  buttonLogin:{


    backgroundColor: '#673AB7',
    marginTop: 30,
    borderRadius: 5,
    fontSize: 16,
    
    borderRadius: 5,

   
    backgroundColor: '#216FF3',
    color: 'white',

    alignItems: 'center',
  }





  });


