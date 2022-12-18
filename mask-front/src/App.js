import "./App.css";
import AboutPage from "./pages/AboutPage";
import DashBoardPage from "./pages/DashBoardPage";
import IntroducePage from "./pages/IntroducePage";
import ListPage from "./pages/ListPage";
import MainPage from "./pages/MainPage";
import MyPage from "./pages/MyPage";
import { Route, Routes } from "react-router-dom";
import RecentView from "./components/RecentView";
import UpBtn from "./components/UpBtn";
import Header from "./components/Header";
import { Main, Wrapper } from "./styles/OtherStyles";
import HoverMenu from "./components/HoverMenu";
import { useState, useParams, useEffect } from "react";
import ChartTestPage, { PieChartTest } from "./pages/ChartTestPage";
import Chart from "./pages/ChartTestPage";
import LineChart from "./pages/ChartTestPage";
import BarChart from "./pages/ChartTestPage";

function App() {
  return (
    <div className="App">
      {/* mui 사용을 위한 코드 */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
      {/* 헤더부분 */}
      <Wrapper>
        <Header />
        <Routes>
          {/* 메인페이지 :  "http://localhost:3000/" */}
          <Route path="/" element={<MainPage />} />

          {/* 상품리스트페이지 : "http://localhost:3000/MaskList/Masinsa/:blockingindex" */}
          <Route
            path="MaskList/Masinsa/:blockingindex"
            element={<ListPage />}
          />

          {/* 상품상세페이지 : "http://localhost:3000/aboutMask/:maskId/Masinsa" */}
          <Route path="/aboutMask/:maskId/Masinsa/*" element={<AboutPage />} />

          {/* 마이페이지 : "http://localhost:3000/:memberId/MyPage/Masinsa" */}
          <Route path="/:memberId/MyPage/Masinsa" element={<MyPage />} />

          {/* 마신사소개페이지 : "http://localhost:3000/Introduce/Masinsa" */}
          <Route path="/Introduce/Masinsa" element={<IntroducePage />} />

          {/* 대시보드페이지 : "http://localhost:3000/DashBoard/Masinsa" */}
          <Route path="/DashBoard/Masinsa" element={<DashBoardPage />} />

          {/* 임시 ! 차트test페이지 : "http://localhost:3000/ChartTest/Masinsa" */}
          <Route path="/ChartTest/Masinsa" element={<PieChartTest />} />
        </Routes>
        <RecentView />
        <UpBtn />
      </Wrapper>
    </div>
  );
}

export default App;
