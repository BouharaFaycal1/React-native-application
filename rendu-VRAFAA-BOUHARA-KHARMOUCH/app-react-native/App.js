import React from 'react';

import { StyleSheet, Button, Text, View, ScrollView, TextInput, AppRegistry, TouchableOpacity } from 'react-native';

//import Search from './Components/Search'

//import Login from './Components/Login'
import Register from './Components/Register'
import Login from './Components/login'

import Vid from './Components/Vid'
import Addvideo from './Components/Addvideo'
import Listvid from './Components/Listvid'
import Listvidinvit from './Components/Listvidinvit'
import { Video } from 'expo';
import { MaterialIcons, Octicons } from '@expo/vector-icons';
import { createStackNavigator, createSwitchNavigator, StackNavigator } from 'react-navigation';




const nativeShop = StackNavigator({
  Login: { screen: Login },
  Listvid: { screen: Listvid },
  Vid: { screen: Vid },
  Register: { screen: Register },
  Addvideo: { screen: Addvideo },
  Listvidinvit: { screen: Listvidinvit },

});


export default nativeShop;

