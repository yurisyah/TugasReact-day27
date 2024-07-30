import './navstyle.css';
import logo_light from '../assets/logo-light.jpg';
import logo_dark from '../assets/logo-dark.jpg';
import search_dark from '../assets/search-d.png';
import search_light from '../assets/search-l.png';
import toggle_light from '../assets/night-mode.png';
import toggle_dark from '../assets/light.png';

const Navbar = ({ theme, setTheme }) => {
  const toggle_mode = () => {
    theme == 'light' ? setTheme('dark') : setTheme('light');
  };
  return (
    <div className="navbar">
      <img
        src={theme == 'light' ? logo_light : logo_dark}
        alt=""
        className="logo"
      />

      <ul>
        <li>Home</li>
        <li>Products</li>
        <li>Features</li>
        <li>About</li>
      </ul>

      <div className="search-box">
        <input
          type="text"
          placeholder="Search"
        />
        <img src={theme == 'light' ? search_dark : search_light} />
      </div>

      <img
        onClick={() => {
          toggle_mode();
        }}
        src={theme == 'light' ? toggle_light : toggle_dark}
        alt=""
        className="toggle-icon"
      />
    </div>
  );
};

export default Navbar;
