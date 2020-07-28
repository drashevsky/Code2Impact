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
    Collapse,
    Button
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
                    <NavbarBrand href="/" className="background">Code2Impact</NavbarBrand>
                    <NavbarToggler onClick={this.toggleNavbar} />

                    <Collapse open={this.state.collapseOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink active href="/">
                                    Home
                                </NavLink>
                            </NavItem>
                            <Dropdown
                                open={this.state.dropdownOpen}
                                toggle={this.toggleDropdown}
                                group
                            >
                                <NavItem>
                                    <NavLink active href="/classes">
                                        Classes
                                    </NavLink>
                                </NavItem>
                                <DropdownToggle nav split/>
                                <DropdownMenu>
                                    <DropdownItem href="/classes#introtojava">APCSA</DropdownItem>
                                    <DropdownItem href="/classes#datastructures">Data Structures</DropdownItem>
                                    <DropdownItem href="/classes#gamedevelopment">Game Development</DropdownItem>
                                    <DropdownItem href="/classes#datascience">Data Science</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                            <NavItem>
                                <NavLink active href="/calendar">
                                    Calendar
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink active href="/moreinfo">
                                    Program Info
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink active href="/about">
                                    About
                                </NavLink>
                            </NavItem>
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
