import LibrarySong from "./LibrarySong";

const Library = ({
  songs,
  audioRef,
  isPlaying,
  libraryStatus,
  setCurrentSong,
  setSongs,
}) => {
  return (
    <div className={`library ${libraryStatus ? "active-library" : ""}`}>
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            song={song}
            songs={songs}
            id={song.id}
            key={song.id}
            audioRef={audioRef}
            setCurrentSong={setCurrentSong}
            isPlaying={isPlaying}
            setSongs={setSongs}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
