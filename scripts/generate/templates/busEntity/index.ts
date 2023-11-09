import {useDispatch, useSelector} from '../../tools/hooks';

import {__entityName__Actions} from './slice';

import {__entityName__(pascalCase)} from './types';

export const use__entityName__(pascalCase) = () => {
    const dispatch = useDispatch();
    const __entityName__ = useSelector(state => state.__entityName__);

    return {
        __entityName__,
        set__entityName__(pascalCase): (payload: __entityName__(pascalCase)) =>
    dispatch(__entityName__Actions.set__entityName__(pascalCase)(payload)),
};
};
