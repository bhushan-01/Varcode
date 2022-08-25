import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Welcome from './Welcome';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import Main from './Tabsnav/Main';

const Login = ({navigation}) => {
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
    if ( validateemail(email) && validatepassword(password)) {
      navigation.navigate(Main);
    } else {
      validatepassword(password);
    }
  }

  return (
    <View style={styles.login}>
      <ScrollView>
        <View style={styles.v1}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(Welcome);
            }}>
            <AntDesign name="left" size={25} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.t1}>Log In</Text>
        </View>
        <View>
          <View style={styles.v2}>
            <Image source={require('../Images/nx.png')} style={styles.img} />
            <Text style={styles.t2}>Log in with Google</Text>
            <TouchableOpacity style={styles.icon}>
              <AntDesign name="arrowright" size={28} />
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.t}>Email Address</Text>
            <View
              style={[
                styles.v3,
                {borderColor: emailerror ? 'red' : '#3D67FF', borderWidth: 2},
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
                {borderColor: passerror ? 'red' : '#3D67FF', borderWidth: 2},
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
              <Text style={styles.btn}>Log In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  //login button
  btn: {
    color: 'white',
    fontSize: 20,
    marginHorizontal: 150,
    margin: 10,
    
  },
  l: {
    borderRadius: 20,
    backgroundColor: 'black',
    alignSelf: 'center',
    marginTop: 110,
    marginBottom:120,
  },

  //textinput email address
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
    marginTop: 7,
    fontSize: 14,
  },
  tip1: {
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
  //Login with google
  icon: {
    alignSelf: 'center',
    marginLeft: 100,
  },

  img: {
    resizeMode: 'contain',
    height: 35,
    width: 35,
  },
  t2: {
    marginLeft: 17,
    fontSize: 18,
    color: 'black',
    alignSelf: 'center',
  },

  v2: {
    marginTop: 130,
    padding: 13,
    marginLeft: 17,
    marginRight: 17,

    backgroundColor: '#fff',
    flexDirection: 'row',
    borderRadius: 20,
  },
  ////
  login: {
    flex: 1,
    backgroundColor: '#3D67FF',
    borderRadius: 20,
  },
  v1: {
    paddingLeft: 10,
    marginTop: 50,
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
                                                                                                                                                                                   