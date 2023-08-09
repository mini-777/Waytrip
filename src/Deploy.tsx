import {
  ArrowBackIcon,
  Box,
  Center,
  HStack,
  Heading,
  Icon,
  Pressable,
  Text,
  useColorModeValue,
} from 'native-base';

const Deploy = ({ navigation }: any) => {
  return (
    <HStack position='absolute' left={0} top={70} right={0} px={4} zIndex={2}>
      <HStack py={2} alignItems='center' w='100%'>
        <Pressable
          onPress={() => {
            navigation.navigate('Loading');
          }}
        >
          <Icon name='rocket' />
        </Pressable>

        <Heading
          color={'dark'}
          isTruncated
          numberOfLines={1}
          flex={1}
          // @ts-ignore
          style={{ wordWrap: 'normal' }}
        ></Heading>
      </HStack>
    </HStack>
  );
};

export default Deploy;
