import { Box, Text, Image, HStack, Center } from 'native-base';

import { StyleSheet } from 'react-native';

import GestureFlipView from 'react-native-gesture-flip-card';

export default function Card({ route }) {
  const renderFront = () => {
    return (
      <Box style={styles.frontStyle} shadow={5}>
        <Image
          rounded={'2xl'}
          size={300}
          alt='image'
          source={{
            uri: `http://tong.visitkorea.or.kr/cms/resource/18/2861718_image2_1.jpg`,
          }}
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
    <Center safeArea>
      <Box mt={100}>
        <HStack>
          <Text bold fontSize='30' color='#3478F6'>
            오늘 하루
          </Text>
          <Text fontSize={'30'}>를</Text>
        </HStack>
        <HStack>
          <Text bold fontSize={'30'} color='#3478F6'>
            그림
          </Text>
          <Text fontSize={'30'}>으로 저장했어요!</Text>
        </HStack>
        <Box mt={50}>
          <GestureFlipView width={300} height={300}>
            {renderBack()}
            {renderFront()}
          </GestureFlipView>
        </Box>
      </Box>
    </Center>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  frontStyle: {
    width: 300,
    height: 300,
    backgroundColor: '#f00',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  backStyle: {
    width: 300,
    height: 300,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
});
