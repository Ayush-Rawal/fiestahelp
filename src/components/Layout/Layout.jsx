import React from 'react'
import Header from '../Header/'
import css from './style.module.css'

export function Layout({children}) {
    return (
        <>
        <Header />
        <main>
            {children}
        </main>
        <footer>
            Made for flair fiesta 2019 Web Tags competition by Ayush Rawal
        </footer>
        </>
    )
}