import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import close_eye from '../../../imgs/close_eye_rounded.svg'
import eye from '../../../imgs/eye_rounded.svg'
import { typeDataSignUp } from '../../Interface/Interface'
import styles from './MyFormSignUp.module.css'

const MyFormSignUp = () => {

    const [imgPassword, setImgPassword] = useState<string>(close_eye)

    const [inputType, setInputType] = useState<string>('password')

    const { register, formState: { errors, isValid }, handleSubmit, reset } = useForm<typeDataSignUp>({ mode: 'all' })

    function onSubmit(data: typeDataSignUp) {
        reset()
    }

    function showPassword() {
        if (imgPassword == close_eye) {
            setImgPassword(eye)
            setInputType('text')
        } else {
            setImgPassword(close_eye)
            setInputType('password')
        }
    }

    return (
        <form className={styles.FormSignUp} onSubmit={handleSubmit(onSubmit)}>
            <p className={styles.SignUpParagraph}>Login</p>
            <input maxLength={26} className={styles.SignUpInput}
                {...register('login',
                    {
                        required: 'Required',
                        minLength: {
                            value: 3,
                            message: 'At least 3 characters'
                        },
                        maxLength: {
                            value: 25,
                            message: 'Maximum 25 characters'
                        }
                    })} />
            <div>
                {errors?.login && <p className={styles.SignUpErrorMessage}>{errors?.login?.message || 'Error'}</p>}
            </div>
            <p className={styles.SignUpParagraph}>Password</p>
            <div className={styles.InputPassword}>
                <input type={inputType} maxLength={36} className={styles.SignUpInput}
                    {...register('password',
                        {
                            required: 'Required',
                            minLength: {
                                value: 3,
                                message: 'At least 3 characters'
                            },
                            maxLength: {
                                value: 35,
                                message: 'Maximum 35 characters'
                            }
                        })} />
                <img onClick={() => showPassword()} className={styles.PasswordImg} src={imgPassword} alt="" />
            </div>
            <div>
                {errors?.password && <p className={styles.SignUpErrorMessage}>{errors.password.message}</p>}
            </div>
            <p className={styles.SignUpParagraph}>Enter your password again</p>
            <div className={styles.InputPassword}>
                <input type={inputType} maxLength={36} className={styles.SignUpInput}
                    {...register('passwordAgain',
                        {
                            required: 'Required',
                            minLength: {
                                value: 3,
                                message: 'At least 3 characters'
                            },
                            maxLength: {
                                value: 35,
                                message: 'Maximum 35 characters'
                            }
                        })} />
                <img onClick={() => showPassword()} className={styles.PasswordImg} src={imgPassword} alt="" />
            </div>
            <div>
                {errors?.passwordAgain && <p className={styles.SignUpErrorMessage}>{errors.passwordAgain.message}</p>}
            </div>
            <div className={styles.checkbox}>
                <input type="checkbox"
                    {...register('checkBox',
                        {
                            
                        })}
                />
                <p className={styles.SignUpCheckBoxText}>I accept the agreement</p>
            </div>
            <input className={styles.SignUpButton} type='submit' disabled={!isValid} value='Sign Up' />
            <p className={styles.SignUpParagraph}>Already a member? <span className={styles.SignUpLink}>Sign in</span></p>
        </form>
    )
}

export default MyFormSignUp