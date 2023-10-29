
import { Routes, Route } from 'react-router-dom';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,

} from '@apollo/client';

// Browserrouter wrap the app. and provide routing capabilities.
import { BrowserRouter, Navigate } from 'react-router-dom';
import { setContext } from '@apollo/client/link/context';
import auth from './utils/auth';

import Home from './pages/Home';
import NoMatch from './pages/NoMatch';
import SignupForm from './pages/SignUpForm';
import ProductForm from './pages/ProductForm';
import ProductsByCategory from './pages/ProductsByCategory';
import Layout from './component/Layout';
import ProductDetails from './component/ProductDetails';
import SearchResults from './pages/SearchResult';
import Login from './pages/Login';
import SellerDashboard from './pages/SellerDashboard'
import PrivateRoute from './utils/PrivateRoute';



const httpLink = createHttpLink({
  uri: '/graphql',
});

// authLink with setContext:
// authlink: is a piece of Apollo Middleware that is responsible for modifying the context of the Apollo Client request before its sent the server. 
// SetContext: This is a function from that let us modify the context of Graphql request. the context include headers credentials and other setting.
// inside the setcontext we have an arrow function;
// the arrow funcion take and argument, 
// it recieve two agrument, the first one is empty, the second argument is object header.
// inside the function we are get the athentication token from the browser.
// we are returning an ojbect header where we spread the existing header and add new authrization.
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('auth-token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});


const client = new ApolloClient({
  link: authLink.concat(httpLink),
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
            <Route path="/ProductForm" element={<ProductForm />} />
            <Route path="/products/:category" element={<ProductsByCategory />} />
            <Route path="/product/:productId" element={<ProductDetails />} />
            <Route path="/search" element={<SearchResults />} />
            
            {/* this is a condition route.
            redirect the user if they are loggein,  */}
            {/* <Route 
              path="/Login" 
              element={
                auth.loggedIn() ? <Navigate to={`/SellerDashboard/${auth.getProfile()}`} /> : <Login />
              }
            /> */}

            <Route path="/Login" element={<Login />} />
            <Route path="/SellerDashboard/:id" element={<SellerDashboard />} />

            <Route path="*" element={<NoMatch />} />
          </Routes>

        
        </Layout>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
