import { useRoute } from '@react-navigation/core';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { Div, Avatar, Text, Button, Icon } from 'react-native-magnus';
import { useNavigation } from '@react-navigation/native';

const Profile = () => {
  const { params: routeParams } = useRoute();
  const nav = useNavigation();

  const { user } = routeParams;

  const handleRepoPress = () => {
    nav.navigate('Repos', { username: user?.login });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Div
        flex={1}
        w="100%"
        bg="gray900"
        alignItems="center"
        justifyContent="center">
        <Avatar size={80} mb={16} source={{ uri: user.avatar_url }} />
        <Text color="gray100" fontSize="2xl">
          {user.name}
        </Text>
        <Text color="gray100">{user.login}</Text>
        <Div mt={56} flexDir="row">
          <Button
            mr={8}
            suffix={
              <Icon left={8} name="star" color="white" fontFamily="Feather" />
            }>
            Favoritados
          </Button>
          <Button onPress={handleRepoPress}>Respositorios</Button>
        </Div>
      </Div>
    </SafeAreaView>
  );
};

export default Profile;
