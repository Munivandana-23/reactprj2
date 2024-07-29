import React, { useState } from 'react';
import axios from 'axios';
import './News.css'
 
export default function App() {
  const [state, setState] = useState([]);
  const [search, setSearch] = useState('');
 
  const handler = (e) => {
    setSearch(e.target.value);
  };
  const submit = () => {
    axios.get(`https://newsdata.io/api/1/latest?apikey=pub_48205f4fe927256206346a5098a9186e4b689&q=${search}`)
      .then((res) => {
        setState(res.data.results);
      });
  };
 
  return (
    <div className='box11'>
    <div className='box13'>
      <div className='search-bar'>
        <input type='text'placeholder='Enter news' onChange={handler}value={search}className='search-input'/>
        <button onClick={submit} className='search-button'>Get News</button>
      </div>
      <ul className='news-list'>
      {state.map((x)=>
          <li key={x.link} className='news-item'>
            <h4 className='news-title'>{x.title}</h4>
            <p className='news-description'>{x.description}</p>
            <p className='news-creator'><strong>By:</strong> {x.creator}</p>
            {x.image_url && <img src={x.image_url} alt={x.title} className='news-image' />}
            <p><a href={x.link} target='_blank' rel='noopener noreferrer' className='read-more'>Read more</a></p>
          </li>
        )}
      </ul>
    </div>
    </div>
  );
}