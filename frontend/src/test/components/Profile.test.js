import React, { Component } from 'react'
import { BrowserRouter, Link } from 'react-router-dom'
import { Provider } from 'react-redux'
import { shallow } from 'enzyme'
import { AiFillLike, AiOutlineLogout, AiTwotoneStar } from 'react-icons/ai'
import { MdModeComment } from 'react-icons/md'
import Profile from '../../components/Dashboard/Profile'
import store from '../../store'

import NavBar from '../../components/Dashboard/NavBar'
import SideBar from '../../components/Dashboard/Sidebar'
import Footer from '../../components/Dashboard/Footer'
import Pagination from '../../components/Dashboard/Pagination'
import {
  UpdateProfile,
  mapStateToProps,
  mapDispatchToProps,
} from '../../components/Dashboard/pages/UpdateProfile'
import { fetchUserInfo } from '../../store/actions/profileAction'
import { logoutActionCreator } from '../../store/actions/LogoutAction'

const SetUp = () => {
  const userData = {
    firstName: 'Rob',
    lastName: 'Niyitanga',
    officeAddres: 'Kigali-Rwanda',
    email: 'exa1@gmail.com',
    preferedLanguage: 'English',
    profilePicture:
      'https://res.cloudinary.com/nrob/image/upload/v1614265842/zcnxlc30wgxkftlv1ryy.jpg',
  }
  const ProfileComponent = shallow(<Profile userData={userData} />)
  return ProfileComponent
}

describe('Test user profile info', () => {
  let ProfileComponent
  beforeEach(() => {
    ProfileComponent = SetUp()
  })
  test('test length', () => {
    expect(ProfileComponent.length).toBe(1)
  })
  test('should test profile components', () => {
    const button = ProfileComponent.find('#button')
    expect(button.length).toBe(1)
  })
  test('should test btn text', () => {
    const button = ProfileComponent.find('#button')
    expect(button.text()).toEqual('Update')
  })
  test('should render firstName', () => {
    const button = ProfileComponent.find('#firstName')
    expect(button.length).toBe(1)
  })
  test('should render lastName', () => {
    const button = ProfileComponent.find('#lastName')
    expect(button.length).toBe(1)
  })
  test('should should render email', () => {
    const button = ProfileComponent.find('#email')
    expect(button.length).toBe(1)
  })
  test('should test profile components', () => {
    const button = ProfileComponent.find('#officeAddres')
    expect(button.length).toBe(1)
  })
})

describe('Test navbar ', () => {
  let wrapper
  const userData = {
    firstName: '',
    lastName: '',
  }
  beforeEach(() => {
    wrapper = shallow(<NavBar userData={userData} />)
  })
  test('Test dropdown button', () => {
    expect(wrapper.length).toBe(1)
  })
  test('should test test link', () => {
    expect(
      wrapper.find('.flex').contains(
        <div className="cursor-pointer">
          <Link to="/" className="pl-1 md:pl-8">
            Home
          </Link>
        </div>,
      ),
    ).toEqual(true)
  })
  test('should test click btn', () => {
    wrapper.find('.down').simulate('click')
  })
})

describe('Test sidebar', () => {
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
  test('should up', () => {
    wrapper.find('.up').simulate('click')
  })
  test('Should down ', () => {
    wrapper.find('.dw').simulate('click')
  })
})

describe('Test  footer', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<Footer />)
  })

  test('test content component', () => {
    expect(wrapper.length).toBe(1)
  })

  test('Increase side bar on small screen sidebar ', () => {
    expect(
      wrapper.contains(
        <div className="col-span-full bg-white  shadow-2xl col-start-3 col-end-13  flex-col h-full  w-full flex p-4 ">
          <div className="grid grid-cols-2 lg:grid-cols-4 items-center gap-2">
            <div className="flex flex-col">
              <h2 className="flex cursor-pointer">
                <AiOutlineLogout className="mt-1 text-blue-600" />
                Logout
              </h2>
            </div>
            <div className="flex flex-col">
              <h2 className="flex">
                {' '}
                <MdModeComment className="text-blue-600 mt-1  text-xl" />
                200
              </h2>
              <span className="text-xs text-gray-600 ">Comments trips</span>
            </div>
            <div className="flex flex-col">
              <h2 className="flex">
                <AiFillLike className="text-blue-600 mt-0 text-xl" />
                150
              </h2>
              <span className="text-xs text-gray-600 ">
                Likes accommodation
              </span>
            </div>
            <div className="flex flex-col">
              <h2 className="flex">
                <AiTwotoneStar className="text-yellow-500  mt-1 text-lg" />
                300
              </h2>
              <span className="text-xs text-gray-600 ">Rate accommodation</span>
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 items-end gap-2 mt-2  text-gray-500 h-full">
            <div />
            <div className="text-sm">
              &copy; Barefoot nomad all right reserved{' '}
            </div>
            <div className="text-sm pl-3">
              <Link to="/dashboard/profile">Privacy</Link>
            </div>
            <div className="text-sm">
              <Link to="/dashboard/profile"> Terms and services</Link>
            </div>
          </div>
        </div>,
      ),
    ).toEqual(true)
  })
})

describe('Test Pagination component', () => {
  test('should test pagination components', () => {
    const pages = shallow(<Pagination />)

    expect(
      pages.contains(
        <>
          <div className="pagination flex mt-8  items-center justify-center "></div>
        </>,
      ),
    ).toEqual(true)
  })
})

describe('Test update profile form component', () => {
  test('should test pagination components', () => {
    const pages = shallow(
      <Provider store={store}>
        <UpdateProfile />
      </Provider>,
    )
      .childAt(0)
      .dive()

    expect(pages.length).toBe(1)
  })
  test('should test map state', () => {
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
  test('should test singleProfile components', () => {
    let Logout
    let LogoutAction
    const userData = {}
    const wrapper = shallow(<UpdateProfile />)
    expect(
      wrapper.contains(
        <div className="bg-gray-100 grid grid-cols-12  grid-rows-mdScreen md:grid-rows-layout  ">
          <NavBar
            userData={userData}
            LogoutAction={LogoutAction}
            Logout={Logout}
          />
          <SideBar />
          <Profile userData={userData} />
          <Footer />
        </div>,
      ),
    ).toEqual(false)
  })
})
