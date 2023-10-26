
import { Outlet } from 'react-router-dom';

import { Routes, Route } from 'react-router-dom';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';

// Browserrouter wrap the app. and provide routing capabilities.
import { BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import NoMatch from './pages/NoMatch';
import SignupForm from './pages/SignUpForm';
import ProductForm from './pages/ProductForm';
import ProductsByCategory from './pages/ProductsByCategory';
import Layout from './component/Layout';
import ProductDetails from './component/ProductDetails';
import SearchResults from './pages/SearchResult';


const httpLink = createHttpLink({
  uri: '/graphql',
});


const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

function App() {
  return (

    <ApolloProvider client={client}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/SignUpForm" element={<SignupForm />} />
            <Route path='/ProductForm' element={<ProductForm />}/>
            <Route path="/products/:category" element={<ProductsByCategory />} />
            <Route path="/product/:productId" element={<ProductDetails />} />
            <Route path="/search" element={<SearchResults />} />

            <Route path="*" element={<NoMatch />} />
            
         </Routes>
        </Layout>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
