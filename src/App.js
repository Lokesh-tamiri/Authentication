//imports 

import LoginPage from './components/LoginPage'
import SignupPage from './components/SignupPage'
import { Routes,Route } from 'react-router-dom';

// App Begins
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </div>
  );
}

export default App;
