import React from 'react';
import "./Synonyms.css";

export default function Synonyms(props) {
    if (props.synonyms) {
        return (
            <div className="Synonyms mb-3">
                {props.synonyms.map(function (synonym, index) {
                    return <p className="mb-0 ps-2 pb-2"key={index}>{synonym}</p>;
                })}
            </div>
        );
    }
}
