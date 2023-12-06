import { Link } from "react-router-dom";

export const ChangePlaces = ({ places, setPlaces, setOptionVar }) => {
  const onToggle = (id) => {
    setPlaces(
      places.map((place) => {
        if (place.id === id) place.included = !place.included;
        return place;
      })
    );
  };

  const removePlace = id => {
    setPlaces(places.filter(place => place.id !== id));
  };

  return (
    <div className="places__list">
      {places.map((place) => (
        <div className="place__item">
          <span>
            <input
              onChange={onToggle.bind("", place.id)}
              checked={place.included}
              type="checkbox"
              key={place.id}
            />
            {place.place}

            <button className="delete" onClick={() => removePlace(place.id)}>&times;</button>
          </span>
        </div>
      ))}
      <button className="btn" onClick={() => setOptionVar("")}>Повернутись</button>
    </div>
  );
};
