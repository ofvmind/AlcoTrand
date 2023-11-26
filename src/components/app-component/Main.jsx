import { useState } from "react";
import {
  places,
  alco,
} from "../places/places";
import music from "../../music/loading2.mp3";
import clickSound from "../../music/click/click.mp3";
import { StartButton } from "../UI/StartButton/StartButton";
import { Loader } from "../UI/Loader/Loader";
import { Levels } from "./Levels";
import { Modal } from "../UI/Modal/Modal";
import { v4 } from "uuid";
import defaultImagePlace from "../../images/places/1646943847_3-abrakadabra-fun-p-oboi-na-telefon-s-alkogolem-4.jpg";
import defaultMusicPlace from "../../music/places/default.mp3";
import { OptionsBar } from "./OptionsBar";

export const Main = () => {
  const [picture, setPicture] = useState(places[9]);

  const [clicked, setClicked] = useState(false);
  const [level, setLevel] = useState("random");
  const [button, setButton] = useState("Гоу");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [ownPlace, setOwnPlace] = useState("");

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

  const randomAlco = (hard) => {
    let alcoSet = [];
    if (hard)  alcoSet = alco.filter(item => item.strength === "hard");
    else alcoSet = alco.filter(item => item.strength === "light");
    return alcoSet[getRandomIntInclusive(0, alcoSet.length)].name;
  };

  function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  }

  //const randomAlco = (isHard) => {
    //const h = isHard ? alco.length - 1 : alco.length / 2;
    //const r = {};
    //for (let i = 0; i < 1000; i++) {
      //const res = getRandomIntInclusive(0, h);
      //if (r[res]) {
        //r[res]++;
      //} else r[res] = 1;
   // }
    //let k = "";
    //let m = 0;
    //console.log(r);
    //for (const key in r) {
      //console.log(key);
      //if (m < r[key]) {
        //m = r[key];
        //k = key;
     // }
    //}
    //console.log(k);
   // console.log(m);
    //console.log(level);
    //return alco[k];
  //};

  const addPlace = () => {
    if (ownPlace) {
      places.push({
        id: v4(),
        image: defaultImagePlace,
        place: ownPlace,
        music: defaultMusicPlace
      });

      setOwnPlace("");
    }
  };

  return (
    <>
      <Modal visible={modalIsOpen} setVisible={setModalIsOpen}>
        <OptionsBar place={ownPlace} setPlace={setOwnPlace} add={addPlace} />
      </Modal>
      <div
        className="app-background"
        style={{
          backgroundImage: `url(${picture.image})`,
        }}
      />
      <div className="wrapper">
        {!clicked && <button class="options" onClick={() => setModalIsOpen(true)}>ОпціЇ</button>}
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
                    <p>{randomAlco()} та</p>
                    &nbsp;
                    <p>{randomAlco(true)}</p>
                  </>
                ) : level === "light" ? (
                  <>{randomAlco()}</>
                ) : (
                  <p>{randomAlco(true)}</p>
                )}
              </h1>
              <h1 className="place-title">{picture.place}</h1>
              <StartButton onClick={() => Loading()}>{button}</StartButton>
            </>
          ) : (
            <>
              <Levels
                level={level}
                setLevel={setLevel}
                clickAudio={clickAudio}
                Loading={Loading}
                button={button}
              />
            </>
          )}
        </div>
      </div>
    </>
  );
};
