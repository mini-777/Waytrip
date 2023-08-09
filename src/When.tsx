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
import { Calendar } from 'react-native-calendars';
import { useState } from 'react';
const When = ({ navigation, route }: any) => {
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);
  const [markedDates, setMarkedDates] = useState({});

  const onDayPress = (day) => {
    if (!selectedStartDate || (selectedStartDate && selectedEndDate)) {
      // Start date selection
      setMarkedDates({
        [day.dateString]: {
          startingDay: true,
          color: '#675DE7',
          textColor: 'white',
        },
      });
      setSelectedStartDate(day.dateString);
      setSelectedEndDate(null);
    } else if (!selectedEndDate) {
      // End date selection
      let dates = markPeriod(selectedStartDate, day.dateString);
      setMarkedDates(dates);
      setSelectedEndDate(day.dateString);
      console.log(day.dateString);
    }
  };
  const markPeriod = (start, end) => {
    let period = {};
    let current = start;
    while (current <= end) {
      if (current === start) {
        period[current] = {
          startingDay: true,
          color: '#675DE7',
          textColor: 'white',
        };
      } else if (current === end) {
        period[current] = {
          endingDay: true,
          color: '#675DE7',
          textColor: 'white',
        };
      } else {
        period[current] = { color: '#675DE7', textColor: 'white' };
      }
      let date = new Date(current);
      date.setDate(date.getDate() + 1);
      current = date.toISOString().split('T')[0];
    }
    return period;
  };
  return (
    <Center>
      <Layout navigation={navigation} />

      <Image
        source={require('../assets/image/Third.png')}
        alt='loading image'
        w={10}
        h={2}
        style={{
          position: 'absolute',
          top: 100,
          right: 30,
        }}
      ></Image>

      <Center p={10} w={400} position={'absolute'} top={300}></Center>

      <Box position={'absolute'} top={120} left={50}>
        <Heading size='2xl'>언제</Heading>
        <Heading size='2xl'>떠날까요?</Heading>
      </Box>
      <Box position={'absolute'} top={240} w={'350'}>
        <Calendar
          markingType={'period'}
          markedDates={markedDates}
          onDayPress={(day) => onDayPress(day)}
        />
      </Box>
      <Center
        position={'absolute'}
        w={'100%'}
        h={80}
        top={620}
        backgroundColor={'#F6F6F9'}
      >
        {selectedEndDate ? (
          <Box mt={-78}>
            <Box mb={5}>
              <HStack>
                <Heading size={'xl'} color={'#675DE7'}>
                  {selectedStartDate}
                </Heading>
                <Heading size={'xl'}> 부터</Heading>
              </HStack>
              <HStack>
                <Heading size={'xl'} color={'#675DE7'}>
                  {selectedEndDate}
                  <Heading size={'xl'}> 까지</Heading>
                </Heading>
              </HStack>
            </Box>
            <Button
              h={60}
              onPress={() =>
                navigation.navigate('Invite', {
                  selectedStartDate,
                  selectedEndDate,
                })
              }
              w='350'
              rounded='2xl'
              colorScheme='indigo'
              _text={{ fontSize: 20, bold: true }}
            >
              채팅방 생성하기
            </Button>
          </Box>
        ) : (
          <Box mt={-78}>
            <Box mb={5}>
              <Heading size={'xl'} color={'#E1E4E6'}>
                언제부터
              </Heading>
              <Heading size={'xl'} color={'#E1E4E6'}>
                언제까지?
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

export default When;
