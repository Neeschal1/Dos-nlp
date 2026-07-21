import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SuccessStories from "./pages/successStories/success";
import Landing from "./pages/landing/landing";
import Portals from "./pages/jobPortals/portals";
import Courses from "./pages/courses/courses";
import Aboutus from "./pages/aboutus/aboutus";
import AllExperts from "./pages/allExperts/allExperts";
import SingleServices from "./pages/services/singleService";
import ScrollToTop from "./constants/scroll";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/success-stories" element={<SuccessStories />} />
        <Route path="/job-portals" element={<Portals />} />
        <Route path="/about-us" element={<Aboutus />} />
        <Route path="/home/all-experts" element={<AllExperts />} />
        <Route path="/available-courses" element={<Courses />} />
        <Route
          path="/available-courses/services"
          element={<SingleServices />}
        />
      </Routes>
    </Router>
  );
}

export default App;
