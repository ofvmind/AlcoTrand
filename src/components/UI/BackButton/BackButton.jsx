import cl from "./BackButton.module.css";

export const BackButton = (props) => (
  <button className={cl.btnBack} {...props}>&#8828;</button>
);