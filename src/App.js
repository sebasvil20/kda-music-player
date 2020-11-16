import { useState, useRef } from "react";

//Adding the components
import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";
import Nav from "./components/Nav";
import WordBackground from "./components/WordBackground";

//Import styles
import "./styles/app.scss";

//Import data
import data from "./data";

function App() {
  //ref
  const audioRef = useRef(null);

  //States
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
  });
  const [libraryStatus, setLibraryStatus] = useState(false);

  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    //Calculate porcentage
    const roundedCurrent = Math.round(current);
    const roundedDuration = Math.round(duration);
    const animation = Math.round((roundedCurrent / roundedDuration) * 100);
    setSongInfo({
      ...songInfo,
      currentTime: current,
      duration,
      animationPercentage: animation,
    });
  };

  const songEndHandler = async () => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    let newIndex = currentIndex + 1;
    if (newIndex >= songs.length) newIndex = 0;

    await setCurrentSong(songs[newIndex]);
    if (isPlaying) audioRef.current.play();
  };

  return (
    <div className={`App ${libraryStatus ? "library-active" : ""}`}>
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song isPlaying={isPlaying} currentSong={currentSong} />
      <Player
        isPlaying={isPlaying}
        currentSong={currentSong}
        songInfo={songInfo}
        songs={songs}
        audioRef={audioRef}
        setSongInfo={setSongInfo}
        setIsPlaying={setIsPlaying}
        setCurrentSong={setCurrentSong}
        setSongs={setSongs}
      />
      <Library
        audioRef={audioRef}
        songs={songs}
        isPlaying={isPlaying}
        setCurrentSong={setCurrentSong}
        setSongs={setSongs}
        libraryStatus={libraryStatus}
      />
      <audio
        onLoadedMetadata={timeUpdateHandler}
        onTimeUpdate={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}
        onEnded={songEndHandler}
      ></audio>
      <WordBackground isPlaying={isPlaying} />
      <h1 className={`made-with ${libraryStatus ? "library-active z" : ""}`}>
        Made with &#x2764;&#xFE0F; by{" "}
        <a href="https://github.com/sebasvil20" rel="noopener noreferrer">
          @Sebasvil20
        </a>
      </h1>
      <h4 className={`copyright ${libraryStatus ? "library-active z" : ""}`}>
        NO COPYRIGHT INFRINGEMENT INTENDED. ALL K/DA COPYRIGHT BELONG TO RIOT
        GAMES, INC.
      </h4>
    </div>
  );
}

export default App;
