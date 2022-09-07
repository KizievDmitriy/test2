import React from 'react'
import dayjs from "dayjs";
import s from './day.module.scss';


export default function Day({ day, rowIdx }) {
    
  return (
    <div className={s.container}>
      <div>
        {rowIdx === 0 && (<p className={s.day}>{day.format('ddd')}</p>)}
        {day.format("DD-MM-YY") === dayjs().format("DD-MM-YY") ?  //currentDay
          (<p className={s.currentDay}>{day.format('DD')}</p>) :
          (<p className={s.number}>{day.format('DD')}</p>)}
      </div>    
    </div>
  )
}
