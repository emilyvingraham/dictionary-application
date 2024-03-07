import React, { useState } from 'react';
import Results from './Results.js';
import Photos from "./Photos.js";
import axios from 'axios';
import './Search.css';

export default function Search(props) {
    const [word, setWord] = useState(props.defaultWord);
    const [results, setResults] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const [photos, setPhotos] = useState(null);

    function handleImagesResponse(response) {
        setPhotos(response.data.photos);
    }

    function handleResponse(response) {
        setResults(response.data[0]);
        
    }

    function handleSubmit() {
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
        axios.get(apiUrl).then(handleResponse);

        let imagesApiKey = '47ce0ocdabaf4a2e81b031bb9t47a0e0';
        let imagesApiUrl = `https://api.shecodes.io/images/v1/search?query=${word}&key=${imagesApiKey}`;
        axios.get(imagesApiUrl).then(handleImagesResponse);
    }

    function defaultSubmit(event) {
        event.preventDefault();
        handleSubmit();
    }

    function handleChange(event) {
        setWord(event.target.value);
    }

    function load() {
        setLoaded(true);
        handleSubmit();
    }

    if (loaded) {
        return (
            <div className="Search container">
                <div className="row">
                    <div className="col-md-12">
                        <form
                            onSubmit={defaultSubmit}
                            className="w-50 d-block m-auto"
                        >
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
                            <Photos photos={photos}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        load();
        return 'Loading';
    }
}
