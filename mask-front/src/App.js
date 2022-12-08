import logo from "./logo.svg";
import "./App.css";
import AboutPage from "./pages/AboutPage";
import DashBoardPage from "./pages/DashBoardPage";
import IntroducePage from "./pages/IntroducePage";
import ListPage from "./pages/ListPage";
import MainPage from "./pages/MainPage";
import MyPage from "./pages/MyPage";
import { Route, Routes } from "react-router-dom";

function App() {
  //  위로가기 버튼, 최근본상품은 어떻게 계속 띄워놓을까 ..

  return (
    <div className="App">
      <Routes>
        {/* 메인페이지 :  "http://localhost:3000/" */}
        <Route path="/" element={<MainPage />} />

        {/* 상품리스트페이지 : "http://localhost:3000/MaskList/Masinsa/:blockingindex" */}
        <Route path="MaskList/Masinsa/:blockingindex" element={<ListPage />} />

        {/* 상품상세페이지 : "http://localhost:3000/aboutMask/:maskId/Masinsa" */}
        <Route path="/aboutMask/:maskId/Masinsa" element={<AboutPage />} />

        {/* 마이페이지 : "http://localhost:3000/:memberId/MyPage/Masinsa" */}
        <Route path="/:memberId/MyPage/Masinsa" element={<MyPage />} />

        {/* 마신사소개페이지 : "http://localhost:3000/Introduce/Masinsa" */}
        <Route path="/Introduce/Masinsa" element={<IntroducePage />} />

        {/* 대시보드페이지 : "http://localhost:3000/DashBoard/Masinsa" */}
        <Route path="/DashBoard/Masinsa" element={<DashBoardPage />} />
      </Routes>
    </div>
  );
}

export default App;
