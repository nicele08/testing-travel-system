import {
  USER_PROFILE,
  USER_PROFILE_DATA,
  USER_PROFILE_FAILED,
} from '../../../store/actions/ActionTypes';
import updateProfileReducer from '../../../store/reducers/ProfileReducer';

describe('Testing update profile action', () => {
  let profileReducer;
  const initialState = {
    userData: [],
    error: null,
    id: null,
  };
  test('Test logout  reducer for default  state', () => {
    profileReducer = updateProfileReducer(initialState, {});
    expect(profileReducer).toEqual({
      userData: [],
      id: null,
      error: null,
    });
  });
  test('Test logout  request', () => {
    let payload;
    const action = { type: USER_PROFILE };
    profileReducer = updateProfileReducer(initialState, action);
    expect(profileReducer).toEqual({
      userData: [],
      id: payload,
      error: null,
    });
  });
  test('Test get profile success ', () => {
    let user;
    let payload;

    const action = { type: USER_PROFILE_DATA, payload: user };

    profileReducer = updateProfileReducer(initialState, action);
    expect(profileReducer).toEqual({
      userData: payload,
      id: null,
      error: null,
    });
  });
  test('Test get user profile failed failed ', () => {
    let error;
    let payload;
    const action = { type: USER_PROFILE_FAILED, payload: error };
    profileReducer = updateProfileReducer(initialState, action);
    expect(profileReducer).toEqual({
      userData: [],
      id: null,
      error: payload,
    });
  });
});
