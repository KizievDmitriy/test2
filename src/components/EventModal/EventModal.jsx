import GlobalContext from 'contex/GlobalContext';
import React, { useContext, useState } from 'react'
import { GrClose } from 'react-icons/gr';
import { AiFillDelete } from 'react-icons/ai';
import dayjs from 'dayjs';
import s from './eventModal.module.scss';

export default function EventModal() {
  const {
    setShowEventModal,
    daySelected,
    dispatchCalEvent,
    selectedEvent,
  } = useContext(GlobalContext);

  const [title, setTitle] = useState(
    selectedEvent ? selectedEvent.title : ""
  );
  const [description, setDescription] = useState(
    selectedEvent ? selectedEvent.description : ""
  );
 
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
              <div className={s.daySelected}>
                <h2 >{daySelected.format("MM.DD.YYYY")}</h2>
                {selectedEvent !== null && (<p>Created at: {dayjs().format("H:m")}</p>)}
              </div>
              <input
              type="text"
              name="title"
              placeholder="Add title"
              value={title}
              required
              className={s.input}
                onChange={(e) => setTitle(e.target.value)}
              />
              <textarea
              type="text"
              name="description"
              placeholder="Add a description "
              value={description}
              required
              className={s.input}
                onChange={(e) => setDescription(e.target.value)}
              />
              <div className={s.footer}>
                <button type='submit' className={s.saveBtn} onClick={handleSubmit}>
                  Save
                </button>

                {selectedEvent && (<div className={s.delIcon}
                 onClick={() => {
                  dispatchCalEvent({
                    type: "delete",
                    payload: selectedEvent,
                  });
                   setShowEventModal(false);
                }}
                ><AiFillDelete /></div>)}
              </div>
            </form>
          </div>
        </div>
      </div>
  )
}
