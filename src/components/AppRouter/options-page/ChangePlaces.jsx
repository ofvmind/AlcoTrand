import { Link } from "react-router-dom";

export const ChangePlaces = ({places, setPlaces, setOptionVar}) => {

  const onToggle = id => {
    setPlaces(places.map(place => {
      if (place.id === id) place.included = !place.included;
      return place;
    }));
  };

  return (
    <div className="places__list">
      {places.map(place =>
          <>
            <span><input onChange={onToggle.bind('', place.id)} checked={place.included} type="checkbox" key={place.id}/>{place.place}</span>
          </>
        )}
      <button onClick={() => setOptionVar('')}>Повернутись</button>
    </div>
  );
};