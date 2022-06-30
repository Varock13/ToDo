import {createStore, combneReducers} from 'redux';

const reducers = {};

const rootReducer = combineReducers(reducers);

export default configureStore = () => createStore(rootReducer);