import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import RegisterScreen from './src/screens/registerscreen'
import LoginScreen from './src/screens/loginScreen'
import HomeScreen from './src/screens/homeScreen'
import FreshRecipeScreen from './src/screens/freshrecipe'
import RecommendedScreen from './src/screens/recomended'
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
          name='FreshRecipe'
          component={FreshRecipeScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name='Recommended'
          component={RecommendedScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App