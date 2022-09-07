import React from 'react';
import { useState, useContext, useEffect } from 'react';
import {getMonth} from '../utils/ulils'
import s from './App.module.scss'
import Header from './Header/Header';
import Month from './Month/Month';
import SideBar from './SideBar/SideBar';
import GlobalContext from 'contex/GlobalContext';


export const App = () => {
  // console.dir(getMonth());

  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const {monthIndex} = useContext(GlobalContext)

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  return (
      <React.Fragment>
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
