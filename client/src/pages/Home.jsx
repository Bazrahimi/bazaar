import React from 'react';
import './styles/Home.css';
import LatestProducts from '../component/LatestProducts';
import ProductsByCategory from '../component/ProductsByCategory';
import { useNavigate } from 'react-router-dom';



const Home = () => {
  const navigate = useNavigate();

  const navigateToSignUpForm = () => {
    console.log('attempting to navigate to SignUpForm...');
    try {
      navigate('/SignUpForm')
    } catch (error) {
      console.error('Error Navigating', error);
    }
    
  }

  const navigateToProductForm = () => {
    navigate('/ProductForm')
  }

  const handleCategoryClick = (category) => {
    navigate(`/products/${category}`);
  };

  return (
    <div className='container'>
      {/* Navigation Bar */}
      <nav className='navbar'> 
      <div className='logo'>eBazaar</div>
      <input type="text" placeholder='Search for products...' />
      <button>Login</button>
      <button onClick={navigateToSignUpForm} >Sign Up</button>
      <button onClick={navigateToProductForm}>Sell your Product</button>
      <div className='cart-icon'>🛒</div>
      </nav>

      {/* Main Hero Section */}
      <header className='hero-section'>
        <h1>Welcome to eBazaar</h1>
        <p>Your one-stop shop for all your needs</p>
        <button>Shop Now</button>
      </header>

      {/* Categories Section */}
      <section className='categories'>
        <h2>Categories</h2>
        <div className='category-list'>
          <button onClick={() => handleCategoryClick('Electronic')}>Electronics</button>
          <button onClick={() => handleCategoryClick('Fashion')}>Fashion</button>
          <button onClick={() => handleCategoryClick('Home and Garden')}>Home & Garden</button>
          <button onClick={() => handleCategoryClick('Book')} >Books</button>
        </div>
      </section>
      <LatestProducts />

      {/* Footer */}
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
    </div>
  );
}

export default Home;