import React from 'react'
import {Box,img, TextField,Button}from "@material-ui/core";
import logo from './Asserts/signup.jpg';
import  './Css/main.css';


function Main() {
    return (
       
<Box  >


<div className='box' >
   
<img  src={logo} className='logoo' />
<h1 className='signin'>SIGN UP</h1>
<form className='forml' autoComplete="off">
<TextField id="filled-basic" label="ID"  />
  <TextField id="filled-basic" label="Name"  />
  <TextField id="filled-basic" label="Email" />
  <TextField id="filled-basic" label="Password" />
  <TextField id="filled-basic" label="Reenter password" />

</form>
<Button className='buttono' variant="outlined" color='primary'>
  Submit
</Button>
</div>

</Box>   
       
    )
}

export default Main;
