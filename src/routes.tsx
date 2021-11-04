import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './pages/Home';
import { Skills } from './pages/Skills';
import { Password } from './pages/Password';
import * as React from 'react';


const Stack = createNativeStackNavigator()
function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Skills" component={Skills} />
        <Stack.Screen name="Password" component={Password} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
