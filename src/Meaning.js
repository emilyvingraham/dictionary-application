import React from 'react';

export default function Meaning(props) {
    console.log(props);

    return (
        <div className="Meaning">
            <h5>{props.meaning.partOfSpeech}</h5>
            <p className="mb-0">Definition: {props.meaning.definition}</p>
            <p className="pt-0 text-capitalize"><i>{props.meaning.example}</i></p>
        </div>
    );
}
