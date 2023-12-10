export const AlcoOptions = ({ alco, setAlco }) => {
  const onToggle = (id) => {
    setAlco(
      alco.map((item) => {
        if (item.id === id) item.included = !item.included;
        return item;
      })
    );
  };

  return (
    <div className="__list">
      {alco.map((item) => (
        <>
          <li className="__item" style={{ display: "inline-flex" }}>
            <input
              id={item.id}
              onChange={onToggle.bind("", item.id)}
              type="checkbox"
              checked={item.included}
            />
            <label for={item.id}>
              <strong>{item.name}</strong>
            </label>
          </li>
          <br />
        </>
      ))}
      <h1 tabIndex={1} autoFocus>xxx</h1>
    </div>
  );
};
