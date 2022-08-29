import React from 'react';
import './App.css';
import SongList from './features/SongList';
import SongDetail from './features/SongDetail';

function App() {
  return (
    <>
      <div className='App'>
        <SongList />
      </div>
      <div className='column eight wide'>
        <SongDetail />
      </div>
    </>
  );
}

export default App;
