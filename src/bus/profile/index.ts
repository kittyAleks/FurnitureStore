import {useDispatch, useSelector} from '../../tools/hooks';

import {profileActions} from './slice';

import {Profile} from './types';

export const useProfile = () => {
    const dispatch = useDispatch();
    const profile = useSelector(state => state.profile);

    return {
        profile,
        setProfile: (payload: Profile) =>
    dispatch(profileActions.setProfile(payload)),
};
};
