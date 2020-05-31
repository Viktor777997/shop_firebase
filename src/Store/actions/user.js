import UsersService from '../../Services/swapi-secrvice'
import createAction from './create-action'


export const GET_USERS_LOADING = 'GET_USERS_LOADING';
export const GET_USER_LOADING = 'GET_USER_LOADING';

export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';

export const GET_USERS_ERROR = 'GET_USERS_ERROR';
export const GET_USER_ERROR = 'GET_USER_ERROR';




const getSucces = (data) => createAction(GET_USERS_SUCCESS, data);
const getSuccesUser = (data) => createAction(GET_USER_SUCCESS, data);


export const getUsersSucces = (data) => async (dispatch) => {
    console.log(data)
    dispatch(createAction(GET_USERS_LOADING))
    try {

        const list = await UsersService.getResource(data.name, data.page)
        return dispatch(getSucces(list.items))
    } catch (error) {
        return dispatch(createAction(GET_USERS_ERROR))
    }
}





export const getUserSucces = (data) => async (dispatch) => {
    dispatch(createAction(GET_USERS_LOADING))
    // console.log(data)
    try {
        const user = await UsersService.getResourceDetalis(data.login)
                return dispatch(getSuccesUser(user))
    } catch (error) {

        return dispatch(createAction(GET_USERS_ERROR))
    }
}