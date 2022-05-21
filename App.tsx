import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import TabOneScreen from "./screens/TabOneScreen";
import PlayScreen from "./screens/PlayScreen";
import HomeScreen from "./screens/HomeScreen";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const Stack = createStackNavigator();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
                name="Menu"
                component={TabOneScreen}
                options={{headerShown:false}}
            />
            <Stack.Screen
                name="Fuck the Queen !"
                component={PlayScreen}
                options={{headerShown:false}}
                
            />
            <Stack.Screen name={"HomeScreen"}
                          component={HomeScreen}
                          options={{headerShown:false}}/>
          </Stack.Navigator>
        </NavigationContainer>
    );
  }
}
