import React from 'react';
import Synonyms from './Synonyms.js';
import "./Meaning.css"


export default function Meaning(props) {
    return (
        <div className="Meaning">
            <section className="text-center">
                <h5 className="mt-1">{props.meaning.partOfSpeech}</h5>
                {props.meaning.definitions.map(function (definition, index) {
                    return (
                        <div key={index}>
                            <p className="m-0">
                                <strong>Definition: </strong>
                                {definition.definition}
                            </p>
                            <p className="pt-0">
                                <i>{definition.example}</i>
                            </p>
                            <Synonyms synonyms={definition.synonyms} />
                        </div>
                    );
                })}
            </section>
        </div>
    );
}
