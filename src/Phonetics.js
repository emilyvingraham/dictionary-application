import React from 'react';
import './Phonetics.css';

export default function Phonetics(props) {
    return (
        <div className="Phonetics my-2 d-flex justify-content-center">
            <button className="bg-transparent p-0">
                <a
                    className="fs-6 text-decoration-none"
                    href={props.data.audio}
                    target="_blank"
                    rel="noreferrer"
                >
                    <span className="material-symbols-outlined">volume_up</span>
                </a>
            </button>
            <h4>{props.data.text}</h4>
        </div>
    );
}
