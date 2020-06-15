import * as React from 'react';
import LogoutBtn from './components/Auth/LogoutBtn';

const Header = ({logoutHandler}: {logoutHandler: VoidFunction}) => (
  <nav className="m-bottom-0 topNav">
        Messenger Clone
    <LogoutBtn logoutHandler={logoutHandler} />
  </nav>
);

export default Header;
