import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Gallery from "../pages/Gallery";
import Mint from "../pages/Mint";
import Profile from "../pages/Profile";
import AchievementDetail from "../pages/AchievementDetail";


const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/gallery" element={<Gallery />} />
    <Route path="/mint" element={<Mint />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/achievement/:id" element={<AchievementDetail />} />
    
  </Routes>
);

export default AppRoutes;
