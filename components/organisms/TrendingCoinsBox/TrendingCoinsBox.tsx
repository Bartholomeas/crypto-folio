import React from 'react';
import FireIcon from '../../atoms/FireIcon/FireIcon';

function TrendingCoinsBox() {
  return (
    <div className="bg-baseLight rounded">
      <FireIcon />
    </div>
  );
}

export default TrendingCoinsBox;
// https://api.coingecko.com/api/v3/search/trending
