import React from 'react'
import css from './style.module.css'
import {Link} from '@reach/router'

export function Landing() {
    return (
        <section className={css.container}>
            <h1 className={css.title}>Healthcare Made Accessible</h1>
            <Link className={css.btn} to="/ambulances">See Available Ambulances</Link>
        </section>

    )
}