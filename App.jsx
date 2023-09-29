import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import RegisterScreen from './src/screens/registerscreen'
import LoginScreen from './src/screens/loginScreen'
import HomeScreen from './src/screens/homeScreen'
import FavouriteScreen from './src/screens/favouritescreen'
import ProfileScreen from './src/screens/profile'
import SideMenuScreen from './src/screens/sidemenuscreen'
const Stack = createNativeStackNavigator()

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Register'
          component={RegisterScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name='Login'
          component={LoginScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name='Home'
          component={HomeScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name='Favourite'
          component={FavouriteScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name='SideMenu'
          component={SideMenuScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name='Profile'
          component={ProfileScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App