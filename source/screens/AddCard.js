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
                    onPress={() =>
                      props.navigation.navigate('Profile')
                    }></LeftIcon>
                </TouchableOpacity>
              </View>
              <View style={{width: '50%'}}>
                <Text style={styles.txtAcc}>ADD CARD</Text>
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
                source={require('../assets/cc.png')}
                style={styles.Image}
              />
            </View>
          </View>
          <View>
            <View style={styles.flexTexInp}>
              <View>
                <Text style={styles.label}>YOUR NAME</Text>
              </View>
              <View>
                <TextInput placeholder="NAME" style={styles.input}></TextInput>
              </View>
              <View>
                <Text style={styles.label}>CARD NUMBER</Text>
              </View>
              <View>
                <TextInput
                  placeholder="INSERT YOUR CARD NUMBER"
                  style={styles.input}></TextInput>
              </View>
            </View>
            <View style={styles.fxForDate}>
              <View>
                <Text style={styles.label}>EXPIRED DATE</Text>
              </View>
              <View style={styles.rowInputs}>
                <View style={{width: '20%'}}>
                  <TextInput
                    placeholder="Day"
                    style={styles.dateInp}></TextInput>
                </View>
                <View style={{width: '20%'}}>
                  <TextInput
                    placeholder="Month"
                    style={styles.dateInp}></TextInput>
                </View>
                <View style={{width: '20%'}}>
                  <TextInput
                    placeholder="Year"
                    style={styles.dateInp}></TextInput>
                </View>
              </View>
            </View>
            <View>
              <View style={styles.flexTexInp}>
                <View>
                  <Text style={styles.label}>PASSWORD</Text>
                </View>
                <View>
                  <TextInput
                    secureTextEntry={true}
                    placeholder="**********"
                    style={styles.input}></TextInput>
                </View>
              </View>
            </View>
            <View style={styles.fxForDate}>
              <View>
                <Text style={styles.label}>PHONE NUMBER</Text>
              </View>
              <View style={styles.rowInputs}>
                <View style={{width: '20%'}}>
                  <TextInput
                    placeholder="+44"
                    style={styles.dateInp}></TextInput>
                </View>
                <View style={{width: '75%'}}>
                  <TextInput style={styles.dateInp}></TextInput>
                </View>
              </View>
            </View>
            <View>
              <View style={styles.flexTexInp}>
                <View style={{marginBottom: 10}}>
                  <Text style={{color: '#000'}}>
                    * Nunc faucibus pellentesque sit amet porttitor eget dolar
                    morbi non.
                  </Text>
                </View>
                <View>
                  <Text style={{color: '#000'}}>
                    * Nunc faucibus pellentesque sit amet porttitor eget dolar
                    morbi non.
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.cntButton}>
              <TouchableOpacity style={styles.button}>
                <Text
                  style={{
                    color: '#fff',
                    textAlign: 'center',
                    letterSpacing: 3,
                  }}>
                  LINK CARD
                </Text>
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
    marginTop: 15,
    marginBottom: 15,
    width: 180,
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
    height: 30,
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
    height: 30,
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
    backgroundColor: '#164479',
    width: '40%',
    padding: 10,
    borderRadius: 5,
  },
  cntButton: {
    with: '80%',
    alignItems: 'center',
    marginTop: 10,
  },
});
