import { useState } from "react";
import {
  alco,
} from "../places/places";
import music from "../../music/loading2.mp3";
import clickSound from "../../music/click/click.mp3";
import { StartButton } from "../UI/StartButton/StartButton";
import { Loader } from "../UI/Loader/Loader";
import { Levels } from "./Levels";
import { Modal } from "../UI/Modal/Modal";
import { OptionsPage } from "../AppRouter/options-page/OptionsPage";
import { AddPlace } from "../AppRouter/options-page/AddPlace";
import { ChangePlaces } from "../AppRouter/options-page/ChangePlaces";

//Місця
import borschagovka from "../../images/places/borschagovka.jpg";
import vidredniy from "../../images/places/otradniy.jpg";
import vyshneve from "../../images/places/vyshneve.jpg";
import FC from "../../images/places/FC.jpg";
import Chreschatik from "../../images/places/Chreschatik.jpg";
import Sovki from "../../images/places/SquareSovki.jpg";
import Gidropark from "../../images/places/Gidropark.png";
import Polyana from "../../images/places/Polyana.jpeg";
import TayneMisce from "../../images/places/BarVernadskogo79.jpg";
import PorterAkadem from "../../images/places/PorterAkademgorodok.jpg";

//Музика
import musicTest from "../../music/places/test.mp3";
import musicBorschagovka from "../../music/places/Borschagovka.mp3";
import musicVyshnya from "../../music/places/Vyshnya.mp3";
import musicFc from "../../music/places/fc.mp3";
import musicVidradniy from "../../music/places/Vidradniy.mp3";
import musicPorterAkademgorodok from "../../music/places/PorterAkadem.mp3";
import musicPolyana from "../../music/places/Polyana.mp3";

export const Main = () => {
  const [places, setPlaces] = useState([
    { id: 1, place: "Борщагівка", image: borschagovka, music: musicBorschagovka, included: true},
    { id: 2, place: "Відрадний", image: vidredniy, music: musicVidradniy, included: true },
    { id: 3, place: "Вишневе", image: vyshneve, music: musicVyshnya, included: true },
    { id: 4, place: "Парк Совки", image: Sovki, music: musicTest, included: true },
    { id: 5, place: "Легенда ФК", image: FC, music: musicFc, included: true },
    { id: 6, place: "Портер", image: PorterAkadem, music: musicPorterAkademgorodok,  included: true},
    { id: 7, place: "Бар79", image: TayneMisce, music: musicTest, included: true },
    { id: 8, place: "Центр", image: Chreschatik, music: musicTest, included: true },
    { id: 9, place: "ГідроПарк", image: Gidropark, music: musicTest, included: true },
    { id: 10, place: "Поляна", image: Polyana, music: musicPolyana, included: true },
  ]);

  const [picture, setPicture] = useState(places[9]);
  const [clicked, setClicked] = useState(false);
  const [level, setLevel] = useState("random");
  const [button, setButton] = useState("Гоу");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [optionVar, setOptionVar] = useState('');

  function clickAudio() {
    const audio = new Audio(clickSound);
    audio.autoplay = true;
  }

  const includedPlaces = places.filter(place => place.included === true);

  function Loading() {
    if (button === "Гоу") {
      setClicked(true);
      start();
      let intr = setInterval(() => {
        setPicture(includedPlaces[Math.floor(Math.random() * includedPlaces.length)]);
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

  //const randomAlco = (hard) => {
    //let alcoSet = [];
    //if (hard)  alcoSet = alco.filter(item => item.strength === "hard");
    //else alcoSet = alco.filter(item => item.strength === "light");
    //return alcoSet[getRandomIntInclusive(0, alcoSet.length)].name;
  //};

  function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  }

  const randomAlco = (isHard) => {
    let alcoSet = [];
    if (isHard)  alcoSet = alco.filter(item => item.strength === "hard");
    else alcoSet = alco.filter(item => item.strength === "light");
    const r = {};
    for (let i = 0; i < 1000; i++) {
      const res = getRandomIntInclusive(0, alcoSet.length);
      if (r[res]) {
        r[res]++;
      } else r[res] = 1;
    }
    let k = "";
    let m = 0;
    console.log(r);
    for (const key in r) {
      console.log(key);
      if (m < r[key]) {
        m = r[key];
        k = key;
      }
    }
    console.log(k);
    console.log(m);
    console.log(level);
    return alcoSet[k].name;
  };

  return (
    <>
      <Modal visible={modalIsOpen} setVisible={setModalIsOpen}>
        {!optionVar 
        ?<OptionsPage optionVar={optionVar} setOptionVar={setOptionVar}/>
        : optionVar === "add" ? <AddPlace places={places} setPlaces={setPlaces} setOptionVar={setOptionVar} /> : <ChangePlaces places={places} setPlaces={setPlaces} setOptionVar={setOptionVar} />
        }
        
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
