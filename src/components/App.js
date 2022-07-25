import "./App.css";
import NavBar from "./NavBar";
import HomePage from "./HomePage";
import SubSectionPage from "./SubSectionPage";
import ArticlePage from "./ArticlePage";
import NoMatch from "./NoMatch";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <main>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="section/:sectionName" element={<SubSectionPage />} />
        <Route exact path="article/:articleId" element={<ArticlePage />} />
        <Route exact path="*" element={<NoMatch />} />
      </Routes>
    </main>
  );
};

export default App;
