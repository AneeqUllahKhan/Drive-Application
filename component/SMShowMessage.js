import React from 'react';
import {View, Text, Modal} from 'react-native';
import styles from '../styling';

function SMShowMessage(props) {
  const {open, close, heading, message} = props;

  let closeModal = () => {
    close(false);
  };
  return (
    <>
      <Modal
        animationType="fade"
        onRequestClose={closeModal}
        transparent={true}
        visible={open}>
        <View style={[styles.h100, styles.flexCenter, styles.bgTransparent]}>
          <View
            style={[
              styles.w75,
              styles.bgWhite,
              styles.p3,
              styles.rounded,
              styles.shadow1,
            ]}>
            <Text
              style={[
                styles.bgWarning,
                styles.p2,
                styles.textWhite,
                styles.textCenter,
              ]}>
              {heading}
            </Text>
            <Text>{message}</Text>
          </View>
        </View>
      </Modal>
    </>
  );
}
export default SMShowMessage;
