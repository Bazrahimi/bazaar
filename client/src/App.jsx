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
import Signup from './pages/Signup';

const httpLink = createHttpLink({
  uri: '/graphql',
});

function App() {
  return (
    <ApolloProvider>
      <div>
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
          </Route>
        </Routes>

      </div>

    </ApolloProvider>

  );
}

export default App;
