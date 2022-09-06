import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import LogoIcon from 'react-native-vector-icons/Ionicons';
import BarIcon from 'react-native-vector-icons/FontAwesome';

const Profile = props => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View style={{flex: 0.59, backgroundColor: '#164479'}}>
            <View style={styles.topBar}>
              <View>
                <TouchableOpacity>
                  <BarIcon name="bars" size={30} color="#fff"></BarIcon>
                </TouchableOpacity>
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
            <View style={styles.flexCenter}>
              <Image
                source={require('../assets/prr.png')}
                style={styles.Image}
              />
            </View>
            <View style={styles.flexCenter}>
              <Text
                style={{
                  color: '#fff',
                  marginTop: 10,
                  fontWeight: 'bold',
                  letterSpacing: 2,
                }}>
                YOUR NAME
              </Text>
            </View>
            <View style={styles.flexCenter}>
              <Text style={{color: '#fff', letterSpacing: 2}}>
                your-email@email.com
              </Text>
            </View>
            <View style={styles.flexCenter}>
              <View style={styles.Box}>
                <View>
                  <Text
                    style={{
                      color: '#1cb7ef',
                      textAlign: 'center',
                      marginTop: 5,
                      fontWeight: 'bold',
                    }}>
                    BELANCE
                  </Text>
                </View>
                <View>
                  <Text
                    style={{
                      textAlign: 'center',
                      fontSize: 30,
                      color: '#03588b',
                      fontWeight: 'bold',
                      letterSpacing: 2,
                    }}>
                    $4,180.20
                  </Text>
                </View>
                <View style={{alignItems: 'center'}}>
                  <TouchableOpacity
                    style={styles.Btn}
                    onPress={() => props.navigation.navigate('Transaction')}>
                    <Text
                      style={{
                        textAlign: 'center',
                        color: '#fff',
                        letterSpacing: 1,
                      }}>
                      TRANSFER
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          <View style={{flex: 0.49}}>
            <View>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 18,
                  color: '#1cb7ef',
                  marginTop: 10,
                  marginBottom: 10,
                  letterSpacing: 2,
                }}>
                LATEST TRANSACTIONS
              </Text>
            </View>
            <View style={styles.flexDir}>
              <View style={{width: '20%'}}>
                <BarIcon
                  name="circle"
                  size={40}
                  color="#164479"
                  style={{textAlign: 'center'}}
                />
              </View>
              <View style={{width: '60%'}}>
                <Text style={{fontSize: 18, color: '#000'}}>
                  Lorem Ipsum Company Recieved Payment
                </Text>
              </View>
              <View style={{width: '25%'}}>
                <Text style={{fontSize: 16, color: '#000'}}>$2,030.80</Text>
              </View>
            </View>
            <View style={styles.flexDir}>
              <View style={{width: '20%'}}>
                <BarIcon
                  name="circle"
                  size={40}
                  color="#164479"
                  style={{textAlign: 'center'}}
                />
              </View>
              <View style={{width: '60%'}}>
                <Text style={{fontSize: 18, color: '#000'}}>
                  Lorem Ipsum Company Recieved Payment
                </Text>
              </View>
              <View style={{width: '25%'}}>
                <Text style={{fontSize: 16, color: '#000'}}>$2,030.80</Text>
              </View>
            </View>
            <View style={styles.flexDir}>
              <View style={{width: '20%'}}>
                <BarIcon
                  name="circle"
                  size={40}
                  color="#164479"
                  style={{textAlign: 'center'}}
                />
              </View>
              <View style={{width: '60%'}}>
                <Text style={{fontSize: 18, color: '#000'}}>
                  Lorem Ipsum Company Recieved Payment
                </Text>
              </View>
              <View style={{width: '25%'}}>
                <Text style={{fontSize: 16, color: '#000'}}>$2,030.80</Text>
              </View>
            </View>
            <View style={styles.flexDir}>
              <View style={{width: '20%'}}>
                <BarIcon
                  name="circle"
                  size={40}
                  color="#164479"
                  style={{textAlign: 'center'}}
                />
              </View>
              <View style={{width: '60%'}}>
                <Text style={{fontSize: 16, color: '#000'}}>
                  Lorem Ipsum Company Recieved Payment
                </Text>
              </View>
              <View style={{width: '25%'}}>
                <Text style={{fontSize: 16, color: '#000'}}>$2,030.80</Text>
              </View>
            </View>
          </View>
          <View>
            <TouchableOpacity>
              <Text
                style={{
                  textAlign: 'right',
                  color: '#07c1f5',
                  paddingRight: 20,
                  paddingBottom: 10,
                }}></Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
  },
  topBar: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingLeft: 15,
    paddingRight: 15,
  },
  Image: {
    width: 140,
    height: 140,
  },
  Pro: {
    width: 130,
    height: 130,
  },
  flexCenter: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  Box: {
    width: '70%',
    height: 100,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 20,
  },
  Btn: {
    backgroundColor: '#164479',
    width: '35%',
    height: 30,
    padding: 5,
    borderRadius: 5,
  },
  flexDir: {
    width: '100%',
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
  },
});
