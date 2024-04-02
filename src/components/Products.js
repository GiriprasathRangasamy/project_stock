import React, { useState, useEffect, useContext } from 'react';
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
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import './Main.css';
import Toolsgiri from './topbar';
import Footer from './footer';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Context1 } from '../context'; 
export default function ProductPage() {
const{finuserid}=useContext(Context1);
  const [products, setProducts] = useState([]);
  const getProduct = async () =>{
    const po = await axios.get('http://localhost:3002/product');
    setProducts(po.data);
  };
  
  useEffect(() => {
    getProduct();
    
  }, [1]); 

  const [sortByAvailability, setSortByAvailability] = useState(true);
  const [showAddProductTable, setShowAddProductTable] = useState(false);
  const toggleSort = () => {
    setProducts(
      [...products].sort((a, b) =>
        sortByAvailability ? a.availability - b.availability : b.availability - a.availability
      )
    );
    setSortByAvailability(!sortByAvailability);
  };


  const navigate = useNavigate();

  const AddProduct = async () => {
    const Product_id = document.getElementById('P_id').value;
    const Product_name = document.getElementById('name').value;
    const Product_type = document.getElementById('type').value;
    const Product_Available = document.getElementById('avable').value;
    const Market_price = document.getElementById('price').value;
    const formData = {
      Product_id,
      Product_name,
      Product_type,
      Product_Available,
      Market_price,
    };
    await axios.post('http://localhost:3002/product', formData);
    navigate("/productPage");
  };
  
  return (
    <>
      <Toolsgiri />
      <div className="maincontent" style={{ paddingTop: "100px",marginLeft:"10px",marginRight:"10px" }}>
        <div className="Mainbox" style={{minHeight:"100vh"}}>
        <h1>Welcome {finuserid}</h1>
          <Button style={{backgroundColor:"blue",color:"white",fontSize:"16px",padding:"5px"}}onClick={() => setShowAddProductTable(!showAddProductTable)}>
          {showAddProductTable ? 'Minimize Add Product' : 'Add Product'}
          </Button>
          {showAddProductTable && (
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Product Id</TableCell>
                    <TableCell>Product Name</TableCell>
                    <TableCell>Product Type</TableCell>
                    <TableCell>Product Availability</TableCell>
                    <TableCell>Product Market Price</TableCell>
                    <TableCell>ADD Product</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>{<TextField id="P_id" placeholder='Enter product Id'></TextField>}</TableCell>
                    <TableCell>{<TextField id="name" placeholder='Enter product Name'></TextField>}</TableCell>
                    <TableCell>{<TextField id="type" placeholder='Enter product Type'></TextField>}</TableCell>
                    <TableCell>{<TextField id="avable" placeholder='Enter product Avablity'></TextField>}</TableCell>
                    <TableCell>{<TextField id="price" placeholder='Enter Market Price'></TextField>}</TableCell>
                    <TableCell>
                      {<Button style={{color:"white",backgroundColor:"blue",padding:'5px',fontSize:"16px"}}onClick={AddProduct}>ADD</Button>}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          )}

          <TableContainer component={Paper}>
          <h2>The Product List</h2>
            <Table className="product-table">
              <TableHead>
                <TableRow>
                  <TableCell>Product Id</TableCell>
                  <TableCell>Product Name</TableCell>
                  <TableCell>Product Type</TableCell>
                  <TableCell>Product Market Price </TableCell>
                  <TableCell>
                    <Button onClick={toggleSort}>
                      Product Availability{' '}
                      {sortByAvailability ? (
                        <ArrowUpwardIcon />
                      ) : (
                        <ArrowDownwardIcon />
                      )}
                    </Button>
                  </TableCell>
                  <TableCell>Order</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {products.map((product, index) => (
                  <TableRow key={index}>
                    <TableCell>{product.Product_id}</TableCell>
                    <TableCell>{product.Product_name}</TableCell>
                    <TableCell>{product.Product_type}</TableCell>
                    <TableCell>Rs.{product.Market_price}</TableCell>
                    <TableCell>{product.Product_Available} Qty</TableCell>
                    <TableCell>
                      <Button href="/ordernow">
                        Order Product
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        
      </div>
      <Footer />
    </>
  );
}

