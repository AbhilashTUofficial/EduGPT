import React, { useEffect } from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';
import {store} from '../Redux/store';
import AuthScreen from '../Screens/AuthScreen/AuthScreen';
import BottomNavController from './BottomNavController';

const StackController = () => {
  const Stack = createNativeStackNavigator();




  return (
    <Provider store={store}>
      <NavigationContainer >
 
        <Stack.Navigator>

          <Stack.Screen
            name="authscreen"
            component={AuthScreen}
            options={{
              // headerShown: false,
            }}
          />
          <Stack.Screen
          name='botnavcontroller'
          component={BottomNavController}
          options={{

          }}/>
          

        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default StackController;
