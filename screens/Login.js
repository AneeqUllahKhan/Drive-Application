import React, {useState} from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import SMTextField from '../component/SMTextInput';
import styling from '../assets/Styling/Styling';
import SMButton from '../component/SMButton';
import GoogleButton from '../component/GoogleButton';
import auth from '@react-native-firebase/auth';

const Login = ({navigation}) => {
  const [model, setModel] = useState({});

  let loginuser = () => {
    auth()
      .signInWithEmailAndPassword(model.email, model.password)
      .then(res => {
        console.log(res.user.uid);
        navigation.navigate('home');
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <View style={[styling.mt5]}>
      <View style={[styling.flexCenter, styling.mt3]}>
        <Image source={require('../assets/logo2.png')} />
      </View>
      <View style={[styling.p2, styling.w100]}>
        <SMTextField
          onChangeText={e => setModel({...model, email: e})}
          label="Email"
        />
      </View>
      <View style={[styling.p2, styling.w100]}>
        <SMTextField
          onChangeText={e => setModel({...model, password: e})}
          label="Password"
        />
      </View>
      <View style={[styling.p2, styling.w100]}>
        <SMButton label="Login" onPress={loginuser} />
      </View>
      <View style={[styling.alignItemsCenter]}>
        <Text>
          Do Not Have An Account ?{' '}
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('signup');
            }}>
            <Text>Signup</Text>
          </TouchableOpacity>
        </Text>
      </View>
      <View style={[styling.p2, styling.w100, styling.mt2]}>
        <GoogleButton label="Continue with Google" />
      </View>
    </View>
  );
};

export default Login;
