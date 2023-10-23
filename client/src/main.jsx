import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App.jsx';
import NoMatch from './pages/NoMatch.jsx';
import Signup from './pages/Signup.jsx';
import Home from './pages/Home.jsx';

const router = createBrowserRouter([
    {

        children: [
            { element: <App />}

        ],
        errorElement:<NoMatch />
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
    )
    