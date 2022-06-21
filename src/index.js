import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ChakraProvider } from "@chakra-ui/react";
import theme from './theme';
import Layout from './App/components/Layout';
import Home from './App/screens/Home';
import { CartProvider } from './cart/Context';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <CartProvider>
        <Layout>
          <Home />
        </Layout>
      </CartProvider>
    </ChakraProvider>
  </React.StrictMode>
);
