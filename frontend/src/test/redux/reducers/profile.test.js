import {
  USER_PROFILE,
  USER_PROFILE_DATA,
  USER_PROFILE_FAILED,
} from '../../../store/actions/ActionTypes';
import {
  getUserProfile,
  getUserProfileDataFailed,
  getUserProfileData,
} from '../../../store/actions/profileAction';

describe('Testing update profile action', () => {
  test('Test get profile request success', () => {
    const actionSuccess = getUserProfile();
    expect(actionSuccess).toEqual({
      type: USER_PROFILE,
    });
  });
  test('Test get profile succcess', () => {
    let user;
    const actionSuccess = getUserProfileData();
    expect(actionSuccess).toEqual({
      type: USER_PROFILE_DATA,
      payload: user,
    });
  });
  test('Test logout failed', () => {
    let error;
    const actionFailed = getUserProfileDataFailed();
    expect(actionFailed).toEqual({
      type: USER_PROFILE_FAILED,
      payload: error,
    });
  });
});
