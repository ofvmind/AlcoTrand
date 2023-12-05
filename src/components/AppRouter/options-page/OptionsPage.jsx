import { Link } from "react-router-dom";

export const OptionsPage = ({optionVar, setOptionVar}) => {
  return (
    <>
      <button onClick={() => setOptionVar("add")}>Додати місце</button>
      <button onClick={() => setOptionVar("filter")}>Усі місця</button>
    </>
  );
};