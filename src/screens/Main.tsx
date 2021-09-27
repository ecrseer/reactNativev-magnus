import github from '@apis/github';
import useDebounce from '@hooks/useDebounce';
import { useNavigation, useRoute } from '@react-navigation/core';
import React, { useRef, useState } from 'react';
import { Alert, SafeAreaView } from 'react-native';
import { Div, Icon, Input, Text, Button } from 'react-native-magnus';
import Toast from 'react-native-toast-message';

const Main = () => {
  const nav = useNavigation();

  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);

  const { debounce, reset } = useDebounce();

  const handlePress = async () => {
    try {
      setLoading(true);
      const { data } = await github.get(`/users/${username}`);
      nav.navigate('Profile', { user: data });
    } catch (err) {
      Toast.show({
        type: 'error',
        text1: 'Opss!!',
        text2:
          err?.response?.data?.message ||
          'Tivemos um erro, tente novamente mais tarde',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleAutocomplete = async text => {
    setUsername(text);
    if (!text) {
      reset();
      return;
    }
    debounce(() => {
      console.log(text, 'Estou fazendo chamanda na api');
    }, 5000);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Div
        flex={1}
        w="100%"
        bg="gray900"
        alignItems="center"
        justifyContent="center">
        <Text mb={24} fontSize="6xl" color="gray100">
          Gitbook
        </Text>
        <Div px={24} w="100%" flexDir="row">
          <Input
            value={username}
            onChangeText={handleAutocomplete}
            placeholder="Usuário..."
            flex={1}
            mr={8}
            onSubmitEditing={handlePress}
          />
          <Button onPress={handlePress} h="100%" loading={loading}>
            Buscar
          </Button>
        </Div>
      </Div>
    </SafeAreaView>
  );
};

export default Main;
