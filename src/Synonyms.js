import React from 'react';

export default function Synonyms(props) {
    if (props.synonyms) {
        return (
            <div className="Synonyms">
                {props.synonyms.map(function (synonym, index) {
                    return <p className="mb-0"key={index}>{synonym}</p>;
                })}
            </div>
        );
    }
}
