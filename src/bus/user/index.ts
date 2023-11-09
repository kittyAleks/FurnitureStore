import {useDispatch, useSelector} from '../../tools/hooks';

import {userActions} from './slice';

import {User} from './types';

export const useUser = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);

    return {
        user,
        setUser: (payload: User) =>
    dispatch(userActions.setUser(payload)),
};
};
