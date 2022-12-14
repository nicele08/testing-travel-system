/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react'
import { Route } from 'react-router-dom'

import Users from '../../../containers/Users/Users'

const Content = () => (
  <div className="col-start-3  bg-gray-100  row-start-2  col-end-13  md:p-12 min-h-screen">
    <Route
      path="/dashboard/users"
      component={(props) => <Users {...props} />}
    />
  </div>
)

export default Content
