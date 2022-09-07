import {useState} from 'react';
export default () => {
  const [data, setData] = useState([]);

  const getRecommandedDishes = async () => {
    const response = await fetch(
      'https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian',
    );
    const data2 = await response.json();

    setData(data2);
  };
  return [getRecommandedDishes, data];
};
