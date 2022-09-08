import React from "react";


const GlobalContext = React.createContext({
  monthIndex: 0,
  setMonthIndex: (index) => { },
  daySelected: null,
  setDaySelected: (day) => {},
  smallCalendarMonth: 0,
  showEventModal: false,
  setShowEventModal: () => {},
  dispatchCalEvent: ({type, payload}) => {},
});

export default GlobalContext;