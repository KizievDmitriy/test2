import GlobalContext from 'contex/GlobalContext';
import React, { useContext, useState } from 'react'
import { GrClose } from 'react-icons/gr';
import s from './eventModal.module.scss';

export default function EventModal() {
  const { setShowEventModal, daySelected } = useContext(GlobalContext);
  const [title, setTitle] = useState('')

    return (
        <div className={s.fixedOverlay}>
        <div className={s.container}>
          <div className={s.formContainer}>
            <button className={s.closeBtn} onClick={() => setShowEventModal(false)}><GrClose/></button>
            <form>
              <input
              type="text"
              name="title"
              placeholder="Add title"
              value={title}
              required
              className={s.input}
              onChange={(e) => setTitle(e.target.value)}
              />
              <p className={s.daySelected}>{daySelected.format("dddd , MMMM DD") }</p>
            </form>
          </div>
        </div>
      </div>
  )
}
