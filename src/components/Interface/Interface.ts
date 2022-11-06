export interface typeDataSignIn {
    login: string
    password: string | number
}

export interface typeDataSignUp extends typeDataSignIn {
    passwordAgain: string | number
    checkBox: boolean
}