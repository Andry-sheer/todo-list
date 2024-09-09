
import Login from "./pages/Login/Login";
import TodoList from "./pages/TodoList/TodoList";
import ProductPreview from "./pages/ProductPreview/ProductPreview";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./pages/Error/Error";
import PrivateRoute from "./privateRoute";

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login />} />

      <Route element={ <PrivateRoute/> }>
        <Route path='/todo-list' element={<TodoList />} />
        {/* <Route path='/product-preview/:productId' element={<ProductPreview />} /> */}
      </Route>

      <Route path="product-preview" element={<ProductPreview />}>
        <Route path=":productId" element={<div>ProductPreview ID</div>}/>
        <Route path="edit" element={<div>ProductPreview Edit</div>}/>
      </Route>
      
      <Route path="*" element={ <Error/> } />
    </Routes>
  </BrowserRouter>
);

export default AppRouter;