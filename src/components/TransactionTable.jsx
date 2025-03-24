import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { mockTransactions } from './mockTransactions';

function TransactionTable() {
  const columns = [
    { field: 'txId', headerName: 'Transaction ID', width: 150 },
    { field: 'user', headerName: 'User', width: 150 },
    { field: 'date', headerName: 'Date', width: 150 },
    { field: 'cost', headerName: 'Cost', width: 150 },
  ];

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={mockTransactions} columns={columns} getRowId={(row) => row.txId} />
    </div>
  );
}

export default TransactionTable;