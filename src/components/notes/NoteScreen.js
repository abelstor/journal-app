import React from 'react';
import { NotesAppBar } from './NotesAppBar';

export const NoteScreen = () => {
    return (
        <div className="notes__main__content">

            <NotesAppBar />

            <div className="notes__content">

                <input
                    type="text"
                    placeholder="Some awesome title"
                    className="notes__title__input"
                    autoComplete="off"
                />

                <textarea
                    // name=""
                    // id=""
                    // cols="30"
                    // rows="10"
                    placeholder="What happened today"
                    className="notes__textarea"
                    autoComplete="off"
                ></textarea>

                <div className="notes__image">
                    <img
                        src="https://imagenescityexpress.scdn6.secure.raxcdn.com/sites/default/files/Fotolia_106777298_Subscription_XXL.jpg"
                        alt="img"
                    />
                </div>

            </div>

        </div>
    )
}