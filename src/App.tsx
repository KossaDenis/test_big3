import React, { FC } from 'react'
import SignIn from './components/Pages/SignIn_and_SignUp/SignIn/SignIn'
import SignUp from './components/Pages/SignIn_and_SignUp/SignUp/SignUp'

const App:FC = () => {
  return (
    <div>
      {/* <SignIn /> */}
      <SignUp />
    </div>
  )
}

export default App