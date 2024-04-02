import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect ,useState} from "react";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Select,
  MenuItem,
  Paper,
  TextField,
} from '@mui/material';
function Main()
{
  const navigate=useNavigate();
    const[dealer,setDealer]=useState([]);
    const ADDdeeler = async () => {
        const Deeler_Name = document.getElementById('N_D').value;
        const Price_Per_Unit = document.getElementById('P_P_U').value;
        const Dealer_Location = document.getElementById('LOC').value;
        const GST_Number = document.getElementById('GST').value;
        const Mobile_Number = document.getElementById('MN').value;
        const Product_Name = document.getElementById('P_N').value;
        const formData = {
          Deeler_Name,
          Product_Name,
          Price_Per_Unit,
          Dealer_Location,
          GST_Number,
          Mobile_Number,
        };
        await axios.post('http://localhost:3002/dealer', formData);
        navigate("/");
      };
      const getDealer = async (p_id) => {
        const deo = await axios.get('http://localhost:3002/dealer');
        setDealer(deo.data);
      };
      useEffect(() => {
        getDealer();
      },[1]); 
    return(
        <>
        <button>Add Supplier</button>
        <TableContainer component={Paper}>
        <Table>
                          <TableHead>
                            <TableRow>
                              <TableCell>Name</TableCell>
                              <TableCell>Product Nmae</TableCell>
                              <TableCell>Price per unit</TableCell>
                              <TableCell>Location</TableCell>
                              <TableCell>GST Number</TableCell>
                              <TableCell>Mobile Number</TableCell>
                              <TableCell>Submit</TableCell>
                            </TableRow>
                          </TableHead>
                          
                          
                            <TableRow >
                            <TableCell>{<TextField id="N_D"></TextField>}</TableCell>
                            <TableCell>{<TextField id="P_N"></TextField>}</TableCell>
                            <TableCell>{<TextField id="P_P_U"></TextField>}</TableCell>
                            <TableCell>{<TextField id="LOC"></TextField>}</TableCell>
                            <TableCell>{<TextField id="GST"></TextField>}</TableCell>
                            <TableCell>{<TextField id="MN"></TextField>}</TableCell>
               
                              <TableCell><button onClick={ADDdeeler}>Submit</button></TableCell>
                              
                            </TableRow>
                        </Table>
                        </TableContainer>
                        <TableContainer component={Paper}>
                         <Table>
                          <TableHead>
                            <TableRow>
                              <TableCell>Name</TableCell>
                              <TableCell>Price per unit</TableCell>
                              <TableCell>Location</TableCell>
                              <TableCell>GST Number</TableCell>
                              <TableCell>Mobile Number</TableCell>
                            </TableRow>
                          </TableHead>
                          
                          {dealer.map((dealer, dealerIndex) => (
                            <TableRow key={dealerIndex}>
                              <TableCell>{dealer.Deeler_Name}</TableCell>
                              <TableCell>{dealer.Price_Per_Unit}</TableCell>
                              <TableCell>{dealer.Dealer_Location}</TableCell>
                              <TableCell>{dealer.GST_Number}</TableCell>
                              <TableCell>{dealer.Mobile_Number}</TableCell>
                              
                            </TableRow>
                          ))}
                        </Table>
                        </TableContainer>
        </>
    );
}
export default Main;