import React from 'react';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div id='navbar'>
      <Link to='/'>Home</Link>
      <Link to='/black'>Black</Link>
      <Link to='/orange'>Orange</Link>
      <Link to='/white'>White</Link>
    </div>
  );
}

export default Navbar;
