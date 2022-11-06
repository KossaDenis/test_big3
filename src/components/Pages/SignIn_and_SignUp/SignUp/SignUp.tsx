import React from 'react'
import MyFormSignUp from '../../../UI/MyFormSignUp/MyFormSignUp'
import styles from './SignUp.module.css'
import backgroundImg from '../../../../imgs/imgSignUp.svg'

const SignUp = () => {
  return (
    <div className={styles.SignInBox}>
      <div className={styles.SignInLeftPart}>
        <div className={styles.SignInLeftPartContent}>
          <h1 className={styles.SignInTitle}>Sign Up</h1>
          <MyFormSignUp />
        </div>
      </div>
      <div className={styles.SignInRightPart}>
        <img className={styles.SignInImg} src={backgroundImg} alt="" />
      </div>
    </div>
  )
}

export default SignUp