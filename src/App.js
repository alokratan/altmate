import { BrowserRouter as Router, Route , Routes } from 'react-router-dom';

import './App.css';
import './containers/Headers.css';

import Headers from './containers/Headers';
// import ProductDetail from './containers/ProductDetail';
// import ProductListing from './containers/ProductListing';
import Navbar from './Navbar';
import IndividualIntervalsExample from './Content';
import Grocery from './Routes/Grocery';
import Mobiles from './Mobiles';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <Headers/>
    <IndividualIntervalsExample/>
    <Mobiles/>
    <Mobiles/>
    <Mobiles/>
    <Mobiles/>
    <Mobiles/>
 
    <Routes>
    {/* <Route path="/" element={<ProductListing/>}/>  */}
    <Route path="/grocery" element={<Grocery/>}/> 
    {/* <Route path="/product/:productId" element={<ProductDetail/>} />  */}
    <Route>404 not found</Route> 
    </Routes>
    </Router>
    </>
  );
}

export default App;
