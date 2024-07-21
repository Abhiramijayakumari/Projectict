import { Button, Container, Paper, Table, TableBody, TableCell, TableHead, TableRow, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const styles = {
    root: {
        textAlign: 'center',
        padding: '20px',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: '20px',
        padding: '20px',
        backgroundColor: '#fff',
    },
    table: {
        marginTop: '20px',
        backgroundColor: '#fff',
    },
    // tableHead: {
    //     backgroundColor: '#f5f5f5',
    // },
    // tableRow: {
    //     backgroundColor: '#fff',
    // },
    // tableCell: {
    //     color: '#000',
    // }
};
const User = () => {
    const [transactions, setTransactions] = useState([]);
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState('');
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');

    const handleAddTransaction = (e) => {
        e.preventDefault();
        const newTransaction = { id: transactions.length + 1, amount, category, date, description };
        setTransactions([...transactions, newTransaction]);
        setAmount('');
        setCategory('');
        setDate('');
        setDescription('');
    };

    const handleDeleteTransaction = (id) => {
        setTransactions(transactions.filter(transaction => transaction.id !== id));
    };
  return (
    <Container style={styles.root}>
            <Typography variant="h4" gutterBottom>User Dashboard</Typography>
            <Paper style={styles.form} elevation={3}>
                <form onSubmit={handleAddTransaction}>
                    <TextField
                        label="Amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        required
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        required
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Date"
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        label="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        fullWidth
                        margin="normal"
                    />
                    <Button variant="contained" color="primary" type="submit" style={{ marginTop: '20px' }}>
                        Add
                    </Button>
                    </form>
            </Paper>
            <Table style={styles.table}>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Amount</TableCell>
                        <TableCell>Category</TableCell>
                        <TableCell>Date</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {transactions.map((transaction) => (
                        <TableRow key={transaction.id}>
                            <TableCell>{transaction.id}</TableCell>
                            <TableCell>{transaction.amount}</TableCell>
                            <TableCell>{transaction.category}</TableCell>
                            <TableCell>{transaction.date}</TableCell>
                            <TableCell>{transaction.description}</TableCell>
                            <TableCell>
                                <Button color="secondary" onClick={() => handleDeleteTransaction(transaction.id)}>
                                    Delete
                                </Button>
                            </TableCell>
                        </TableRow>
                           ))}
                           </TableBody>
                       </Table>
                   </Container>
  )
}

export default User
