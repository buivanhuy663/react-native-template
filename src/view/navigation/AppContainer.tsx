import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import React from 'react'
import {
  LoginScreen,
  RegisterScreen,
  VerifyAuthCodeScreen,
  WelcomeScreen,
} from '../screens'
import HomeScreen from '../screens/Home/HomeScreen'
import {AppScreen} from './AppScreen'


export const AppContainer = () => {
  const AppStack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <AppStack.Navigator>

        <AppStack.Screen
          name={AppScreen.welcome}
          component={WelcomeScreen}
          options={{
            headerShown: false,
            animation: 'slide_from_right',
          }}
        />

        <AppStack.Screen
          name={AppScreen.login}
          component={LoginScreen}
          options={{
            headerShown: false,
            animation: 'slide_from_right',
          }}
        />

        <AppStack.Screen
          name={AppScreen.register}
          component={RegisterScreen}
          options={{
            headerShown: false,
            animation: 'slide_from_right',
          }}
        />

        <AppStack.Screen
          name={AppScreen.verifyAuthCode}
          component={VerifyAuthCodeScreen}
          options={{
            headerShown: false,
            animation: 'slide_from_right',
          }}
        />

        <AppStack.Screen
          name={AppScreen.home}
          component={HomeScreen}
          options={{
            headerShown: false,
            animation: 'slide_from_right',
          }}
        />

      </AppStack.Navigator>
    </NavigationContainer>
  )
}

