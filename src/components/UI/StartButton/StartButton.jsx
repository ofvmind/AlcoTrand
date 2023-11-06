import cl from "./StartButton.module.css";

export const StartButton = ({children, ...props}) => {
  return (
    <button {...props} className={cl.btn}>{children}</button>
  );
};