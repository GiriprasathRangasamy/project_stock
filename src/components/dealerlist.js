import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect ,useState} from "react";
import {
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Button
} from '@mui/material';
import Toolsgiri from "./topbar";
import AddIcon from '@mui/icons-material/Add';
function DealerList()
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
        
      };
      const getDealer = async (p_id) => {
        const deo = await axios.get('http://localhost:3002/dealer');
        setDealer(deo.data);
      };
      useEffect(() => {
        getDealer();
      },[1]);
      const [showAddSupplierTable, setShowAddSupplierTable] = useState(false);
    return(
        <>
        <Toolsgiri/>
        
        <div style={{marginLeft:"10px",marginRight:"10px"}}>
        
        
                        <TableContainer component={Paper}>
                        <h3 style={{marginTop:"100px"}}><u>Supplier List</u></h3>
                         <Table>
                          <TableHead>
                            <TableRow>
                              <TableCell>Supplier Name</TableCell>
                              <TableCell>Product Name</TableCell>
                              <TableCell>Price per unit</TableCell>
                              <TableCell>Location</TableCell>
                              <TableCell>GST Number</TableCell>
                              <TableCell>Mobile Number</TableCell>
                            </TableRow>
                          </TableHead>
                          
                          {dealer.map((dealer, dealerIndex) => (
                            <TableRow key={dealerIndex}>
                              <TableCell>{dealer.Deeler_Name}</TableCell>
                              <TableCell>{dealer.Product_Name}</TableCell>
                              <TableCell>Rs.{dealer.Price_Per_Unit}</TableCell>
                              <TableCell>{dealer.Dealer_Location}</TableCell>
                              <TableCell>{dealer.GST_Number}</TableCell>
                              <TableCell>{dealer.Mobile_Number}</TableCell>
                              
                            </TableRow>
                          ))}
                        </Table>
                        </TableContainer>
                        <Button style={{border:"2px solid blue",backgroundColor:"blue",color:'white',marginTop:"10px"}}onClick={() => setShowAddSupplierTable(!showAddSupplierTable)}>
          {showAddSupplierTable? 'Minimize Add Supplier' : 'Add Supplier'}
          </Button>
          {showAddSupplierTable && (
        <TableContainer component={Paper} >
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
                            <TableCell>{<TextField id="N_D" placeholder="Name of supplier"></TextField>}</TableCell>
                            <TableCell>{<TextField id="P_N" placeholder="product name"></TextField>}</TableCell>
                            <TableCell>{<TextField id="P_P_U" placeholder="Price Per Unit"></TextField>}</TableCell>
                            <TableCell>{<TextField id="LOC" placeholder="Enter Location"></TextField>}</TableCell>
                            <TableCell>{<TextField id="GST" placeholder="Enter GST Number"></TextField>}</TableCell>
                            <TableCell>{<TextField id="MN" placeholder="Enter Mobile Number"></TextField>}</TableCell>
               
                              <TableCell><button onClick={ADDdeeler}>Submit</button></TableCell>
                              
                            </TableRow>
                        </Table>
                       
                        <hr/>
                        </TableContainer>
                        )}
                        </div>
        </>
    );
}
export default DealerList;