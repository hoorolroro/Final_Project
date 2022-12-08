import React from "react";
import Header from "../components/Header";

function IntroducePage() {
  return (
    <div>
      <Header />
      <hr></hr>
      <div>
        <h2>마신사는 다릅니다 !</h2>
        <li>1. 어쩌구</li>
        <li>2. 저쩌구</li>
        <li>3. 마신사최고</li>
        <a href="http://localhost:3000/MaskList/Masinsa/:blockingindex">
          <button>상품리스트로 이동하기</button>
        </a>
      </div>
    </div>
  );
}

export default IntroducePage;
