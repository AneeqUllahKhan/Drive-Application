import React from 'react';
import {Image, Text, View} from 'react-native';
import styling from '../assets/Styling/Styling';
import SMButton from '../component/SMButton';

const SplashScreen = ({navigation}) => {
  return (
    <View>
      <View style={[styling.flexCenter, styling.mt2]}>
        <Image source={require('../assets/img1.png')} />
        <Image source={require('../assets/logo2.png')} />
      </View>
      <View style={[styling.p2, styling.w100]}>
        <SMButton
          label="Get Started"
          onPress={() => {
            navigation.navigate('signup');
          }}
        />
      </View>
    </View>
  );
};

export default SplashScreen;
