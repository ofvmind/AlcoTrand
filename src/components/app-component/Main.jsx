import { useState } from "react";
import { drinkSets_light, drinkSets_heavy, places } from "../places/places";
import music from "../../music/loading2.mp3";
import clickSound from "../../music/click/click.mp3";
import { StartButton } from "../UI/StartButton/StartButton";
import { Loader } from "../UI/Loader/Loader";
import { Levels } from "./Levels";

export const Main = () => {
  const [picture, setPicture] = useState(
    places[Math.floor(Math.random() * places.length)]
  );

  const [clicked, setClicked] = useState(false);
  const [level, setLevel] = useState("random");
  const [button, setButton] = useState("Гоу");

  function clickAudio() {
    const audio = new Audio(clickSound);
    audio.autoplay = true;
  }

  function Loading() {
    if (button === "Гоу") {
      setClicked(true);
      start();
      let intr = setInterval(() => {
        setPicture(places[Math.floor(Math.random() * places.length)]);
      }, 2000);
      setTimeout(() => {
        setClicked(false);
        clearInterval(intr);
      }, 14000);
      setButton("Ще");
    } else {
      setButton("Гоу");
    }
  }

  function start() {
    const audio = new Audio(music);
    audio.autoplay = true;
  }

  return (
    <>
      <div
        className="app-background"
        style={{
          backgroundImage: `url(${picture.image})`,
        }}
      />
      <div className="wrapper">
        <div className="center">
          {clicked ? (
            <>
              <StartButton>
                <Loader />
              </StartButton>
              <h1 className="place-name">{picture.place}</h1>
            </>
          ) : button === "Ще" ? (
            <>
              <audio src={picture.music} autoPlay />
              <h1 className="place-drink">
                {level === "random" ? (
                  <>
                    <p>
                      {
                        drinkSets_light[
                          Math.floor(Math.random() * drinkSets_light.length)
                        ]
                      }{" "}
                      та
                    </p>
                    &nbsp;
                    <p>
                      {
                        drinkSets_heavy[
                          Math.floor(Math.random() * drinkSets_heavy.length)
                        ]
                      }
                    </p>
                  </>
                ) : level === "light" ? (
                  <>
                    {
                      drinkSets_light[
                        Math.floor(Math.random() * drinkSets_light.length)
                      ]
                    }
                  </>
                ) : (
                  <p>
                    {
                      drinkSets_heavy[
                        Math.floor(Math.random() * drinkSets_heavy.length)
                      ]
                    }
                  </p>
                )}
              </h1>
              <h1 className="place-title">{picture.place}</h1>
              <StartButton onClick={() => Loading()}>{button}</StartButton>
            </>
          ) : (
            <>
              <Levels level={level} setLevel={setLevel} clickAudio={clickAudio} Loading={Loading} button={button}/>
            </>
          )}
        </div>
      </div>
    </>
  );
};
