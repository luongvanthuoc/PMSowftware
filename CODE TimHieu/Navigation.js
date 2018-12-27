import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation'; // Version can be specified in package.json
import Login from './Login';
import Menu from './Menu';
import GhiChu from './GhiChu';
import LuuTru from './LuuTru';
import NhiemVu from './NhiemVu';
import ThungRac from './ThungRac';



const RootStack = createStackNavigator(
  {
    Login: Login,
    Menu: Menu,
    GhiChu: GhiChu,
    LuuTru: LuuTru,
    NhiemVu: NhiemVu,
    ThungRac: ThungRac,


  },
  {
    initialRouteName: 'Login',
  }
  
);


const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
