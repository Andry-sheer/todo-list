
import Login from "./pages/Login/Login";
import TodoList from "./pages/TodoList/TodoList";
import ProductPreview from "./pages/ProductPreview/ProductPreview";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./pages/Error/Error";
import PrivateRoute from "./privateRoute";

const AppRouter = () => (
  <TodoList />
);

export default AppRouter;