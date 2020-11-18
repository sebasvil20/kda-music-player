import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faAngleLeft,
  faAngleRight,
  faRandom,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({
  isPlaying,
  songInfo,
  audioRef,
  currentSong,
  songs,
  isRandom,
  volume,
  setIsRandom,
  setSongInfo,
  setIsPlaying,
  setCurrentSong,
  setSongs,
  handleVolume,
  setVolume,
}) => {
  //useEffect
  useEffect(() => {
    //Add active state
    const newSongs = songs.map((song) => {
      if (song.id === currentSong.id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });
    setSongs(newSongs);
    //eslint-disable-next-line
  }, [currentSong]);

  //Event handlers
  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };

  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currentTime: e.target.value });
  };

  const dragHandlerVolume = (e) => {
    document.getElementById("myRange").value = e.target.value;
    setVolume(e.target.value);
    handleVolume(e.target.value);
  };

  const skipTrackHandler = async (direction) => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    let newIndex = currentIndex + direction;

    if (newIndex < 0) newIndex = songs.length - 1;
    if (newIndex >= songs.length) newIndex = 0;

    await setCurrentSong(songs[newIndex]);
    if (isPlaying) audioRef.current.play();
  };

  //Add the styles
  const trackAnim = {
    transform: `translateX(${songInfo.animationPercentage}%)`,
  };

  return (
    <div className="player">
      <div className="time-control">
        <p>{getTime(songInfo.currentTime)}</p>
        <div
          style={{
            background: `linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]})`,
          }}
          className="track"
        >
          <input
            min={0}
            max={songInfo.duration || 0}
            value={songInfo.currentTime}
            onChange={dragHandler}
            type="range"
          />
          <div style={trackAnim} className="animate-track"></div>
        </div>
        <p>{songInfo.duration ? getTime(songInfo.duration) : "0:00"}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon
          onClick={() => skipTrackHandler(-1)}
          className="skip-back icon"
          size="2x"
          icon={faAngleLeft}
        />
        <FontAwesomeIcon
          onClick={playSongHandler}
          className="play icon"
          size="2x"
          icon={isPlaying ? faPause : faPlay}
        />
        <FontAwesomeIcon
          onClick={() => skipTrackHandler(1)}
          className="skip-forward icon"
          size="2x"
          icon={faAngleRight}
        />
      </div>
      <div class="randomPlayButton">
        <FontAwesomeIcon
          onClick={() => setIsRandom(!isRandom)}
          className={`randomButton icon ${
            isRandom ? "randomButton-Active" : null
          }`}
          size="2x"
          icon={faRandom}
        />
      </div>
      <div className="slidecontainer">
        <input
          type="range"
          min={0}
          max={1}
          step={0.1}
          value={volume}
          className="slider2"
          onChange={dragHandlerVolume}
          id="myRange"
        />
      </div>
    </div>
  );
};

export default Player;
