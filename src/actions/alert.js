import { v5 as uuidv5 } from 'uuid'
import { SET_ALERT, REMOVE_ALERT } from './types'

export const setAlert = (msg, alertType, timeout = 5000) => dispatch => {
    const id = uuidv5();
    dispatch({
      type: SET_ALERT,
      payload: { msg, alertType, id }
    });

    setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
};