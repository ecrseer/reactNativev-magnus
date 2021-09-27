import Modal from '@components/Modal';
import useDelayUnmount from '@hooks/useDelayUnmount';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import { Div, Button } from 'react-native-magnus';

const Animation = () => {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const shouldRender = useDelayUnmount(modalIsVisible, 4000);

  const toggleModal = () => {
    setModalIsVisible(!modalIsVisible);
  };

  return (
    <SafeAreaView style={{ flex: 1, width: '100%' }}>
      <Div flex={1} w="100%" bg="gray900" alignItems="center">
        <Button w={200} onPress={toggleModal}>
          MODAL
        </Button>
        {shouldRender && <Modal visible={modalIsVisible} />}
      </Div>
    </SafeAreaView>
  );
};

export default Animation;
