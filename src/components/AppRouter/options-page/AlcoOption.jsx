export const AlcoOptions = ({alco, setAlco}) => {

  const onToggle = id => {
    setAlco(alco.map(item => {
      if (item.id === id) item.included = !item.included;
      return item;
    }));
  };

  return (
    <div className="alcoset">
      {alco.map(item => 
          <li>
            <input id={item.id} onChange={onToggle.bind('', item.id)} type="checkbox" checked={item.included}/>
            <label for={item.id}><strong>{item.name}</strong></label>
          </li>
        )}
    </div>
  );
};