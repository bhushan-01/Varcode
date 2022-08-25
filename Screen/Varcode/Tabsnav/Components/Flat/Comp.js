import { StyleSheet, Text, View,TouchableOpacity, ScrollView } from 'react-native'

import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'

const Comp = (props) => {
  return (
    <View>
      <ScrollView>
        <View style={styles.cont}>
          <View style={[styles.v1, {backgroundColor: props.col}]}>
            <Text style={styles.t1}>JAVASCRIPT COURSE </Text>
            <Text style={styles.t2}>{props.Title}</Text>
          </View>
          <View style={styles.vn}>
            <View style={styles.v3}>
              <Text style={styles.t3}>{props.Des}</Text>
            </View>
            <View style={styles.v2}>
              <Text style={styles.tn}>{props.Value1}</Text>
              <Text style={styles.min}> 5 min</Text>
              <TouchableOpacity>
                <AntDesign name="right" size={25} style={styles.icon} />
              </TouchableOpacity>
            </View>
            <View style={styles.v2}>
              <Text style={styles.tn}>{props.Value2}</Text>
              <Text style={[styles.min,{marginRight:90}]}> 5 min</Text>
              <TouchableOpacity>
                <AntDesign name="right" size={25} style={styles.icon1} />
              </TouchableOpacity>
            </View>
            <View style={styles.v2}>
              <Text style={styles.tn}>{props.Value3}</Text>
              <Text style={[styles.min,{marginRight:105}]}> 5 min</Text>
              <TouchableOpacity>
                <AntDesign name="right" size={25} style={styles.icon2} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default Comp

const styles = StyleSheet.create({
  min: {
    marginRight:70,
  },
  //bot
  icon2: {
    // marginLeft: '54.5%',
  },
  icon1: {
    // marginLeft: '48.5%',
  },
  icon: {
    // marginLeft: '40%',
    
    justifyContent:'space-evenly'
   
  },
  tn: {
    color: 'black',
    fontSize: 14,
    fontWeight: '700',
  },
  v2: {
    flexDirection: 'row',
justifyContent:'space-between',
    marginLeft: 30,
    margin: 12,
  },
  vn: {
    backgroundColor: '#fff',
      width: 300,
    
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,

    paddingBottom: 40,
  },
  v3: {
    marginLeft: 20,
    marginTop: 13,
    margin: 15,
  },

  //heading

  t2: {
    fontSize: 30,
    fontWeight: '700',
    color: '#fff',
  },
  t1: {
    color: 'white',
    fontSize: 14,
    fontWeight: '700',
  },

  //
  cont: {
    marginTop: 15,
    margin: 10,
    marginLeft: 20,
  },

    v1: {
        paddingLeft: 20,
       
    padding: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});