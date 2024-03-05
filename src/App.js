import React from 'react';
import Search from "./Search.js";
import './App.css';

export default function App() {
    return (
        <div className="App">
            <div className="App-container">
                <header className="App-header">
                    <h1>Dictionary Application</h1>
                </header>
                <main>
                  <Search/>
                </main>
            </div>
        </div>
    );
}
