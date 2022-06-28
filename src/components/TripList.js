// To run the development server:
// 1st, install json-server on port 3000: npm install -g json server
// 2nd, link to the db.json file: npx json-server --watch ./data/db.json
// 3rd: run the delvelopment server on port 3001: npm run start



import React, { useState } from 'react'


//import the useFetch hook 
import { useFetch } from '../hooks/useFetch'


// styles
import './TripList.css'

export default function TripList() {
    // const [trips, setTrips] = useState([])
   
    const [url, setUrl] = useState('http://localhost:3000/trips')

     // use the useFetch hook instead:
     const { data: trips, isPending, error } = useFetch(url)



     // // below is no longer needed after using the useFetch.js file hook
    // const fetchTrips = useCallback(async () => {
    //     const response = await fetch(url)
    //     const json = await response.json()
    //     setTrips(json);
    // }, [url] ) // a new version of the function triggers if the url changes

    // useEffect(() => {   
    //     fetchTrips()
    // }, [fetchTrips])

    // console.log(trips)

  

  return (
    <div className='trip-list'>
        <h2>TripList</h2>
        {/* show  loading message with isPending state */}
        { isPending && <div> Loading trips . . .</div>}
        {error && <div>{error}</div>}
        <ul>
            {trips && trips.map(trip => (
                <li key={trip.id}>
                    <h3>{trip.title}</h3>
                    <p>{trip.price}</p>
                </li>
            ))}
        </ul>

        <div className="filters">
            <button onClick={() => setUrl('http://localhost:3000/trips?loc=europe')}>
                European Trips
            </button>
            <button onClick={() => setUrl('http://localhost:3000/trips?loc=america')}>
                American Trips
            </button>
            <button onClick={() => setUrl('http://localhost:3000/trips')}>
                All Trips
            </button>
        </div>
    </div>
  )
}
