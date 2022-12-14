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
        <h1 className={s.logoContainer}><FaCalendarCheck /> Calendar</h1>
        <button type='button' className={s.today} onClick={handleReset}>Today</button>
        <div>
        <button type='button' className={s.chevron} onClick={handlePrevMonth}><BsChevronLeft /></button>
        <h2 className={s.currenMonthHeader}>{dayjs(new Date(dayjs().year(), monthIndex)).format(
          "MMMM YYYY"
        )}</h2>
        <button type='button' className={s.chevron} onClick={handleNextMonth}><BsChevronRight /></button>
        </div>
    </div>
    )
}
