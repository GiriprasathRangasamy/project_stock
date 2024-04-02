import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState,useContext } from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';
import './bglogin.css';
import Link from '@mui/material/Link';
import { Grid } from '@mui/material';
import axios from 'axios';
import { useNavigate } from "react-router-dom"
import { Context1 } from '../context';

import Toolsgiri from './topbar';
import ProductPage from './Products';
export default function Loginpage() {
  const navigate=useNavigate();
  const{setFinuserid}=React.useContext(Context1);
  const [defpassword, setDefpassword] = useState('');
  const [userid, setUserid] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  var passname="";
  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const checkUser = async () => {
    try {
      const response = await axios.get('http://localhost:3002/user');
      console.log('Response:', response.data);
  
      const users = response.data; 
  
      console.log('Users:', users);
      console.log('input:', { userid });
  
      if (users) {
        const user = users.find((user) => user.empId === userid);
  
        if (user) {
          
          console.log('useroutput:', { user});
          if (user.password === defpassword) {
            passname=user.name;
            setFinuserid(passname);
            navigate("/productPage");
          } else {
            setErrorMessage('Invalid password');
          }
        } else {
          setErrorMessage('User does not exist');
        }
      } else {
        setErrorMessage('Error fetching user data');
      }
    } catch (error) {
      console.error('Error during login:', error);
      setErrorMessage('Error during login');
    }
  };
  
  
  const Root = styled('div')(({ theme }) => ({
    width: '100%',
    ...theme.typography.body2,
    '& > :not(style) ~ :not(style)': {
      marginTop: theme.spacing(7),
    },
  }));
  
  return (
    <body className="bg1">
      <div>
        <div
          style={{
            backgroundColor: '#427D9D',
            textAlign: 'center',
            padding: '1%',
            color: 'white',
            fontWeight: '800',
            fontSize: '25px',
          }}
        >
          Company Name
        </div>
        <Box
          component="form"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '300px',
            margin: 'auto',
            padding: '20px',
            border: '1px solid #ccc',
            borderRadius: '8px',
            boxShadow: '10px 20px 10px rgba(0, 0, 0, 0.1)',
            marginTop: '3vh',
            justifyContent: 'center',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
          }}
          noValidate
          autoComplete="off"
        >
          <AccountCircle
            sx={{
              fontSize: '50px',
              color: 'primary.main',
            }}
          />
          <h2>SIGN IN</h2>
          <TextField
  required
  id="Emp_id"
  label="Employee Id"
  variant="outlined"
  sx={{
    marginBottom: '15px',
    width: '100%',
  }}
  onChange={(e) => setUserid(e.target.value)}
/>
<TextField
  required
  id="Password"
  label="Password"
  type={showPassword ? 'text' : 'password'}
  fullWidth
  variant="outlined"
  InputProps={{
    endAdornment: (
      <InputAdornment position="end">
        <IconButton
          onClick={handleTogglePasswordVisibility}
          edge="end"
          sx={{ color: 'text.primary' }}
        >
          {showPassword ? <Visibility /> : <VisibilityOff />}
        </IconButton>
      </InputAdornment>
    ),
  }}
  sx={{
    marginBottom: '20px',
    width: '100%',
  }}
  onChange={(e) => setDefpassword(e.target.value)}
/>

          <Grid container>
            <Grid item xs>
             
               {""}
            
            </Grid>
            <Grid item>
              <Link href="/password" variant="body2">
                Forget Password?
              </Link>
            </Grid>
          </Grid>
          {errorMessage && (
            <p style={{ color: 'red', marginTop: '10px' }}>{errorMessage}</p>
          )}
          <Button
            variant="contained"
            color="error"
            sx={{ marginTop: '15px' }}
            type="button"
            onClick={checkUser}
          >
            Sign in
          </Button>

          <Root style={{ marginTop: '10px' }}>
            <Divider>OR</Divider>
          </Root>
          <p>
            New user?<Link href="/new" underline="always">
              {'SignUp'}
            </Link>
          </p>
        </Box>
      </div>
      
    </body>
  );
}
