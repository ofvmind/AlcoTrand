import { useState } from "react";
import { Link } from "react-router-dom";
import defaultImagePlace from "../../../images/places/1646943847_3-abrakadabra-fun-p-oboi-na-telefon-s-alkogolem-4.jpg";
import defaultMusicPlace from "../../../music/places/default.mp3";
import { v4 } from "uuid";

//Random images for PLACE
import r1 from "../../../images/places/random1.jpg";
import r2 from "../../../images/places/random2.jpg";
import r3 from "../../../images/places/random3.jpg";
import r4 from "../../../images/places/random4.jpg";
import r5 from "../../../images/places/random5.jpg";
import r6 from "../../../images/places/random6.jpg";
import r7 from "../../../images/places/random7.jpg";

const images = [r1, r2, r3, r4, r5, r6, r7];

export const AddPlace = ({ setOptionVar, places, setPlaces }) => {
  const [place, setPlace] = useState("");
  
  const getRandomImage = () => {
    return Math.floor(Math.random() * images.length);
  };

  const add = () => {
    if (place) {
      setPlaces( places.concat({
        id: v4(),
        image: images[getRandomImage()],
        place: place,
        music: defaultMusicPlace,
        included: true
      }))

      setPlace("");
    }
  };

  return (
    <div className="options__bar">
      <p>Додати місце</p>
      <input
        type="text"
        value={place}
        onChange={(e) => setPlace(e.target.value)}
      />
      {place && <button className="btn" onClick={add}>Додати</button>}
      <button className="btn" onClick={() => setOptionVar("")}>Повернутись</button>
    </div>
  );
};
