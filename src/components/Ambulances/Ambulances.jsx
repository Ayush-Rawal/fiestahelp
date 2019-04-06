import React, {useEffect, useState} from 'react'
import css from './style.module.css'
import Loading from '../Loading'

export function Ambulances() {
    const [ambulances, setAmbulances] = useState([])
    useEffect(()=> {
        fetch("https://fiestahelp.herokuapp.com/api/ambulance")
        .then(function (res) {
            return res.json()
        })
        .then(function (res) {
            if(res.ok) {
                setAmbulances(res.data)
            }
        })
    }, [])
    return (
        <>
        <h2 className={css.title}>Ambulances</h2>
        {ambulances.length >= 0 ? (
            <article className={css.ambulance__container}>
                {ambulances.length > 0 ? ambulances.map(showAmbulance) : <p>No ambulances to show</p>}
            </article>
        ) : (
            <Loading />
        )}
        </>
    )
}

function showAmbulance(ambulance) {
    return (
        <section className={css.ambulance}>
            <img className={css.ambulance__image} src="" alt="an ambulance"/>
            <h3 className={css.ambulance__name}>{ambulance.name}</h3>
            {/* <section className={css.driver}> */}
            <p className={css.driver__name}>Driver: {ambulance.driver.name}</p>
            <p className={css.driver__phone}>Mob: {ambulance.driver.phone}</p>
            {/* </section> */}
            {ambulance.booked
            ?
            <button className={css.ambulance__button} disabled>Already Booked</button>
            :
            <button className={css.ambulance__button}>Book Ambulance</button>}
        </section>
    )
}