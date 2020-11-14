import { useState } from "react";

//Adding the components
import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";

//Import styles
import "./styles/app.scss";

//Import data
import data from "./data";

function App() {
  //States
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
      />
      <Library songs={songs} />
    </div>
  );
}

export default App;
