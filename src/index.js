import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { ChakraProvider } from "@chakra-ui/react";
import { CartProvider } from './cart/Context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import theme from './theme';

import Home from './App/screens/Home';
import Layout from './App/components/Layout';
import CartScreen from './cart/screens/Cart';
import NotFound from './App/screens/404';
import ProductScreen from './product/screens/Product';
import OrderScreen from './cart/screens/Order'

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
              <Route path="/product/:id" element={<ProductScreen />} />
              <Route path="/order" element={<OrderScreen />} />
              <Route path="/404" element={<NotFound />} />
            </Routes>
          </Router>
        </Layout>
      </CartProvider>
    </ChakraProvider>
  </React.StrictMode>
);
