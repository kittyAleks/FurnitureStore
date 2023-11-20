import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {Public} from './Public';
import {Private} from './Private';
import {useUser} from '../../bus/user';

export const Navigation: FC = () => {
  const {user} = useUser();
  const {token} = user;

  return (
    <NavigationContainer>
      {token ? <Private /> : <Public />}
    </NavigationContainer>
  );
};
