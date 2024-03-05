import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

export default function Search() {
    const [word, setWord] = useState('');

    function handleResponse(response) {
        console.log(response.data);
    }

    function handleSubmit(event) {
        event.preventDefault();
        alert(`Searching for ${word}`);

        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
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
                        <p className="text-start">
                            <i>i.e. brave, free, tea</i>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}
