// src/components/StockTable.js
import React from 'react';
import './StockTable.css';

const StockTable = ({ stocks }) => {
  return (
    <div className="stock-table-container">
      <table className="stock-table">
        <thead>
          <tr>
            <th>Stock Name</th>
            <th>Price</th>
            <th>Change</th>
          </tr>
        </thead>
        <tbody>
          {stocks.map((stock, index) => (
            <tr key={index}>
              <td>{stock.name}</td>
              <td>${stock.price}</td>
              <td className={stock.change > 0 ? 'positive' : 'negative'}>
                {stock.change}%
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StockTable;
