import React from "react";
// Link component will be used for navigation
import { Link } from 'react-router-dom';

// this functional component accept children as props which will be the content placed inside the layout(like specific page and components)

const layout = ({children}) => {
  return (
    <div>

      {/* Header section  */}
      <header>
        <nav>
          <Link to="/">
            <div className='logo'>eBazaar</div>
          </Link>

          <div>
            <input type="text" placeholder='Search for products...' />
           <button>Search</button>
          </div>

          <Link>Login</Link>

          <Link to="/ProductForm">Sell</Link>

          <Link to="/SignUpForm">Sign Up</Link>

          <div className='cart-icon'>🛒</div>
        
        </nav>
      </header>

      {/* Main content of the layout */}
      <main>
        {children}
      </main>

      <footer>
      <footer className='footer'>
        <div className='footer-links'>
          <a href="#">Contact Us</a>
          <a href="#">Terms of Service</a>
          <a href="#">Privacy Policy</a>
        </div>
        <div className='social-icons'> 
          {/* Social Media Icons */}
          <a href="#"><img src="../../src/assets/images/icons/facebook/Facebook_f_logo_(2021).svg" alt="Facebook" /></a>
          <a href="#"><img src="../../src/assets/images/icons/twitter/Logo_of_Twitter.svg.png" alt="Twitter" /></a>
          <a href="#"><img src="../../src/assets/images/icons/instagram/Instagram.png" alt="Twitter" /></a>

        </div>
      </footer>

      </footer>
    </div>

  )
}

export default layout;