import * as actionTypes from '../actions/category';

const initialState = {
  current: {
    isLoaded: true,
    error: null,
    data: null,
  },
  list: {
    isLoaded: true,
    error: null,
    data: [],
  },


};

export default (state = initialState, action) => {
  switch (action.type) {

    /*  GET CATEGORIES PART  */
    case actionTypes.FETCH_CATEGORIES_REQUEST: {
      return {
        ...state,
        list: {
          ...state.list,
          isLoaded: false,
          error: null,
        },
      };
    }
    case actionTypes.FETCH_CATEGORIES_FAILURE: {
      return {
        ...state,
        list: {
          ...state.list,
          isLoaded: true,
          error: action.payload,
        },
      };
    }
    case actionTypes.FETCH_CATEGORIES_SUCCESS: {
      return {
        ...state,
        list: {
          ...state.list,
          data: action.payload,
          isLoaded: true,
          error: null,
        },
      };
    }





    /*  GET CATEGORY PART  */
    case actionTypes.FETCH_CATEGORY_REQUEST: {
      return {
        ...state,
        current: {
          data: null,
          isLoaded: false,
          error: null,
        },
      };
    }
    case actionTypes.FETCH_CATEGORY_FAILURE: {
      return {
        ...state,
        current: {
          ...state.current,
          isLoaded: true,
          error: action.payload,
        },
      };
    }
    case actionTypes.FETCH_CATEGORY_SUCCESS: {
      return {
        ...state,
        current: {
          ...state.current,
          data: action.payload,
          isLoaded: true,
          error: null,
        },
      };
    }

    /* CREATE AND DELETE CATEGORY PART */

    case actionTypes.CREATE_CATEGORY_REQUEST:
    case actionTypes.EDIT_CATEGORY_REQUEST:
    case actionTypes.DELETE_CATEGORY_REQUEST: {
      return {
        ...state,
        current: {
          ...state.current,
          data: null,
          isLoaded: false,
          error: null,
        },
      };
    }
    case actionTypes.CREATE_CATEGORY_SUCCESS:
    case actionTypes.EDIT_CATEGORY_SUCCESS:
    case actionTypes.DELETE_CATEGORY_SUCCESS: {
      return {
        ...state,
        current: {
          ...state.current,
          data: null,
          isLoaded: true,
          error: null,
        },
      };
    }
    case actionTypes.CREATE_CATEGORY_FAILURE:
    case actionTypes.EDIT_CATEGORY_FAILURE:
    case actionTypes.DELETE_CATEGORY_FAILURE: {
      return {
        ...state,
        current: {
          ...state.current,
          data: null,
          isLoaded: true,
          error: action.payload,
        },
      };
    }

    default:
      return state;
  }
};
