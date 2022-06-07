import { React, useState, useEffect} from 'react'

export default function TripList() {
    const [trips, setTrips] = useState([])

    useEffect(() => {   // the first part is the function
        fetch('http://localhost:3001/trips')
        .then(response => response.json())
        .then(json => setTrips(json))
    }, []) // the second part in the square brackets is the dependency array to run when a state changes

    console.log(trips);

  

  return (
    <div>
        <h2>TripList</h2>
    </div>
  )
}
