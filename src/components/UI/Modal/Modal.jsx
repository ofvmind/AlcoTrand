import { useState } from "react";
import cl from "./Modal.module.css";

export const Modal = ({visible, setVisible, children}) => {
  const [hide, setHide] = useState(false);

  const rootClasses = [cl.modal];
  if (visible) rootClasses.push(cl.active);
  if (hide) rootClasses.push(cl.close);

  const hideModal = () => {
    setHide(true);
    setTimeout(() => {
      setVisible(false);
      setHide(false);
    } ,250);
  };

  return (
    <div className={rootClasses.join(' ')}>
      {children}
      <button onClick={hideModal}>Close</button>
    </div>
  );
};
