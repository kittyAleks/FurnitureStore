import {useDispatch, useSelector} from '../../hooks';

import {User} from './types';
import {createUser, loginUser} from './thunk/user';

export const useUser = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  console.log('state_user', user);

  return {
    user,
    addUser: (userData: User) => {
      return dispatch(createUser(userData));
    },
    signIn: (userData: User) => {
      dispatch(loginUser(userData));
    },
  };
};
