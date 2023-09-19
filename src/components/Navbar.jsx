import "./Navbar.css";
import Logo from "../assets/logo.svg";
import CloseImg from "../assets/icon-menu-close.svg";
import MenuImg from "../assets/icon-menu.svg";
import { useState } from "react";
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav id="home">
      <a href="#" className="Logo">
        <img src={Logo} alt="w" />
      </a>

      <div className="Menu">
        {isMenuOpen ? (
          <button onClick={() => setIsMenuOpen((prev) => !prev)}>
            <img src={CloseImg} alt="" />
          </button>
        ) : (
          <button onClick={() => setIsMenuOpen((prev) => !prev)}>
            <img src={MenuImg} alt="" />
          </button>
        )}
      </div>

      <ul className={isMenuOpen ? "NavLinks open" : "NavLinks"}>
        <li className="NavLinks-Link">
          <a href="#home" onClick={() => setIsMenuOpen((prev) => !prev)}>
            home
          </a>
        </li>
        <li className="NavLinks-Link">
          <a href="#new" onClick={() => setIsMenuOpen((prev) => !prev)}>
            new
          </a>
        </li>
        <li className="NavLinks-Link">
          <a href="#new" onClick={() => setIsMenuOpen((prev) => !prev)}>
            popular
          </a>
        </li>
        <li className="NavLinks-Link">
          <a href="#new" onClick={() => setIsMenuOpen((prev) => !prev)}>
            trending
          </a>
        </li>
        <li className="NavLinks-Link">
          <a href="#categories" onClick={() => setIsMenuOpen((prev) => !prev)}>
            categories
          </a>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
