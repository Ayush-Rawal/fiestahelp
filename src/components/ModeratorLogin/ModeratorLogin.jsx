import React, {useState, useContext} from 'react'
import css from '../LoginSignup/style.module.css'
import {AuthContext} from '../AuthWall'

export function ModeratorLogin() {
    const [isSubmitting, setSubmitting] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    let auth = useContext(AuthContext)

    function submit(e) {
        e.preventDefault()
        fetch(`https://fiestahelp.herokuapp.com/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
                password
            })
        })
        .then(res => res.ok ? res.json() : res)
        .then(res => {
            if(res.ok) {
                auth.setUser(res.data.name, true)
            }
        })
    }
    return (
        <AuthContext.Consumer>
            {value => (
                <>
                <h2 className={css.header}>Moderator Login</h2>                
                <form className={css.form} onSubmit={submit}>
                    <div className={css.form__group}>
                        <input className={css.form__input} type="email" required onChange={function (e) {setEmail(e.target.value.toLowerCase())}} value={email} name="email" />
                        <label className={css.form__label} htmlFor="email">Email: </label>
                    </div>

                    <div className={css.form__group}>
                        <input className={css.form__input} type="password" required onChange={function (e) {setPassword(e.target.value.toLowerCase())}} value={password} name="password" />
                        <label className={css.form__label} htmlFor="password">Password: </label>
                    </div>
                    <button type="submit" disabled={isSubmitting} >Submit</button>
                </form>
            </>
            )}
        </AuthContext.Consumer>
    )
}