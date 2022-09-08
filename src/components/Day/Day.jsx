import React, { useContext } from 'react'
import dayjs from "dayjs";
import s from './day.module.scss';
import GlobalContext from 'contex/GlobalContext';


export default function Day({ day, rowIdx }) {
 
  const {
    setDaySelected,
    setShowEventModal,
  } = useContext(GlobalContext);

  
  
  return (
    <div className={s.container} onClick={() => {
          setDaySelected(day);
          setShowEventModal(true);
      }}>
      <div>
        {rowIdx === 0 && (<p className={s.day}>{day.format('ddd')}</p>)}
        {day.format("DD-MM-YY") === dayjs().format("DD-MM-YY") ?  //currentDay
          (<p className={s.currentDay}>{day.format('DD')}</p>) :
          (<p className={s.number}>{day.format('DD')}</p>)}
      </div>
      <div className={s.event}>
      </div>
    </div>
  )
}
