import React, { useState, useContext, useEffect } from 'react';
import {getMonth} from '../utils/ulils'
import s from './App.module.scss'
import Header from './Header/Header';
import Month from './Month/Month';
import SideBar from './SideBar/SideBar';
import GlobalContext from 'contex/GlobalContext';
import EventModal from './EventModal/EventModal';


export const App = () => {
  // console.dir(getMonth());

  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const {monthIndex, showEventModal} = useContext(GlobalContext)

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  return (
    <React.Fragment>
      {showEventModal && <EventModal/>}
      
        <div className={s.container}>
        <Header />
        <div className={s.containerMain}>
          <SideBar/>
          <Month month={currentMonth} />
        </div>
        </div>
      </React.Fragment>
  );
};
