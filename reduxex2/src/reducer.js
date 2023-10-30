import {combineReducers} from 'redux';
import { countingReducer } from './reducer/counting';
import { addsubReducer } from './reducer/addSub';

export const rootReducer = combineReducers({
    value: addsubReducer,
    count: countingReducer
})