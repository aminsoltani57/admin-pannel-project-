import "./lists.scss"
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
const Lists = () => {
    const rows = [
        {
          product: 'Acer Nitro 5',
          customer: 'John Smith',
          amount: "785",
          date: '2020-01-05',
          method: 'cash in delivery',
          status: "approved",
          image:"https://m.media-amazon.com/images/I/61IG46p-yHL._AC_UL480_QL65_.jpg",
          id: 1,
        },
        {
          product: 'Acer Nitro 5',
          customer: 'John Smith',
          amount: "785",
          date: '2020-01-05',
          image:"https://m.media-amazon.com/images/I/61mpMH5TzkL._AC_UL480_QL65_.jpg",
          method: 'cash in delivery',
          status: "pending",
          id: 2,
        },
        {
          image:"https://m.media-amazon.com/images/I/61sgFxYmloL._AC_UL480_QL65_.jpg",
          product: 'Acer Nitro 5',
          customer: 'John Smith',
          amount: "785",
          date: '2020-01-05',
          method: 'cash in delivery',
          status: "approved",
          id: "3",
        },
        {
          image:"https://m.media-amazon.com/images/I/61tE7IcuLmL._AC_UL480_QL65_.jpg",
          product: 'Acer Nitro 5',
          customer: 'John Smith',
          amount: "785",
          date: '2020-01-05',
          method: 'cash in delivery',
          status: "pending",
          id: 4,
        },
        {
          image:"https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_UY327_FMwebp_QL65_.jpg",
          product: 'Acer Nitro 5',
          customer: 'John Smith',
          amount: "785",
          date: '2020-01-05',
          method: 'cash in delivery',
          status: "approved",
          id: 5,
        },
      ];
    return (    <TableContainer component={Paper} className="list">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="tableCell">Tracking ID</TableCell>
              <TableCell className="tableCell">Product</TableCell>
              <TableCell className="tableCell">Customer</TableCell>
              <TableCell className="tableCell">Date</TableCell>
              <TableCell className="tableCell">Amount</TableCell>
              <TableCell className="tableCell">Payment Method</TableCell>
              <TableCell className="tableCell">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.id}
               
              >
                <TableCell >
                  {row.id}
                </TableCell>
                <TableCell className="tableCell" ><div className="cellWrapper">
                  <img src={row.image} alt="" className="image" />
                  </div> </TableCell>
                <TableCell className="tableCell" >{row.customer}</TableCell>
                <TableCell className="tableCell" >{row.date}</TableCell>
                <TableCell className="tableCell" >{row.amount}</TableCell>
                <TableCell className="tableCell" >{row.method}</TableCell>
                <TableCell className="tableCell" ><span className={`status ${row.status}`}>{row.status}</span></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
        );
}
 
export default Lists;