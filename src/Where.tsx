import * as React from 'react';
import {
  Button,
  Box,
  Center,
  Image,
  Text,
  VStack,
  HStack,
  Heading,
  Input,
  Pressable,
  FlatList,
} from 'native-base';
import cities from './local.json';
import Layout from './Layout';
import { useState } from 'react';
const Where = ({ navigation, route }: any) => {
  const [input, setInput] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleChangeText = (text) => {
    setInput(text);

    // 입력값을 기반으로 일치하는 도시 이름 필터링
    if (text) {
      const matches = cities.filter((city) => city.name.includes(text));
      setSuggestions(matches);
    } else {
      setSuggestions([]);
    }
  };

  const handlePressCity = (name) => {
    setInput(name);
    setSuggestions([]);
  };

  return (
    <Center>
      <Layout navigation={navigation} />

      <Image
        source={require('../assets/image/Second.png')}
        alt='loading image'
        w={10}
        h={2}
        style={{
          position: 'absolute',
          top: 100,
          right: 30,
        }}
      ></Image>

      <Center p={10} w={400} position={'absolute'} top={300}>
        <Input
          size='xl'
          value={input}
          onChangeText={handleChangeText}
          placeholder='여행지를 입력하세요'
        />
        <FlatList
          data={suggestions}
          keyExtractor={(item) => item.code}
          renderItem={({ item }) => (
            <Pressable onPress={() => handlePressCity(item.name)}>
              <Text size={'xl'} style={{ padding: 10, borderBottomWidth: 1 }}>
                {item.name}
              </Text>
            </Pressable>
          )}
        />
      </Center>

      <Box position={'absolute'} top={120} left={50}>
        <Heading size='2xl'>어디로</Heading>
        <Heading size='2xl'>떠날까요?</Heading>
      </Box>
      <Center
        position={'absolute'}
        w={'100%'}
        h={80}
        top={620}
        backgroundColor={'#F6F6F9'}
      >
        {input == '제주도' ? (
          <Box mt={-78}>
            <Box mb={5}>
              <Heading size={'xl'}>이번 여행지는</Heading>
              <Heading size={'xl'} color={'#FFB74A'}>
                떠나요, 제주도
              </Heading>
            </Box>
            <Button
              h={60}
              onPress={() => navigation.navigate('When', input)}
              w='350'
              rounded='2xl'
              colorScheme='indigo'
              _text={{ fontSize: 20, bold: true }}
            >
              이 여행지로 정했어요!
            </Button>
          </Box>
        ) : (
          <Box mt={-78}>
            <Box mb={5}>
              <Heading size={'xl'} color={'#E1E4E6'}>
                이번 여행지는
              </Heading>
              <Heading size={'xl'} color={'#E1E4E6'}>
                어딜까요?
              </Heading>
            </Box>
            <Button
              h={60}
              isDisabled
              variant={'outline'}
              w='350'
              rounded='2xl'
              colorScheme='indigo'
              _text={{ fontSize: 20, bold: true, color: 'black' }}
            >
              여행지를 선택해주세요
            </Button>
          </Box>
        )}
      </Center>
    </Center>
  );
};

export default Where;
