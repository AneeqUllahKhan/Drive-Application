import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styling from '../assets/Styling/Styling';

function SMButton(props) {
  const {label, onPress} = props;
  return (
    <>
      <TouchableOpacity onPress={onPress} style={styling.btn}>
        <Text style={[styling.textWhite, styling.textCenter, styling.fs4]}>
          {label}
        </Text>
      </TouchableOpacity>
    </>
  );
}
export default SMButton;
