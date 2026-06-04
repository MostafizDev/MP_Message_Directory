// App.tsx

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';

import HomeScreen from './src/screens/HomeScreen';
import MessagesScreen from './src/screens/MessagesScreen';
import MessageDetailScreen from './src/screens/MessageDetailScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <GestureHandlerRootView style={styles.root}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
            cardStyle: { backgroundColor: '#1a1a2e' },
            cardStyleInterpolator: ({ current, layouts }) => ({
              cardStyle: {
                transform: [
                  {
                    translateX: current.progress.interpolate({
                      inputRange: [0, 1],
                      outputRange: [layouts.screen.width, 0],
                    }),
                  },
                ],
                opacity: current.progress.interpolate({
                  inputRange: [0, 0.5, 1],
                  outputRange: [0, 0.8, 1],
                }),
              },
            }),
          }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Messages" component={MessagesScreen} />
          <Stack.Screen name="MessageDetail" component={MessageDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default App;
