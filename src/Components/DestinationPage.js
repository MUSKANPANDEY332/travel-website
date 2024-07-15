import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import './DestinationPage.css';

function DestinationPage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const destination = queryParams.get('name');  // Make sure this matches the backend query parameter

  const [destinationData, setDestinationData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (destination) {
      axios.get(`http://localhost:3003/destination?name=${destination}`)
        .then(response => {
          setDestinationData(response.data);
          setLoading(false);
        })
        .catch(err => {
          setError(err);
          setLoading(false);
        });
    }
  }, [destination]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching destination data</p>;

  return (
    <div>
      <h1>Explore the World</h1>
      <p>What brings you here today?</p>
      <p>Your chosen destination is: {destination}</p>
      
      {destinationData && (
        <div>
          <p>{destinationData}</p>
        </div>
      )}

      <button>Exploring</button>
      <button>Best Deals</button>
      <button>Plan a Trip</button>
      <button>I am looking for an adventurous trip</button>
    </div>
  );
}

export default DestinationPage;
