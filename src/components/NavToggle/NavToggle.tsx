import React from 'react';
import { Navbar, Nav, Dropdown, Avatar, Icon } from 'rsuite';

import userAvatar from '../../assets/user-avatar.jpg';
import './NavToggle.scss';

type NavToggleProps = {
  expand: boolean;
  onChange: (value: string) => void;
};

const NavToggle: React.FC<NavToggleProps> = ({ expand, onChange }) => {
  return (
    <Navbar className="nav-toggle" appearance="subtle">
      <Navbar.Body className="body">
        <Nav>
          <Dropdown className="avatar" placement="topStart" trigger="click" icon={<Avatar circle src={userAvatar} />}>
            <Dropdown.Item>Help</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
        </Nav>

        <Nav pullRight className="toggle">
          <Nav.Item onClick={onChange} style={{ width: 56, textAlign: 'center' }}>
            <Icon icon={expand ? 'angle-left' : 'angle-right'} />
          </Nav.Item>
        </Nav>
      </Navbar.Body>
    </Navbar>
  );
};

export default NavToggle;
