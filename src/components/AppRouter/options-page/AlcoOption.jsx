import { useState } from "react";
import { FilterInput } from "../../UI/FilterInput/FilterInput";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { BackButton } from "../../UI/BackButton/BackButton";

export const AlcoOptions = ({ alco, setAlco, optionVar, setOptionVar }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const onToggle = (id) => {
    setAlco(
      alco.map((item) => {
        if (item.id === id) item.included = !item.included;
        return item;
      })
    );
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
          {alco
            .filter((item) => {
              const regex = new RegExp(searchQuery, "gi");
              return item.name.match(regex);
            })
            .map((item) => (
              <CSSTransition key={item.id} classNames="__item" timeout={200}>
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
              </CSSTransition>
            ))}
        </TransitionGroup>
      </div>
    </>
  );
};
