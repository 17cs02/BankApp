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
import LogoIcon from 'react-native-vector-icons/Ionicons';
import BarIcon from 'react-native-vector-icons/FontAwesome';
import LeftIcon from 'react-native-vector-icons/AntDesign';

const AddCard = props => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View style={{flex: 0.1, backgroundColor: '#164479'}}>
            <View style={styles.topBar}>
              <View style={{width: '10%'}}>
                <TouchableOpacity>
                  <BarIcon name="bars" size={30} color="#fff"></BarIcon>
                </TouchableOpacity>
              </View>
              <View style={{width: '10%'}}>
                <TouchableOpacity>
                  <LeftIcon
                    name="left"
                    size={30}
                    color="#fff"
                    style={{fontWeight: 'bold'}}
                    onPress={() => props.navigation.goBack()}></LeftIcon>
                </TouchableOpacity>
              </View>
              <View style={{width: '60%'}}>
                <Text style={styles.txtAcc}>TRANSACTION</Text>
              </View>
              <View>
                <TouchableOpacity>
                  <LogoIcon
                    name="ios-settings-sharp"
                    size={30}
                    color="#fff"
                    onPress={() =>
                      props.navigation.navigate('Account')
                    }></LogoIcon>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View>
            <View style={styles.flexCenter}>
              <Image
                source={require('../assets/ac2.png')}
                style={styles.Image}
              />
            </View>
          </View>
          <View>
            <View style={styles.flexTexInp}>
              <View>
                <Text style={styles.label}>From Bank Account</Text>
              </View>
              <View>
                <TextInput
                  keyboardType="numeric"
                  placeholder="00 123 456"
                  placeholderTextColor={'#A9A9A9'}
                  style={styles.input}></TextInput>
              </View>
              <View>
                <Text style={styles.label}>To Bank Account</Text>
              </View>
              <View>
                <TextInput
                  placeholder="SELECT"
                  placeholderTextColor={'#A9A9A9'}
                  style={styles.input}></TextInput>
              </View>
            </View>
            <View style={styles.fxForDate}>
              <View>
                <Text style={styles.label}>Amount</Text>
              </View>
              <View style={styles.rowInputs}>
                <View style={{width: '20%'}}>
                  <TextInput
                    placeholder="$"
                    placeholderTextColor={'#A9A9A9'}
                    style={styles.dateInp}></TextInput>
                </View>
                <View style={{width: '75%'}}>
                  <TextInput
                    placeholderTextColor={'#A9A9A9'}
                    keyboardType="numeric"
                    placeholder="2,195.00"
                    style={styles.dateInp}></TextInput>
                </View>
              </View>
            </View>

            <View>
              <View style={styles.flexTexInp}>
                <View>
                  <Text style={styles.label}>Messages</Text>
                </View>
                <View>
                  <TextInput
                    style={{
                      height: 60,
                      borderWidth: 1,
                      borderColor: '#0e0e0e',
                      padding: 5,
                      borderRadius: 5,
                      letterSpacing: 1,
                    }}></TextInput>
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              width: '80%',
              alignSelf: 'center',
              marginTop: 30,
            }}>
            <View>
              <TouchableOpacity
                style={styles.button}
                onPress={() => Alert.alert('Transfer Succesfull')}>
                <Text style={{color: '#fff'}}>SEND</Text>
              </TouchableOpacity>
            </View>
            <View>
              <Text style={{margin: 20, color: '#000'}}>or</Text>
            </View>
            <View>
              <TouchableOpacity
                style={styles.btn2}
                onPress={() => props.navigation.navigate('Profile')}>
                <Text style={{color: '#000'}}>CANCEL</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topBar: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
  },
  txtAcc: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    letterSpacing: 4,
    paddingTop: 3,
  },
  Image: {
    marginTop: 40,
    marginBottom: 40,
    width: 280,
    height: 110,
  },
  flexCenter: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  label: {
    color: '#164479',
    marginBottom: 2,
    letterSpacing: 1,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#0e0e0e',
    padding: 5,
    borderRadius: 5,
    marginBottom: 10,
    letterSpacing: 1,
  },
  flexTexInp: {
    flexDirection: 'column',
    width: '80%',
    alignSelf: 'center',
  },
  rowInputs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dateInp: {
    height: 40,
    borderWidth: 1,
    borderColor: '#0e0e0e',
    padding: 5,
    borderRadius: 5,
    marginBottom: 10,
  },
  fxForDate: {
    width: '80%',
    alignSelf: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#164479',
    padding: 10,
    width: 125,
    marginTop: 10,
    fontWeight: 'bold',
  },
  btn2: {
    alignItems: 'center',
    padding: 10,
    width: 125,
    marginTop: 10,
    fontWeight: 'bold',
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 5,
  },
});
