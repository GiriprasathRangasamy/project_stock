import Toolsgiri from "./topbar";
import Footer from "./footer";
import { useEffect, useState } from "react";
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
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Order(){
  const[pname,setPname]=useState('');
  const[Dealerss,setDealerss]=useState([]);
  const[Opener,setOpener]=useState(false);
  const navigate = useNavigate();
  const finddealer = async () => {
    console.log("nmecvbnm;;",pname);
    const response = await axios.get('http://localhost:3002/dealer');
    const user = response.data.find((user) => user.Product_Name === pname);
    // Check if user is found
    
    if (user) {
      setOpener(true);
      setDealerss([user]);
    } else {
      alert('Product Supplier Not Found')
    }
    console.log(Dealerss);
  };
  const ADDdeeler = async () => {
    const Product_id = document.getElementById('P_I').value;
    const Product_name = document.getElementById('P_N').value;
    const Quantity = document.getElementById('Q').value;
    const Supplier_Number = document.getElementById('SN').value;
    const Supplier_Mobile_Number = document.getElementById('SMN').value;
    const Price_Per_unit = document.getElementById('PPU').value;
    const Total_Price=document.getElementById('TA').value;
    const Status="pending";
    const delivered='pending';
    const orderId=document.getElementById('Oi').value;
    const formData = {
      Product_id,
      Product_name,
      Quantity,
      Supplier_Number,
      Supplier_Mobile_Number,
      Price_Per_unit,
      Total_Price,
      Status,
      delivered,
      orderId
    };
    await axios
    .post('http://localhost:3002/orders',formData);
    navigate("/ordernow");
  };
  const[ppu,setPpu]=useState("");
  const[qt,setQt]=useState("");
  const[ta,setTa]=useState("0");
  function Total()
  {
    setPpu(document.getElementById("PPU").value);
    setQt(document.getElementById("Q").value);
    setTa(ppu*qt);
  }
  useEffect(() => {
    
  }, [Total]);
  return(
    <>
    <Toolsgiri/>
    <div style={{marginTop:"100px",marginLeft:"10px",marginRight:"10px",minHeight:"80vh"}}>
    <TextField placeholder="product name to find supplier" id="productName" onChange={(e)=>{setPname(e.target.value)}}></TextField><button onClick={finddealer} style={{marginLeft:"2vw",padding:"14px",fontSize:"20px",color:"white",background:"blue"}}>Get the dealer</button>
    {Opener&&(<TableContainer component={Paper}>
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
                          
                          {Dealerss.map((dealer, dealerIndex) => (
                            <TableRow key={dealerIndex}>
                              <TableCell>{dealer.Deeler_Name}</TableCell>
                              <TableCell>Rs.{dealer.Price_Per_Unit}</TableCell>
                              <TableCell>{dealer.Dealer_Location}</TableCell>
                              <TableCell>{dealer.GST_Number}</TableCell>
                              <TableCell>{dealer.Mobile_Number}</TableCell>
                              
                            </TableRow>
                          ))}
                        </Table>
            </TableContainer>)}
            <br/>
            <h2>Place the order</h2>
            <Table>
                          <TableHead>
                            <TableRow>
                              <TableCell>Product Id</TableCell>
                              <TableCell>Product Name</TableCell>
                              <TableCell>Quantity</TableCell>
                              <TableCell>Supplier Name</TableCell>
                              <TableCell>Supplier Mobile Number</TableCell>
                              <TableCell>Price per Unit</TableCell>
                              <TableCell>TotalAmount</TableCell>
                              <TableCell>OrderId</TableCell>
                              <TableCell>Submit</TableCell>
                            </TableRow>
                          </TableHead>
                          
                          
                            <TableRow >
                            <TableCell>{<TextField id="P_I"></TextField>}</TableCell>
                            <TableCell>{<TextField id="P_N"></TextField>}</TableCell>
                            <TableCell>{<TextField id="Q" type="number"></TextField>}</TableCell>
                            <TableCell>{<TextField id="SN"></TextField>}</TableCell>
                            <TableCell>{<TextField id="SMN"></TextField>}</TableCell>
                            <TableCell>{<TextField id="PPU" type="number"></TextField>}</TableCell>
                            <TableCell>{<div><TextField id="TA" value={ta}></TextField><button onClick={Total} style={{color:"white",backgroundColor:"blue", marginTop:"5px"}}>calculate</button></div>}</TableCell>
                            <TableCell>{<TextField id="Oi"></TextField>}</TableCell>
                              <TableCell><button onClick={ADDdeeler} style={{color:"white",backgroundColor:"blue", marginTop:"5px", padding:"5px",fontSize:"18px"}}>Submit</button></TableCell>
                              
                            </TableRow>
                        </Table>
    </div>
    <Footer/>
    </>
  );
}
export default Order;