import React from 'react'
import {Link} from '@reach/router'
import {AuthContext} from '../AuthWall'
import css from './style.module.css'
import Navbar from '../Navbar'

import fiestaLogo from '../../images/ff_logo_dark.png'

export function Header() {
    return (
        <header className={css.header}>
            <Link to="/" className={css.logo__link}>
                <section className={css.logo}>
                    <img src={fiestaLogo} className={css.logo__image} alt="Flair Fiesta Logo"/>
                    <div style={{display: "flex", flexFlow: "column wrap"}}>
                        <h1 className={css.logo__name}>Help Fiesta</h1>
                        <span className={css.logo__tagline} >The Ambulance System</span>
                    </div>
                </section>
            </Link>
            <div className={css.header__left}>
                <Navbar />
                <UserProfile />
            </div>
        </header>
    )
}

function UserProfile () {
    return (
        <AuthContext.Consumer>
            {user => (
                user.isAuthenticated?
                (
                    <div>
                        Hi {user.user.name},
                        <button onClick={user.logout}>logout</button>
                    </div>
                ) : (
                    <button>Login</button>                    
                )
            )}
        </AuthContext.Consumer>
    )
}