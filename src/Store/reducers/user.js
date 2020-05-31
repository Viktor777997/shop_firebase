import { GET_USERS_SUCCESS, GET_USER_SUCCESS, GET_USERS_LOADING, GET_USERS_ERROR, GET_USER_LOADING, GET_USER_ERROR } from '../actions/user'


const initialState = {
  
  list: {
    loading: false,
    error: null,
    data: [],
  },
  current: {
    loading: false,
    error: null,
    data: null
  }
};


export default (state = initialState, action) => {

  switch (action.type) {

    case GET_USERS_LOADING: {
      return {
        ...state,
        list: {
          ...state.list,
          loading: true,
        },
      };
    }

    case GET_USERS_SUCCESS: {
      return {
        ...state,
        list: {
          ...state.list,
          loading: false,
          data: action.payload,
        },
      };
    }

    case GET_USERS_ERROR: {
      return {
        ...state,
        list: {
          ...state.list,
          loading: false,
          error: true,
        },
      };
    }
    case GET_USER_SUCCESS: {
      return {
        ...state,
        current: {
          ...state.current,
          loading: false,
          data: action.payload,
        },
      };
    }

    case GET_USER_ERROR: {
      return {
        ...state,
        current: {
          ...state.current,
          loading: false,
          error: true,
        },
      };
    }

    case GET_USER_LOADING: {
      return {
        ...state,
        current: {
          ...state.current,
          loading: true,
        },
      };
    }

    default:
      return state;
  }

};