import React from 'react'
import {Link} from '@reach/router'
import css from "./style.module.css"

export function Navbar () {
    return (
        <nav className={css.navbar}>
            <Link className={css.navbar__link} to="/">Home</Link>
            <Link className={css.navbar__link} to="ambulances">Ambulances</Link>
        </nav>
    )
}