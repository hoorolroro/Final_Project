import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRecentMask } from "../api/mask/getRecentMask";
import { FixedRecentView, RecentViewImg } from "../styles/OtherStyles";

function RecentView() {
  let userWatched = localStorage.getItem("watchedMaskId");
  userWatched = JSON.parse(userWatched);
  console.log(userWatched);

  const recentMaskIds = userWatched;
  const [recentMasks, setRecentMasks] = useState([]);

  useEffect(() => {
    getRecentMask({ recentMaskIds, setRecentMasks });
  }, []);

  console.log(recentMasks);

  return (
    <div>
      <FixedRecentView>
        최근 본 상품
        <hr
          style={{
            width: "100%",
            border: "1px solid #D9D9D9",
          }}
        ></hr>
        {userWatched[0]}
        {/* <a href={`/aboutMask/${maskId}/Masinsa`}>
          <RecentViewImg src="http://localhost:3000/%EB%8D%B4%ED%83%88%ED%98%95.png"></RecentViewImg>
        </a>
        <a href={`/aboutMask/${maskId}/Masinsa`}>
          <RecentViewImg src="http://localhost:3000/%EB%8D%B4%ED%83%88%ED%98%95.png"></RecentViewImg>
        </a>
        <a href={`/aboutMask/${maskId}/Masinsa`}>
          <RecentViewImg src="http://localhost:3000/%EB%8D%B4%ED%83%88%ED%98%95.png"></RecentViewImg>
        </a> */}
      </FixedRecentView>
    </div>
  );
}
export default RecentView;
