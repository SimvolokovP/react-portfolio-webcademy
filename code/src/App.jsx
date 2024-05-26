import Footer from "./components/Footer/Footer";
import Navigation from "./components/Navigation/Navigation";
import MainPage from "./pages/MainPage/MainPage";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";
import ContactsPage from "./pages/ContactsPage/ContactsPage";
import OneProjectPage from "./pages/OneProjectPage/OneProjectPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./utils/ScrollOnTop";

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/projects" element={<ProjectsPage />}></Route>
          <Route path="/contacts" element={<ContactsPage />}></Route>
          <Route path="/project/:id" element={<OneProjectPage />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
