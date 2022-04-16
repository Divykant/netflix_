import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card'
import Sdata from './Sdata.jsx'
import './index.css';

function netflixcard(value){
  return(
    <Card 
    imglink = {value.imglink}
    title = {value.title}
    seriesname = {value.seriesname}
    serieslink = {value.serieslink}
  />
  );
}

ReactDOM.render(
  <>
  <h1 className="heading_style">List of top 5 personal fav netflix series</h1>
  <div className="whole">
  {Sdata.map(netflixcard)}
  </div>
  </>,
  document.getElementById('root')
);
