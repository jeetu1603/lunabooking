import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const Navbar = () => {
  const { user, dispatch } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">lunabooking</span>
        </Link>
        <div className="navItems">
          <button className="navButton">
            {user ? user.username : "Register"}
          </button>
          <button
            className="navButton"
            onClick={() => dispatch({ type: "LOGOUT" })}
          >
            {user ? (
              "Logout"
            ) : (
              <Link
                to="/login"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Sign in
              </Link>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
