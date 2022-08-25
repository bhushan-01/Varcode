import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView
} from 'react-native';
import React, {useState } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import Welcome from './Welcome';
import Verify from './Verify';
const Signup = ({ navigation }) => {
  //username
  const [username, setusername] = useState('');
  const [nameerror, setnameerror] = useState(null);

  function validateusername(username) {
    const re =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%_*?&])[A-Za-z\d@_^$!%*?&]{2,15}$/;
    if (username.length < 3 || !re.test(username)) {
      setnameerror(
        '* Name is not valid\n* Must contain Special character \n* Must contain Numeric character',
      ); 
      return false;
    } else {
      setnameerror(null);
      return true;
    }
  }

  //Email
  const [email, setemail] = useState('');
  const [emailerror, setemailerror] = useState(null);
  function validateemail(email) {
    const re =
      /^\w+([\.-]?\w+)*@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.){1,2}[a-zA-Z]{2,3}))$/;
    if (email.length < 3 || !re.test(email)) {
      setemailerror(
        '* Email is not valid \n* Email must contain @,. \n* For ex:-"John@example.com " ',
      );
      return false;
    } else {
      setemailerror(null);
      return true;
    }
  }
  //Password
  const [password, setpassword] = useState('');
  const [passerror, setpasserror] = useState(null);
  function validatepassword(password) {
    const re =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{2,15}$/;
    if (password.length < 8 || !re.test(password)) {
      setpasserror(
        '* Password is invalid\n* First character must be uppercase \n* Must contain Special Characters\n* Must contain Numeric characters',
      );
      return false;
    } else {
      setpasserror(null);
      return true;
    }
  }
//validate all
  function validateall() {
    if (validateusername(username) && validatepassword(password) && validateemail(email)) {
      
      navigation.navigate('Verify');
    }
    else if (validateemail(email )&& validatepassword(password)) {
      validateemail(email);
    }
    else {
      validatepassword(password);
    }
  }

  return (
    <ScrollView style={styles.login}>
      <View style={{marginBottom:50}}>
        <View style={styles.v1}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(Welcome);
            }}>
            <AntDesign name="left" size={28} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.t1}>Sign Up</Text>
        </View>
        <View style={{marginTop: 95}}>
          <View>
            <Text style={styles.t}>Username</Text>
            <View
              style={[
                styles.v3,
                {borderColor: nameerror ? 'red' : '#3D67FF', borderWidth: 3},
              ]}>
              <Feather
                name="user"
                size={26}
                style={[styles.i, {color: nameerror ? 'red' : 'black'}]}
              />

              <TextInput
                value={username}
                onChangeText={name => {
                  validateusername(name.trim());
                  setusername(name.trim());
                }}
                maxLength={30}
                placeholder="Username"
                placeholderTextColor={'gray'}
                style={styles.tip3}
              />
            </View>
            {setnameerror && (
              <Text style={{color: 'red', marginLeft: 10, margin: 5}}>
                {nameerror}
              </Text>
            )}
          </View>

          <View>
            <Text style={styles.t}>Email Address</Text>
            <View
              style={[
                styles.v3,
                {borderColor: emailerror ? 'red' : '#3D67FF', borderWidth: 3},
              ]}>
              <MaterialCommunityIcons
                name="email-outline"
                size={28}
                style={[styles.i, {color: emailerror ? 'red' : 'black'}]}
              />

              <TextInput
                value={email.trim()}
                onChangeText={email => {
                  validateemail(email.trim());
                  setemail(email.trim());
                }}
                maxLength={30}
                placeholder="Email Address"
                placeholderTextColor={'gray'}
                style={styles.tip1}
              />
            </View>
            {setemailerror && (
              <Text style={{color: 'red', paddingLeft: 10}}>{emailerror}</Text>
            )}
          </View>
          <View>
            <Text style={styles.t}>Password</Text>
            <View
              style={[
                styles.v3,
                {borderColor: passerror ? 'red' : '#3D67FF', borderWidth: 3},
              ]}>
              <Feather
                name="lock"
                size={26}
                style={[styles.i, {color: passerror ? 'red' : 'black'}]}
              />

              <TextInput
                value={password.trim()}
                onChangeText={pass => {
                  validatepassword(pass.trim());
                  setpassword(pass.trim());
                }}
                maxLength={16}
                placeholder="Password"
                secureTextEntry={true}
                placeholderTextColor={'gray'}
                style={styles.tip2}
              />
            </View>
            {setpasserror && (
              <Text style={{color: 'red', paddingLeft: 10}}>{passerror}</Text>
            )}
          </View>
          <View style={styles.l}>
            <TouchableOpacity
              onPress={() => {
                validateall();
              }}>
              <Text style={styles.btn}>Continue</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  //login button
  btn: {
    // position:'absolute',
    color: 'white',
    fontSize: 20,
    marginHorizontal: '37%',
    margin: 10,
  },
  l: {
    borderRadius: 20,
    backgroundColor: 'black',
    alignSelf: 'center',
  marginTop:90,
  },

  //textinput email address //password
  i: {
    color: 'black',

    marginLeft: 14,

    margin: 10,
  },
  v3: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 20,
    marginLeft: 17,
    marginRight: 17,
  },
  t: {
    color: 'white',
    marginLeft: 18,
    marginBottom: 9,

    fontSize: 14,
  },
  tip1: {
    marginLeft: 4.5,

    fontSize: 14,
    alignItems: 'center',
    alignSelf: 'center',
  },
  tip2: {
    marginLeft: 4,
    fontSize: 14,
    alignItems: 'center',
    alignSelf: 'center',
  },
  tip3: {
    marginLeft: 5,
    fontSize: 14,
    alignItems: 'center',
    alignSelf: 'center',
  },

  ////
  login: {
    flex: 1,
    backgroundColor: '#3D67FF',
    borderRadius: 20,

  },
  v1: {
    paddingLeft: 10,
    marginTop: 60,

  },
  t1: {
    marginTop: 10,
    fontWeight: 'bold',
    //   fontFamily:'Inter',
    color: 'white',
    fontSize: 36,
    marginLeft: 8,
  },
});
