import React, { useEffect, useState } from 'react';
import './Home.css';
interface DataItem {
  author:string;
description:string;
image:string;
title:string;
}
const Home: React.FC = () => {
  const [data, setData] = useState<DataItem[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://serverlessnext-1-testvercel24.vercel.app/api/hello');
      const jsonData = await response.json();
      setData(jsonData);

    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };
  return(
    <div className='all-books-container'>
      <h6>All Books</h6>
    <div className='book-container'>
        {data.map((item) => (
          <div className='book-card'>
            <img src={item.image}/>
            < h5>{item.title}</h5>
            <p><b>Author:</b>{item.author}</p>
            <p>{item.description}</p>
          </div>
      ))}
    </div>
      </div>
  );
}
export default Home