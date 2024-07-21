import { Box, Button, Container, TextField, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';

const styles = {
    root: {
      // display: 'flex',
      // flexDirection: 'column',
      // alignItems: 'flex-start',
      textAlign: 'center',
      // minHeight: '100vh',
      // padding: '20px',
      // justifyContent: 'center',
    },
    // textField: {
    //   width: '100%',
    //   marginBottom: '20px',
    // },
    // formContainer: {
    //     display: 'flex',
    //     flexDirection: 'column',
    //     alignItems: 'flex-start',
    //     width: '100%',
    //   }
  };
const Login = () => {
  return (
    <div className="login">
        <br /><br />
      {/* <Container >
        <Box my={4} style={styles.card}> */}
      <Typography variant='h6' gutterBottom>LOGIN PAGE</Typography>
      <br /><br />
      <TextField variant='outlined' label="username"/>
      <br /><br />
      <TextField variant='outlined' label="password"/>
      <br /><br />
      <Button variant='contained' component={Link} to="/user">LOGIN</Button> &nbsp;&nbsp;
      <Button variant='contained' component={Link} to="/admin">ADMIN</Button> 
      {/* </Box>
      </Container> */}
      <br /><br /><br /><br /><br /><br /><br /><br />
    </div>
  )
}

export default Login
