import React from 'react';
import {TouchableOpacity, Text, StyleSheet, Image} from 'react-native';
import styling from '../assets/Styling/Styling';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';

function GoogleButton(props) {
  const {label, onPress} = props;
  return (
    <>
      <TouchableOpacity onPress={onPress} style={styles.btn}>
        <Text style={[styling.textCenter, styling.fs4]}>
          {label} &nbsp;
          <Image
            style={styles.image}
            source={require('../assets/googlelogo.png')}
          />
        </Text>
      </TouchableOpacity>
    </>
  );
}
export default GoogleButton;
const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#F0F0F0',
    color: '#000000',
    padding: 10,
    paddingHorizontal: 25,
    fontSize: 16,
    borderRadius: 100,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.31,
    shadowRadius: 5.46,

    elevation: 9,
  },
  image: {
    height: 18,
    width: 16,
  },
});
