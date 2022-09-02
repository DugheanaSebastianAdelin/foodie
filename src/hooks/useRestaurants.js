import {useState} from 'react';

export default () => {
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

  return [getMoviesFromApi, data];
};
