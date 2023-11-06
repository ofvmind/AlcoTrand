import cl from "./Loader.module.css";
import bottle from "../../../images/props.jpg";

export const Loader = () => (
  <div className={cl.ring}><img src={bottle} className={cl.bottle}/></div>
);