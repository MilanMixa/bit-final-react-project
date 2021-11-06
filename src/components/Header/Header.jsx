import { Link } from "react-router-dom";

import "./Header.css";

const Header = () => {
  return (
    <header className="mx-5 pt-3">
      <div className="d-flex flex-wrap justify-content-md-between text-center">
        <h1 className=" fw-bold col-12 col-md-5 text-md-start">
          <span>I</span>nterview <span>R</span>eports
        </h1>
        <Link to="/" className="col-12 col-md-5 text-md-end button-wrapper">
          <button type="submit" className=" candidates-button px-4 my-3 py-2">
            <i className="fas fa-users fs-3 pe-2"></i>Candidates
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
