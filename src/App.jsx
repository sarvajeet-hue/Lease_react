
import './App.css'
import '@fortawesome/fontawesome-free/css/all.min.css';


import 'bootstrap/dist/css/bootstrap.min.css';

import { Header } from './Component/Header';
import { Main } from './Component/Main';
import { Route, Routes } from 'react-router-dom';
import AboutUs from './Component/Aboutus/AboutUs';
import { Footer } from './Component/common/Footer';
import ContactUs from './Component/ContactUs/ContactUs';


function App() {


  return (
    <div>

      <Header/>


      <Routes>

        <Route path='/' element={<Main/>}></Route>
        <Route path='/AboutUs' element={<AboutUs/>}> </Route>
        <Route path='/ContactUs' element={<ContactUs/>}/>

      </Routes>

      <Footer/>
      
      
    
    </div>
  )
}

export default App
