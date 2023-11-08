import "./Header.css";
import { links } from "../Links";
import icon from "../../../assets/icono.png";

import { useState, useEffect } from "react";

const Header = () => {
  const [background, setBackground] = useState("");
  const [showMenu, setShowMenu] = useState("");
  const changeColorHeader = () => {
    if (document.documentElement.scrollTop > 0) {
      setBackground("notInTop");
    } else {
      setBackground("");
    }
  };
  const showAndHidden = () => {
    setShowMenu(showMenu === "" ? "show" : "");
  };
  useEffect(() => {
    window.addEventListener("scroll", changeColorHeader);
  });
  console.log(showMenu);
  return (
    <header data-testid="header" className={`${background}`}>
      <div className={`headerContainer `}>
        <div className="logo">
          <img src={icon} width={50} height={50} />
        </div>{" "}
        <div className="menu-icon">
          <svg
            role="responsive"
            id="resp"
            version="1.1"
            width="40px"
            viewBox="0 0 256 256"
            onClick={showAndHidden}
          >
            <metadata>
              Svg Vector Icons : http://www.onlinewebfonts.com/icon
            </metadata>
            <g>
              <g>
                <path fill="#ffffff" d="M10,222.4h236v30H10V222.4L10,222.4z" />
                <path fill="#ffffff" d="M10,121.3h236v30H10V121.3L10,121.3z" />
                <path fill="#ffffff" d="M10,20.1h236v30H10V20.1L10,20.1z" />
              </g>
            </g>
          </svg>
        </div>
        <div data-testid="headerLinks" className={`headerLinks ${showMenu}`}>
          <nav>
            <ul>
              {links.map((l, index) => (
                <li key={index}>
                  <a href={l.href}>{l.name}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
