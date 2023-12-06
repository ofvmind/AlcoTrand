import { useState } from "react";
import cl from "./Modal.module.css";

export const Modal = ({visible, setVisible, setOptionVar, children}) => {
  const [hide, setHide] = useState(false);

  const rootClasses = [cl.modal];
  if (visible) rootClasses.push(cl.active);
  if (hide) rootClasses.push(cl.close);

  const hideModal = () => {
    setHide(true);
    setTimeout(() => {
      setOptionVar('');
      setVisible(false);
      setHide(false);
    } ,250);
  };

  return (
    <div className={rootClasses.join(' ')}>
      {children}
      <button className="btn" onClick={hideModal}>Закрити</button>
    </div>
  );
};
