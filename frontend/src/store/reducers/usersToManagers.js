import {
  FETCH_USERS_START,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAIL,
  ASSIGN_USERS_TO_MANAGERS_START,
  ASSIGN_USERS_TO_MANAGERS_SUCCESS,
  ASSIGN_USERS_TO_MANAGERS_FAIL,
} from '../../constants/actionTypes'
import updateObject from '../utility'
import { initialAssignedUsersToManagers } from '../initialState'

const fetchUsersStart = (state, action) => {
  return updateObject(state, { loading: true })
}

const fetchUsersSuccess = (state, action) => {
  return updateObject(state, {
    users: action.users,
    loading: false,
  })
}

const fetchUsersFail = (state, action) => {
  return updateObject(state, { loading: false })
}

export const assignUsersToManagersFail = (state, action) => {
  return updateObject(state, { loading: false })
}

export const assignUsersToManagersStart = (state, action) => {
  return updateObject(state, { loading: true })
}

export const assignUsersToManagersSuccess = (state, action) => {
  return updateObject(state, { loading: false, assigned: action.assigned })
}

const reducer = (state = initialAssignedUsersToManagers, action) => {
  switch (action.type) {
    case FETCH_USERS_START:
      return fetchUsersStart(state, action)
    case FETCH_USERS_SUCCESS:
      return fetchUsersSuccess(state, action)
    case FETCH_USERS_FAIL:
      return fetchUsersFail(state, action)

    case ASSIGN_USERS_TO_MANAGERS_START:
      return assignUsersToManagersStart(state, action)
    case ASSIGN_USERS_TO_MANAGERS_SUCCESS:
      return assignUsersToManagersSuccess(state, action)
    case ASSIGN_USERS_TO_MANAGERS_FAIL:
      return assignUsersToManagersFail(state, action)
    default:
      return state
  }
}

export default reducer
