import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import SongList from './features/SongList';

function App() {
  return (
    <div className="App">
        <SongList />
    </div>
  );
}

export default App;
