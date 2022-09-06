/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Navigator from './source/navigations/Navigator';
import Home from './source/screens/Home';
import SignUp from './source/screens/SignUp';
import Profile from './source/screens/Profile';
import Account from './source/screens/Account';
import AddCard from './source/screens/AddCard';
import Transaction from './source/screens/Transaction';
import BankAccount from './source/screens/BankAccount';
import Bhistory from './source/screens/Bhistory';

const App = () => {
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
    //<Home />
    //<Profile />
    //<Account />
    //<SignUp  />
    //<AddCard />
    //<Transaction />
    //<BankAccount />
    //<Bhistory />
  );
};
export default App;
