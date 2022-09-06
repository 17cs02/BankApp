import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import SignUp from '../screens/SignUp';
import Account from '../screens/Account';
import AddCard from '../screens/AddCard';
import BankAccount from '../screens/BankAccount';
import Bhistory from '../screens/Bhistory';
import Transaction from '../screens/Transaction';
import Result from '../screens/Result';
import Form from '../screens/Form';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false, headerBackVisible: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Account"
        component={Account}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AddCard"
        component={AddCard}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="BankAccount"
        component={BankAccount}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Bhistory"
        component={Bhistory}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Transaction"
        component={Transaction}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Result"
        component={Result}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Form"
        component={Form}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Navigator;
