import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Alert,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Home = props => {
  const [email, setEmail] = useState('ishfaque@gmail.com');
  const [Password, setPassword] = useState('1234');

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={{flex: 1}}>
        <View
          style={{
            alignItems: 'center',
            width: '100%',
            backgroundColor: '#fff',
          }}>
          <View style={styles.container}>
            <Text style={styles.text}>WELCOME!</Text>
            <Image
              style={styles.Image}
              source={require('../assets/bank.png')}
            />
          </View>
          <View>
            <TextInput
              style={styles.input}
              placeholderTextColor={'#A9A9A9'}
              placeholder="User Name or Email"
            />
          </View>
          <View>
            <TextInput
              secureTextEntry={true}
              style={styles.input}
              placeholder="Password"
              placeholderTextColor={'#A9A9A9'}
            />
          </View>
          <View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => props.navigation.navigate('Profile')}>
              <Text style={{color: '#fff'}}>LOG IN</Text>
            </TouchableOpacity>
          </View>

          <View>
            <Text
              style={{textAlign: 'center', color: '#1cb7ef', marginBottom: 10}}>
              Forgot Password?
            </Text>
            <Text style={{color: '#000', textAlign: 'center'}}>
              New to Bank Apps?
              <Text
                style={{color: '#1cb7ef'}}
                onPress={() => props.navigation.navigate('SignUp')}>
                Sign Up
              </Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#164479',
    height: hp('52%'),
    width: wp('100%'),
    marginBottom: 20,
  },
  text: {
    fontSize: hp('6%'),
    color: '#fff',
    textAlign: 'center',
    paddingTop: 35,
  },
  Image: {
    width: 270,
    height: 270,
    marginTop: 10,
    alignSelf: 'center',
    marginBottom: 80,
  },
  input: {
    height: hp('7%'),
    borderWidth: 1,
    borderColor: '#0e0e0e',
    padding: 10,
    marginTop: 20,
    width: wp('80%'),
    textAlign: 'center',
    borderRadius: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#164479',
    padding: 10,
    width: wp('30%'),
    marginTop: 30,
    marginBottom: 30,
    fontWeight: 'bold',
    borderRadius: 5,
  },
});
