import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

import authReducer from './auth';
import userReducer from './user';
import itemReducer from './items';
import categoryReducer from './category';

const rootReducer = history =>
  combineReducers({

    router: connectRouter(history),

    firestore: firestoreReducer,
    firebase: firebaseReducer,

    auth: authReducer,
    user: userReducer,
    item: itemReducer,
    category: categoryReducer,
  });

export default rootReducer;
