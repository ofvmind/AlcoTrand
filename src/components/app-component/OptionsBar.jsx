export const OptionsBar = ({place, setPlace, add}) => {
  return (
    <div className="options__bar">
      <input
        type="text"
        value={place}
        onChange={(e) => setPlace(e.target.value)}
      />
       <button onClick={add}>Add</button>
    </div>
  );
};
