import React, { useEffect, useState } from "react";
import Breakpoint, {
  BreakpointProvider,
  setDefaultBreakpoints,
} from "react-socks";
import { Link, useNavigate, useMatch, useResolvedPath } from "react-router-dom";
import useOnclickOutside from "react-cool-onclickoutside";
import auth from "../../core/auth";

setDefaultBreakpoints([{ xs: 0 }, { l: 1199 }, { xl: 1200 }]);

const NavLink = (props) => {
  let resolved = useResolvedPath(props.to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return <Link {...props} className={match ? "active" : "non-active"} />;
};

const Header = function ({ className }) {
  const navigate = useNavigate();

  const [openMenu, setOpenMenu] = React.useState(false);
  const [openMenu1, setOpenMenu1] = React.useState(false);
  const [openMenu2, setOpenMenu2] = React.useState(false);
  const [openMenu3, setOpenMenu3] = React.useState(false);
  const handleBtnClick = () => {
    setOpenMenu(!openMenu);
  };
  const handleBtnClick1 = () => {
    setOpenMenu1(!openMenu1);
  };
  const handleBtnClick2 = () => {
    setOpenMenu2(!openMenu2);
  };
  const handleBtnClick3 = () => {
    setOpenMenu3(!openMenu3);
  };
  const closeMenu = () => {
    setOpenMenu(false);
  };
  const closeMenu1 = () => {
    setOpenMenu1(false);
  };
  const closeMenu2 = () => {
    setOpenMenu2(false);
  };
  const closeMenu3 = () => {
    setOpenMenu3(false);
  };

  const ref = useOnclickOutside(() => {
    closeMenu();
  });
  const ref1 = useOnclickOutside(() => {
    closeMenu1();
  });
  const ref2 = useOnclickOutside(() => {
    closeMenu2();
  });
  const ref3 = useOnclickOutside(() => {
    closeMenu3();
  });

  const [showmenu, btn_icon] = useState(false);
  const [showpop, btn_icon_pop] = useState(false);
  const [shownot, btn_icon_not] = useState(false);
  const closePop = () => {
    btn_icon_pop(false);
  };
  const closeNot = () => {
    btn_icon_not(false);
  };
  const refpop = useOnclickOutside(() => {
    closePop();
  });
  const refpopnot = useOnclickOutside(() => {
    closeNot();
  });

  const handleLogout = () => {
    auth.clearAppStorage();
    navigate("/");
  };

  useEffect(() => {
    const header = document.getElementById("myHeader");
    const totop = document.getElementById("scroll-to-top");
    const sticky = header.offsetTop;
    const scrollCallBack = window.addEventListener("scroll", () => {
      btn_icon(false);
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
        totop.classList.add("show");
      } else {
        header.classList.remove("sticky");
        totop.classList.remove("show");
      }
      if (window.pageYOffset > sticky) {
        closeMenu();
      }
    });
    return () => {
      window.removeEventListener("scroll", scrollCallBack);
    };
  }, []);
  return (
    <header className={`navbar white ${className}`} id="myHeader">
      <div className="container">
        <div className="row w-100-nav">
          <div className="logo px-0">
            <div className="navbar-title navbar-item">
              <NavLink to="/">
                <img
                  src="/img/logo.png"
                  className="img-fluid d-block"
                  alt="#"
                />
                <img src="/img/logo-2.png" className="img-fluid d-3" alt="#" />
                <img src="/img/logo-3.png" className="img-fluid d-4" alt="#" />
                <img
                  src="/img/logo-light.png"
                  className="img-fluid d-none"
                  alt="#"
                />
              </NavLink>
            </div>
          </div>
          <BreakpointProvider>
            <Breakpoint l down>
              {showmenu && (
                <div className="menu">
                  <div className="navbar-item">
                    <div ref={ref}>
                      <div
                        className="dropdown-custom dropdown-toggle btn"
                        onClick={handleBtnClick}
                      >
                        Home
                      </div>
                      {openMenu && (
                        <div className="item-dropdown">
                          <div className="dropdown" onClick={closeMenu}>
                            <NavLink
                              to="/homeGrey"
                              onClick={() => btn_icon(!showmenu)}
                            >
                              Homepage Grey
                            </NavLink>
                            <NavLink to="/" onClick={() => btn_icon(!showmenu)}>
                              Homepage
                            </NavLink>
                            <NavLink
                              to="/home1"
                              onClick={() => btn_icon(!showmenu)}
                            >
                              Homepage 1
                            </NavLink>
                            <NavLink
                              to="/home1Grey"
                              onClick={() => btn_icon(!showmenu)}
                            >
                              Homepage 1 Grey
                            </NavLink>
                            <NavLink
                              to="/home2"
                              onClick={() => btn_icon(!showmenu)}
                            >
                              Homepage 2
                            </NavLink>
                            <NavLink
                              to="/home2Grey"
                              onClick={() => btn_icon(!showmenu)}
                            >
                              Homepage 2 Grey
                            </NavLink>
                            <NavLink
                              to="/home3"
                              onClick={() => btn_icon(!showmenu)}
                            >
                              Homepage 3
                            </NavLink>
                            <NavLink
                              to="/home4"
                              onClick={() => btn_icon(!showmenu)}
                            >
                              Homepage 4
                            </NavLink>
                            <NavLink
                              to="/home5"
                              onClick={() => btn_icon(!showmenu)}
                            >
                              Homepage 5
                            </NavLink>
                            <NavLink
                              to="/home6"
                              onClick={() => btn_icon(!showmenu)}
                            >
                              Homepage 6
                            </NavLink>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="navbar-item">
                    <div ref={ref1}>
                      <div
                        className="dropdown-custom dropdown-toggle btn"
                        onClick={handleBtnClick1}
                      >
                        Explore
                      </div>
                      {openMenu1 && (
                        <div className="item-dropdown">
                          <div className="dropdown" onClick={closeMenu1}>
                            <NavLink
                              to="/explore"
                              onClick={() => btn_icon(!showmenu)}
                            >
                              Explore
                            </NavLink>
                            <NavLink
                              to="/explore2"
                              onClick={() => btn_icon(!showmenu)}
                            >
                              Explore 2
                            </NavLink>
                            <NavLink
                              to="/exploreOpensea"
                              onClick={() => btn_icon(!showmenu)}
                            >
                              Explore OpenSea
                            </NavLink>
                            <NavLink
                              to="/rangking"
                              onClick={() => btn_icon(!showmenu)}
                            >
                              Rangking
                            </NavLink>
                            <NavLink
                              to="/colection/1"
                              onClick={() => btn_icon(!showmenu)}
                            >
                              Collection
                            </NavLink>
                            <NavLink
                              to="/ItemDetail/1"
                              onClick={() => btn_icon(!showmenu)}
                            >
                              Items Details
                            </NavLink>
                            <NavLink
                              to="/ItemDetailGrey/1"
                              onClick={() => btn_icon(!showmenu)}
                            >
                              Items Details Grey
                            </NavLink>
                            <NavLink
                              to="/Auction"
                              onClick={() => btn_icon(!showmenu)}
                            >
                              Live Auction
                            </NavLink>
                            <NavLink
                              to="/AuctionGrey"
                              onClick={() => btn_icon(!showmenu)}
                            >
                              Live Auction Grey
                            </NavLink>
                            <NavLink
                              to="/helpcenter"
                              onClick={() => btn_icon(!showmenu)}
                            >
                              Help Center
                            </NavLink>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="navbar-item">
                    <div ref={ref2}>
                      <div
                        className="dropdown-custom dropdown-toggle btn"
                        onClick={handleBtnClick2}
                      >
                        Pages
                      </div>
                      {openMenu2 && (
                        <div className="item-dropdown">
                          <div className="dropdown" onClick={closeMenu2}>
                            <NavLink
                              to="/Profile/1"
                              onClick={() => btn_icon(!showmenu)}
                            >
                              Profile
                            </NavLink>
                            <NavLink
                              to="/AuthorGrey/1"
                              onClick={() => btn_icon(!showmenu)}
                            >
                              Author Grey
                            </NavLink>
                            <NavLink
                              to="/AuthorOpensea"
                              onClick={() => btn_icon(!showmenu)}
                            >
                              Author OpenSea
                            </NavLink>
                            <NavLink
                              to="/wallet"
                              onClick={() => btn_icon(!showmenu)}
                            >
                              Wallet
                            </NavLink>
                            <NavLink
                              to="/walletGrey"
                              onClick={() => btn_icon(!showmenu)}
                            >
                              Wallet Grey
                            </NavLink>
                            <NavLink
                              to="/create"
                              onClick={() => btn_icon(!showmenu)}
                            >
                              Create
                            </NavLink>
                            <NavLink
                              to="/create2"
                              onClick={() => btn_icon(!showmenu)}
                            >
                              Create 2
                            </NavLink>
                            <NavLink
                              to="/createOptions"
                              onClick={() => btn_icon(!showmenu)}
                            >
                              Create options
                            </NavLink>
                            <NavLink
                              to="/mint"
                              onClick={() => btn_icon(!showmenu)}
                            >
                              Nft Minting
                            </NavLink>
                            <NavLink
                              to="/minter"
                              onClick={() => btn_icon(!showmenu)}
                            >
                              Nft Minting Grey
                            </NavLink>
                            <NavLink
                              to="/news"
                              onClick={() => btn_icon(!showmenu)}
                            >
                              News
                            </NavLink>
                            <NavLink
                              to="/works"
                              onClick={() => btn_icon(!showmenu)}
                            >
                              Gallery
                            </NavLink>
                            <NavLink
                              to="/login"
                              onClick={() => btn_icon(!showmenu)}
                            >
                              login
                            </NavLink>
                            <NavLink
                              to="/loginTwo"
                              onClick={() => btn_icon(!showmenu)}
                            >
                              login 2
                            </NavLink>
                            <NavLink
                              to="/register"
                              onClick={() => btn_icon(!showmenu)}
                            >
                              Register
                            </NavLink>
                            <NavLink
                              to="/contact"
                              onClick={() => btn_icon(!showmenu)}
                            >
                              Contact Us
                            </NavLink>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="navbar-item">
                    <NavLink to="/activity" onClick={() => btn_icon(!showmenu)}>
                      Activity
                    </NavLink>
                  </div>
                  <div className="navbar-item">
                    <div ref={ref3}>
                      <div
                        className="dropdown-custom dropdown-toggle btn"
                        onClick={handleBtnClick3}
                      >
                        Element
                      </div>
                      {openMenu3 && (
                        <div className="item-dropdown">
                          <div className="dropdown" onClick={closeMenu3}>
                            <NavLink
                              to="/elegantIcons"
                              onClick={() => btn_icon(!showmenu)}
                            >
                              Elegant Icon
                            </NavLink>
                            <NavLink
                              to="/etlineIcons"
                              onClick={() => btn_icon(!showmenu)}
                            >
                              Etline Icon
                            </NavLink>
                            <NavLink
                              to="/fontAwesomeIcons"
                              onClick={() => btn_icon(!showmenu)}
                            >
                              Font Awesome Icon
                            </NavLink>
                            <NavLink
                              to="/accordion"
                              onClick={() => btn_icon(!showmenu)}
                            >
                              Accordion
                            </NavLink>
                            <NavLink
                              to="/alerts"
                              onClick={() => btn_icon(!showmenu)}
                            >
                              Alerts
                            </NavLink>
                            <NavLink
                              to="/price"
                              onClick={() => btn_icon(!showmenu)}
                            >
                              Pricing Table
                            </NavLink>
                            <NavLink
                              to="/progressbar"
                              onClick={() => btn_icon(!showmenu)}
                            >
                              Progress bar
                            </NavLink>
                            <NavLink
                              to="/tabs"
                              onClick={() => btn_icon(!showmenu)}
                            >
                              Tabs
                            </NavLink>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </Breakpoint>

            <Breakpoint xl>
              <div className="menu">
                <div className="navbar-item">
                  <NavLink to="/exploreGrey">
                    Explore
                    <span className="lines"></span>
                  </NavLink>
                </div>
                <div className="navbar-item">
                  <NavLink to="/createOptions">
                    Create
                    <span className="lines"></span>
                  </NavLink>
                </div>
                <div className="navbar-item">
                  <NavLink to="/AuthorGrey/1">
                    Profile
                    <span className="lines"></span>
                  </NavLink>
                </div>
              </div>
            </Breakpoint>
          </BreakpointProvider>

          <div className="mainside">
            <div className="connect-wal">
              <NavLink to="/wallet">Connect Wallet</NavLink>
            </div>

            <div className="logout">
              <NavLink to="/wallet" style={{borderRadius: "30px"}}>Connect Wallet</NavLink>
            </div>
          </div>
        </div>

        <button className="nav-icon" onClick={() => btn_icon(!showmenu)}>
          <div className="menu-line white"></div>
          <div className="menu-line1 white"></div>
          <div className="menu-line2 white"></div>
        </button>
      </div>
    </header>
  );
};
export default Header;
