import logo from "./logo.svg";
import "./App.css";
import AboutPage from "./pages/AboutPage";
import DashBoardPage from "./pages/DashBoardPage";
import IntroducePage from "./pages/IntroducePage";
import ListPage from "./pages/ListPage";
import MainPage from "./pages/MainPage";
import MyPage from "./pages/MyPage";

function App() {
  return (
    <div className="App">
      마신사
      <AboutPage />
      <DashBoardPage />
      <IntroducePage />
      <ListPage />
      <MainPage />
      <MyPage />
    </div>
  );
}

export default App;
