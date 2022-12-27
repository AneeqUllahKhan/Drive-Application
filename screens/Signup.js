import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import SMTextField from '../component/SMTextInput';
import styling from '../assets/Styling/Styling';
import SMButton from '../component/SMButton';
import GoogleButton from '../component/GoogleButton';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';

const Signup = ({navigation}) => {
  const [model, setModel] = useState({});

  let signupuser = () => {
    auth()
      .createUserWithEmailAndPassword(model.email, model.password)
      .then(res => {
        // Signed in
        console.log(res);
        database()
          .ref(`appusers/${res.user.uid}`)
          .set(model)
          .then(() => {
            navigation.navigate('login', res.user.uid);
          })
          .catch(dbError => {
            console.log(dbError);
          });
      })
      .catch(err => {
        console.log(err);
        // ..
      });
  };
  return (
    <View>
      <View style={[styling.mt5]}>
        <ScrollView>
          <View style={[styling.flexCenter, styling.mt3]}>
            <Image source={require('../assets/logo2.png')} />
          </View>
          <View style={[styling.p2]}>
            <SMTextField
              onChangeText={e => setModel({...model, userName: e})}
              label="User Name"
            />
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
            <SMButton label="Signup" onPress={signupuser} />
          </View>
          <View style={[styling.flexCenter]}>
            <Text>
              Already Have An Account ?
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('login');
                }}>
                <Text> Login</Text>
              </TouchableOpacity>
            </Text>
          </View>
          <View style={[styling.p2, styling.w100, styling.mt1]}>
            <GoogleButton label="Continue with Google" />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Signup;
