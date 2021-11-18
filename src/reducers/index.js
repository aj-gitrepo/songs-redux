import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    {title: 'No Scrubs', duration: '4.05'},
    {title: 'Macarena', duration: '2:30'},
    {title: 'All star', duration: '3:15'},
    {title: 'I want it in that way', duration: '1:45'},
  ];
}; //static reducer

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SELECTED_SONG') {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
