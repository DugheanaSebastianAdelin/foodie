import {useState} from 'react';

const recommandedDishes = () => {
  const [data, setData] = useState([]);

  const getRecommandedDishes = async () => {
    const response = await fetch(
      'https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian',
    );
    const recommandedDishes = await response.json();

    setData(recommandedDishes);
  };
  return [getRecommandedDishes, data];
};

export default recommandedDishes;
