import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ChakraProvider } from "@chakra-ui/react";
import theme from './theme';
import Layout from './App/components/Layout';
import Home from './App/screens/Home';
import { CartProvider } from './cart/Context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CartScreen from './cart/screens/Cart';
import NotFound from './App/screens/404';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <CartProvider>
        <Layout>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<CartScreen />} />
              <Route path="/404" element={<NotFound />} />
            </Routes>
          </Router>
        </Layout>
      </CartProvider>
    </ChakraProvider>
  </React.StrictMode>
);
