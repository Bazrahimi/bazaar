import React from 'react';
import './styles/Home.css';
import LatestProducts from '../component/LatestProducts';
import ProductsByCategory from '../component/ProductsByCategory';
import { useNavigate } from 'react-router-dom';



const Home = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate(`/products/${category}`);
  };

  return (
    <div className='container'>


      {/* Categories Section */}
      <section className='categories'>
        <div className='category-list'>
          <button onClick={() => handleCategoryClick('Electronic')}>Electronics</button>
          <button onClick={() => handleCategoryClick('Fashion')}>Fashion</button>
          <button onClick={() => handleCategoryClick('Home and Garden')}>Home & Garden</button>
          <button onClick={() => handleCategoryClick('Book')} >Books</button>
        </div>
      </section>
      <LatestProducts />
    </div>
  );
}

export default Home;