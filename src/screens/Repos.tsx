import github from '@apis/github';
import { useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, FlatList, ScrollView } from 'react-native';
import { Div, Text, Skeleton } from 'react-native-magnus';
import Toast from 'react-native-toast-message';

const Repos = () => {
  const { params } = useRoute();

  const [loading, setLoading] = useState(false);
  const [repos, setRepos] = useState<any[]>([]);

  useEffect(() => {
    async function bootstrap() {
      try {
        setLoading(true);
        const { data } = await github.get(`users/${params.username}/repos`);
        setRepos(data);
      } catch (err) {
        console.error(err);
        Toast.show({
          type: 'error',
          text1: 'Opss!!',
          text2: 'Tivemos um erro',
        });
      } finally {
        setLoading(false);
      }
    }
    bootstrap();
  }, [params]);

  const loadingMock = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Div flex={1} w="100%" bg="gray900">
        {loading ? (
          <FlatList
            data={loadingMock}
            keyExtractor={item => item.toString()}
            renderItem={() => {
              return (
                <Div bg="gray800" mb={8} p={16}>
                  <Skeleton.Box mt="sm" w="60%" />
                  <Skeleton.Box mt="sm" w="90%" />
                  <Skeleton.Box mt="sm" w="20%" />
                </Div>
              );
            }}
          />
        ) : (
          <FlatList
            data={repos}
            keyExtractor={item => item.full_name}
            renderItem={({ item }) => {
              return (
                <Div bg="gray800" p={16} mb={8}>
                  <Text fontWeight="bold" fontSize="xl" color="gray100">
                    {item.full_name}
                  </Text>
                  <Text fontSize="sm" color="gray500">
                    {item.html_url}
                  </Text>
                  <Text fontSize="sm" color="gray500">
                    {item.created_at}
                  </Text>
                </Div>
              );
            }}
          />
        )}
      </Div>
    </SafeAreaView>
  );
};

export default Repos;
