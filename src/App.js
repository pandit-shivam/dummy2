// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login_page from './Components/Login_page';
import Card22 from './Components/Card22';
import Navbar22 from './Components/Navbar22';
import Gridd from './Components/Gridd';
import Cardsocio from './Components/Cardsocio';
import Marketcard from './Components/Marketcard';
import Cakecard from './Components/Cakecard';
import Headerprop from './Components/Headerprop';
import Exampl22 from './Components/Exampl22';
import Button1 from './Components/Button1';
import Fileparent from './Components/Fileparent';
import Card1 from './Components/Card1';
import Form from './Components/Form';
import  ButtonIncre from './Components/ButtonIncre';
import  HooksuseState1 from './Components/HooksuseState1';
import  Hooks22 from './Components/Hooks22';
import  HideHooks from './Components/HideHooks';
import  Biz_page from './Components/Biz_page';
import  Figma_page from './Components/Figma_page';
import Hideshow from './Components/Hideshow';
import Formvelidation from './Components/FunctionProps';
import FucntionparesentProps from './Components/FucntionparesentProps';
import Mainfolder from './Components/propfile/Mainfolder';
// import { Form } from 'reactstrfap';
// import  Form  from 'Form';
// import '~bootstrap/scss/bootstrap.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar/>}/>
        <Route path="Login_page" element={<Login_page/>}/>
        <Route path="card22" element={<Card22/>}/>
        <Route path="Navbar22" element={<Navbar22/>}/>
        <Route path="gridd" element={<Gridd/>}/>
        <Route path="Cardsocio" element={<Cardsocio/>}/>
        <Route path="Marketcard" element={<Marketcard/>}/>
        <Route path="Cakecard" element={<Cakecard/>}/>
        <Route path="Headerprop" element={<Headerprop/>}/>
        <Route path="Exampl22" element={<Exampl22/>}/>
        <Route path="Button1" element={<Button1/>}/>
        <Route path="Fileparent" element={<Fileparent/>}/>
        <Route path="Fileparent" element={<Fileparent/>}/>
        <Route path="Card1" element={<Card1/>}/>
        <Route path="ButtonIncre" element={< ButtonIncre/>}/>
        <Route path="HooksuseState1" element={< HooksuseState1/>}/>
        <Route path="Hooks22" element={< Hooks22/>}/>
        <Route path="HideHooks" element={< HideHooks/>}/>
        <Route path="Biz_page" element={< Biz_page/>}/>
        <Route path="Figma_page" element={< Figma_page/>}/>
        <Route path="Hideshow" element={< Hideshow/>}/>
        <Route path="Formvelidation" element={< Formvelidation/>}/>
        <Route path="FucntionparesentProps" element={< FucntionparesentProps/>}/>
        <Route path="Mainfolder" element={< Mainfolder/>}/>
        <Route path="Form" element={< Form/>}/>
      </Routes>
      </BrowserRouter>
      {/* <input type='email' value="panditshivam9565@gmail.com" name='email'/> */}
    </div>
  );
}

export default App;
