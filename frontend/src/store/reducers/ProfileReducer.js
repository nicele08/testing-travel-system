import {
  UPDATE_FAILED,
  UPDATE_SUCCESS,
  USER_PROFILE_DATA,
  USER_PROFILE_FAILED,
  USER_PROFILE,
} from '../actions/ActionTypes'

const initialState = {
  error: null,
  id: null,
  userData: [],
}

const updateProfileReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case USER_PROFILE:
      return {
        ...state,
        id: payload,
      }
    case USER_PROFILE_DATA:
      return {
        ...state,
        userData: payload,
      }
    case USER_PROFILE_FAILED:
      return {
        ...state,
        error: payload,
      }
    case UPDATE_SUCCESS:
      return {
        ...state,
        message: payload,
      }
    case UPDATE_FAILED:
      return {
        ...state,
        error: payload,
      }

    default:
      return state
  }
}

export default updateProfileReducer
