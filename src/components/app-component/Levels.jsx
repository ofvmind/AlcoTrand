import { StartButton } from "../UI/StartButton/StartButton";

export const Levels = ({ level, setLevel, clickAudio, Loading, button }) => {

  return (
    <>
      <div className="levels">
        <p
          className={level === "light" && "current"}
          onClick={() => {
            clickAudio();
            setLevel("light");
          }}
        >
          Light
        </p>
        <p
          className={level === "heavy" && "current"}
          onClick={() => {
            clickAudio();
            setLevel("heavy");
          }}
        >
          Heavy
        </p>
        <p
          className={level === "random" && "current"}
          onClick={() => {
            clickAudio();
            setLevel("random");
          }}
        >
          Random
        </p>
      </div>
      <StartButton onClick={() => Loading()}>{button}</StartButton>
    </>
  );
};
