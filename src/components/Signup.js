import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import { Link,useNavigate } from "react-router-dom"
import FormControlLabel from '@mui/material/FormControlLabel';
import './signstyle.css';
import AccountCircle from '@mui/icons-material/AccountCircle';
import axios from 'axios';
import './bglogin.css';

export default function Signup() {
const navigate=useNavigate();
  const handleSubmit = async () => {
    const empId = document.getElementById('Emp_id').value;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const mobileNumber = document.getElementById('Mobile-Number').value;
    const password = document.getElementById('Password').value;
    const formData = {
      empId,
      name,
      email,
      mobileNumber,
      password
    };

    try {
      const response = await axios.post('http://localhost:3002/user', formData);
      navigate("/")
      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='bg'>
      <div style={{
        backgroundColor: "#427D9D",
        textAlign: "center",
        padding: "1%",
        color: "white",
        fontWeight: "800",
        fontSize: "25px"
      }}>
        Company Name
      </div>
      <Box
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '400px',
          margin: 'auto',
          padding: '20px',
          border: '1px solid #ccc',
          borderRadius: '8px',
          boxShadow: '10px 20px 10px rgba(0, 0, 0, 0.1)',
          marginTop: "2%",
          backgroundColor: "rgba(255, 255, 255, 0.9)",
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
        <h2>SIGN UP</h2>
        
        <TextField
          required
          id="name"
          label="Your Name"
          sx={{ padding: "10px" }}
        />
        <TextField
          required
          id="Emp_id"
          label="Employee Id"
          sx={{ padding: "10px" }}
        />
        <TextField
          required
          id="email"
          label="Email Id"
          type='email'
          sx={{ padding: "10px" }}
        />
        <TextField
          required
          id="Mobile-Number"
          label="Mobile Number"
          sx={{ padding: "10px" }}
        />

        <TextField
          required
          id="Password"
          label="Password"
          type="password"
          sx={{ padding: "10px" }}
        />
        <TextField
          required
          id="cPasword"
          label="Confirm Password"
          type="password"
          sx={{ padding: "10px" }}
        />
        <div className='terms'>
          <div>
            <FormControlLabel required control={<Checkbox />} sx={{ paddingTop: "10px" }} />
          </div>
          <div>
            <p style={{ fontSize: "19px" }}><p>I have agreed to <Link href="com" underline="always">{'terms and conditions'}</Link></p></p>
          </div>
        </div>
        <Button variant="contained" onClick={handleSubmit}>Submit</Button>
      </Box>
    </div>
  );
}
