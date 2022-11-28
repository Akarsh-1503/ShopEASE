import { Box } from '@mui/material';
import Header from './components/header/Header'
import Home from './components/home/Home'
import { DataProvider } from './Context/DataProvider';

import {BrowserRouter , Routes, Route} from 'react-router-dom';
import DetailView from './components/details/DetailView';
import Cart from './components/cart/Cart';
import { Payment } from './components/cart/Payment';

function App() {
  return (
    <DataProvider>
      <BrowserRouter>              {/* Apni application main agr routing dalni hai to ye must hai include krna */}
          
          <Header/>

          <Box style={{marginTop:51}}>
          <Routes>                       {/* Jis component ko route krna hai bss usko hi Wrap kr denge  */}
              
              <Route path= '/' element ={<Home/>}/>
              <Route path= '/product/:id' element={<DetailView/>}/>
              <Route path= '/cart' element={<Cart/>}/>
              <Route path= '/payment' element={<Payment/>}/>
          </Routes>
          </Box>

      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
