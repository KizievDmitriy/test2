import React from 'react';
import Day from 'components/Day/Day';
import s from './month.module.scss';

export default function Month({month}) {
    return (
        <div className={s.container}>
            {month.map((row, i) => (
                <React.Fragment key={i}>
                    {row.map((day, idx) => (
                        <Day day={day} key={idx} rowIdx={i} />
                    ))}
                </React.Fragment>
         ))}
        </div>
    )
}