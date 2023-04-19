import React, { useState, useEffect } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { useNavigate, useLocation } from "react-router-dom";

import "./style.scss";

import logo from "../../assets/movix-logo.svg";
import ContentWrapper from "../contentWraper/ContentWrapper";

const Header = () => {
  const [show, setShow] = useState("top");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [query, setQuery] = useState("");
  const [showSearch, setShowSearch] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const controlNavbar = () => {
    if (window.scrollY > 200) {
        if (window.scrollY > lastScrollY && !mobileMenu) {
            setShow("hide");
        } else {
            setShow("show");
        }
    } else {
        setShow("top");
    }
    setLastScrollY(window.scrollY);
};

useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
        window.removeEventListener("scroll", controlNavbar);
    };
}, [lastScrollY]);

  const openSearch = () => {
    setMobileMenu(false)
    setShowSearch(true)
  }
  const openMobileMenu = () => {
    setMobileMenu(true)
    setShowSearch(false)
  }


  const serachQueryHandler = (e) => {
    if (e.key === 'Enter' && query.length > 0) {
      navigate(`/serch/${query}`)
      setTimeout(() => {
        setShowSearch(false)
      }, 1000)
    }
  }

  const navigationHandler = (type) => {
    if (type === 'movie') {
      navigate('/explore/movie')
      setMobileMenu(false)
    }
    else {
      navigate('/explore/tv')
      setMobileMenu(false)
    }
  }


  return (

    <header className={`header ${mobileMenu ? 'mobileView' : ''}`}>
      <ContentWrapper>
        <div className="logo">
          <img src={logo} alt="" onClick={() => navigate('/')} />
        </div>

        <ul className="menuItems">
          <li className="menuItem" onClick={() => navigationHandler('movie')}>Movies</li>
          <li className="menuItem" onClick={() => navigationHandler('tv')}>Tv Shows</li>
          <li className="menuItem" onClick={openSearch}><HiOutlineSearch /></li>
        </ul>

        <div className=" mobileMenuItems">
          <HiOutlineSearch onClick={openSearch} />
          {mobileMenu ? (<VscChromeClose onClick={() => setMobileMenu(false)} />) : (<SlMenu onClick={openMobileMenu} />)}
        </div>
      </ContentWrapper>

      {showSearch && <div className="searchBar">
        <ContentWrapper>
          <div className="searchInput">
            <input
              type="text"
              placeholder='Search for movie or tv shows'
              onChange={(e) => setQuery(e.target.value)}
              onKeyUp={serachQueryHandler}
            />
            <VscChromeClose onClick={() => setShowSearch(false)} />
          </div>
        </ContentWrapper>
      </div>}
    </header>
  );
};

export default Header
