import React from 'react';
import ShowToggle from './ShowToggle';

function ShowsPage() {
  return (
    <div>
      <h2>Shows</h2>
      <ShowToggle
        title="Recommended for you"
        imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkIfDPcmuFr_XvXNuxvENzzFNR9kS2F9iKLw&usqp=CAU"
        description="Description for recommended shows"
      />
      <ShowToggle
        title="Animated Adventures"
        imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkIvFxcnAROBcK3mpoEeCOCxAYihdeWnrRMw&usqp=CAU"
        description="Description for animated adventures shows"
      />
      <ShowToggle
        title="Popular Shows/Drama"
        imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjCmPPrb2OSu6W015yEq-qykXVBba5W7XEmg&usqp=CAU"
        description="Description for popular shows/drama"
      />
      <ShowToggle
        title="New & Upcoming"
        imageUrl="https://mlpnk72yciwc.i.optimole.com/cqhiHLc.IIZS~2ef73/w:auto/h:auto/q:75/https://bleedingcool.com/wp-content/uploads/2022/02/FNBST3_VERT_MAIN_2764x4096_DOM_R03.jpg"
        description="Description for new & upcoming shows"
      />
    </div>
  );
}

export default ShowsPage;
