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
import Layout from './Layout';
const Invite = ({ navigation, route }: any) => {
  React.useEffect(() => {
    console.log(route);
  }, []);
  return (
    <Box>
      <Image
        source={require('../assets/image/Group.png')}
        alt='loading image'
        size={200}
        style={{
          position: 'absolute',
          top: 450,
          left: 100,
          right: 0,
          bottom: 0,
        }}
      ></Image>

      <Box position={'absolute'} top={150} left={30}>
        <HStack>
          <Heading size={'xl'} color={'#675DE7'}>
            {route.params.selectedStartDate}
          </Heading>
          <Heading size={'xl'}> 부터</Heading>
        </HStack>
        <HStack>
          <Heading size={'xl'} color={'#675DE7'}>
            {route.params.selectedEndDate}
            <Heading size={'xl'}> 까지</Heading>
          </Heading>
        </HStack>
        <HStack>
          <Heading color={'#FFB74A'} mt={5} size={'xl'}>
            제주도
          </Heading>
          <Heading mt={5} size={'xl'}>
            로 떠나는 여행
          </Heading>
        </HStack>
        <Heading size={'xl'}>함께 갈 사람들을</Heading>
        <Heading size={'xl'}>초대해볼까요?</Heading>
      </Box>

      <Center>
        <Box position={'absolute'} top={750}>
          <Button
            h={60}
            w='350'
            rounded='2xl'
            colorScheme='indigo'
            _text={{ fontSize: 20, bold: true }}
          >
            초대링크 복사하기
          </Button>
        </Box>
      </Center>
    </Box>
  );
};

export default Invite;
