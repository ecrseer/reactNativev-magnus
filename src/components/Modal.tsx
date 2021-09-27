import React, { useEffect, useState } from 'react';
import { View, Animated } from 'react-native';

const Modal = ({ visible }) => {
  const [width] = useState(new Animated.Value(0));
  const [height] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(width, {
      toValue: 200,
      duration: 500,
      useNativeDriver: false,
    }).start();
    Animated.timing(height, {
      toValue: 200,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }, []);

  useEffect(() => {
    if (!visible) {
      Animated.timing(width, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
      }).start();
      Animated.timing(height, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
      }).start();
    }
  }, [visible]);

  return (
    <Animated.View
      style={{
        width,
        height,
        backgroundColor: '#FFF',
        marginTop: 100,
      }}
    />
  );
};

export default Modal;
