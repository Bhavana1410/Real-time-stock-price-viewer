// src/components/MemoizedStockTable.js
import React, { useMemo } from 'react';

const MemoizedStockTable = ({ stocks }) => {
  const memoizedStockTable = useMemo(() => {
    return (
      <table>
        <thead>
          <tr>
            <th>Stock</th>
            <th>Price</th>
            <th>Change</th>
          </tr>
        </thead>
        <tbody>
          {stocks.map((stock, index) => (
            <tr key={index}>
              <td>{stock.name}</td>
              <td>{stock.price}</td>
              <td>{stock.change}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }, [stocks]);

  return <div>{memoizedStockTable}</div>;
};

export default MemoizedStockTable;
