import React, {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {MainStackParamList} from './types.ts';
import {Home} from '../screens/Home.tsx';

const Stack = createNativeStackNavigator<MainStackParamList>();

export const Main: FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen
          name={'Home'}
          options={{
            headerTitle: '',
            headerShown: false,
          }}
          component={Home}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};
