import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import NoteFoundPage from "./pages/NoteFoundPage";
import RegistrationPage from "./pages/RegistrationPage";

function App() {
  return (
    <>
      <Routes>
        <Route element={<HomePage />} path="/" exact />
        <Route element={<LoginPage />} path="/login" />
        <Route element={<ProfilePage />} path="/me" />
        <Route element={<RegistrationPage />} path="/register" />
        <Route element={<NoteFoundPage />} path="*" />
      </Routes>
    </>
  );
}

export default App;
