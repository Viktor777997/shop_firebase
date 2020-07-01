import createAction from './create-action';
import ApiService from '../../services/api-service';
import ErrorService from '../../services/error-service';

/**
 * ACTION TYPES
 */



export const FETCH_CATEGORIES_REQUEST = 'FETCH_CATEGORIES_REQUEST';
export const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS';
export const FETCH_CATEGORIES_FAILURE = 'FETCH_CATEGORIES_FAILURE';

export const FETCH_CATEGORY_REQUEST = 'FETCH_CATEGORY_REQUEST';
export const FETCH_CATEGORY_SUCCESS = 'FETCH_CATEGORY_SUCCESS';
export const FETCH_CATEGORY_FAILURE = 'FETCH_CATEGORY_FAILURE';

export const CREATE_CATEGORY_REQUEST = 'CREATE_CATEGORY_REQUEST';
export const CREATE_CATEGORY_SUCCESS = 'CREATE_CATEGORY_SUCCESS';
export const CREATE_CATEGORY_FAILURE = 'CREATE_CATEGORY_FAILURE';

export const EDIT_CATEGORY_REQUEST = 'EDIT_CATEGORY_REQUEST';
export const EDIT_CATEGORY_SUCCESS = 'EDIT_CATEGORY_SUCCESS';
export const EDIT_CATEGORY_FAILURE = 'EDIT_CATEGORY_FAILURE';

export const DELETE_CATEGORY_REQUEST = 'DELETE_CATEGORY_REQUEST';
export const DELETE_CATEGORY_SUCCESS = 'DELETE_CATEGORY_SUCCESS';
export const DELETE_CATEGORY_FAILURE = 'DELETE_CATEGORY_FAILURE';



/**
 * THUNKSzzz
 */
export const fetchCategory = id => (dispatch, getState, { getFirebase, getFirestore }) => {
    const Api = new ApiService(getFirestore(), getFirebase());

    dispatch(createAction(FETCH_CATEGORY_REQUEST));

    Api.getCategory(id)
        .then(payload => {
            dispatch(createAction(FETCH_CATEGORY_SUCCESS, payload));
        })
        .catch(payload => {
            dispatch(createAction(FETCH_CATEGORY_FAILURE, ErrorService.parse(payload)));
        });
};


export const fetchCategories = query => (dispatch, getState, { getFirebase, getFirestore }) => {
    const Api = new ApiService(getFirestore(), getFirebase());

    dispatch(createAction(FETCH_CATEGORIES_REQUEST));

    Api.getCategories(query)
        .then(payload => {
            dispatch(createAction(FETCH_CATEGORIES_SUCCESS, payload));
        })
        .catch(payload => {
            dispatch(createAction(FETCH_CATEGORIES_FAILURE, ErrorService.parse(payload)));
        });
};


export const createCategory = data => (dispatch, getState, { getFirebase, getFirestore }) => {
    const Api = new ApiService(getFirestore(), getFirebase());
    dispatch(createAction(CREATE_CATEGORY_REQUEST));
    Api.createCategory(data)
        .then(payload => {
            dispatch(createAction(CREATE_CATEGORY_SUCCESS, payload.data));
        })
        .catch(payload => {
            dispatch(createAction(CREATE_CATEGORY_FAILURE, ErrorService.parse(payload)));
        });
};




export const editCategory = (id, data) => (dispatch, getState, { getFirebase, getFirestore }) => {
    const Api = new ApiService(getFirestore(), getFirebase());
    dispatch(createAction(EDIT_CATEGORY_REQUEST));
    Api.updateCategory(id, data)
        .then(payload => {
            dispatch(createAction(EDIT_CATEGORY_SUCCESS, payload.data));
        })
        .catch(payload => {
            dispatch(createAction(EDIT_CATEGORY_FAILURE, ErrorService.parse(payload)));
        });
};

export const deleteCategory = id => (dispatch, getState, { getFirebase, getFirestore }) => {
    const Api = new ApiService(getFirestore(), getFirebase());

    dispatch(createAction(DELETE_CATEGORY_REQUEST));

    Api.deleteCategory(id)
        .then(payload => {
            dispatch(createAction(DELETE_CATEGORY_SUCCESS, payload));
        })
        .catch(payload => {
            dispatch(createAction(DELETE_CATEGORY_FAILURE, ErrorService.parse(payload)));
        });
};

