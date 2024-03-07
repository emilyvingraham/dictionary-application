import React from 'react';
import Meaning from "./Meaning.js";
import Phonetics from "./Phonetics.js";
import './Results.css';

export default function Results(props) {
    if (props.results) {
        return (
            <div className="Results">
                <h2 className="mb-0 text-center">{props.results.word}</h2>
                {props.results.phonetics.map(function (phonetic, index) {
                    return (
                        <div key={index}>
                            <Phonetics data={phonetic}/>
                        </div>
                    )
                })}
                {props.results.meanings.map(function (meaning, index) {
                    return (
                        <div key={index}>
                            <Meaning meaning={meaning}/>
                            </div>
                    )
                })}
            </div>
        );
    } else {
        return null;
    }
}