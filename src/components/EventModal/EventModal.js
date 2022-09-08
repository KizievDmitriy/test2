import GlobalContext from 'contex/GlobalContext';
import React, { useContext, useState } from 'react'
import { GrClose } from 'react-icons/gr';
import s from './eventModal.module.scss';

export default function EventModal() {
  const {
    setShowEventModal,
    daySelected,
    dispatchCalEvent,
    selectedEvent, } = useContext(GlobalContext);
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();

   function handleSubmit(e) {
    e.preventDefault();
    const calendarEvent = {
      title,
      description,
      day: daySelected.valueOf(),
      id: selectedEvent ? selectedEvent.id : Date.now(),
    };
    if (selectedEvent) {
      dispatchCalEvent({ type: "update", payload: calendarEvent });
    } else {
      dispatchCalEvent({ type: "push", payload: calendarEvent });
    }

    setShowEventModal(false);
  }

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
              <p className={s.daySelected}>{daySelected.format("dddd , MMMM DD")}</p>
              <input
              type="text"
              name="description"
              placeholder="Add a description "
              value={description}
              required
              className={s.input}
              onChange={(e) => setDescription(e.target.value)}
              />
              <button type='submit' className={s.saveBtn} onClick={handleSubmit}>
                Save</button>
            </form>
          </div>
        </div>
      </div>
  )
}
