import React from 'react';
import Search from './Search.js';
import './App.css';

export default function App() {
    return (
        <div className="App">
            <div className="App-container">
                <header className="App-header">
                    <h1 className="my-4 text-center">Dictionary Application</h1>
                </header>
                <main>
                    <Search defaultWord="brave" />
                </main>
                <footer>
                    This project was built by{' '}
                    <a
                        href="https://github.com/emilyvingraham"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Emily Ingraham
                    </a>
                    , is{' '}
                    <a
                        href="https://github.com/emilyvingraham/dictionary-application"
                        target="_blank"
                        rel="noreferrer"
                    >
                        open-sourced on Github
                    </a>
                    , and{' '}
                    <a
                        href="https://react-dictionary-application-evi.netlify.app/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        is hosted on Netlify
                    </a>
                    .<p>👽</p>
                </footer>
            </div>
        </div>
    );
}
