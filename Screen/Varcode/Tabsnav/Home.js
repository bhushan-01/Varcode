import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Fldata from './Components/Flat/Fldata'


const Home = () => {
  return (
    <View style={styles.home}>
      
      <Text style={styles.t1}>Home Feed</Text>





      <View>
      
       
        <Fldata />
        
      </View>
      <View style={styles.img}>
      <Image source={require('../../Images/Wave.png')}/>
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  t2: {
    marginLeft: 20,
    marginTop:40,
    color: '#fff',
    fontSize: 24,
    fontWeight: '600',
 },
  t1: {
    marginLeft: 20,
    fontSize: 36,
    marginTop: 40,
    color:'#fff',
    fontWeight:'700'
  },
  img: {
    zIndex:-1,
    marginTop:200,
    position:'absolute',
  },
  home: {
    flex: 1,
    backgroundColor: '#3D67FF',

  },
});