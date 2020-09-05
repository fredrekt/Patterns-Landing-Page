import React, { useState } from "react";
import { Nav, NavItem, Collapse } from "shards-react";
import HamburgerMenu from 'react-hamburger-menu';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom'

const Navbar = ({location}) => {
    const [open, setOpen] = useState(false);

    const { pathname } = location

    return (
        <Nav className="p-5 pl-5 position-absolute d-flex flex-column">
        <NavItem>
            <HamburgerMenu
                isOpen={open}
                className="cursor-pointer"
                menuClicked={()=>setOpen(!open)}
                width={30}
                height={20}
                strokeWidth={1}
                rotate={0}
                color='black'
                borderRadius={0}
                animationDuration={0.5}
            />
        </NavItem>
        <Collapse open={open}>
          <ul className="list-unstyled py-4">
              {pathname !== '/' && <li className="py-2">
                  <Link to="/" className="h4-responsive black-text">Home</Link>
              </li>}
              <li className="py-2">
                  <Link to="/about" className="h4-responsive black-text">About</Link>
              </li>
              <li className="py-2">
                  <Link to="/contact" className="h4-responsive black-text">Contact</Link>
              </li>
              <li className="py-2">
                  <Link to="/features" className="h4-responsive black-text">Features</Link>
              </li>
          </ul>
        </Collapse>
        </Nav>
    );
}

export default withRouter(Navbar)