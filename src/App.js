// import './App.css';
// import { useState } from 'react';
// import axios from '../node_modules/axios/index';
import NewsList from './components/NewsList';
import Categories from './components/Categories';
import { useCallback, useState } from 'react';

function App() {
  // const [data, setData] = useState(null);
  // const onClick = async () => {
  //   try {
  //     const response = await axios.get(
  //       'https://newsapi.org/v2/top-headlines?country=kr&apiKey=eec305785afe4638a6e889d4b837eed8',
  //     );
  //     setData(response.data);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  const [category, setCategory] = useState('all');
  const onSelect = useCallback((category) => setCategory(category), []);

  return (
    <>
      <Categories category={category} onSelect={onSelect} />
      <NewsList category={category} />
    </>
  );
};

export default App;
