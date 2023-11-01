import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ChakraProvider } from "@chakra-ui/react";

// Lazy loaded components
const App = React.lazy(() => import('./App'));
const Home = React.lazy(() => import('./pages/Home'));
const NoMatch = React.lazy(() => import('./pages/NoMatch'));
const SignupForm = React.lazy(() => import('./pages/SignUpForm'));
const ProductForm = React.lazy(() => import('./pages/ProductForm'));
const ProductsByCategory = React.lazy(() => import('./pages/ProductsByCategory'));
const ProductDetails = React.lazy(() => import('./component/ProductDetails'));
const SearchResults = React.lazy(() => import('./pages/SearchResult'));
const Login = React.lazy(() => import('./pages/Login'));
const SellerDashboard = React.lazy(() => import('./pages/SellerDashboard'));
const ProductsBySeller = React.lazy(() => import('./pages/ProductsBySeller'));
const CartPage = React.lazy(() => import('./pages/cartPage'));

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider>
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="SignUpForm" element={<SignupForm />} />
            <Route path="ProductForm" element={<ProductForm />} />
            <Route path="products/:category" element={<ProductsByCategory />} />
            <Route path="product/:productId" element={<ProductDetails />} />
            <Route path="search" element={<SearchResults />} />
            <Route path="login" element={<Login />} />
            <Route path="Dashboard/:id" element={<SellerDashboard />} />
            <Route path="/ProductForm/:userId" element={<ProductForm />} />
            <Route path="Products/:userId" element= {<ProductsBySeller />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  </ChakraProvider>
);
