import React from 'react';
import './Header.css';
import icon from '../../assets/book.png';
const Header: React.FC = () => {
  return (
    <header>
      <div className='header-container'>
      <div className='icon-container'>
        <img src={icon} alt="no image" />
        <p><b>React App</b></p>
      </div>
      <div className='nav-bar'>
      <nav>
        <button>Home</button>
        <button>Search</button>
      </nav>
      </div>
      </div>
    </header>
  );
};
export default Header;