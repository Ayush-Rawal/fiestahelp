import React, {useEffect, useState} from 'react'
import css from './style.module.css'
import Loading from '../Loading'

export function Ambulances() {
    const [ambulances, setAmbulances] = useState([
        {
            name: "Dhanno",
            driver: {
                name: "Basanti",
                phone: "8866442288"
            },
            booked: true
        }, {
            name: "Bachaa ke chodungi",
            driver: {
                name: "Chandramukhi Chautala",
                phone: "1001001001"
            },
            booked: false
        }, {
            name: "Dhanno",
            driver: {
                name: "Basanti",
                phone: "8866442288"
            },
            booked: true
        }, {
            name: "Bachaa ke chodungi",
            driver: {
                name: "Chandramukhi Chautala",
                phone: "1001001001"
            },
            booked: false
        }, {
            name: "Dhanno",
            driver: {
                name: "Basanti",
                phone: "8866442288"
            },
            booked: true
        }, {
            name: "Bachaa ke chodungi",
            driver: {
                name: "Chandramukhi Chautala",
                phone: "1001001001"
            },
            booked: false
        }, {
            name: "Dhanno",
            driver: {
                name: "Basanti",
                phone: "8866442288"
            },
            booked: true
        }, {
            name: "Bachaa ke chodungi",
            driver: {
                name: "Chandramukhi Chautala",
                phone: "1001001001"
            },
            booked: false
        }
    ])
    // useEffect(()=> {
    //     fetch()
    //     .then(function (res) {
    //         return res.json()
    //     })
    //     .then(function (res) {
    //         if(res.data) {
    //             setAmbulances(res.data)
    //         }
    //     })
    // })
    return (
        <>
        <h2 className={css.title}>Ambulances</h2>
        {ambulances.length ? (
            <article className={css.ambulance__container}>
                {ambulances.map(showAmbulance)}
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