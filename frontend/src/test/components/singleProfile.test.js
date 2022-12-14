import shallow from 'enzyme/build/shallow';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Footer from '../../components/Dashboard/Footer';
import NavBar from '../../components/Dashboard/NavBar';
import {
  SingleProfile,
  mapStateToProps,
  mapDispatchToProps,
} from '../../components/Dashboard/pages/SingleProfile';
import Profile from '../../components/Dashboard/Profile';
import SideBar from '../../components/Dashboard/Sidebar';
import store from '../../store';
import { logoutActionCreator } from '../../store/actions/LogoutAction';
import { fetchUserInfo } from '../../store/actions/profileAction';

describe('Test Single profile component', () => {
  test('should test pagination components', () => {
    const pages = shallow(
      <Provider store={store}>
        <BrowserRouter>
          <SingleProfile />
        </BrowserRouter>
      </Provider>
    );
    expect(pages.length).toBe(1);
  });
  test('should test map state', () => {
    const state = {
      user: {},
      userProfile: {
        userData: {},
      },
    };
    const mapState = mapStateToProps(state);
    expect(mapState).toEqual({
      Logout: state.user,
      userData: state.userProfile.userData,
    });
  });
  test('should dispatch fetchUserInfo when onClick() is called', () => {
    const dispatch = jest.fn();
    const props = mapDispatchToProps(dispatch);
    const prop1 = mapDispatchToProps(dispatch);
    props.LogoutAction();
    prop1.GetUserProfile();
  });
  test('should test singleProfile components', () => {
    let Logout;
    let LogoutAction;
    const userData = {};
    const wrapper = shallow(<SingleProfile />);
    expect(
      wrapper.contains(
        <div className="bg-gray-100 grid grid-cols-12  grid-rows-mdScreen md:grid-rows-layout  ">
          <NavBar userData={userData} LogoutAction={LogoutAction} Logout={Logout} />
          <SideBar />
          <Profile userData={userData} />
          <Footer />
        </div>
      )
    ).toEqual(false);
  });
});
