import React from 'react';

export default function Synonyms(props) {
    if (props.synonyms) {
        return (
            <div className="Synonyms d-flex justify-content-center">
                {props.synonyms.map(function (synonym, index) {
                    return <p className="mb-0 ps-2"key={index}>{synonym}</p>;
                })}
            </div>
        );
    }
}
