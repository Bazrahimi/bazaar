import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ChakraProvider } from "@chakra-ui/react";

import App from './App';
import Home from './pages/Home';
import NoMatch from './pages/NoMatch';
import SignupForm from './pages/SignUpForm';
import ProductForm from './pages/ProductForm';
import ProductsByCategory from './pages/ProductsByCategory';
import ProductDetails from './component/ProductDetails';
import SearchResults from './pages/SearchResult';
import Login from './pages/Login';
import SellerDashboard from './pages/SellerDashboard';

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="SignUpForm" element={<SignupForm />} />
          <Route path="ProductForm" element={<ProductForm />} />
          <Route path="products/:category" element={<ProductsByCategory />} />
          <Route path="product/:productId" element={<ProductDetails />} />
          <Route path="search" element={<SearchResults />} />
          <Route path="Login" element={<Login />} />
          <Route path="SellerDashboard/:id" element={<SellerDashboard />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </ChakraProvider>
);
