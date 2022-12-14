/* eslint-disable */
import React, { useState } from 'react'
import ProtoTypes from 'prop-types'
import { ToastContainer } from 'react-toastify'

const User = ({ data, changed }) => {
  const [select, setSelect] = useState(false)
  const toggle = () => setSelect(!select)
  return (
    <tr key={data.id}>
      <td className="py-2 pl-2 font-mono text-xs text-gray-700 whitespace-pre border-t border-gray-200">
        {data.firstName}
      </td>
      <td className="py-2 pl-2 font-mono text-xs text-gray-700 whitespace-pre border-t border-gray-200">
        {data.email}
      </td>
      <td className="py-2 pl-2 font-mono text-xs text-gray-700 whitespace-pre border-t border-gray-200">
        {data.lineManager || 'No manager'}
      </td>
      <td className="relative py-2 pl-2 font-mono text-xs text-gray-700 whitespace-pre border-t border-gray-200">
        <button
          onClick={toggle}
          className="outline-none border-none focus:outline-none"
          type="button"
        >
          <i className="fas fa-edit text-blue-800 hover:text-blue-600">
            Assign Manager
          </i>
        </button>
        <select
          data-testid="select"
          onChange={changed}
          defaultValue={data.lineManager || ''}
          className={
            !select
              ? 'hidden'
              : 'outline-none shadow-md border border-gray-300 rounded-sm right-0 top-0 absolute'
          }
        >
          <option value="" disabled>
            Select Line...
          </option>
          <option value="1">Line 1</option>
          <option value="2">Line 2</option>
          <option value="3">Line 3</option>
          <option value="4">Line 4</option>
        </select>
      </td>
      <ToastContainer />
    </tr>
  )
}
User.prototype = {
  setLineManager: ProtoTypes.func.isRequired,
}

export default User
