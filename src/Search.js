import React, { useState } from 'react';
import Results from './Results.js';
import axios from 'axios';
import './Search.css';

export default function Search(props) {
    const [word, setWord] = useState(props.defaultWord);
    const [results, setResults] = useState(null);
    const [loaded, setLoaded] = useState(false);

    function handleResponse(response) {
        setResults(response.data[0]);
    }

    function handleSubmit() {
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
        axios.get(apiUrl).then(handleResponse);
    }

    function defaultSubmit(event) {
        event.preventDefault();
        handleSubmit();
    }

    function handleChange(event) {
        setWord(event.target.value);
    }

    function load() {
        setLoaded(true)
        handleSubmit();
    }

    if (loaded) {
        return (
            <div className="Search container">
                <div className="row">
                    <div className="col-md-12">
                        
                            <form onSubmit={defaultSubmit} className="w-50 d-block m-auto">
                                <input
                                    type="text"
                                    onChange={handleChange}
                                    className="form-control"
                                    defaultValue="Brave"
                                />
                                <h6 className="text-start">
                                    <i>i.e. dog, free, tea</i>
                                </h6>
                            </form>
                        
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <Results results={results} />
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        load();
        return "Loading";
    }
}
