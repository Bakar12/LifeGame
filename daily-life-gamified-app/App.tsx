import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from './src/screens/WelcomeScreen';
import NameScreen from './src/screens/NameScreen';
import TabNavigation from './src/components/TabNavigation';

export type RootStackParamList = {
  Welcome: undefined;
  Name: undefined;
  MainTabs: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Name" component={NameScreen} />
        <Stack.Screen name="MainTabs" component={TabNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}