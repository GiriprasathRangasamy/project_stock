
import Forgetpassword from "./components/Forgetpassword";
import Loginpage from "./components/Loginpage";
import Main from "./components/Main";
import Signup from "./components/Signup";
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Order from "./components/Stockorders";
import DealerList from "./components/dealerlist";
import ProductPage from "./components/Products";
import OrderStatus from "./components/orderstatus";
import AboutUs from "./components/aboutus";
import { Context1 } from './context'; 
import Toolsgiri from "./components/topbar";
import { useState } from "react";
function App()
{
  const [finuserid,setFinuserid]=useState("");
  return(
  <>
   <Context1.Provider value={{finuserid,setFinuserid}}>
  <Router>
    <Routes>
      <Route path="/" element={<Loginpage/>}/>
      <Route path="/new" element={<Signup/>}/>
      <Route path="/main" element={<Main/>}/>
      <Route path="/password" element={<Forgetpassword/>}/>
      <Route path="/ordernow" element={<Order/>}/>
      <Route path="/DealerList" element={<DealerList/>}/>
      <Route path="/productPage" element={<ProductPage/>}/>
      <Route path="/orderstatus" element={<OrderStatus/>}/>
      <Route path="/aboutus" element={<AboutUs/>}/>
    </Routes>
   </Router>
  </Context1.Provider>
   </>
  );
}
export default App;