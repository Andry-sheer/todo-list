


import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
      localStorage.setItem('token', '1234567');
      navigate("/todo-list");
  }



  return(
    <>
        <Link to="/todo-list">Todo List</Link>
        <button onClick={handleLogin}>Login</button>
    </>
)
};


export default Login;