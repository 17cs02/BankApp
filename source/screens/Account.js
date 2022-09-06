import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import LogoIcon from 'react-native-vector-icons/Ionicons';
import BarIcon from 'react-native-vector-icons/FontAwesome';
import LeftIcon from 'react-native-vector-icons/AntDesign';

const Account = props => {
  return (
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
            <View style={{width: '50%'}}>
              <Text style={styles.txtAcc}>ACCOUNT</Text>
            </View>
            <View>
              <TouchableOpacity>
                <LogoIcon
                  name="ios-settings-sharp"
                  size={30}
                  color="#fff"></LogoIcon>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View>
          <View style={styles.flexCenter}>
            <Image source={require('../assets/prr.png')} style={styles.Image} />
          </View>
        </View>
        <View style={{flex: 0.5}}>
          <View style={styles.flexTexInp}>
            <View>
              <Text style={styles.label}>YOUR NAME</Text>
            </View>
            <View>
              <TextInput
                style={styles.input}
                placeholder="KARINA BUYS"
                placeholderTextColor={'#A9A9A9'}></TextInput>
            </View>
            <View>
              <Text style={styles.label}>BANK ACCOUNT</Text>
            </View>
            <View>
              <TextInput
                keyboardType="numeric"
                style={styles.input}
                placeholder="00 123 456"
                placeholderTextColor={'#A9A9A9'}></TextInput>
            </View>
            <View>
              <Text style={styles.label}>EMAIL</Text>
            </View>
            <View>
              <TextInput
                style={styles.input}
                placeholder="karina_buys@email.com"
                placeholderTextColor={'#A9A9A9'}></TextInput>
            </View>
            <View>
              <Text style={styles.label}>PASSWORD</Text>
            </View>
            <View>
              <TextInput
                secureTextEntry={true}
                style={styles.input}
                placeholder="***********"
                placeholderTextColor={'#A9A9A9'}></TextInput>
            </View>
            <View>
              <Text style={styles.label}>PHONE NUMBER</Text>
            </View>
            <View>
              <TextInput
                style={styles.input}
                placeholder="+44 558 257 68 005"
                placeholderTextColor={'#A9A9A9'}></TextInput>
            </View>
            <View>
              <Text style={styles.label}>YOUR ADDRESS</Text>
            </View>
            <View>
              <TextInput
                style={{
                  borderWidth: 1,
                  borderColor: '#0e0e0e',
                  borderRadius: 5,
                  marginBottom: 5,
                  numberOfLines: 4,
                }}
                placeholderTextColor={'#A9A9A9'}
                placeholder="Lorem Ipsum 22nd Street,Tancidunt ut laareet 5N 27T - Lorem Ipsum"></TextInput>
            </View>
          </View>
        </View>
        <View style={{flex: 0.3}}>
          <View style={styles.flexTxBtn}>
            <View>
              <Text style={{color: '#000'}}>
                * Nunc faucibus pellentesque sit amet porttitor eget dolar morbi
                non
              </Text>
            </View>
            <View>
              <TouchableOpacity style={styles.button}>
                <Text
                  style={{color: '#fff', textAlign: 'center'}}
                  onPress={() => Alert.alert('Changes Saved')}>
                  SAVE CHANGES
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Account;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topBar: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    padding: 10,
  },
  flexCenter: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  Image: {
    width: 120,
    height: 120,
    marginTop: 5,
  },
  txtAcc: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    letterSpacing: 2,
  },
  label: {
    color: '#164479',
    marginBottom: 2,
  },
  input: {
    height: 34,
    borderWidth: 1,
    borderColor: '#0e0e0e',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  flexTexInp: {
    flexDirection: 'column',
    width: '80%',
    alignSelf: 'center',
  },
  button: {
    marginTop: 10,
    backgroundColor: '#164479',
    width: '45%',
    padding: 10,
    borderRadius: 5,
  },
  flexTxBtn: {
    flexDirection: 'column',
    width: '80%',
    alignItems: 'center',
    alignSelf: 'center',
  },
});
