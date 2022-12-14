// 최근 마스크 정보 불러오기
import React, { useState } from "react";
import axios from "axios";

export const getRecentMask = async ({ recentMaskIds, setRecentMasks }) => {
  let recentMasks = [];

  // 첫번째 recentMask
  const [recentMask1, setRecentMask1] = useState([]);
  const response1 = await axios.get(
    `http://localhost:8080/mask?maskId=${recentMaskIds[0]}`
  );
  setRecentMask1(response1.data);
  console.log("response.data : ", response1.data);
  recentMasks = recentMasks.concat(recentMask1);

  // 두번째 recentMask
  const [recentMask2, setRecentMask2] = useState([]);
  const response2 = await axios.get(
    `http://localhost:8080/mask?maskId=${recentMaskIds[1]}`
  );
  setRecentMask2(response2.data);
  console.log("response.data : ", response2.data);
  recentMasks = recentMasks.concat(recentMask2);

  // 세번째 recentMask
  const [recentMask3, setRecentMask3] = useState([]);
  const response3 = await axios.get(
    `http://localhost:8080/mask?maskId=${recentMaskIds[2]}`
  );
  setRecentMask3(response1.data);
  console.log("response.data : ", response3.data);
  recentMasks = recentMasks.concat(recentMask3);

  setRecentMasks(recentMasks);
};
