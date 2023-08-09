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
const SearchWhere = ({ navigation, route }: any) => {
  return (
    <Box>
      <Layout navigation={navigation} />
      <Box mt='40'>
        <Heading>환영합니다</Heading>
      </Box>
      <Center>
        <Box position={'absolute'} top={550}>
          <Button
            h={60}
            onPress={() => navigation.navigate('Where')}
            w='350'
            rounded='2xl'
            colorScheme='indigo'
            _text={{ fontSize: 20, bold: true }}
          >
            이 그림으로 저장할래요
          </Button>
        </Box>
      </Center>
    </Box>
  );
};

export default SearchWhere;
