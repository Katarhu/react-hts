import {useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';


export function useActions() {
    const dispatch = useDispatch();
    return bindActionCreators(,dispatch);
}