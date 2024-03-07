import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Main} from './Main.tsx';

export const Navigation: FC = () => {
  return (
    <NavigationContainer>
      <Main />
    </NavigationContainer>
  );
};
