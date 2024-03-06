import React from "react";

export default function Phonetics(props) {
    return (
        <div className="Phonetics d-flex justify-content-center my-2">
            <button className="px-2 me-1 rounded-pill">▶️
                <a className="fs-6 text-decoration-none" href={props.data.audio} target="_blank" rel="noreferrer">
                    Listen
                </a>
            </button>
            <h4 className="ms-1">{props.data.text}</h4>
        </div>
    );
}