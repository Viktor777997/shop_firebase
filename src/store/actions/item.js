import createAction from './create-action';
import ApiService from '../../services/api-service';
import ErrorService from '../../services/error-service';

/**
 * ACTION TYPES
 */

export const FETCH_ITEMS_REQUEST = 'FETCH_ITEMS_REQUEST';
export const FETCH_ITEMS_SUCCESS = 'FETCH_ITEMS_SUCCESS';
export const FETCH_ITEMS_FAILURE = 'FETCH_ITEMS_FAILURE';

export const FETCH_ITEM_REQUEST = 'FETCH_ITEM_REQUEST';
export const FETCH_ITEM_SUCCESS = 'FETCH_ITEM_SUCCESS';
export const FETCH_ITEM_FAILURE = 'FETCH_ITEM_FAILURE';

export const CREATE_ITEM_REQUEST = 'CREATE_ITEM_REQUEST';
export const CREATE_ITEM_SUCCESS = 'CREATE_ITEM_SUCCESS';
export const CREATE_ITEM_FAILURE = 'CREATE_ITEM_FAILURE';

export const DELETE_ITEM_REQUEST = 'DELETE_ITEM_REQUEST';
export const DELETE_ITEM_SUCCESS = 'DELETE_ITEM_SUCCESS';
export const DELETE_ITEM_FAILURE = 'DELETE_ITEM_FAILURE';

/**
 * THUNKS
 */

export const fetchItems = query => (dispatch, getState, { getFirebase, getFirestore }) => {
  const Api = new ApiService(getFirestore(), getFirebase());

  dispatch(createAction(FETCH_ITEMS_REQUEST));

  Api.getItems(query)
    .then(payload => {
      dispatch(createAction(FETCH_ITEMS_SUCCESS, payload));
    })
    .catch(payload => {
      dispatch(createAction(FETCH_ITEMS_FAILURE, ErrorService.parse(payload)));
    });
};

export const fetchItem = data => (dispatch, getState, { getFirebase, getFirestore }) => {
  const Api = new ApiService(getFirestore(), getFirebase());

  dispatch(createAction(FETCH_ITEM_REQUEST));

  Api.getItem(data.id)
    .then(payload => {
      dispatch(createAction(FETCH_ITEM_SUCCESS, payload));
    })
    .catch(payload => {
      dispatch(createAction(FETCH_ITEM_FAILURE, ErrorService.parse(payload)));
    });
};

export const createItem = data => (dispatch, getState, { getFirebase, getFirestore }) => {
  const Api = new ApiService(getFirestore(), getFirebase());

  dispatch(createAction(CREATE_ITEM_REQUEST));

  Api.createItem(data)
    .then(payload => {
      dispatch(createAction(CREATE_ITEM_SUCCESS, payload.data));
    })
    .catch(payload => {
      dispatch(createAction(CREATE_ITEM_FAILURE, ErrorService.parse(payload)));
    });
};

export const deleteItem = id => (dispatch, getState, { getFirebase, getFirestore }) => {
  const Api = new ApiService(getFirestore(), getFirebase());

  dispatch(createAction(DELETE_ITEM_REQUEST));

  Api.deleteItem(id)
    .then(payload => {
      dispatch(createAction(DELETE_ITEM_SUCCESS, payload));
    })
    .catch(payload => {
      dispatch(createAction(DELETE_ITEM_FAILURE, ErrorService.parse(payload)));
    });
};
