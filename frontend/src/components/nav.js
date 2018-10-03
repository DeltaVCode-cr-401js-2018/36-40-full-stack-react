import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

const Nav = ({auth}) =>(
  <nav>
    {auth ?
      <ul>
        <li>Welcome</li>
        <li><Link to='/auth/signout'>Sign Out</Link></li>
      </ul>
      :
      <ul>
        <li><Link to='/auth/signup'>Sign Up</Link></li>
        <li><Link to='/auth/signin'>Sign In</Link></li>
      </ul>
    }
  </nav>
);

export default connect(
  state=({
    auth: state.auth,
  })
)(Nav);