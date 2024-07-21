import { AppBar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const styles = {
    root: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      textAlign: 'center',
    },
    content: {
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      padding: '20px',
      borderRadius: '10px',
      maxWidth: '600px', // Example: limit content width for better readability
      margin: 'auto', // Center content horizontally
      marginTop: '20px', // Optional margin top for spacing
    },
    loginButton: {
        marginLeft: '20px', // Adjust as needed to move the login button to the left
        margin: 'auto',
      },
  };
const Home = () => {
  return (
      <div style={{ ...styles.root, backgroundImage: `url('./path/to/your/image.jpg')`, backgroundSize: 'cover' }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component={Link} to="/" style={{ textDecoration: 'none', color: 'inherit', flexGrow: 1 }}>
            Personal Finance Management App
          </Typography>
          <Button color="inherit" component={Link} to="/login">
            Login
          </Button>
          <Button color="inherit" component={Link} to="/signup">
            Signup
          </Button>
        </Toolbar>
      </AppBar>
      <Container>
        <Box my={4} style={styles.content}>
        <div style={{ display: 'flex', justifyContent: 'center' }}> {/* Option 1: Center logo above content */}
            <img src="data:image/png;base64,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" alt="App Logo" /> {/* Replace with your logo path */}
          </div>
          <br /><br />
          <Typography variant="h6" component="h1" gutterBottom>
            Welcome to Personal Finance Management App
          </Typography>
          <Typography variant="body1" paragraph>
            Manage your finances with ease. Track income, expenses, set budgets, and achieve your financial goals with our intuitive platform. Our user-friendly interface ensures you stay in control wherever you go, all while keeping your data secure and private. Start today for free and take the first step towards achieving your financial aspirations.
          </Typography>
          <Button variant="contained" color="primary" component={Link} to="/signup">
            Get Started
          </Button>
        </Box>
      </Container>
    </div>
  )
}

export default Home
