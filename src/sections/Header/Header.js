import './Header.css';
import { Link} from 'react-router-dom';

import logo from '../../assets/images/logo.png';
import NavItem , {NavItemDropDown} from '../../Components/NavItem/NavItem';
const  Header = () => {
  return (
    <>
      <nav className="container navbar navbar-expand-lg text-light cyborg-navbar">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand" aria-current="page">
            <img src={logo} />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <NavItem>
                <Link to="/" className="nav-link" aria-current="page" >Home</Link>

              </NavItem>
              <NavItem>
                <a className="nav-link" href="#">Brows</a>
              </NavItem>

              <NavItemDropDown>
                <li className="nav-item dropdown">
                  <a className="nav-link" href="#">Details</a>
                </li>
              </NavItemDropDown>
              <NavItem>
                <Link to="/profil" className="nav-link">Profil</Link>
              </NavItem>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-light" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Header;