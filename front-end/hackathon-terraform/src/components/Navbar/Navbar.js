import './Navbar.css';
import navbarLogo from '../../assets/navbar-logo.png';
import navbarProfile from '../../assets/navbar-profile.png';
import navbarMenu from '../../assets/menu-logo.png';

function Navbar({toggleMenuFunction}) {
  return (
    <>
        <div className="Navbar">
            <div className="Menu" onClick={toggleMenuFunction}>
                <img src={navbarMenu} className="MenuLogo" alt=''></img>
                <p className="MenuText">Menu</p>
            </div>
            <img src={navbarLogo} alt='' className='NavbarLogo'></img>
            <img src={navbarProfile} alt='' className='NavbarProfile'></img>
        </div>
        <div className="Gradient"></div>
    </>
  );
}

export default Navbar;