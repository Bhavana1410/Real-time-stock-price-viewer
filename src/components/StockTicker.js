// src/components/StockTicker.js
import React, { useEffect, useState } from 'react';

const StockTicker = () => {
  const [stockData, setStockData] = useState([]);

  useEffect(() => {
    const ws = new WebSocket('wss://example.com/stocks'); // WebSocket URL

    ws.onopen = () => {
      console.log('Connected to the stock server');
    };

    ws.onmessage = (event) => {
      const newStockData = JSON.parse(event.data);
      setStockData((prevStockData) => [...prevStockData, newStockData]);
    };

    ws.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    ws.onclose = () => {
      console.log('Disconnected from the stock server');
    };

    return () => {
      ws.close();
    };
  }, []);

  return (
    <div>
      {stockData.length > 0 ? (
        stockData.map((stock, index) => (
          <div key={index}>
            <h3>{stock.name}: ${stock.price}</h3>
          </div>
        ))
      ) : (
        <p>Loading stock data...</p>
      )}
    </div>
  );
};

export default StockTicker;
