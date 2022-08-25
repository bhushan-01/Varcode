import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Scroll from './Components/Scrollcomponent/Scroll';

const Search = () => {
  return (
    <View style={styles.v1}>
      <ScrollView>
        <View style={styles.v2}>
          <AntDesign name="search1" size={20} style={styles.icon} />
          <TextInput
            style={styles.ti1}
            placeholderTextColor={'#7E7E7E'}
            placeholder="Search for a concept, terms, or keyword."
          />
        </View>
        <View style={styles.v3}>
          <View style={styles.v4}>
            <Text style={styles.t1}> Variables </Text>
          </View>
          <View style={styles.v4}>
            <Text style={styles.t1}> Functions </Text>
          </View>
          <View style={styles.v4}>
            <Text style={styles.t1}> Lorem Ipsum </Text>
          </View>
        </View>

        {/* Scroll  */}
        <View style={styles.v5}>
          <Text style={styles.t2}>
            {' '}
            What can we help you find,{'\n'} vark?{' '}
          </Text>
        </View>

        <View style={styles.Sc}>
        <Scroll/>
        </View>
        {/* more way to learn in 2021 */}

        <View style={styles.v6}>
          <Text style={styles.t3}>More ways to learn in 2021</Text>
        </View>

        {/* image with learn in 2021 */}
        <TouchableOpacity>
          <View style={styles.learn}>
            <Image
              style={styles.img}
source={require('../../Images/img3.png')}
            />

            <View style={styles.imgt}>
              <Text style={styles.t8}>Find what language works for you! </Text>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.{' '}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  //image with learn in 2021
  t8: {
    color: 'black',
    fontSize: 14,
    fontWeight: '700',
  },
  imgt: {
    backgroundColor: '#fff',
    marginRight: 19,
    paddingBottom: 25,
    paddingLeft: 8,
    padding: 5,
    borderBottomLeftRadius: 19,
    borderBottomRightRadius: 19,
  },
  img: {
    resizeMode:'contain',
    borderTopRightRadius: 19,
    borderTopLeftRadius: 19,
    width: '94.5%',
    height: '40%',
  },
  learn: {
    paddingBottom:60,
    marginTop: 39,
    marginLeft: 20,
  },

  // more way to learn in 2021
  v6: {
    marginTop: 25,
    marginLeft: 20,
  },
  t3: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '700',
  },
  // scro;;
  Sc: {
    marginTop: 25,
    marginLeft: 20,
    borderRadius: 19,
  },
  v5: {
    marginTop: 50,
    marginLeft: 20,
  },
  t2: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '700',
  },
  // search bar and 3 contents
  v4: {
    margin: 5,
    marginTop: 11,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  v3: {
    marginLeft: 18,
    flexDirection: 'row',
  },
  icon: {
    margin: 12,
    color: '#CCCCCC',
  },

  v2: {
    borderRadius: 145,
    marginRight: 20,
    marginLeft: 20,
    marginTop: 70,
    backgroundColor: '#fff',
    flexDirection: 'row',
  },

  ///
  v1: {
    flex: 1,
    backgroundColor: '#3D67FF',
    borderRadius: 20,
  },
});
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   