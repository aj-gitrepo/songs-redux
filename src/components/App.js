import React from 'react';
import SongList from './SongList';
import { selectSong } from '../actions'; //named export

const App = () => {
  return (
    <div>
      <SongList />
    </div>
  );
}

export default App;

