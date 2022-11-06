import React, { FC } from 'react'
import styles from './SignIn.module.css'
import backgroundImg from '../../../../imgs/Group.svg'
import MyFormSignIn from '../../../UI/MyFormSignIn/MyFormSignIn'

const SignIn: FC = () => {

  return (
    <div className={styles.SignInBox}>
      <div className={styles.SignInLeftPart}>
        <div className={styles.SignInLeftPartContent}>
          <h1 className={styles.SignInTitle}>Sign In</h1>
          <MyFormSignIn />
        </div>
      </div>
      <div className={styles.SignInRightPart}>
        <img className={styles.SignInImg} src={backgroundImg} alt="" />
      </div>
    </div>
  )
}

export default SignIn