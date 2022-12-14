/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import { MdEmail, MdLanguage } from 'react-icons/md'
import { IoLocationSharp } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'
import Pagination from './Pagination'
const Profile = ({ userData }) => {
  const [loading, setLoading] = useState(true)
  const {
    firstName,
    lastName,
    email,
    profilePicture,
    officeAddres,
    preferedLanguage,
  } = userData
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])
  return (
    <>
      <div className="col-start-3    row-start-2  col-end-13 p-4 md:p-12">
        <div className="card bg-white w-full  items-center flex flex-col">
          <div className="imgs flex flex-col w-full items-center mb-4  ">
            <div
              className={`${
                loading ? 'hidden' : 'block'
              } w-full bg-blue-600    relative  h-72 md:h-100`}
              alt="background"
            >
              <img
                className={`${
                  loading ? 'hidden' : 'block'
                } rounded-full h-24 md:h-32 w-24 md:w-32 absolute  inset-x-1/4 md:inset-x-2/4 -bottom-16  border-white  border-8 `}
                src={
                  profilePicture ||
                  'https://res.cloudinary.com/nrob/image/upload/v1613451239/npc5d5r9g0nyyihppqxd.png'
                }
                alt="Profile"
              />
            </div>
            <div
              className={`${
                loading ? 'block' : 'hidden '
              } w-full  relative  h-100`}
              alt="background"
            >
              <div className={` ${loading ? 'block' : 'hidden'} w-full `}>
                <Skeleton height={350} />
              </div>
              <div
                className={`${
                  loading ? 'block' : 'hidden'
                } absolute mt-2 inset-x-1/2 sm:inset-x-1/4 md:inset-x-2/4 -bottom-10 sm:-bottom-16`}
              >
                <Skeleton circle width={100} height={100} />
              </div>
            </div>
          </div>
          <div className="info items-center mr-4 md:mr-0  mt-12 md:mt-12 flex  flex-col">
            <h2
              className={`${
                loading ? ' hidden' : 'block'
              } text-2xl   flex justify-between text-gray-700`}
            >
              <span id="firstName"> {firstName}</span> <br />
              <span className="pl-2" id="lastName">
                {' '}
                {lastName}
              </span>
            </h2>
            <div className={`${loading ? 'block' : 'hidden'} `}>
              <Skeleton
                animation="wave"
                variant="text"
                width={120}
                height={30}
              />
            </div>
          </div>
          <div
            className={`${
              loading ? 'hidden' : 'grid'
            } grid-cols-1  md:grid-cols-2 lg:grid-cols-3 my-7 justify-between px-4 md:px-0 w-full items-center`}
          >
            <div className="info ml-7 ms:ml-14 mb-2  md:mt-7  pr-0  md:p-0  items-center flex flex-col">
              <div>
                <h3 className=" flex">
                  <MdEmail className="mt-1  text-blue-600" />
                  <span className="text-sm  text-gray-700 ml-2">Email</span>
                </h3>
                <span id="email" className="text-gray-500">
                  {email || 'none'}
                </span>
              </div>
            </div>
            <div className="info mr-9  md:mr-0 items-center mt-7  pb-0 sm:pb-6  md:pb-2 flex  flex-col">
              <div>
                <h2 className="flex text-gray-700">
                  <MdLanguage className="mt-1 mr-0.5  text-blue-600" />
                  Language
                </h2>
                <span
                  id="preferedLanguage"
                  className=" text-sm ml-2   text-gray-500"
                >
                  {preferedLanguage || 'none'}
                </span>
              </div>
            </div>
            <div className="info mt-4 mr-16  md:mr-14 pl-1 items-center flex flex-col">
              <div>
                <h2 className="flex text-gray-700">
                  <IoLocationSharp className="mt-1 text-blue-600" />
                  Address
                </h2>
                <span id="officeAddres" className=" text-sm ml-2 text-gray-500">
                  {officeAddres || 'none'}
                </span>
              </div>
            </div>
          </div>
          <div
            className={`${
              loading ? 'grid' : 'hidden'
            }  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-7 justify-between  w-full items-center `}
          >
            <div className="info mt-1 md:mt-4   items-center flex flex-col">
              <div className="flex-col flex">
                <Skeleton animation="wave" height={20} width={170} />
                <Skeleton animation="wave" height={20} width={170} />
              </div>
            </div>
            <div className="info mr-0 md:mr-0 items-center mt-2  pb-0 sm:pb-2  md:pb-2 flex  flex-col">
              <div className="flex-col flex">
                <Skeleton animation="wave" height={20} width={170} />
                <Skeleton animation="wave" height={20} width={170} />
              </div>
            </div>
            <div className="info mt-4 mr-0 md:mr-0 pr-0 items-center flex flex-col">
              <div className="flex-col flex">
                <Skeleton animation="wave" height={25} width={170} />
                <Skeleton animation="wave" height={25} width={170} />
              </div>
            </div>
          </div>
          <div
            className={`${
              loading ? 'hidden' : 'block'
            } border-gray-500 border-t py-4 w-10/12 flex-col flex items-center `}
          >
            <Link to="/dashboard/profile/update/">
              <button
                id="button"
                type="submit"
                className={`${
                  loading ? 'hidden' : 'block'
                } outline-none mt-8 border-none
               focus:border-none  bg-blue-600 hover:bg-indigo-600 text-white px-8 py-1 rounded-sm`}
              >
                Update
              </button>
            </Link>
          </div>
          <div
            className={`${
              loading ? 'block' : 'hidden'
            } py-2 mb-6 w-10/12 flex-col flex items-center`}
          >
            <Skeleton animation="wave" height={35} width={120} />
          </div>
        </div>
        <Pagination />
      </div>
    </>
  )
}
export default Profile