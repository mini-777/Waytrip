import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ActionSheetProvider } from '@expo/react-native-action-sheet';
import type { HeaderBackButtonProps } from '@react-navigation/elements';
import {
  ArrowBackIcon,
  NativeBaseProvider,
  Pressable,
  useColorModeValue,
} from 'native-base';
// import { Loading } from './src/Loading';
import { HeaderBackButton } from '@react-navigation/elements';
import Map from './src/Map';
import type { StackParamList } from './src/types';
import ChatScreen from './src/ChatScreen';
import Loading from './src/Loading';
import {
  DefaultTheme,
  NavigationContainer,
  useNavigation,
} from '@react-navigation/native';
import Start from './src/Start';
import Card from './src/Card';
import Where from './src/Where';
import SearchWhere from './src/SearchWhere';
import When from './src/When';
import Invite from './src/Invite';
import Deploy from './src/Deploy';
const Stack = createStackNavigator<StackParamList>();

const MainTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
  },
};

const HeaderLeft = (props: HeaderBackButtonProps) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => {
        if (navigation.canGoBack()) {
          navigation.goBack();
        }
      }}
    >
      <ArrowBackIcon
        {...props}
        mx={3}
        size={5}
        color={useColorModeValue('black', 'white')}
      />
    </Pressable>
  );
};

export default function App() {
  return (
    <NativeBaseProvider>
      <ActionSheetProvider>
        <NavigationContainer theme={MainTheme}>
          <Stack.Navigator
            screenOptions={{
              headerLeft: HeaderLeft,
            }}
          >
            <Stack.Screen
              name='Home'
              component={Start}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name='Where'
              component={Where}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name='When'
              component={When}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name='SearchWhere'
              component={SearchWhere}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name='Invite'
              component={Invite}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name='Deploy'
              component={Deploy}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name='ChatScreen'
              component={ChatScreen}
              options={{
                headerShown: false,
              }}
            />

            <Stack.Screen
              name='Loading'
              component={Loading}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name='Card'
              component={Card}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name='Map'
              component={Map}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ActionSheetProvider>
    </NativeBaseProvider>
  );
}
