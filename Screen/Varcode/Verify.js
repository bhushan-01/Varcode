import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import Signup from './Signup';
import Main from './Tabsnav/Main'
import AntDesign from 'react-native-vector-icons/AntDesign';

const Verify = ({navigation}) => {
  return (
    <View style={styles.cont}>
      <View style={styles.cont1}>
        <Image source={require('../Images/ml.png')} style={styles.img} />
        <TouchableOpacity onPress={()=>{navigation.navigate(Signup)}}>
          <AntDesign name="left" size={30} style={styles.icon} />
        </TouchableOpacity>

        <Text style={styles.Text}>Verify</Text>
      </View>
      <View style={styles.cont2}>
        <Text style={styles.t1}>
          Please check your email for the {'\n'}
          verification code sent to you.
        </Text>

        <View style={styles.ti}>
          <TextInput
            placeholder="0"
            placeholderTextColor={'white'}
            style={styles.ti1}
            maxLength={1}
            keyboardType={'number-pad'}
          />
          <TextInput
            placeholder="0"
            placeholderTextColor={'white'}
            style={styles.ti1}
            maxLength={1}
            keyboardType={'number-pad'}
          />
          <TextInput
            placeholder="0"
            placeholderTextColor={'white'}
            style={styles.ti1}
            maxLength={1}
            keyboardType={'number-pad'}
          />
          <TextInput
            placeholder="0"
            placeholderTextColor={'white'}
            style={styles.ti1}
            maxLength={1}
            keyboardType={'number-pad'}
          />
        </View>
        <View style={styles.v5}>
          <Text style={styles.n}>Didn't receive an email?</Text>
          <TouchableOpacity>
            <Text style={styles.n2}> Send again</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.l}>
          <TouchableOpacity onPress={() => {navigation.navigate(Main)}}>
            <Text
                          style={styles.btn}>
              Complete
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Verify;

const styles = StyleSheet.create({
  btn: {
    color: 'black',
    fontSize: 20,
    marginHorizontal: '37%',
    margin: 10,
  },
  l: {
    marginLeft: 10,
    marginRight:10,
    borderRadius: 20,
    backgroundColor: 'white',
    alignSelf: 'center',
    marginTop: 130,
  },
  v5: {
    margin: 18,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  n: {
    color: 'white',
    fontSize: 14,
  },
  n2: {
    color: 'orange',
    fontSize: 14,
  },

  ti: {
    marginTop: 18,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  ti1: {
    color:'#fff',
    fontSize: 24,
    paddingLeft: 14,
    margin: 8,
    width: '10%',
    backgroundColor: '#424D73',
    borderRadius: 5,
  },
  t1: {
    color: 'white',
    alignSelf: 'center',
    marginTop: '20%',
    fontSize: 18,
    textAlign: 'center',
  },

  Text: {
    color: 'white',
    fontWeight: 'bold',
    margin: 5,
    color: 'white',
    fontSize: 36,
    marginLeft: 20,
  },
  icon: {
    color: 'white',
    marginTop: 25,

    margin: 10,
  },
  img: {
    marginTop: '32%',
    position: 'absolute',
    alignSelf: 'center',
    resizeMode: 'contain',
    height: '50%',
    width: '50%',
  },
  cont: {
    flex: 1,
  },
  cont1: {
    flex: 1,
    backgroundColor: '#3D67FF',
  },
  cont2: {
    flex: 1.85,
    zIndex: -1,
    backgroundColor: '#363F61',
  },
});
 