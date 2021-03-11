import { Button } from '@material-ui/core';
import { useEffect, useState } from 'react';
import './App.css';
import News from './components/News/News';
import axios from 'axios';

function App() {
  const [articles, setArticles] = useState([]);
  // useEffect( () =>{
  //   const url = 'http://newsapi.org/v2/everything?q=tesla&from=2021-02-11&sortBy=publishedAt&apiKey=d85d2df1fd544de78339af42a7ef6885';
  //   fetch(url)
  //   .then(res => res.json())
  //   .then(data => setArticles(data.articles))
  // }, [])

  useEffect( () => {
    const url = 'http://newsapi.org/v2/everything?q=tesla&from=2021-02-11&sortBy=publishedAt&apiKey=d85d2df1fd544de78339af42a7ef6885';
    axios(url)
    .then(data => setArticles(data.data.articles))
  }, [])

  return (
    <div>
      <h2>Headlines: {articles.length}</h2>
      {
        articles.map(article => <News article={article}></News>)
      }
    </div>
  );
}

export default App;
