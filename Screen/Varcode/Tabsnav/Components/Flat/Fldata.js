import { StyleSheet, Text,FlatList,ScrollView ,View } from 'react-native'
import SwiperFlatList from 'react-native-swiper-flatlist';
import React from 'react'

import Comp from './Comp';

const Fldata = () => {
    const arr = [
      {
        key: 1,
        name: 'Variables',
        des: 'A JavaScript variable is simply a name of storage location',
        val1: 'Community Forums',
        val2: 'Review Concept',
        val3: 'Practice Skills',
        col: '#FFC839',
      },
      {
        key: 2,
        name: 'Data types',
        des: 'A JavaScript variable is simply a name of storage location',
        val1: 'Community Forums',
        val2: 'Review Concept',
        val3: 'Practice Skills',

        col: '#14D39A',
      },
      {
        key: 3,
        name: 'Concepts',
        des: 'A JavaScript variable is simply a name of storage location',
        val1: 'Community Forums',
        val2: 'Review Concept',
        val3: 'Practice Skills',
        col: '#FFA439',
      },
    ];
  return (
    <View>
      <ScrollView style={{}}>
        <Text
          style={{
            color: '#fff',
            marginTop: 40,
            marginLeft: 20,
            fontSize: 24,
            fontWeight: '600',
          }}>
          Javascript
        </Text>
        <View>
          <SwiperFlatList
            showPagination
            horizontal={true}
            paginationStyle={{
              marginBottom: '-5%',
            }}
            paginationStyleItem={{
              width: 15,
              height: 15,
              backgroundColor: 'white',
            }}
            paginationActiveColor="#FFC839"
            data={arr}
            renderItem={({item}) => {
              return (
                <Comp
                  Title={item.name}
                  Des={item.des}
                  Value1={item.val1}
                  Value2={item.val2}
                  Value3={item.val3}
                  col={item.col}
                />
              );
            }}
          />
        </View>
        <Text
          style={{
            color: '#fff',
            marginTop: 40,
            marginLeft: 20,
            fontSize: 24,
            fontWeight: '600',
          }}>
          Python
        </Text>
        <View style={{marginTop: 20,marginBottom:200}}>
          <SwiperFlatList
            showPagination
            horizontal={true}
            paginationStyle={{
              marginBottom: '-5%',
            }}
            paginationStyleItem={{
              width: 15,
              height: 15,
              backgroundColor: 'white',
            }}
            paginationActiveColor="#FFC839"
            data={arr}
            renderItem={({item}) => {
              return (
                <Comp
                  Title={item.name}
                  Des={item.des}
                  Value1={item.val1}
                  Value2={item.val2}
                  Value3={item.val3}
                  col={item.col}
                />
              );
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
}


export default Fldata
const styles = StyleSheet.create({})