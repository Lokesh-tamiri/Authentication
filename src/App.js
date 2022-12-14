//imports

import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/Presentation";

// App Begins
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
