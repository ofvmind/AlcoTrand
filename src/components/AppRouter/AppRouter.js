import { Route, Routes } from "react-router-dom";
import { router } from "./src/index";

export const AppRouter = () => {
  return (
    <Routes>
      {router.map(route =>
          <Route key={route.path} path={route.path} element={<route.element />}/>
        )}
    </Routes>
  );
};