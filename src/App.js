import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import Body from './component/Body';
import About from './component/About';
import {createBrowserRouter,Outlet,RouterProvider} from 'react-router-dom'


function App() {
  return (
    <div className="">
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  );
}


export default App;
