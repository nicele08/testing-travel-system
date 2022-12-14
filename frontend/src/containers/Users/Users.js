/* eslint-disable  */
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUsers, assignUsersToManagers } from '../../store/actions/index'
import User from '../../components/User/User'
import './users.css'

const Users = (props) => {
  const changeManagerHandler = (event, userId) => {
    const managerId = event.target.value
    props.onAssignUsersToManagers(managerId, userId)
  }

  useEffect(() => {
    props.onFetchUsers()
  }, [props.assigned])
  let users = (
    <tr>
      <td>users loading...</td>
    </tr>
  )
  if (!props.loading) {
    users = props.users.map((user) => (
      <User
        changed={(event) => changeManagerHandler(event, user.id)}
        key={user.id}
        data={user}
      />
    ))
  }
  return (
    <div className="table-wrapper w-98 md:w-full overflow-x-auto bg-white text-gray-600">
      <table className="table-auto  md:table-fixed w-full text-left border-collapse">
        <thead className="border-b-2">
          <tr>
            <th className="w-1/3 py-2 px-3 z-20 sticky top-0 text-sm font-semibold">
              Fist Name
            </th>
            <th className="w-1/3 py-2 px-3 z-20 sticky top-0 text-sm font-semibold">
              E-mail
            </th>
            <th className="w-1/5 py-2 px-3 z-20 sticky top-0 text-sm font-semibold">
              Line Manager
            </th>
            <th className="w-1/5 py-2 px-3 z-20 sticky top-0 text-sm font-semibold">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="align-baseline">{users}</tbody>
      </table>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    users: state.usersToManagers.users,
    loading: state.usersToManagers.loading,
    assigned: state.usersToManagers.assigned,
    token: state.user.token,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchUsers: () => dispatch(fetchUsers()),
    onAssignUsersToManagers: (lineManager, userId) =>
      dispatch(assignUsersToManagers(lineManager, userId)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)
