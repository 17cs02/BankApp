import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import LogoIcon from 'react-native-vector-icons/Ionicons';
import BarIcon from 'react-native-vector-icons/FontAwesome';
import LeftIcon from 'react-native-vector-icons/AntDesign';
import LeftIco from 'react-native-vector-icons/AntDesign';
import RightIco from 'react-native-vector-icons/AntDesign';
const Bhistory = () => {
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
          <View style={{width: '100%', backgroundColor: '#164479'}}>
            <View style={styles.flexRow}>
              <View>
                <TouchableOpacity style={styles.button}>
                  <Text
                    style={{
                      color: '#fff',
                      letterSpacing: 2,
                      fontSize: 18,
                    }}>
                    COMPLETE
                  </Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity style={styles.btn2}>
                  <Text style={{color: '#fff', letterSpacing: 2, fontSize: 18}}>
                    IN PROGRESS
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View>
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
                <Text style={{fontSize: 16}}>
                  Lorem Ipsum Company Recieved Payment
                </Text>
              </View>
              <View style={{width: '20%'}}>
                <Text style={{fontSize: 16}}>$2,030.80</Text>
              </View>
            </View>
            <View style={styles.flexDir}>
              <View style={{width: '20%'}}>
                <BarIcon
                  name="circle"
                  size={40}
                  color="#1cb7ef"
                  style={{textAlign: 'center'}}
                />
              </View>
              <View style={{width: '60%'}}>
                <Text style={{fontSize: 16}}>
                  Lorem Ipsum Company Recieved Payment
                </Text>
              </View>
              <View style={{width: '20%'}}>
                <Text style={{fontSize: 16}}>$2,030.80</Text>
              </View>
            </View>
            <View style={styles.flexDir}>
              <View style={{width: '20%'}}>
                <BarIcon
                  name="circle"
                  size={40}
                  color="#3a9968"
                  style={{textAlign: 'center'}}
                />
              </View>
              <View style={{width: '60%'}}>
                <Text style={{fontSize: 16}}>
                  Lorem Ipsum Company Recieved Payment
                </Text>
              </View>
              <View style={{width: '20%'}}>
                <Text style={{fontSize: 16}}>$2,030.80</Text>
              </View>
            </View>
            <View style={styles.flexDir}>
              <View style={{width: '20%'}}>
                <BarIcon
                  name="circle"
                  size={40}
                  color="#f2d011"
                  style={{textAlign: 'center'}}
                />
              </View>
              <View style={{width: '60%'}}>
                <Text style={{fontSize: 16}}>
                  Lorem Ipsum Company Recieved Payment
                </Text>
              </View>
              <View style={{width: '20%'}}>
                <Text style={{fontSize: 16}}>$2,030.80</Text>
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
                <Text style={{fontSize: 16}}>
                  Lorem Ipsum Company Recieved Payment
                </Text>
              </View>
              <View style={{width: '20%'}}>
                <Text style={{fontSize: 16}}>$2,030.80</Text>
              </View>
            </View>
            <View style={styles.flexDir}>
              <View style={{width: '20%'}}>
                <BarIcon
                  name="circle"
                  size={40}
                  color="#1cb7ef"
                  style={{textAlign: 'center'}}
                />
              </View>
              <View style={{width: '60%'}}>
                <Text style={{fontSize: 16}}>
                  Lorem Ipsum Company Recieved Payment
                </Text>
              </View>
              <View style={{width: '20%'}}>
                <Text style={{fontSize: 16}}>$2,030.80</Text>
              </View>
            </View>
            <View style={styles.flexDir}>
              <View style={{width: '20%'}}>
                <BarIcon
                  name="circle"
                  size={40}
                  color="#558f0e"
                  style={{textAlign: 'center'}}
                />
              </View>
              <View style={{width: '60%'}}>
                <Text style={{fontSize: 16}}>
                  Lorem Ipsum Company Recieved Payment
                </Text>
              </View>
              <View style={{width: '20%'}}>
                <Text style={{fontSize: 16}}>$2,030.80</Text>
              </View>
            </View>
            <View style={styles.flexDir}>
              <View style={{width: '20%'}}>
                <BarIcon
                  name="circle"
                  size={40}
                  color="#8f3f0e"
                  style={{textAlign: 'center'}}
                />
              </View>
              <View style={{width: '60%'}}>
                <Text style={{fontSize: 16}}>
                  Lorem Ipsum Company Recieved Payment
                </Text>
              </View>
              <View style={{width: '20%'}}>
                <Text style={{fontSize: 16}}>$2,030.80</Text>
              </View>
            </View>
            <View style={styles.flexDir}>
              <View style={{width: '20%'}}>
                <BarIcon
                  name="circle"
                  size={40}
                  color="#c78b8b"
                  style={{textAlign: 'center'}}
                />
              </View>
              <View style={{width: '60%'}}>
                <Text style={{fontSize: 16}}>
                  Lorem Ipsum Company Recieved Payment
                </Text>
              </View>
              <View style={{width: '20%'}}>
                <Text style={{fontSize: 16}}>$2,030.80</Text>
              </View>
            </View>
          </View>
          <View style={{width: '100%', alignItems: 'center'}}>
            <View
              style={{
                flexDirection: 'row',
                width: '80%',
                justifyContent: 'space-around',
                marginTop: 60,
              }}>
              <View>
                <LeftIco name="left" size={30} color="#000"></LeftIco>
              </View>
              <View>
                <Text>1</Text>
              </View>
              <View>
                <Text>2</Text>
              </View>
              <View>
                <Text>3</Text>
              </View>
              <View>
                <Text>4</Text>
              </View>
              <View>
                <Text>5</Text>
              </View>
              <View>
                <RightIco name="right" size={30} color="#000"></RightIco>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Bhistory;

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
  button: {
    alignItems: 'center',
    backgroundColor: '#1cb7ef',
    padding: 10,
    width: 150,
    marginTop: 12,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  btn2: {
    alignItems: 'center',
    padding: 10,
    width: 160,
    marginTop: 12,
    borderWidth: 1,
    borderRadius: 5,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: 'grey',
  },
  flexRow: {
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-around',
    alignSelf: 'center',
    marginTop: 50,
  },
  flexDir: {
    width: '100%',
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
  },
});
