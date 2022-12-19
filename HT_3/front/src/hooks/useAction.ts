
import * as authActionCreators from '../store/user/user.action.creators';
import * as coursesActionCreators from '../store/courses/courses.action.creators';
import * as authorsActionCreators from '../store/authors/authors.action.creators';

import {bindActionCreators} from 'redux';
import {useDispatch} from 'react-redux';
import {useMemo} from 'react';

const actionCreators = {
    ...authActionCreators,
    ...coursesActionCreators,
    ...authorsActionCreators,
}

export function useActions() {
    const dispatch = useDispatch();

    return useMemo(() => {
        return bindActionCreators(actionCreators, dispatch);
    }, [])
}