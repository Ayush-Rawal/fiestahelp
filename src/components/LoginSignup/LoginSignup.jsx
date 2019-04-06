import React, {useState} from 'react'
import css from './style.module.css'
import {AuthContext} from '../AuthWall'

export function LoginSignup() {
    const [provider, setProvider] = useState("email") // email, phone, twitter, github
    const [screen, setScreen] = useState("login")

    return (
        <AuthContext.Consumer>
            {value => (
                <>
                <h2 className={css.header}>{screen === "login"? "Login" : "Signup"}</h2>
                {provider === "email" && (<EmailLoginSignup screen={screen} />)}
                {provider === "phone" && (<PhoneLoginSignup screen={screen} />)}
                {(screen === "login")
                ?
                    (<p className={css.changescreen} onClick={() => setScreen("signup")}>New Here? Register</p>)
                :
                    (<p className={css.changescreen} onClick={() => setScreen("login")} >Already Registered? Login</p>)
                }

                <div className={css.providers}>
                    {provider !== "email" && (<button className={css.provider} onClick={function() {setProvider("email")}} >Login with Email</button>)}
                    {provider !== "phone" && (<button className={css.provider} onClick={function() {setProvider("phone")}} >Login with Phone</button>)}
                    <button className={css.provider} onClick={function() {setProvider("twitter")}} >Login with Twitter</button>
                    <button className={css.provider} onClick={function() {githubAuth()}} >Login with GitHub</button>
                </div>

                </>
            )}
        </AuthContext.Consumer>
    )
}

function EmailLoginSignup ({screen}) {
    const [isSubmitting, setSubmitting] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [password2, setPassword2] = useState("")
    return (
        <>
        <form className={css.form}>
            <div className={css.form__group}>
                <input className={css.form__input} type="email" required onChange={function (e) {setEmail(e.target.value.toLowerCase())}} value={email} name="email" />
                <label className={css.form__label} htmlFor="email">Email: </label>
            </div>

            <div className={css.form__group}>
                <input className={css.form__input} type="password" required onChange={function (e) {setPassword(e.target.value.toLowerCase())}} value={password} name="password" />
                <label className={css.form__label} htmlFor="password">Password: </label>
            </div>
        {
            (screen === "signup")
            &&
            (
            <div className={css.form__group}>
                <input className={css.form__input} type="password" required onChange={function (e) {setPassword2(e.target.value.toLowerCase())}} value={password2} name="confirmPassword" />
                <label className={css.form__label} htmlFor="confirmPassword">Confirm Password </label>
            </div>
            )
        }
            <button type="submit" disabled={isSubmitting} >Submit</button>
        </form>
        </>
    )
}

function PhoneLoginSignup () {
    const [phone, setPhone] = useState("")
    const [isSubmitting, setSubmitting] = useState(false)
    return (
        <>
        <form className={css.form}>
            <div className={css.form__group}>
                <input className={css.form__input} type="tel" required onChange={function (e) {setPhone(e.target.value.toLowerCase())}} value={phone} name="phone" />
                <label className={css.form__label} htmlFor="phone">Mob: </label>
                <p>We'll send an OTP on this number</p>
            </div>
            <button type="submit" disabled={isSubmitting} >Submit</button>
        </form>
        </>
    )
}

function githubAuth () {
    fetch("/auth/github")
    .then(res => res.json())
    .then(res => console.log(res))
}
