import React from "react";
import "./Styles/Song.css";



function SongComponent({song}) {
  return (
    <div className="song-box-container">
      <p>{song}</p>
      <div className="line-break"></div>
    </div>
  );
}

export default SongComponent;
