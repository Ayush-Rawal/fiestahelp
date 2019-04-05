import React, {useState} from 'react'
import css from './style.module.css'
import {AuthContext} from '../AuthWall'

export function LoginSignup() {
    const [screen, setScreen] = useState("login")
    const [isSubmitting, setSubmitting] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [password2, setPassword2] = useState("")
    return (
        <AuthContext.Consumer>
            {value => (
                <>
                <h2 className={css.header}>{screen === "login"? "Login" : "Signup"}</h2>
                <form className={css.form}>
                        <div className={css.form__group}>
                            <input className={css.form__input} type="email" required onChange={function (e) {setEmail(e.target.value.toLowerCase())}} value={email} name="email" />
                            <label className={css.form__label} for="email">Email: </label>
                        </div>

                        <div className={css.form__group}>
                            <input className={css.form__input} type="password" required onChange={function (e) {setPassword(e.target.value.toLowerCase())}} value={password} name="password" />
                            <label className={css.form__label} for="password">Password: </label>
                        </div>
                    {
                        (screen === "signup")
                        &&
                        (
                        <div className={css.form__group}>
                            <input className={css.form__input} type="password" required onChange={function (e) {setPassword2(e.target.value.toLowerCase())}} value={password2} name="confirmPassword" />
                            <label className={css.form__label} for="confirmPassword">Confirm Password </label>
                        </div>
                        )
                    }
                    <button type="submit" disabled={isSubmitting} >Submit</button>
                    {(screen === "login")
                    ?
                        (<p className={css.changescreen} onClick={() => setScreen("signup")}>New Here? Register</p>)
                    :
                        (<p className={css.changescreen} onClick={() => setScreen("login")} >Already Registered? Login</p>)
                    }
                </form>
                </>
            )}
        </AuthContext.Consumer>
    )
}