import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ActionSheetProvider } from '@expo/react-native-action-sheet';

import { NativeBaseProvider } from 'native-base';
// import { Loading } from './src/Loading';
import Main from './src/Main';
// import Card from './src/Card';
import ChatScreen from './src/ChatScreen';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import Test from './src/Main';
import Card from 'src/Card';
const Stack = createStackNavigator();

const MainTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
  },
};

export default function App() {
  return (
    <NativeBaseProvider>
      <ActionSheetProvider>
        <NavigationContainer theme={MainTheme}>
          <Stack.Navigator>
            <Stack.Screen
              name='main'
              component={ChatScreen}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name='Card'
              component={Card}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ActionSheetProvider>
    </NativeBaseProvider>
  );
}

// eslint-disable-next-line import/no-default-export
