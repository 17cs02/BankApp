import React from 'react';
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
import {widthPercentageToDP} from 'react-native-responsive-screen';
import CheckBox from 'react-native-vector-icons/Ionicons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const SignUp = props => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={{alignItems: 'center', flex: 1}}>
          <View style={styles.Header}>
            <View>
              <Image
                source={require('../assets/bank.png')}
                style={styles.image}
              />
            </View>
            <View>
              <Text style={styles.text}>Connect to your bank account</Text>
            </View>
          </View>
          <View>
            <TextInput
              style={styles.input}
              placeholder="Your Name"
              placeholderTextColor={'#A9A9A9'}
            />
          </View>
          <View>
            <TextInput
              keyboardType="numeric"
              style={styles.input}
              placeholder="Bank Account"
              placeholderTextColor={'#A9A9A9'}
            />
          </View>
          <View>
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor={'#A9A9A9'}
            />
          </View>
          <View>
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry={true}
              placeholderTextColor={'#A9A9A9'}
            />
          </View>
          <View style={{width: wp('80%')}}>
            <Text
              style={{
                textAlign: 'center',
                color: '#1cb7ef',
                fontSize: hp('2.7%'),
                marginTop: 10,
                paddingLeft: 15,
                paddingRight: 15,
              }}>
              Use 6 character with a max of letters, numbers & symbols.
            </Text>
          </View>
          <View style={styles.viewWidth}>
            <View style={{marginTop: 10}}>
              <TouchableOpacity>
                <CheckBox
                  name="checkbox-outline"
                  size={30}
                  color="#000"></CheckBox>
              </TouchableOpacity>
            </View>
            <Text style={styles.txt}>
              By signing up, you agree to Bank's Term of Use & Privacy Plicy
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <View>
              <TouchableOpacity
                style={styles.button}
                onPress={() => props.navigation.navigate('Profile')}>
                <Text style={{color: '#fff'}}>SIGN UP</Text>
              </TouchableOpacity>
            </View>
            <View>
              <Text style={{margin: 20}}>or</Text>
            </View>
            <View>
              <TouchableOpacity
                style={styles.btn2}
                onPress={() => props.navigation.navigate('Home')}>
                <Text style={{color: '#000'}}>CANCEL</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <Text style={{fontSize: 18, color: '#000'}}>
              Already Signed up?
              <Text
                style={{
                  color: '#1cb7ef',
                }}
                onPress={() => props.navigation.navigate('Home')}>
                Log in
              </Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  Header: {
    height: hp('22%'),
    backgroundColor: '#164479',
    width: wp('100%'),
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    textAlign: 'center',
    fontSize: hp('3%'),
  },
  image: {
    marginTop: 0,
    width: 100,
    height: 100,
  },
  input: {
    height: hp('8%'),
    borderWidth: 1,
    borderColor: '#0e0e0e',
    padding: 10,
    marginTop: 20,
    width: wp('80%'),
    borderRadius: 10,
  },
  txt: {
    color: '#000',
    fontSize: hp('2.3%'),
    padding: 5,
  },
  viewWidth: {
    width: wp('80%'),
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 8,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#164479',
    padding: 10,
    width: wp('30%'),
    marginTop: 10,
    fontWeight: 'bold',
    borderRadius: 5,
  },
  btn2: {
    alignItems: 'center',
    padding: 10,
    width: wp('30%'),
    marginTop: 10,
    fontWeight: 'bold',
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 5,
  },
});
