// To run the development server:
// 1st, install json-server on port 3000: npm install -g json server
// 2nd, link to the db.json file: npx json-server --watch ./data/db.json
// 3rd: run the delvelopment server on port 3001: npm run start

import './App.css';
import TripList from './components/TripList';
import React, { useState } from 'react';

function App() {
  const [showTrips, setShowTrips] = useState(true)

  return (
    <div className="App">
        <button onClick={() => setShowTrips(false)}>Hide Events</button>
        {showTrips && <TripList/>}
    </div>
  );
}

export default App;
