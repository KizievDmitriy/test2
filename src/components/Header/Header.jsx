import React from 'react'
import { FaCalendarCheck } from 'react-icons/fa';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import s from './header.module.scss'


export default function  Header() {
    return (
    <div className={s.container}>
        <p className={s.logoContainer}><FaCalendarCheck /> Calendar</p>
        <button type='button' className={s.today}>Today</button>
        <button type='button' className={s.chevron}><BsChevronLeft /></button>
        <button type='button' className={s.chevron}><BsChevronRight /></button>
    </div>
    )
}
