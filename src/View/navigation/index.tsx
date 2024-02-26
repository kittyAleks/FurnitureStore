import React, {FC, useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {Public} from './Public';
import {Private} from './Private';
import {useUser} from '../../bus/user';
import {ActivityIndicator} from 'react-native';
import {fetchToken} from '../../helpers/fetchUserToken';

export const Navigation: FC = () => {
  const {
    getUserToken,
    user: {isAuth},
  } = useUser();
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchToken(setToken, setLoading, getUserToken);
  }, [getUserToken, setLoading, setToken]);

  if (loading) {
    return (
      <ActivityIndicator style={{flex: 1}} color={'#ABC4AA'} size={'large'} />
    );
  }

  return (
    <NavigationContainer>
      {isAuth ? <Private /> : <Public />}
    </NavigationContainer>
  );
};
