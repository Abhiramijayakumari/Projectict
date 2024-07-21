import { Button, TextField, Typography } from '@mui/material'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Signup = () => {
  const navigate = useNavigate()

  const gotToNewPage = ()=>{
    navigate("/user")
  }
  return (
    <div className="signup">
        <br /><br />
      <Typography>SIGN UP PAGE</Typography>
      <br /><br />
      <TextField variant='outlined' label="username"/>
      <br /><br />
      <TextField variant='outlined' label="email"/>
      <br /><br />
      <TextField variant='outlined' label="password"/>
      <br /><br />
      <Button variant='contained' onClick={() => gotToNewPage()} className="btn">SIGNUP</Button>
      <br /><br /><br /><br /><br /><br /><br /><br />
    </div>
  )
}

export default Signup
