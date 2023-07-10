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
  const [newdata,setNewData]=useState<DataItem[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://serverlessnext-1-testvercel24.vercel.app/api/hello');
      const jsonData = await response.json();
      setData(jsonData);
      const filter=data.filter((item)=>item.author==='Author 1');
      setNewData(filter);

    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };
  return(
    <div className='full-container'>
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
        <div className='recent-books-sontainer'>
          <h6>New Collection</h6>
          <div className='book-container'>
            {newdata.map((item)=>(
              <div className='book-card'>
                 <img src={item.image}/>
                < h5>{item.title}</h5>
                <p><b>Author:</b>{item.author}</p>
                <p>{item.description}</p>
                </div>
            ))}

          </div>
        </div>
      </div>
  );
}
export default Home