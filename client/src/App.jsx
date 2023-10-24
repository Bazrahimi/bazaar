import { Outlet } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import NoMatch from './pages/NoMatch';
import SignupForm from './pages/SignUpForm';
import ProductForm from './pages/ProductForm';
import ProductsByCategory from './component/ProductsByCategory';

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
        <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SignUpForm" element={<SignupForm />} />
          <Route path='/ProductForm' element={<ProductForm />}/>
          <Route path="/products/:category" element={<ProductsByCategory />} />
          <Route path="*" element={<NoMatch />} />
      </Routes>

 
        </div>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
