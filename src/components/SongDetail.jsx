import React from 'react';
import { initialState } from '../store/store';
import './Styles/Song.css'


function SongDetail() {
  return(
    <div>
        <h2>Details for:</h2>
        <p>Title: <span>{initialState.songName}</span></p>
        <p>Length: <span>{initialState.songLength}</span></p>
    </div>
  ) 
}

export default SongDetail;
