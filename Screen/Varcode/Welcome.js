import { StyleSheet, Text, View ,Image,TouchableOpacity} from 'react-native'
import React from 'react'
import Login from './Login';
import Signup from './Signup';
const Welcome = ({navigation}) => {
  return (
    <View style={styles.v1}>
      <View style={styles.v2}>
        <Image source={require('../Images/Logo.png')} style={styles.logo} />
        <Text style={styles.t1}>Welcome to</Text>
        <Text style={styles.t2}>VarCode</Text>

        <View style={styles.v3}>
          <TouchableOpacity style={styles.to1}>
            <Text
              style={styles.ti1}
              onPress={() => {
                navigation.navigate(Signup);
              }}>
              Sign Up
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.to2}>
            <Text
              style={styles.ti2}
              onPress={() => {
                navigation.navigate(Login);
              }}>
              Log In
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default Welcome

const styles = StyleSheet.create({
  v3: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: '60%',
  },
  to2: {
    marginLeft:7,
    backgroundColor: 'black',
    paddingHorizontal: 22,
    paddingVertical: 10,
    borderRadius: 20,
  },
  ti2: {
    // marginHorizontal: 35,
    fontFamily: 'Inter-VariableFont_slnt,wght',
    paddingHorizontal: 30,
    paddingVertical: -10,
    color: 'white',
    fontSize: 23,
  },

  ti1: {
    // marginHorizontal: 30,
    paddingHorizontal: 25,
    paddingVertical: -10,
    fontFamily: 'Inter-VariableFont_slnt,wght',
    color: 'black',
    fontSize: 24,
  },
  to1: {
    marginRight:7,
    backgroundColor: '#FFFF',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 20,
  },

  t2: {
    alignSelf: 'center',
    fontSize: 64,
    fontWeight: 'bold',
    color: 'white',
    marginTop: -10,
  },
  t1: {
    fontFamily: 'Inter-VariableFont_slnt,wght',

    marginTop: 31,
    alignSelf: 'center',
    fontSize: 24,
    color: 'white',
  },
  v1: {
    flex: 1,
    backgroundColor: '#3D67FF',
    borderRadius: 20,
  },

  logo: {
    height: 92,
    width: 120,
    alignSelf: 'center',
    marginTop: 169,
  },
});