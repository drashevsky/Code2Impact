import React from 'react';
import {
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Collapse
} from "shards-react";

export default class NavBar extends React.Component {
    constructor(props) {
        super(props);

        this.toggleDropdown = this.toggleDropdown.bind(this);
        this.toggleNavbar = this.toggleNavbar.bind(this);

        this.state = {
            dropdownOpen: false,
            collapseOpen: false
        };
    }

    toggleDropdown() {
        this.setState({
            ...this.state,
            ...{
                dropdownOpen: !this.state.dropdownOpen
            }
        });
    }

    toggleNavbar() {
        this.setState({
            ...this.state,
            ...{
                collapseOpen: !this.state.collapseOpen
            }
        });
    }
    render(){
        return(
            <div className="outer sticky-top">
                <Navbar type="dark" theme="" expand="md" className="background sticky-top">
                    <NavbarBrand href="#" className="background">Code2Impact</NavbarBrand>
                    <NavbarToggler onClick={this.toggleNavbar} />

                    <Collapse open={this.state.collapseOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink active href="#">
                                    Home
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink active href="#">
                                    About
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink active href="#">
                                    Information
                                </NavLink>
                            </NavItem>
                            <Dropdown
                                open={this.state.dropdownOpen}
                                toggle={this.toggleDropdown}
                            >
                                <DropdownToggle nav caret>
                                    Classes
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem>APCSA</DropdownItem>
                                    <DropdownItem>Data Structures</DropdownItem>
                                    <DropdownItem>Game Development</DropdownItem>
                                    <DropdownItem>Data Science</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </Nav>
                    </Collapse>
                </Navbar>
                <style jsx global>{`
                    .outer{
                        position: sticky-top;                 
                    }     
                    .background{
                        background-color: #01245c;
                    }           
                `}</style>
            </div>
        );
    }
}
