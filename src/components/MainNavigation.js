import { NavLink, useNavigation } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import CartButton from "./Cart/CartButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faUser } from "@fortawesome/free-solid-svg-icons";
import { getFromStorage, saveToStorage } from "./storage";

const MainNavigation = () => {
  const navigation = useNavigation();

  const confirmLogoutHandler = () => {
    window.confirm("Are you sure to log out ?");
    saveToStorage("currentUser", null);
    navigation("/login");
  };
  const userActive = getFromStorage("currentUser");
  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <ul className={classes.nav__left}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/shop"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Shop
            </NavLink>
          </li>
        </ul>
        <h1>BOUTIQUE</h1>
        <ul className={classes.nav__right}>
          <li>
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              <CartButton />
            </NavLink>
          </li>
          <li>
            {userActive ? (
              <div>
                <FontAwesomeIcon icon={faUser} className={classes.icon} />
                {userActive.fullName}
                <FontAwesomeIcon
                  icon={faCaretDown}
                  className={classes.icon}
                  style={{ marginLeft: "5px" }}
                />
                <button
                  className={classes.btn_logout}
                  onClick={confirmLogoutHandler}
                >
                  Log Out
                </button>
              </div>
            ) : (
              <NavLink to="/login">
                <FontAwesomeIcon icon={faUser} className={classes.icon} />
                <button className={classes.btn_login}>Login</button>
              </NavLink>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default MainNavigation;
