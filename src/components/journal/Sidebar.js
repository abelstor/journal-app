import React from 'react';
import { JournalEntries } from './JournalEntries';

export const Sidebar = () => {

    return (
        <aside className="journal__sidebar">

            <div className="journal__sidebar__navbar">
                <h3 className="mt-5">
                    <i className="far fa-moon"></i>
                    <span> Abel Cañas</span>
                </h3>

                <button className="btn pointer">
                    Logout
                </button>

            </div>

            <div className="journal__new__entry pointer">
                <i className="far fa-calendar-plus fa-5x mt-5"></i>
                <p className="mt-5">New Entry</p>
            </div>
            <div>
                <JournalEntries />
            </div>

        </aside>
    )
}
