import { useState } from "react";
import music from "../../music/loading2.mp3";
import clickSound from "../../music/click/click.mp3";
import { StartButton } from "../UI/StartButton/StartButton";
import { Loader } from "../UI/Loader/Loader";
import { Levels } from "./Levels";
import { Modal } from "../UI/Modal/Modal";
import { OptionsPage } from "../AppRouter/options-page/OptionsPage";
import { AddPlace } from "../AppRouter/options-page/AddPlace";
import { ChangePlaces } from "../AppRouter/options-page/ChangePlaces";
import { alcoData, placesData } from "../places/places";
import { AlcoOptions } from "../AppRouter/options-page/AlcoOption";

export const Main = () => {
  const [places, setPlaces] = useState([...placesData]);

  const [alco, setAlco] = useState([...alcoData]);

  const [picture, setPicture] = useState(places[9]);
  const [clicked, setClicked] = useState(false);
  const [level, setLevel] = useState("random");
  const [button, setButton] = useState("Гоу");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [optionVar, setOptionVar] = useState("");
  const [emptyPlaces, setEmptyPlaces] = useState(false);

  function clickAudio() {
    const audio = new Audio(clickSound);
    audio.autoplay = true;
  }

  const includedPlaces = places.filter((place) => place.included === true);

  function Loading() {
    if (!includedPlaces.length) {
      setEmptyPlaces(true);
      setTimeout(() => setEmptyPlaces(false), 1500);
      return;
    }
    if (button === "Гоу") {
      setClicked(true);
      start();
      let intr = setInterval(() => {
        setPicture(
          includedPlaces[Math.floor(Math.random() * includedPlaces.length)]
        );
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
    try {
      let alcoSet = [];
      if (hard) alcoSet = alco.filter((item) => item.strength === "hard");
      else alcoSet = alco.filter((item) => item.strength === "light");
      alcoSet = alcoSet.filter((item) => item.included === true);
      if (!alcoSet.length) return;
      return alcoSet[getRandomIntInclusive(0, alcoSet.length)].name;
    } catch (e) {
      console.log(e);
    }
  };

  function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  }

  return (
    <>
      <Modal
        visible={modalIsOpen}
        setVisible={setModalIsOpen}
        setOptionVar={setOptionVar}
      >
        {!optionVar ? (
          <OptionsPage optionVar={optionVar} setOptionVar={setOptionVar} />
        ) : optionVar === "add" ? (
          <AddPlace
            places={places}
            setPlaces={setPlaces}
            setOptionVar={setOptionVar}
          />
        ) : optionVar === "filter" ? (
          <ChangePlaces
            places={places}
            setPlaces={setPlaces}
            setOptionVar={setOptionVar}
          />
        ) : (
          <AlcoOptions alco={alco} setAlco={setAlco} />
        )}
      </Modal>
      <div
        className="app-background"
        style={{
          backgroundImage: `url(${picture.image})`,
        }}
      />
      <div className="wrapper">
        {!clicked && (
          <button className="options" onClick={() => setModalIsOpen(true)}>
            ОпціЇ
          </button>
        )}
        <div className="center">
          {emptyPlaces && (
            <p className="attention">Добавте хоча би, одек місце</p>
          )}
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
