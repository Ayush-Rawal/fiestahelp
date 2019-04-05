import React, {useEffect, useState} from 'react'
import css from './style.module.css'
import Loading from '../Loading'

export function Ambulances() {
    const [ambulances, setAmbulances] = useState([])
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
        ambulances.length?
            ambulances.map(showAmbulance)
        :
            <Loading />
    )
}

function showAmbulance(ambulance) {
    return (
        <section className="ambulance">
            <h3>{ambulance.name}</h3>
            ambulance.booked
            ?
            <button disabled>Booked</button>
            :
            <button>Book This</button>
        </section>
    )
}