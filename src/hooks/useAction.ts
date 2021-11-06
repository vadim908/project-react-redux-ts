import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import ActionCreators from '../store/action-creator/'


export const UseActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(ActionCreators, dispatch)
}