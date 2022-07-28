import { useEffect, useState } from 'react';
import foodApi from '../api/foodApi';

export default ()=>{
  const [data, setData] = useState([]);


const getMoviesFromApi = () => {
   
    return fetch(
      'https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian',
    )
      .then(response => response.json())
      .then(json => {
        setData(json.meals);
       
      })
      .catch(error => {
        console.error(error);
      });
  };
// const getMoviesFromApi =() => {
//   console.log('Hi there!');
  
//   try {
//    setData('test')
//   } catch (err) {
//     setErrorMessage('Something went wrong');
//   }
// };
  
    // Call searchApi when component
    // is first rendered.  BAD CODE!
    // searchApi('pasta');
  //   useEffect(() => {
  //     searchApi('pizza');
  //   }, []);
  
    return [getMoviesFromApi, data];
  }
  
  