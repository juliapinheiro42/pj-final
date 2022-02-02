import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav,
    NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import './header.css'


const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className='header w-100'>
            <Navbar  dark expand="md" className='nav'>
                <div >
                <NavbarBrand href='/'>Rifugô</NavbarBrand>
                </div>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav  className='m-2 ' navbar>
                        <NavItem >
                            <NavLink href='/aboutus'> About us</NavLink>
                        </NavItem>
                        <NavItem className='item'>
                            <NavLink>SignIn/ SignUp</NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Documentation
                </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    Documentation
                  </DropdownItem>
                                <DropdownItem>
                                    Dúvidas 
                  </DropdownItem>
                  <DropdownItem>
                                    Tradutores 
                  </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    Map
                  </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        
                    </Nav>

                </Collapse>

            </Navbar>
  
        </div>
    );
}


export default Header;



