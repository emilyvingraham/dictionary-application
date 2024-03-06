import React from 'react';

export default function Meaning(props) {
    return (
        <div className="Meaning">
            <h5 className="mt-4">{props.meaning.partOfSpeech}</h5>
            {props.meaning.definitions.map(function (definition, index) {
                return (
                    <div key={index}>
                        <p className="mb-0">
                            Definition: {definition.definition}
                        </p>
                        <p className="pt-0">
                            <i>{definition.example}</i>
                        </p>
                    </div>
                );
            })}
        </div>
    );
}
