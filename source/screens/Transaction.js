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

const Transaction = props => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View style={{backgroundColor: '#164479'}}>
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
                <TouchableOpacity
                  onPress={() => props.navigation.navigate('Account')}>
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
              <View>
                <Text
                  style={{
                    color: '#fff',
                    marginTop: 50,
                    marginBottom: 20,
                    fontWeight: 'bold',
                    letterSpacing: 3,
                  }}>
                  SCAN THIS QR CODE
                </Text>
              </View>
              <View>
                <Image
                  source={require('../assets/qr.png')}
                  style={styles.Image}
                />
              </View>
              <View>
                <Text style={styles.text}>YOUR NAME</Text>
              </View>
              <View style={{marginBottom: 40}}>
                <Text style={{color: '#fff', letterSpacing: 2}}>
                  your-email@email.com
                </Text>
              </View>
            </View>
          </View>
          <View>
            <View style={styles.qrCode}>
              <View>
                <Text style={{letterSpacing: 2, fontSize: 18, color: '#000'}}>
                  Try BARCODE
                </Text>
              </View>
              <View>
                <Image
                  source={require('../assets/br.png')}
                  style={styles.barImg}
                />
              </View>
              <View>
                <Text style={{fontSize: 18, color: '#000'}}>
                  Can't scan the QR Code?
                </Text>
              </View>
              <View>
                <Text style={{fontSize: 18, color: '#000'}}>
                  Try
                  <Text
                    style={{color: '#07c1f5'}}
                    onPress={() => props.navigation.navigate('BankAccount')}>
                    Bank Account
                  </Text>
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Transaction;

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
    width: 200,
    height: 200,
    marginBottom: 40,
  },
  flexCenter: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#164479',
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
    letterSpacing: 2,
  },
  qrCode: {
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },
  barImg: {
    marginTop: 10,
    marginBottom: 15,
  },
});
