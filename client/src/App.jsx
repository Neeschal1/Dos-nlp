import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SuccessStories from "./pages/successStories/success";
import Landing from "./pages/landing/landing";
import Portals from "./pages/jobPortals/portals";
import Courses from "./pages/courses/courses";
import Aboutus from "./pages/aboutus/aboutus";

function App() {
  const [count, setCount] = useState(0);

   return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/success-stories" element={<SuccessStories />} />
        <Route path="/job-portals" element={<Portals />} />
        <Route path="/available-courses" element={<Courses />} />
        <Route path="/about-us" element={<Aboutus />} />
      </Routes>
    </Router>
  );
}

export default App;
