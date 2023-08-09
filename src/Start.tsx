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
} from 'native-base';
import { Linking } from 'react-native';

import Layout from './Layout';
import { useEffect } from 'react';
const Start = ({ navigation, route }: any) => {
  useEffect(() => {
    //IOS && ANDROID : 앱이 딥링크로 처음 실행될때, 앱이 열려있지 않을 때
    Linking.getInitialURL().then((url) => deepLink(url));

    //IOS : 앱이 딥링크로 처음 실행될때, 앱이 열려있지 않을 때 && 앱이 실행 중일 때
    //ANDROID : 앱이 실행 중일 때
    Linking.addEventListener('url', addListenerLink);
  }, []);

  const deepLink = (url: string | null) => {
    if (url == 'com.anonymous.waytrip://chat:19802219') {
      navigation.navigate('ChatScreen');
      console.log(url);
    } else {
      console.log(url);
    }
  };

  const addListenerLink = ({ url }: any) => {
    if (url == 'com.anonymous.waytrip://chat:19802219') {
      navigation.navigate('ChatScreen');
      console.log(url);
    } else {
      console.log(url);
    }
  };
  return (
    <Box>
      <Image
        source={require('../assets/image/First.png')}
        alt='loading image'
        w={10}
        h={2}
        style={{
          position: 'absolute',
          top: 100,
          right: 30,
        }}
      ></Image>

      <Box position={'absolute'} top={150} left={30}>
        <Heading size={'3xl'}>환영합니다!</Heading>
        <Heading mt={5} size={'lg'}>
          친구들과 채팅으로{' '}
        </Heading>
        <Heading size={'lg'}>손쉽게 여행계획을 생성해보세요</Heading>
      </Box>

      <Center>
        <Box position={'absolute'} top={750}>
          <Button
            h={60}
            onPress={() => navigation.navigate('Where')}
            w='350'
            rounded='2xl'
            colorScheme='indigo'
            _text={{ fontSize: 20, bold: true }}
          >
            네 좋아요!
          </Button>
        </Box>
      </Center>
    </Box>
  );
};

export default Start;
