import axios from 'axios'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {
  FETCH_USERS_START,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAIL,
  ASSIGN_USERS_TO_MANAGERS_START,
  ASSIGN_USERS_TO_MANAGERS_SUCCESS,
  ASSIGN_USERS_TO_MANAGERS_FAIL,
} from '../../constants/actionTypes'

export const fetchUsersSuccess = (users) => ({
  type: FETCH_USERS_SUCCESS,
  users,
})

export const fetchUsersFail = (error) => ({
  type: FETCH_USERS_FAIL,
  error,
})

export const fetchUsersStart = () => ({
  type: FETCH_USERS_START,
})

export const assignUsersToManagersFail = (error) => ({
  type: ASSIGN_USERS_TO_MANAGERS_FAIL,
  error,
})

export const assignUsersToManagersStart = () => ({
  type: ASSIGN_USERS_TO_MANAGERS_START,
})

export const assignUsersToManagersSuccess = (assigned) => ({
  type: ASSIGN_USERS_TO_MANAGERS_SUCCESS,
  assigned,
})

export const assignUsersToManagers = (lineManagerId, id) => (dispatch) => {
  dispatch(assignUsersToManagersStart())
  const token = localStorage.getItem('jwtToken')
  const url = 'http://localhost:3000/api/v1/users/assign/manager'
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const body = {
    lineManagerId,
    id,
  }
  axios
    .put(url, body, config)
    .then((res) => {
      const time = new Date().getTime()
      dispatch(assignUsersToManagersSuccess({ time }))
      toast.success('User assigned succesfully')
    })
    .catch((err) => {
      dispatch(assignUsersToManagersFail(err))
      toast.error('User assign failed')
    })
}

export const fetchUsers = () => (dispatch) => {
  dispatch(fetchUsersStart())
  const token = localStorage.getItem('jwtToken')
  const url = 'http://localhost:3000/api/v1/users/getUser'
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  axios
    .get(url, config)
    .then((res) => {
      const { data } = res.data
      const fetchedUsers = [...data]
      dispatch(fetchUsersSuccess(fetchedUsers))
    })
    .catch((err) => {
      dispatch(fetchUsersFail(err))
    })
}
