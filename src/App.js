import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import DialogsHok from "./components/Dialogs/DialogsHok";
import HeaderHoc from "./components/Header/HeaderHoc";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import UsersHoc from "./components/Users/UsersHoc";

function App() {
  const sitebar = useSelector((state) => state.sitebar.names);
  return (
    <div className="app-wrapper">
      <HeaderHoc />
      <Navbar sitebar={sitebar} />
      <Routes>
        <Route path="/dialogs" element={<DialogsHok />} />
        <Route path="/profile/:userId?" element={<ProfileContainer />} />
        <Route path="/users" element={<UsersHoc />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
