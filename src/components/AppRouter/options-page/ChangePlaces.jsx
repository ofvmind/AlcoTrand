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
    <div className="__list">
      {places.map((place) => (
        <div className="__item">
          
            <input
              onChange={onToggle.bind("", place.id)}
              checked={place.included}
              type="checkbox"
              key={place.id}
              id={place.id}
            />
            <label for={place.id}>{place.place}</label>
            <button className="delete" onClick={() => removePlace(place.id)}>&times;</button>
          
        </div>
      ))}
      <button className="btn" onClick={() => setOptionVar("")}>Повернутись</button>
    </div>
  );
};
