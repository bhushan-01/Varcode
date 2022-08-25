import { StyleSheet, Text,Animated, View ,SafeAreaView, StatusBar} from 'react-native'
import React from 'react'
import { Images,Theme } from '../Constants'
const {onboarding1,onboarding2,onboarding3}=Images
// theme
const {COLORS,FONTS,SIZES }=Theme

const Onboarding = () => {

    function rendercontent() {
        <Animated.ScrollView>
            { }
        </Animated.ScrollView>
    }

    return (
      <SafeAreaView style={styles.container}>
          
{rendercontent()}
    </SafeAreaView>
  )
}

export default Onboarding

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:COLORS.white
    }


})                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        