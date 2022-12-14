import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Navbar from '../components/Header/NavBar'

configure({ adapter: new Adapter() })
describe('rendering components', () => {
  it('renders the title barefoot-nomad', () => {
    const wrapper = shallow(<Navbar />)
    expect(wrapper.find('h1').text()).toContain('Barefoot-Nomad')
  })

  it('renders the button of register', () => {
    const wrapper = shallow(<Navbar />)
    expect(wrapper.find('#register-btn').text()).toBe('Register')
  })
  test('renders the button of login', () => {
    const wrapper = shallow(<Navbar />)
    expect(wrapper.find('#login-btn').text()).toBe('Login')
  })
  test('renders the english text', () => {
    const wrapper = shallow(<Navbar />)
    expect(wrapper.find('#english').text()).toBe('English')
  })
})
