import React from 'react'
import { shallow } from 'enzyme'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import NavBar from '../../components/Dashboard/NavBar'

import store from '../../store'
import Content from '../../components/Dashboard/pages/Content'
import SideBar from '../../components/Dashboard/Sidebar'
import {
  DashBoard,
  mapDispatchToProps,
  mapStateToProps,
} from '../../components/Dashboard/pages/DashBoard'
import { fetchUserInfo } from '../../store/actions/profileAction'
import { logoutActionCreator } from '../../store/actions/LogoutAction'

describe('Test navbar ', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(
      <Provider store={store}>
        <BrowserRouter>
          <NavBar />
        </BrowserRouter>
      </Provider>,
    )
  })

  test('Test dropdown button', () => {
    expect(wrapper.length).toBe(1)
  })
})
describe('Test navbar ', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<DashBoard />)
  })

  test('Test dropdown button', () => {
    expect(wrapper.length).toBe(1)
  })

  test('should test mapStateToProps', () => {
    const state = {
      user: {},
      userProfile: {
        userData: {},
      },
    }
    const mapState = mapStateToProps(state)
    expect(mapState).toEqual({
      Logout: state.user,
      userData: state.userProfile.userData,
    })
  })
  it('should dispatch fetchUserInfo when onClick() is called', () => {
    const dispatch = jest.fn()
    const props = mapDispatchToProps(dispatch)
    const prop1 = mapDispatchToProps(dispatch)
    props.LogoutAction()
    prop1.GetUserProfile()
  })
})

describe('test content', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<Content />)
  })

  test('test content component', () => {
    expect(wrapper.length).toBe(1)
  })
  test('Test content of Content', () => {
    expect(
      wrapper.contains(
        <div className="col-start-3  min-h-screen  row-start-2  col-end-13 p-4 md:p-12" />,
      ),
    ).toEqual(true)
  })
})

describe('test sidebar', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<SideBar />)
  })

  test('test content component', () => {
    expect(wrapper.length).toBe(1)
  })

  test('Close sidebar (decrease sidebar width)', () => {
    wrapper.find('.close').simulate('click')
  })
  test('Increase side bar on small screen sidebar ', () => {
    wrapper.find('.open').simulate('click')
  })
})
