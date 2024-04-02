import * as React from 'react';
import Box from '@mui/material/Box';
import { TextField } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

export default function Forgetpassword() {
  const navigate = useNavigate();
  const [defpassword, setDefpassword] = useState('');
  const [userid, setUserid] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async () => {
    try {
      // Fetch user data from the server
      const response = await axios.get('http://localhost:3002/user');
      const users = response.data;
      

      if (users) {
        // Find the user with the matching empId
        const user = users.find((user) => user.empId === userid);
        
        if (user) {
          // Update the user's password with the new password
          const id =user.id; // Assuming 'id' is the unique identifier
          user.password=defpassword;
          
          await axios.delete(`http://localhost:3002/user/${id}`);
          await axios.post(`http://localhost:3002/user`,user);

          // Successful password update
          setErrorMessage('');
          alert('Password updated successfully');
          navigate('/');
        } else {
          // User with the provided empId not found
          setErrorMessage('User does not exist');
        }
      } else {
        // Handle the case when the users array is undefined
        setErrorMessage('Error fetching user data');
      }
    } catch (error) {
      console.error('Error during password reset:', error);
      setErrorMessage('Error during password reset');
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
        <h2>Reset Password</h2>
        <TextField
          required
          id="Emp_id"
          label="Employee Id"
          sx={{ padding: "10px" }}
          onChange={(e) => setUserid(e.target.value)}
        />

        <TextField
          required
          id="NPassword"
          label="New Password"
          type="password"
          sx={{ padding: "10px" }}
          onChange={(e) => setDefpassword(e.target.value)}
        />
        <TextField
          required
          id="cPasword"
          label="Confirm Password"
          type="password"
          sx={{ padding: "10px" }}
        />
        <Button variant="contained" onClick={handleSubmit}>Submit</Button>

        {errorMessage && (
          <p style={{ color: 'red', marginTop: '10px' }}>{errorMessage}</p>
        )}
      </Box>
    </div>
  );
}
