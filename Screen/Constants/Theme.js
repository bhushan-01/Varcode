import { Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

export const COLORS = {
    // 

    black: '#000000',
    white: '#FFFFFF',
    gray: '#696969',
    blue: ' #0000FF',
    // SIZES OF FONTS


};



export const SIZES = {
    //global size
    base: 8,
    font: 14,
    radius: 12,
    padding: 24,


    //font sizes
    h1: 30,
    h2: 22,
    h3: 16,
    h4: 14,
    body1: 38,
    body2: 32,
    body3: 16,
    body4: 14,

    // app Dimensions

    width,
    height

}


export const FONTS = {
    h1: { fontFamily: 'Roboto-Black', fontSize: SIZES.h1, lineHeight: 36 },
    h2: { fontFamily: 'Roboto-Black', fontSize: SIZES.h2, lineHeight: 30 },
    h3: { fontFamily: 'Roboto-Black', fontSize: SIZES.h3, lineHeight: 22 },
    h4: { fontFamily: 'Roboto-Black', fontSize: SIZES.h4, lineHeight: 22 },
    body1: { fontFamily: 'Roboto-Regular', fontSize: SIZES.body1, lineHeight: 36 },

    body2: { fontFamily: 'Roboto-Regular', fontSize: SIZES.body2, lineHeight: 30 },
    body3: { fontFamily: 'Roboto-Regular', fontSize: SIZES.body3, lineHeight: 22 },
    body4: { fontFamily: 'Roboto-Regular', fontSize: SIZES.body4, lineHeight: 22 },
};
const appTheme = {COLORS, SIZES, FONTS}

export default appTheme;