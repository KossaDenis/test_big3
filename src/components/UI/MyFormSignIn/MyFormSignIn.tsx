import React, { FC, ReactNode, useState } from 'react'
import { useForm } from 'react-hook-form'
import close_eye from '../../../imgs/close_eye_rounded.svg'
import eye from '../../../imgs/eye_rounded.svg'
import { typeDataSignIn } from '../../Interface/Interface'
import styles from './MyFormSignIn.module.css'


const MyFormSignIn: FC = () => {

    const [imgPassword, setImgPassword] = useState<string>(close_eye)

    const [inputType, setInputType] = useState<string>('password')

    const { register, formState: { errors, isValid }, handleSubmit, reset } = useForm<typeDataSignIn>({ mode: 'all' })

    function onSubmit(data: typeDataSignIn) {
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
        <form className={styles.FormSignIn} onSubmit={handleSubmit(onSubmit)}>
            <p className={styles.SignInParagraphLogin}>Login</p>
            <input maxLength={26} className={styles.SignInInput}
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
                {errors?.login && <p className={styles.SignInErrorMessage}>{errors?.login?.message || 'Error'}</p>}
            </div>
            <p className={styles.SignInParagraphPassword}>Password</p>
            <div className={styles.InputPassword}>
                <input type={inputType} maxLength={36} className={styles.SignInInput}
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
                {errors?.password && <p className={styles.SignInErrorMessage}>{errors.password.message}</p>}
            </div>
            <input className={styles.SignInButton} type='submit' disabled={!isValid} value='Sign In' />
            <p className={styles.SignInParagraph}>Not a member yet? <span className={styles.SignUpLink}>Sign up</span></p>
        </form>
    )
}

export default MyFormSignIn