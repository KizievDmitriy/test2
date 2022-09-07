import React from "react"
import CreateEventButton from "components/CreateEventButton/CreateEventButton"

import s from './sideBar.module.scss'

export default function  SideBar() {
    return (
    <aside className={s.aside}>
      <CreateEventButton/>  
    </aside>
    )
}