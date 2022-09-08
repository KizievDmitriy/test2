import React, { useContext } from "react";
import { GrAdd } from 'react-icons/gr';
import GlobalContext from "contex/GlobalContext";
import s from './createEventButton.module.scss'


export default function CreateEventButton() {
  const { setShowEventModal } = useContext(GlobalContext);

  return (
      <button className={s.button} onClick={() => setShowEventModal(true)}>
          <GrAdd />
        <span className={s.span}> Create</span>
    </button>
  );
}