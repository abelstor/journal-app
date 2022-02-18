import React from 'react';

export const JournalEntry = () => {

    return (
        <div className="journal__entry pointer">
            <div
                className="journal__entry__picture"
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: 'url(https://as.com/diarioas/imagenes/2020/09/28/actualidad/1601287548_034869_1601287903_noticia_normal_recorte1.jpg)'
                }}
            ></div>
            <div className="journal__entry__body">
                <p className="journal__entry__title">
                    Un nuevo día
                </p>
                <p className="journal__entry__content">
                    Lorem ipsum dolor sit, amet consectetur
                    adipisicing elit.
                </p>
            </div>
            <div className="journal__entry__date">
                <span>Monday</span>
                <h3>27</h3>
            </div>
        </div>
    )
}