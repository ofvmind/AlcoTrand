import { Link } from "react-router-dom";

export const OptionsPage = ({optionVar, setOptionVar}) => {
  return (
    <>
      <br />
      <br />
      <br />
      <button className="btn" onClick={() => setOptionVar("add")}>Додати місце</button>
      <br />
      <button className="btn" onClick={() => setOptionVar("filter")}>Усі місця</button>
      <br />
      <button className="btn" onClick={() => setOptionVar("alcoset")}>Алкоголь</button>
      <br />
    </>
  );
};