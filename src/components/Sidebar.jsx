import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  // const [activeLink, setActiveLink] = useState("");
  // const location = useLocation(0);

  // useEffect(() => {
  //   const currentPath = location.pathname;
  //   setActiveLink(currentPath);
  // }, [location.pathname]);

  // const links = [
  //   { title: "Home", href: "/", icon: "solar:home-angle-2-outline" },
  //   { title: "Forecast", href: "/forecast", icon: "mdi:compass-outline" },
  //   { title: "Analytics", href: "/analysis", icon: "grommet-icons:analytics" },
  // ];

  return (
    <header class="header" data-header>
      <div class="containers">
        <a href="#" class="logo">
          PhishGuard
        </a>

        <nav class="navbar" data-navbar>
          <ul class="navbar-list containers">
            <li>
              <a href="#home" class="navbar-link active" data-nav-link>
                Home
              </a>
            </li>
            <li>
              <a href="#features" class="navbar-link" data-nav-link>
                Features
              </a>
            </li>
            <li>
              <a href="#about" class="navbar-link" data-nav-link>
                About
              </a>
            </li>
            <li>
              <a href="#tips" class="navbar-link" data-nav-link>
                Tips
              </a>
            </li>

            <li>
              <a href="login.html" class="btn btn-primary">
                Login
              </a>
            </li>
          </ul>
        </nav>

        <button
          class="nav-toggle-btn"
          aria-label="toggle manu"
          data-nav-toggler
        >
          <ion-icon name="menu-outline" aria-hidden="true"></ion-icon>
        </button>
      </div>
    </header>
  );
}

export default Sidebar;
