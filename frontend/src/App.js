import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:4000');  // Connect to backend

function Dashboard() {
  const [stations, setStations] = useState([]);

  useEffect(() => {
    socket.on('stationUpdate', (data) => {
      setStations((prevStations) => {
        // Update or add the station data
        const stationIndex = prevStations.findIndex(st => st.stationId === data.stationId);
        if (stationIndex !== -1) {
          // Update the existing station
          const updatedStations = [...prevStations];
          updatedStations[stationIndex] = data;
          return updatedStations;
        } else {
          // Add new station
          return [...prevStations, data];
        }
      });
    });

    return () => {
      socket.off('stationUpdate');
    };
  }, []);

  return (
      <div>
        <h1>Charging Station Dashboard</h1>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {stations.map(station => (
              <div key={station.stationId} style={{
                border: '1px solid #ccc',
                borderRadius: '10px',
                padding: '20px',
                margin: '10px',
                width: '200px',
                backgroundColor: station.status === 'charging' ? 'green' : station.status === 'idle' ? 'orange' : 'red',
                color: 'white'
              }}>
                <h2>Station {station.stationId}</h2>
                <p>Status: {station.status}</p>
                <p>Power: {station.power} kW</p>
              </div>
          ))}
        </div>
      </div>
  );
}

export default Dashboard;
