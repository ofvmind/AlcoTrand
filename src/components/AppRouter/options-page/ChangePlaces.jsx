import { useState } from "react";
import { Link } from "react-router-dom";
import { FilterInput } from "../../UI/FilterInput/FilterInput";
import { BackButton } from "../../UI/BackButton/BackButton";
import { TransitionGroup, CSSTransition } from "react-transition-group";

export const ChangePlaces = ({ places, setPlaces, setOptionVar }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const onToggle = (id) => {
    setPlaces(
      places.map((place) => {
        if (place.id === id) place.included = !place.included;
        return place;
      })
    );
  };

  const removePlace = (id) => {
    setPlaces(places.filter((place) => place.id !== id));
  };

  return (
    <>
      <div className="navigation">
        <BackButton onClick={() => setOptionVar("")}/>
        <FilterInput
          query={searchQuery}
          setQuery={setSearchQuery}
          placeholder="Пошук"
        />
      </div>
      <div className="__list">
        <TransitionGroup>
          {places
            .filter((place) => {
              const regex = new RegExp(searchQuery, "gi");
              return place.place.match(regex);
            })
            .map((place) => (
              <CSSTransition key={place.id} timeout={200} classNames="__item">
                <div className="__item">
                  <input
                    onChange={onToggle.bind("", place.id)}
                    checked={place.included}
                    type="checkbox"
                    id={place.id}
                    key={place.id}
                  />
                  <label for={place.id}>{place.place}</label>
                  <button
                    className="delete"
                    onClick={() => removePlace(place.id)}
                  >
                    &times;
                  </button>
                </div>
              </CSSTransition>
            ))}
        </TransitionGroup>
      </div>
    </>
  );
};
