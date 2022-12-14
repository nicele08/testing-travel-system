/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FaUserEdit } from 'react-icons/fa'
import { AiOutlineDown } from 'react-icons/ai'
import { FiGlobe } from 'react-icons/fi'
import { IoLogOutOutline } from 'react-icons/io5'
import { toast, ToastContainer } from 'react-toastify'
import Skeleton from 'react-loading-skeleton'

const NavBar = ({ userData, LogoutAction }) => {
  const history = useHistory()
  const [dropDown, setDropDown] = useState(false)
  const [loading, setLoading] = useState(true)

  const { firstName, profilePicture } = userData
  const logout = () => {
    toast.success('User logout successfully')

    LogoutAction()

    setTimeout(() => {
      history.push('/login')
    }, 3000)
  }
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])
  return (
    <div className="col-span-full  w-full  col-start-3  col-end-14 shadow-xl  ">
      <header className="flex justify-between h-16 align-center items-center font-mainFont relative   ">
        <nav className="flex  w-full justify-between ">
          <div className="cursor-pointer">
            <Link to="/" className="pl-1 md:pl-8">
              Home
            </Link>
          </div>

          <div className="flex flex-row">
            <div className="flex flex-row w-2/4 ">
              <div className="profile flex-row flex mr-2 md:mr-7">
                <div className="flex-row flex relative">
                  <img
                    className={`${
                      loading ? 'hidden' : 'block'
                    } w-6 h-6 rounded-3xl  mr-1`}
                    src={
                      profilePicture ||
                      'https://res.cloudinary.com/nrob/image/upload/v1613451239/npc5d5r9g0nyyihppqxd.png'
                    }
                    alt="profile"
                  />
                  <span className={`${loading ? 'block' : 'hidden'}`}>
                    <Skeleton animation={false} circle width={30} height={30} />
                  </span>
                  <span className="text-sm mr-1 flex   w-16">
                    <span className={`${loading ? 'hidden' : 'block'} w-full`}>
                      {firstName}
                    </span>
                    <span
                      className={`${
                        loading ? 'block' : 'hidden'
                      } z-20 mx-1 my-2`}
                    >
                      <Skeleton animation={false} width={50} />
                    </span>

                    <AiOutlineDown
                      onClick={() => setDropDown(!dropDown)}
                      className={`${
                        loading ? 'hidden' : 'block'
                      } down text-xs ml-0.5 mt-1 cursor-pointer`}
                    />
                  </span>
                  <div>
                    <div
                      className="dropdown flex bg-white  shadow-xl flex-col absolute right-20 z-30 top-12 "
                      style={{ display: dropDown ? 'flex' : 'none' }}
                    >
                      <div className="flex py-2 px-4  cursor-pointer hover:bg-gray-500 hover:text-white">
                        <div className="drop-item">
                          <FaUserEdit className="mt-1" />
                        </div>
                        <div className="drop-item">
                          <Link to="/dashboard/profile/">
                            <span className="text-xs ml-2"> Profile</span>
                          </Link>
                        </div>
                      </div>
                      <div
                        className="logout flex py-2 px-4 cursor-pointer hover:bg-gray-500 hover:text-white "
                        onClick={logout}
                      >
                        <div className="drop-item">
                          <IoLogOutOutline className="mt-1" />
                        </div>
                        <div className="drop-item">
                          <span className="l text-xs ml-2 cursor-pointer">
                            Logout
                          </span>
                        </div>
                      </div>
                    </div>
                    <div
                      className={`${
                        loading ? 'flex ml-0 md:ml-0' : 'flex ml-2 md:ml-4'
                      }  `}
                    >
                      <span>
                        <FiGlobe
                          className={`text-lg ${
                            loading ? 'hidden' : 'flex'
                          } m-1`}
                        />
                        <span
                          className={`${loading ? 'block' : 'hidden'} z-20`}
                        >
                          <Skeleton
                            animation={false}
                            circle
                            width={30}
                            height={30}
                          />
                        </span>
                      </span>
                      <span className={`${loading ? 'hidden' : 'block'} eng`}>
                        English
                      </span>
                      <span
                        className={`${
                          loading ? 'block' : 'hidden'
                        } z-20 mx-1 my-2`}
                      >
                        <Skeleton animation={false} width={50} />
                      </span>
                      <span className={`${loading ? 'hidden' : 'block'}`}>
                        <AiOutlineDown className=" text-lg cursor-pointer pt-1 mt-0.5" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <ToastContainer />
    </div>
  )
}

export default NavBar
