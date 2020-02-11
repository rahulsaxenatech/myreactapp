import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// class NavBar extends Component {
//   static defaultProps = {
//     title: 'My React Page',
//     icon: 'fa fa-github'
//   };
//   static propTypes = {
//     title: PropTypes.string.isRequired,
//     icon: PropTypes.string.isRequired
//   };
//   render() {
const NavBar = ({ icon, title }) => {
  return (
    <div>
      <nav className='navbar bg-info'>
        <h1>
          <i className={icon} />
          {title}
        </h1>
        <ul className='nav justify-content-center'>
          <li className='nav-item'>
            <Link to='/'>Home</Link>
          </li>
          <li className='nav-item'>
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

NavBar.defaultProps = {
  title: 'My React Page',
  icon: 'fa fa-github'
};
NavBar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};
export default NavBar;
