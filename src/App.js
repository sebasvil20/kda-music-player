import { useState } from "react";

//Adding the components
import Player from "./components/Player";
import Song from "./components/Song";

//Import styles
import "./styles/app.scss";

//Import data
import data from "./data";

function App() {
  //Main state
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);

  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player currentSong={currentSong} />
    </div>
  );
}

export default App;
