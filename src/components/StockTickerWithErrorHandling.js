// src/components/StockTickerWithErrorHandling.js
import React, { useEffect, useState } from 'react';

const StockTickerWithErrorHandling = () => {
  const [stockData, setStockData] = useState([]);
  const [error, setError] = useState(null);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const ws = new WebSocket('wss://example.com/stocks');

    ws.onopen = () => {
      setIsConnected(true);
      console.log('Connected to stock server');
    };

    ws.onmessage = (event) => {
      const newStockData = JSON.parse(event.data);
      setStockData((prevStockData) => [...prevStockData, newStockData]);
    };

    ws.onerror = (error) => {
      setError('Error connecting to the stock server');
      console.error('WebSocket error:', error);
    };

    ws.onclose = () => {
      setIsConnected(false);
      console.log('Disconnected from the stock server');
    };

    return () => {
      ws.close();
    };
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      {isConnected ? (
        stockData.map((stock, index) => (
          <div key={index}>
            <h3>{stock.name}: ${stock.price}</h3>
          </div>
        ))
      ) : (
        <p>Connecting to stock server...</p>
      )}
    </div>
  );
};

export default StockTickerWithErrorHandling;
