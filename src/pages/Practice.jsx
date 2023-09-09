import React, { useContext } from 'react'
import { Context } from '../context/Context'

const Practice = () => {
  const {user} = useContext(Context)
  console.log(user.user.fullName)
  return (
    <div>
      <h1>Practice</h1>
      <h1>
        {user.user.fullName}
      </h1>
    </div>
  )
}

export default Practice