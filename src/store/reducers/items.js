import * as actionTypes from '../actions/item';

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
    /*  GET ITEMS PART  */
    case actionTypes.FETCH_ITEMS_REQUEST: {
      return {
        ...state,
        list: {
          ...state.list,
          isLoaded: false,
          error: null,
        },
      };
    }
    case actionTypes.FETCH_ITEMS_FAILURE: {
      return {
        ...state,
        list: {
          ...state.list,
          isLoaded: true,
          error: action.payload,
        },
      };
    }
    case actionTypes.FETCH_ITEMS_SUCCESS: {
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

    /*  GET ITEM PART  */
    case actionTypes.FETCH_ITEM_REQUEST: {
      return {
        ...state,
        current: {
          ...state.current,
          isLoaded: false,
          error: null,
        },
      };
    }
    case actionTypes.FETCH_ITEM_FAILURE: {
      return {
        ...state,
        current: {
          ...state.current,
          isLoaded: true,
          error: action.payload,
        },
      };
    }
    case actionTypes.FETCH_ITEM_SUCCESS: {
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

    /* CREATE AND DELETE ITEM PART */
    case actionTypes.CREATE_ITEM_REQUEST:
    case actionTypes.DELETE_ITEM_REQUEST: {
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

    case actionTypes.CREATE_ITEM_SUCCESS:
    case actionTypes.DELETE_ITEM_SUCCESS: {
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

    case actionTypes.CREATE_ITEM_FAILURE:
    case actionTypes.DELETE_ITEM_FAILURE: {
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
