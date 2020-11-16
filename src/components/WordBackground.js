const WordBackground = ({ isPlaying }) => {
  return (
    <span className={`bigB uniqueTime ${isPlaying ? "flicker-in-1" : ""}`}>
      K / DA
    </span>
  );
};

export default WordBackground;
