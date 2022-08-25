import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  Switch,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import SwitchToggle from 'react-native-switch-toggle';
const Settings = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  // const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [isenabled, setIsenabled] = useState(false);
  // const toggleswitch = () => setIsenabled(previousstate => !previousstate);
  return (
    <View style={styles.v1}>
      <ScrollView>
        {/* Image style with heading */}
        <View style={styles.v2}>
          <Image
            source={require('../../Images/Ellipse1.png')}
            style={styles.img}
          />
          <View style={styles.v3}>
            <Text style={styles.t1}>Varsed</Text>
            <Text style={styles.t2}>Premium Enabled</Text>
          </View>
          <TouchableOpacity style={styles.to3}>
            <Text style={styles.t3}> Edit</Text>
          </TouchableOpacity>
        </View>

        {/* your stats style */}
        <View style={styles.v4}>
          <Text style={styles.t4}> Your Stats </Text>
          <View style={styles.v5}>
            <Text style={styles.t5}>3</Text>
          </View>
          <Image
            source={require('../../Images/Vector.png')}
            style={styles.vec}
          />
        </View>

        {/* stats data */}
        <View style={styles.v6}>
          <View style={styles.v7}>
            <Text style={styles.t6}>3</Text>
            <Text style={styles.t7}>CURRENT STREAK </Text>
          </View>
          <View style={styles.v7}>
            <Text style={styles.t6}>7</Text>
            <Text style={styles.t7}>BEST STREAK </Text>
          </View>
          <View style={styles.v7}>
            <Text style={styles.t8}>135</Text>
            <Text style={styles.t9}>QUESTIONS ATTEMPT</Text>
          </View>
          <View style={styles.v7}>
            <Text style={styles.t8}>114</Text>
            <Text style={styles.t}>QUESTIONS SOLVED</Text>
          </View>
        </View>
        {/*notification sectionb  */}
        <View style={styles.v8}>
          <Text style={styles.t10}>Notifications</Text>

          <View style={styles.v9}>
            <Text style={styles.t11}>
              Recieve daily reminders to consistently{'\n'}practice and review
              concepts.
            </Text>
            <SwitchToggle
              switchOn={isEnabled}
              onPress={() => setIsEnabled(!isEnabled)}
              circleColorOff="#C4C4C4"
              circleColorOn="#FFF"
              backgroundColorOn="#14D39A"
              backgroundColorOff="#FFF"
              containerStyle={{
                marginTop: 5,
                width: 50,
                height: 28,
                borderRadius: 25,
                padding: 3,
              }}
              circleStyle={{
                width: 20,
                height: 20,
                borderRadius: 20,
              }}
            />
          </View>
          <View style={styles.v9}>
            <Text style={styles.t11}>
              Recieve notifications for whenever there {'\n'}may be a new
              resource to help you on your {'\n'}coding journey.+++
            </Text>

            <SwitchToggle
              switchOn={isenabled}
              onPress={() => setIsenabled(!isenabled)}
              circleColorOff="#C4C4C4"
              circleColorOn="#FFF"
              backgroundColorOn="#14D39A"
              backgroundColorOff="#FFF"
              containerStyle={{
                marginTop: 5,
                width: 50,
                height: 28,
                borderRadius: 25,
                padding: 3,
              }}
              circleStyle={{
                width: 20,
                height: 20,
                borderRadius: 20,
              }}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  //notifiaction section

  v9: {
    justifyContent:'space-between',
    marginTop: 20,
    flexDirection: 'row',
  },
  t11: {
    color: '#FFF',
    fontSize: 13,
    fontWeight: '400',
  },
  v8: {
    marginTop: 40,
    marginLeft: 30,
    paddingBottom: 50,
    marginRight:10
  },
  t10: {
    fontSize: 24,
    fontWeight: '700',
    color: '#FFF',
  },

  //stats data
  v6: {
    marginLeft: 30,
    marginTop: 71,
  },

  v7: {
    flexDirection: 'row',
  },
  t6: {
    color: '#FFF',

    fontSize: 36,
    fontWeight: '700',
  },
  t: {
    color: '#FFF',
    marginLeft: '33%',
    alignSelf: 'center',
    fontSize: 14,
    fontWeight: '700',
  },
  t7: {
    color: '#FFF',
    marginLeft: '45%',
    alignSelf: 'center',
    fontSize: 14,
    fontWeight: '700',
  },
  t8: {
    color: '#FFF',
    fontSize: 36,
    fontWeight: '700',
  },
  t9: {
    color: '#FFF',
    alignSelf: 'center',
    marginLeft: '33%',

    fontSize: 14,
    fontWeight: '700',
  },

  // your  stats stylin
  t5: {
    color: '#FFC839',
  },
  vec: {
    margin: 8,
    marginRight: 20,
  },
  t4: {
    fontSize: 24,
    fontWeight: '700',
    color: '#FFF',
  },
  v5: {
    alignSelf: 'center',
    marginLeft: '47.5%',
    fontSize: 14,
  },
  v4: {
    alignSelf: 'center',
    flexDirection: 'row',
    marginTop: 50,
    marginLeft: 20,
  },

  //Image style with heading
  to3: {
    alignSelf: 'center',
    marginLeft: '23%',
  },
  t3: {
    fontSize: 14,

    color: '#FFC839',
  },
  v3: {
    alignSelf: 'center',
    marginLeft: '8%',
    marginTop: '2%',
  },
  t2: {
    color: '#FFF',
    fontSize: 14,
  },
  t1: {
    fontSize: 24,
    fontWeight: '700',
    color: '#FFf',
  },
  img: {
    height: '110%',
    width: '18%',
    resizeMode:'contain'
  },
  v2: {
    marginTop: 70,
    marginLeft: 30,
    flexDirection: 'row',
  },
  //////////
  v1: {
    flex: 1,
    backgroundColor: '#3D67FF',
    borderRadius: 10,
  },
});
