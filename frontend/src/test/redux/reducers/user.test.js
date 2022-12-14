import userReducer from '../../../store/reducers/user'

import { LOGIN_SUCCESS } from '../../../store/actions/ActionTypes'

const initialState = {
  isLoggedIn: false,
  newState: null,
}
describe('testing user login reducers ', () => {
  let userLoginReducer
  let newState
  const action = {
    type: LOGIN_SUCCESS,
    payload: newState,
  }
  test('Testing reducer for default  state', () => {
    userLoginReducer = userReducer(initialState, {})
    expect(userLoginReducer).toEqual({
      isLoggedIn: false,
      newState: null,
    })
    expect(userLoginReducer).toEqual({
      isLoggedIn: false,
      newState: null,
    })
  })

  test('Testing reducer for default  state', () => {
    userLoginReducer = userReducer(initialState, action)
    expect(userLoginReducer).toEqual({
      isLoggedIn: true,
      newState: action.payload,
    })
  })
})
