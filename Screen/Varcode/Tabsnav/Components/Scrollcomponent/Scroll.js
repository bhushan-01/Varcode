import {Image, ScrollView,StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Scroll = () => {
  return (
    <View >
        <ScrollView horizontal={true} 
          showsVerticalScrollIndicator={false}
  showsHorizontalScrollIndicator={false}

        style={styles.v3}>

        
        <View style={styles.v1}>
 
 <TouchableOpacity>
     <Image style={styles.img} source={require('../../../../Images/img2.png')}/>
          <Text style={styles.t1}>Variables</Text>
 </TouchableOpacity>     
  
        </View>
        <View style={styles.v1}>
        <TouchableOpacity>

            <Image style={styles.img} source={require('../../../../Images/img1.png') } />
          <Text style={styles.t1}>Python</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.v1}>
          <TouchableOpacity>

            <Image style={styles.img} source={require('../../../../Images/img2.png') } />
          <Text style={styles.t1}>Lorem Ipsum</Text>
          </TouchableOpacity>
        </View>

        </ScrollView>
    </View>
  )
}

export default Scroll

const styles = StyleSheet.create({
  v3:{
    

  },
 img:{
borderTopLeftRadius:19,
borderTopRightRadius:19,
 },
  t1:{
margin:5,
fontSize:14,
fontWeight:'700',
color:'black',

  },

  v1:{


    backgroundColor:'#fff',
    paddingBottom:40,
    marginRight:12,
    borderRadius:19,
  }
})