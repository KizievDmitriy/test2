import React from 'react';
import { useState } from 'react';
import {getMonth} from '../utils/ulils'
import s from './App.module.scss'
import Header from './Header/Header';
import Month from './Month/Month';
import SideBar from './SideBar/SideBar';

export const App = () => {
  console.dir(getMonth());
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  
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
