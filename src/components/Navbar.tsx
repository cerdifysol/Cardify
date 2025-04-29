import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="bg-white shadow p-4 flex gap-6">
    <Link to="/" className="text-blue-600 hover:underline">Головна</Link>
    <Link to="/gallery" className="text-blue-600 hover:underline">Галерея</Link>
    <Link to="/mint" className="text-blue-600 hover:underline">Мінт</Link>
    <Link to="/profile" className="text-blue-600 hover:underline">Профіль</Link>
  </nav>
);
export default Navbar;
