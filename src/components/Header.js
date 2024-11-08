import React from 'react'
import { Link } from 'react-router-dom';
import restaurantfood from '../images/restaurantfood.jpg'

const Header = () => {
  return (
    <header className='header'>
      <section>
        {/* banner texts */}
        <div className='banner'>
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
          {/*<button>Reserve Table</button>*/}
          <Link to="/booking"><button aria-label='On Click'>Reserve Table</button></Link>
        </div>
        {/* banner image */}
        <div className='banner-img'>
          <img src={restaurantfood} alt=''/>
        </div>
      </section>
    </header>
  );
};

export default Header;