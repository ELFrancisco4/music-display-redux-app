import React from "react";
import "./Styles/Song.css";



function SongComponent(props) {
  return (
    <div className="song-box-container">
      <p>{props.song}</p>
      <div className="line-break"></div>
    </div>
  );
}

export default SongComponent;
