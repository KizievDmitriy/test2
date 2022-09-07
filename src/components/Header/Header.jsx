import React from 'react'
import { FaCalendarCheck } from 'react-icons/fa';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import s from './header.module.scss'
import { useContext } from 'react';
import GlobalContext from 'contex/GlobalContext';
import dayjs from 'dayjs';



export default function Header() {
    const { monthIndex, setMonthIndex } = useContext(GlobalContext)
    
     function handlePrevMonth() {
    setMonthIndex(monthIndex - 1);
  }
  function handleNextMonth() {
    setMonthIndex(monthIndex + 1);
  }
  function handleReset() {
    setMonthIndex(
      monthIndex === dayjs().month()
        ? monthIndex + Math.random()
        : dayjs().month()
    );
  }
    return (
    <div className={s.container}>
        <p className={s.logoContainer}><FaCalendarCheck /> Calendar</p>
        <button type='button' className={s.today} onClick={handleReset}>Today</button>
        <button type='button' className={s.chevron} onClick={handlePrevMonth}><BsChevronLeft /></button>
        <button type='button' className={s.chevron} onClick={handleNextMonth}><BsChevronRight /></button>
    </div>
    )
}
