
import { Outlet } from 'react-router-dom';

import { Routes, Route } from 'react-router-dom';
// ApolloClient help to interact with Graphql Api
// ApolloProvider is a context provider for React to make the apollo cient available to your components
// CreateHttpLink help conect to graphql endpoint
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
import ProductsByCategory from './component/ProductsByCategory';
import Layout from './component/Layout';


const httpLink = createHttpLink({
  uri: '/graphql',
});

// creating Apollo client instance using the above define link.
// add a new instace of in-memory catche.
// cache: store the result previous gueries. 
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

// ApoolloProvider making the apollo client available to any component inside it/
// BrowserRouter: enable client-side routing to any routes inside it.
// routes contain all the route definition for theapp
// any routes that does not match will refered to "*" wildCard route.
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
            <Route path="*" element={<NoMatch />} />
         </Routes>
        </Layout>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
