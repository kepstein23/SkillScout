import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <h1>Skill Scout</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/profile-page">Profile Page</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default HomePage;
