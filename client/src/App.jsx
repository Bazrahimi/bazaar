import { Outlet } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Home from './pages/Home';
import NoMatch from './pages/NoMatch';


const httpLink = createHttpLink({
  uri: '/graphql',
});

function App() {
  return (
    <div>
      <Home />
    
    </div>


  );
}

export default App;
