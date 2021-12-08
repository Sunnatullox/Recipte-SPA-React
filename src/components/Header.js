import "./Header.css";
import { Link } from 'react-router-dom'
import Search from "./Search";

export default function Header({handleSearch}) {
  

  return (
    <>
      <div className="fixed-top">
        <nav className="navbar navbar-expand-lg navbar-dark mx-background-top-linear">
          <div className="container">
            <Link
              className="navbar-brand"
              to="/"
              style={{ textTransform: " uppercase" }}
            >
              food recipe
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
              <Search cb={handleSearch}/>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
