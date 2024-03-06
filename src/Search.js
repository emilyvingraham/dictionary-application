import React, { useState } from 'react';
import Results from "./Results.js";
import axios from 'axios';
import './App.css';

export default function Search() {
    const [word, setWord] = useState('');
    const [results, setResults] = useState(null);

    function handleResponse(response) {
        setResults(response.data);
    }

    function handleSubmit(event) {
        event.preventDefault();
        

        let apiKey = '47ce0ocdabaf4a2e81b031bb9t47a0e0';
        let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${word}&key=${apiKey}`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleChange(event) {
        setWord(event.target.value);
    }

    return (
        <div className="Search container">
            <div className="row">
                <div className="col-md-12">
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            className="w-50"
                            onChange={handleChange}
                        />
                        <button type="button" className="ms-3 w-25">
                            Search
                        </button>
                        <h6 className="text-start">
                            <i>i.e. brave, free, tea</i>
                        </h6>
                    </form>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <Results results={results}/>
                    </div>
                </div>
            </div>
        </div>
    );
}
