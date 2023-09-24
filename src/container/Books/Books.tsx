import React from 'react';
import { useLocation } from 'react-router-dom';
import '../Books/Books.css'
const Books: React.FC = () => {
  const location = useLocation();
  const book = location.state?.book;
  return(
    <div className='container'>
      <div className='book-details-container'>
        <div>
          <img src={book.image} alt="" />
        </div>
        <div className='details'>
          <h4>{book.title}</h4>
          <p><b>Author:</b>{book.author}</p>
          <p>{book.description}</p>
        </div>
      </div>
    </div>
  );
}
export default Books