import { Box, Text, Image, HStack, Center } from 'native-base';

import { StyleSheet } from 'react-native';
import Layout from './Layout';
import GestureFlipView from 'react-native-gesture-flip-card';
import { useState } from 'react';
import { Button } from 'native-base';
const Card = ({ navigation, route }: any) => {
  const [isButton, setIsButton] = useState(true);
  const renderFront = () => {
    return (
      <Box style={styles.frontStyle} shadow={5}>
        <Image
          rounded={'2xl'}
          h={'500'}
          w={'300'}
          alt='image'
          source={require('../assets/image/Detail.png')}
        ></Image>
      </Box>
    );
  };

  const renderBack = () => {
    return (
      <Box style={styles.backStyle} shadow={5} p={5}>
        <Text fontSize={20} bold mb={3}>
          오늘은 날씨 맑음
        </Text>
        <Text fontSize={20}>
          {
            '오늘은 아름다운 여름날씨에\n감사하며 하루를 시작했습니다.\n창문을 열고 상쾌한 바람이\n들어오면서 싱그러운 느낌이 전해졌어요. 오늘은 나른한 주말 아침을 보내기로 마음먹었기 때문에 부지런히 일어나지 않았습니다..'
          }
        </Text>
      </Box>
    );
  };

  return (
    <Center>
      <Layout navigation={navigation} />
      <Box>
        <Box padding={5} mt={70}>
          <HStack>
            <Text bold fontSize='30' color='#675DE7'>
              카드
            </Text>
            <Text fontSize={'30'}>를 넘겨</Text>
          </HStack>
          <HStack>
            <Text bold fontSize={'30'} color='#675DE7'>
              상세정보
            </Text>
            <Text fontSize={'30'}>를 확인하세요!</Text>
          </HStack>
        </Box>
        <Box>
          <GestureFlipView width={400} height={500}>
            {renderFront()}
            {renderBack()}
          </GestureFlipView>
        </Box>
        <Center mt={30}>
          {isButton ? (
            <Button
              h={60}
              onPress={() => navigation.navigate('ChatScreen')}
              w='350'
              rounded='2xl'
              colorScheme='indigo'
              _text={{ fontSize: 20, bold: true }}
            >
              여행지 공유하기
            </Button>
          ) : (
            <></>
          )}
        </Center>
      </Box>
    </Center>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  frontStyle: {
    width: 300,
    height: 500,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  backStyle: {
    width: 300,
    height: 500,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
});

export default Card;
