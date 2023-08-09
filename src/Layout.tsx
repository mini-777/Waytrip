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

const Layout = ({ navigation }: any) => {
  return (
    <HStack position='absolute' left={0} top={50} right={0} px={4} zIndex={1}>
      <HStack py={2} alignItems='center' w='100%'>
        <Pressable
          onPress={() => {
            if (navigation.canGoBack()) {
              navigation.goBack();
            }
          }}
        >
          <ArrowBackIcon
            mx={3}
            size={5}
            color={useColorModeValue('black', 'white')}
          />
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

export default Layout;
