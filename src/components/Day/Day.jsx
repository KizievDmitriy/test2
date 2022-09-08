import React, { useContext, useEffect, useState } from 'react'
import dayjs from "dayjs";
import s from './day.module.scss';
import GlobalContext from 'contex/GlobalContext';


export default function Day({ day, rowIdx }) {
  const [dayEvents, setDayEvents] = useState([]);
  const {
    setDaySelected,
    setShowEventModal,
    savedEvents,
    setSelectedEvent,
  } = useContext(GlobalContext);

  useEffect(() => {
    // console.log({savedEvents})
    const events = savedEvents.filter(
      (evt) =>
        dayjs(evt.day).format("DD-MM-YY") === day.format("DD-MM-YY")
    );
    setDayEvents(events);
  }, [savedEvents, day]);
  
  
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
        {dayEvents.map((evt, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedEvent(evt)}
          >
            {evt.title}
          </div>
        ))}
      </div>
    </div>
  )
}
