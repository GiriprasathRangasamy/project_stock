import { Button, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TableRow, TextField } from "@mui/material";
import { useState ,useEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Toolsgiri from "./topbar";
import Footer from "./footer";

function OrderStatus()
{
const [products, setProducts] = useState([]);
const navigate=useNavigate();
const getProduct = async () => {
  const po = await axios.get('http://localhost:3002/orders');
  setProducts(po.data);
};

useEffect(() => {
  getProduct();
}, [1]); 
const[cstatus,setCstatus]=useState();
const[cdelevary,setCdelevary]=useState();
const[oid,setOid]=useState();
const updatestatus = async () => {
  
      // Fetch user data from the server
      const response = await axios.get('http://localhost:3002/orders');
      const users = response.data;
      const user = users.find((user) => user.orderid === oid);
        
        if (user) {
          // Update the user's password with the new password
          const id =user.id; // Assuming 'id' is the unique identifier
          user.Status=cstatus;
          user.delivered=cdelevary;
          
          await axios.delete(`http://localhost:3002/orders/${id}`);
          await axios.post(`http://localhost:3002/orders`,user);
          alert('updated successfully');
          navigate('/orderstatus');
 } };

    return(
        <div style={{minHeight:"80vh"}}>
            <Toolsgiri/>
            <>
            <h2 style={{marginTop:"100px",marginLeft:"10px"}}>Order Status</h2>
            <TableContainer>
            <Table style={{marginLeft:"10px",marginRight:"10px"}}>
              
                <TableHead>
                            <TableRow>
                                <TableCell>OrderId</TableCell>
                              <TableCell>Product Id</TableCell>
                              <TableCell>Product Name</TableCell>
                              <TableCell>Quantity</TableCell>
                              <TableCell>Supplier Name</TableCell>
                              <TableCell>Supplier Mobile Number</TableCell>
                              <TableCell>Price per Unit</TableCell>
                              <TableCell>TotalAmount</TableCell>
                              <TableCell>Payment Status</TableCell>
                              <TableCell>Delivered</TableCell>
                              <TableCell>Update</TableCell>
                            </TableRow>
        
                </TableHead>
                <TableBody>
                {products.map((product, index) => (
                <TableRow key={index}>
                <TableCell><TextField value={product.orderId} onChange={(e)=>(setOid(e.target.value))}></TextField></TableCell>
                <TableCell>{product.Product_id}</TableCell>
                <TableCell>{product.Product_name}</TableCell>
                <TableCell>{product.Quantity}</TableCell>
                <TableCell>{product.Supplier_Number}</TableCell>
                <TableCell>{product.Supplier_Mobile_Number}</TableCell>
                <TableCell>{product.Price_Per_unit}</TableCell>
                <TableCell>{product.Total_Price}</TableCell>
                <TableCell><TextField value={product.Status} id="status" onChange={(e)=>(setCstatus(e.target.value))}></TextField></TableCell>
                <TableCell><TextField value={product.delivered}id="status" onChange={(e)=>(setCdelevary(e.target.value))}></TextField></TableCell>
                <TableCell><Button onClick={updatestatus}>Update</Button></TableCell>
                </TableRow>))}
                </TableBody>
            </Table>
            </TableContainer>
            </>
            <Footer/>
        </div>
    );
}
export default OrderStatus;