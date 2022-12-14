/* eslint-disable  */
import React, { useState } from 'react'
import {
  AiFillCaretDown,
  AiOutlineCaretRight,
  AiOutlineRight,
} from 'react-icons/ai'
import { FaLinkedinIn, FaTimesCircle, FaUserShield } from 'react-icons/fa'
import { RiUserSearchFill, RiCustomerService2Fill } from 'react-icons/ri'
import { Link, NavLink } from 'react-router-dom'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import PropTypes from 'prop-types'
import jwt from 'jsonwebtoken'

const SideBar = ({ down }) => {
  const [down1, setDown1] = useState(down)
  const [sideBar, setSideBar] = useState(false)
  const [active, setActive] = useState(false)

  const userInfo = jwt.decode(localStorage.jwtToken)

  const { roleId } = userInfo

  const notAuth = () => {
    toast.error("Sorry, you don't have permission to perform this Action!")
  }

  return (
    <>
      <div
        className={`bg-blue-700 text-white  ${
          sideBar ? 'w-48' : 'w-full'
        }     transition duration-1000 ease-in-out z-30 col-start-1 col-end-3  row-start-1 h-auto   border-white row-end-7 mb-0`}
      >
        <div className="logo text-white text-xl text-center pt-1 font-bold">
          <h1 className={`${sideBar ? 'block' : 'hidden'}   lg:block`}>
            <span>Barefoot-Nomad</span>
            <div className="h-0.5 my-1 bg-white w-4/5 text-center m-auto" />
          </h1>
          <h1
            className={`${
              sideBar ? 'hidden' : 'block'
            } text-3xl text-center  lg:hidden`}
          >
            <span className="flex justify-center mb-2 items-center">
              <span> B</span>
              <AiOutlineRight
                onClick={() => setSideBar(!sideBar)}
                className="open cursor-pointer mt-1"
              />
            </span>

            <div className="h-0.5  bg-white w-7/12 text-center m-auto  " />
          </h1>
        </div>
        <div className="h-px my-5 w-full   text-center " />

        <section className="flex  flex-col items-center">
          <article className="flex  w-full items-center flex-col ">
            <div
              className={`flex ${
                down1 ? 'bg-blue-900' : 'bg-blue-700'
              }    w-full py-2 justify-around md:justify-between px-4 border-b border-blue-800 `}
            >
              <h1 className="flex">
                <FaUserShield className="mt-1 mr-1" />
                <span className={`${sideBar ? 'block' : 'hidden'}  lg:block`}>
                  Users
                </span>
              </h1>
              <AiFillCaretDown
                className={`${
                  down1 ? 'block' : 'hidden'
                } up cursor-pointer mt-1.5 text-sm`}
                onClick={() => setDown1(!down1)}
              />
              <AiOutlineCaretRight
                className={`${
                  down1 ? 'hidden' : 'block'
                } dw cursor-pointer mt-1.5 text-sm`}
                onClick={() => setDown1(!down1)}
              />
            </div>
            <ul
              className={`  ${
                down1 ? 'flex bg-blue-900' : 'hidden bg-blue-700'
              }  py-3  items-center w-full flex-col `}
            >
              <li
                className={`flex  ${
                  active ? 'bg-blue-800' : ''
                }  transition duration-500 focus:bg-blue-800 hover:bg-blue-800 ease-in-out  w-10/12 py-1  transform hover:translate-x-3 hover:scale-110`}
                onClick={() => setActive(!active)}
              >
                <RiUserSearchFill className="ml-1 mt-0.5" />
                <Link to="/dashboard/profile/">
                  <span
                    className={`${
                      sideBar ? 'block' : 'hidden'
                    }  text-sm ml-2 md:block`}
                  >
                    User profile
                  </span>
                </Link>
              </li>
              <li className="flex transition duration-500 ease-in-out hover:bg-blue-800   py-1  transform hover:translate-x-3 hover:scale-110  w-10/12">
                <RiCustomerService2Fill className="ml-1 mt-0.5" />
                {roleId === 3 || roleId === 1 ? (
                  <Link to="/dashboard/users/">
                    <span
                      className={`${
                        sideBar ? 'block' : 'hidden'
                      }  text-sm ml-2 md:block`}
                    >
                      Assign Users
                    </span>
                  </Link>
                ) : (
                  <div onClick={notAuth}>
                    <span
                      className={`${
                        sideBar ? 'block' : 'hidden'
                      }  text-sm ml-2 md:block`}
                    >
                      Assign Users
                    </span>
                  </div>
                )}
              </li>
            </ul>
          </article>
        </section>
      </div>
      {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
      <span
        className={`${
          sideBar ? 'block' : 'hidden'
        } z-30 absolute right-0 close  bg-white text-blue-600 text-3xl cursor-pointer`}
        onClick={() => setSideBar(!sideBar)}
      >
        <FaTimesCircle />
      </span>
    </>
  )
}

SideBar.propTypes = {
  down: PropTypes.bool,
}

SideBar.defaultProps = {
  down: false,
}

export default SideBar
