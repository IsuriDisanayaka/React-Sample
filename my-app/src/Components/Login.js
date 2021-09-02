import { Box,TextField,Button } from '@material-ui/core'
import React from 'react'
import './Css/login.css'
import logo from './Asserts/signin.jpg';

function Login() {
    return (
         <Box>
<div className='maindiv'>
<img  src={logo} className='logoo' />
<h1 className='signin'>SIGN IN</h1>
<card className='card'>
    <form className='formlogin'>
<TextField id="filled-basic" label="Email" />
  <TextField id="filled-basic" label="Password" />

  </form>
  <Button className='button' variant="outlined" color='primary'>
 LOGIN
</Button>
</card>
<h2 className='new'>Don't you have an acount?</h2>
<Button className='create' variant="outlined" color='primary'>
 Create New Account
</Button>
</div>
        </Box>
      
    )
}

export default Login
