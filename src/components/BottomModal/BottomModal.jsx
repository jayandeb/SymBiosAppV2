// BottomModal.js

import React from 'react';
import { View, Modal, TouchableOpacity, StyleSheet ,Text} from 'react-native';

const BottomModal = ({ visible, onClose, content }) => {
  return (
    <Modal
      transparent
      animationType="slide"
      visible={visible}
      onRequestClose={onClose}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}
      swipeDirection={['down']}
      swipeThreshold={50}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      hardwareAccelerated
      >

      <View style={styles.container}>
        <View style={styles.modalContent}>
          {content}
          <TouchableOpacity onPress={onClose}>
            <Text>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({

});

export default BottomModal;
