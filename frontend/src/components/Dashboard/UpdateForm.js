/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import Skeleton from 'react-loading-skeleton'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import validationSchema from './validations/userProfileValidation'
import svg from '../../assets/833.svg'

const UpdateForm = ({ userData }) => {
  const {
    firstName,
    lastName,
    email,
    preferedLanguage,
    officeAddres,
    profilePicture,
  } = userData
  const [loading, setLoading] = useState(true)
  const [spinner, setSpinner] = useState(false)

  const initialValues = {
    firstName,
    lastName,
    email,
    preferedLanguage,
    officeAddres,
    profilePicture,
  }
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])
  const dispatch = useDispatch()

  const history = useHistory()
  const onSubmit = (values) => {
    const data = new FormData()
    data.append('profilePicture', values.profilePicture)
    data.append('firstName', values.firstName)
    data.append('lastName', values.lastName)
    data.append('email', values.email)
    data.append('preferedLanguage', values.preferedLanguage)
    data.append('officeAddres', values.officeAddres)

    axios
      .patch(
        `https://elite-staging.herokuapp.com/api/v1/users/updateProfile/`,
        data,
      )
      .then((res) => {
        dispatch({ type: 'UPDATE_SUCCESS', payload: res })
        setTimeout(() => {
          history.push('/dashboard/profile')
        }, 3000)
        toast.success('User Profile updated successfully')
      })
      .catch((error) => {
        dispatch({ type: 'UPDATE_FAILED', payload: error })
        toast.error(
          'Image is required and in this quality jpeg,jpg,png and fileSize smaller than 1Mb. ',
        )
      })
  }

  return (
    <>
      <div
        id="wrapper"
        className="col-start-3    row-start-2  col-end-13 p-4 md:p-12"
      >
        <ToastContainer />
        <h1 className="text-blue-600 h1 font-bold text-xl  md:text-3xl mb-4 w-full  md:w-2/4">
          Update profile
        </h1>
        <Formik
          className="grid grid-cols-1 items-center  "
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formProps) => (
            <div className="bg-white rounded-sm items-center flex flex-col p-4 md:p-12 mb-6 ">
              <Form className="w-full ">
                <div
                  className="bg-white rounded-sm  w-full
              md:p-0    flex flex-col md:flex-row "
                >
                  <div>
                    <input
                      type="file"
                      className={`${
                        loading ? 'hidden' : 'block'
                      } py-4 h-12 mr-10 md:m-0 focus:border-none  text-xs`}
                      name="profilePicture"
                      id="profilePicture"
                      onChange={(event) =>
                        formProps.setFieldValue(
                          'profilePicture',
                          event.target.files[0],
                        )
                      }
                    />
                    <span className={`${loading ? 'block' : 'hidden'}`}>
                      <Skeleton width={150} height={30} />
                    </span>

                    <ErrorMessage
                      className="text-red-600"
                      name="profilePicture"
                      component="span"
                    />
                  </div>
                </div>
                <div className="names  flex flex-col md:flex-row  ">
                  <div
                    className={`${
                      loading ? 'hidden' : 'block'
                    } w-full md:w-6/12`}
                  >
                    <label
                      htmlFor="firstName"
                      className="capitalize text-gray-500 pt-2  "
                    >
                      {' '}
                      FirstName{' '}
                    </label>
                    <Field
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="outline-none w-full border my-2  shadow-md bg-white rounded-sm py-2 px-2"
                    />
                    <ErrorMessage
                      className="text-red-600"
                      name="firstName"
                      component="span"
                    />
                  </div>
                  <div
                    className={`${
                      loading ? 'block' : 'hidden'
                    } my-4 w-full md:w-6/12`}
                  >
                    <Skeleton height={45} />
                  </div>
                  <div
                    className={`${
                      loading ? 'hidden' : 'block'
                    } controlInput w-full md:w-6/12 m-o md:ml-8`}
                  >
                    <label
                      htmlFor="lastName"
                      className="capitalize text-gray-500 pt-2  "
                    >
                      {' '}
                      lastName{' '}
                    </label>
                    <Field
                      type="text"
                      name="lastName"
                      id="lastName"
                      className="outline-none w-full border my-2  shadow-md bg-white  rounded-sm py-2 px-2"
                    />
                    <ErrorMessage
                      className="text-red-600"
                      name="lastName"
                      component="span"
                    />{' '}
                  </div>
                  <div
                    className={`${
                      loading ? 'block' : 'hidden'
                    } my-4 w-full md:w-6/12 ml-0 md:ml-8`}
                  >
                    <Skeleton height={45} />
                  </div>
                </div>
                <div className="names flex flex-col  md:flex-row  mt-2 ">
                  <div
                    className={`${
                      loading ? 'hidden' : 'block'
                    } w-full md:w-6/12`}
                  >
                    <label
                      htmlFor="firstName"
                      className="capitalize text-gray-500 pt-2  "
                    >
                      {' '}
                      email{' '}
                    </label>
                    <Field
                      type="text"
                      name="email"
                      className="outline-none w-full border my-4 shadow-md bg-white   rounded-sm py-2 px-2"
                    />
                    <ErrorMessage
                      className="text-red-600"
                      name="email"
                      component="span"
                    />
                  </div>
                  <div
                    className={`${
                      loading ? 'block' : 'hidden'
                    } my-4 w-full md:w-6/12`}
                  >
                    <Skeleton height={45} />
                  </div>
                  <div
                    className={`${
                      loading ? 'hidden' : 'block'
                    } controlInput w-full md:w-6/12 m-o md:ml-8`}
                  >
                    <label
                      htmlFor="firstName"
                      className="capitalize text-gray-500 pt-2  "
                    >
                      {' '}
                      Language{' '}
                    </label>
                    <Field
                      type="text"
                      name="preferedLanguage"
                      className="outline-none w-full border my-4 shadow-md bg-white   rounded-sm py-2 px-2"
                    />
                    <ErrorMessage
                      className="text-red-600"
                      name="preferedLanguage"
                      component="span"
                    />
                  </div>
                  <div
                    className={`${
                      loading ? 'block' : 'hidden'
                    } my-4 w-full md:w-6/12 ml-0 md:ml-8`}
                  >
                    <Skeleton height={45} />
                  </div>
                </div>
                <div className="names flex flex-col md:flex-row mt-2   ">
                  <div className={`${loading ? 'hidden' : 'block'} w-full`}>
                    <label
                      htmlFor="firstName"
                      className="capitalize text-gray-500 pt-2  "
                    >
                      {' '}
                      Address{' '}
                    </label>
                    <Field
                      type="text"
                      name="officeAddres"
                      className="outline-none w-full border my-4  shadow-md bg-white  rounded-sm py-2 px-2"
                    />
                    <ErrorMessage
                      className="text-red-600"
                      name="officeAddres"
                      component="span"
                    />
                  </div>
                  <div
                    className={`${loading ? 'block' : 'hidden'} my-4 w-full`}
                  >
                    <Skeleton height={45} />
                  </div>
                </div>
                <button
                  type="submit"
                  className={`outline-none ${spinner ? 'hidden' : 'flex'}  ${
                    loading ? 'hidden' : 'block'
                  } mt-8 w-full  md:w-1/5   items-center justify-center 
                 bg-blue-600  text-white px-3 py-1 rounded-sm `}
                >
                  Update
                </button>
                <div
                  className={`${
                    loading ? 'block ' : 'hidden'
                  } mt-4 w-full  md:w-1/5`}
                >
                  <Skeleton height={35} />
                </div>

                <button
                  type="button"
                  className={`outline-none ${
                    spinner ? 'flex' : 'hidden'
                  } mt-8 w-full  md:w-1/5   items-center justify-center 
                 bg-blue-600  text-white px-3 py-1 rounded-sm cursor-not-allowed`}
                >
                  <img
                    src={svg}
                    alt="spinner"
                    className="bg-blue-600 h-3.5 w-3.5 mr-4"
                  />
                  Update
                </button>
              </Form>
            </div>
          )}
        </Formik>
      </div>
    </>
  )
}

export default UpdateForm
