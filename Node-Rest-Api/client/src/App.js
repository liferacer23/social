import Home from "./Pages/Home/Home";
import Profile from "./Pages/Profile/Profile";
import { Routes, BrowserRouter as Router, Route,Navigate } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import { useContext } from "react";
import { AuthContext } from "./Context/AuthContext";
function App() {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" exact element={user?<Home/>:<Login/>} />
          <Route path="/profile/:username" element={<Profile />} />
          <Route path="/login" exact element={user?<Navigate to="/"/>:<Login/>} />
          <Route path="/register" exact element={user?<Navigate to="/"/>:<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
