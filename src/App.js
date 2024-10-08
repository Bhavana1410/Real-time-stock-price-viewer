import React, { useState } from 'react';
import StockTicker from './components/StockTicker';
import StockTable from './components/StockTable';
import SearchBar from './components/SearchBar';
import StockTickerWithErrorHandling from './components/StockTickerWithErrorHandling';

const initialStocks = [
  { name: 'AAPL', price: 145.32, change: 1.2 },
  { name: 'GOOGL', price: 2738.44, change: -0.8 },
  { name: 'AMZN', price: 3340.23, change: 2.1 },
  { name: 'TSLA', price: 764.55, change: -3.4 },
];

const App = () => {
  const [stocks, setStocks] = useState(initialStocks);

  const handleSearch = (filteredStocks) => {
    setStocks(filteredStocks);
  };

  return (
    <div>
      <h1>Real-Time Stock Market Dashboard</h1>
      <SearchBar stocks={initialStocks} onSearch={handleSearch} />
      <StockTable stocks={stocks} />
      <h2>Real-Time Stock Prices</h2>
      <StockTicker />
      <h2>Error Handling Example</h2>
      <StockTickerWithErrorHandling />
    </div>
  );
};

export default App;
