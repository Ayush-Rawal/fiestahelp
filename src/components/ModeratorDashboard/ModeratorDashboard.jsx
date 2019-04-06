import React, {useState, useEffect} from 'react'
import css from './style.module.css'
import Ambulances from '../Ambulances'

export function ModeratorDashboard () {
    const [view, setView] = useState("see") // See, Add, Edit, Remove
    return (
        <article className={css.dashboard}>
        <Sidebar view={view} setView={setView}/>
        <main>
            {view === "see" && <Ambulances />}
            {view === "edit" && <EditAmbulances />}
            {view === "remove" && <DeleteAmbulance />}
            {view === "add" && <AddAmbulance />}
        </main>
        </article>
    )
}

function Sidebar ({view, setView}) {
    return (
        <nav className={css.view__wrapper}>
        <ul className={css.view__container}>
            <li className={css.view} onClick={function(){setView("see")}} >See all ambulances</li>
            <li className={css.view} onClick={function(){setView("add")}} >Add an ambulance</li>
            <li className={css.view} onClick={function(){setView("edit")}} >Edit an ambulance</li>
            <li className={css.view} onClick={function(){setView("remove")}} >Remove an ambulance</li>
        </ul>
        </nav>
    )
}

function EditAmbulances () {
    const [_id, set_id] = useState("")
    const [name, setName] = useState("")
    const [driverName, setDriverName] = useState("")
    const [driverPhone, setDriverPhone] = useState("")

    function submit(e) {
        e.preventDefault()
        fetch("https://fiestahelp.herokuapp.com/api/", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                _id,
                name,
                driverName,
                driverPhone
            })
        })
        .then(res => res.ok? res.json : res)
        .then(res => console.log(res))
    }

    return (
        <form className={css.form} onSubmit={submit}>
            <p>Ambulance to update: </p>
            <div className={css.form__group}>
                <input className={css.form__input} required onChange={function (e) {set_id(e.target.value.toLowerCase())}} value={_id} name="_id" />
                <label className={css.form__label} htmlFor="_id">_id: </label>
            </div>
            <p>New Values:</p>
            <div className={css.form__group}>
                <input className={css.form__input} onChange={function (e) {setName(e.target.value.toLowerCase())}} value={name} name="name" />
                <label className={css.form__label} htmlFor="name">name: </label>
            </div>
            <div className={css.form__group}>
                <input className={css.form__input} onChange={function (e) {setDriverName(e.target.value.toLowerCase())}} value={driverName} name="driverName" />
                <label className={css.form__label} htmlFor="driverName">Driver's Name: </label>
            </div>
            <div className={css.form__group}>
                <input className={css.form__input} onChange={function (e) {setDriverPhone(e.target.value.toLowerCase())}} value={driverPhone} name="driverPhone" />
                <label className={css.form__label} htmlFor="driverPhone">Driver Phone: </label>
            </div>
            <button className={css.form__submit} type="submit" >Submit</button>
        </form>
    )
}

function DeleteAmbulance() {
    const [_id, set_id] = useState("")

    function submit(e) {
        e.preventDefault()
        fetch("https://fiestahelp.herokuapp.com/api/", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                _id
            })
        })
        .then(res => res.ok? res.json : res)
        .then(res => console.log(res))
    }

    return (
        <form className={css.form}>
            <p>Ambulance to delete: </p>
            <div className={css.form__group}>
                <input className={css.form__input} required onChange={function (e) {set_id(e.target.value.toLowerCase())}} value={_id} name="_id" />
                <label className={css.form__label} htmlFor="_id">_id: </label>
            </div>
            <button className={css.form__submit} type="submit">Submit</button>
        </form>
    )    
}

function AddAmbulance () {
    const [name, setName] = useState("")
    const [driverName, setDriverName] = useState("")
    const [driverPhone, setDriverPhone] = useState("")

    function submit(e) {
        e.preventDefault()
        fetch("https://fiestahelp.herokuapp.com/api/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                driverName,
                driverPhone
            })
        })
        .then(res => res.ok? res.json : res)
        .then(res => console.log(res))
    }

    return (
        <form className={css.form}>
            <p>Details to Add:</p>
            <div className={css.form__group}>
                <input className={css.form__input} required onChange={function (e) {setName(e.target.value.toLowerCase())}} value={name} name="name" />
                <label className={css.form__label} htmlFor="name">name: </label>
            </div>
            <div className={css.form__group}>
                <input className={css.form__input} required onChange={function (e) {setDriverName(e.target.value.toLowerCase())}} value={driverName} name="driverName" />
                <label className={css.form__label} htmlFor="driverName">Driver's Name: </label>
            </div>
            <div className={css.form__group}>
                <input className={css.form__input} required onChange={function (e) {setDriverPhone(e.target.value.toLowerCase())}} value={driverPhone} name="driverPhone" />
                <label className={css.form__label} htmlFor="driverPhone">Driver Phone: </label>
            </div>
            <button className={css.form__submit} type="submit" >Submit</button>
        </form>
    )
}
