import { Main } from "../../app-component/Main";
import { AddPlace } from "../../AppRouter/options-page/AddPlace";
import { ChangePlaces } from "../options-page/ChangePlaces";

export const router = [
  {path: "/", element: Main},
  {path: "/addPlace", element: AddPlace},
  {path: "/changePlaces", element: ChangePlaces}
];