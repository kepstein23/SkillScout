import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import ProfilePage from './ProfilePage';
import HomePage from './HomePage';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<HomePage />}  />
          <Route path="/profile-page" element={<ProfilePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
