import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import About from './component/About';

 import Error from './component/Error';
 import Body from './component/Body';
//  import Restaurent from './component/Restaurent';
 import RestrauntMenu from './component/RestrauntMenu';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import Cart from './component/Cart';
import Submit from './component/Submit'


const approuter=createBrowserRouter([
  {
      path:'/',
      element:<App/>,
      children:[

        {
          path:'/',
          element:<Body/>
        },

  {
    path:'/about',
    element:<About/>
},

{
  path:'/restaurent/:resId',
  element:<RestrauntMenu/>
},
{

  path:'/cart',
  element:<Cart/>
},
{
  path:'/submit',
  element:<Submit/>
},



      ],
      
      
  
  errorElement:<Error/>
    }

])

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <Provider store={appStore}>
  <RouterProvider router={approuter}>
  <React.StrictMode>
 
    
    
  </React.StrictMode>
  </RouterProvider>
  </Provider>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
