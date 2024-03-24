import logo from './logo.svg';
import './App.css';
import Product from './components/Product';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import RootLayout from './components/RootLayout';
import Cart from './components/Cart';

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route path="/" element={<Dashboard />}> </Route>
      <Route path="/cart" element={<Cart />}></Route>
    </Route>
  )) 

  return (
    <div className="App">
     <RouterProvider router={router} />
    </div>
  );
}

export default App;
