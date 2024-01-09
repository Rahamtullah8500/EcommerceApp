import './App.css';
import { BrowserRouter,Route,Routes} from 'react-router-dom';
import { Header } from './components/Header/Header.js';
import ProductsList from './components/ProductsList/ProductsList.js';
import NotFound from './components/NotFound/NotFound.js';
import ProductDetails from './components/ProductDetails/ProductDetails.js';
import Home from './components/Home/Home.js';
import Cart from './components/Cart/Cart.js';
import About from './components/About/About.js';
import Contact from './components/Contact/Contact.js'
import Login from './components/Login/Login.js';
import Footer from './components/Footer/Footer.jsx';
import SignUp from './components/SignUp/SignUp.js';

function App() {

  return (
    <div className="app-container">
    <BrowserRouter>
      <Header/>
      <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route path='/EcommerceApp' element={<Home/>}/>
          <Route exact path='/product' element={<ProductsList/>} />
          <Route path='/product/:productId' element={<ProductDetails/>}/>
          <Route path='/product/product/:productId' element={<ProductDetails/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signUp' element={<SignUp/>}/>
          <Route path='/cart' element={<Cart/>} />
          <Route path='*' element={<NotFound/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
