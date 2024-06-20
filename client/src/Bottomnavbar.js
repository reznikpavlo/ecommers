// Navbar.js
import React from 'react';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <NavContainer>
      <NavDeals>
        <NavItem>
          <NavLink href="#">Today's Deals</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Outlet Deals</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Warehouse Deals</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Coupons</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">eBook Deals</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Subscribe & Save</NavLink>
        </NavItem>
      </NavDeals>
    </NavContainer>
  );
};

export default Navbar;

const NavContainer = styled.nav`
  display: flex;
  justify-content: left;
  align-items: center;
  background-color: white;
  color: black;
  margin: 0px 0 0px 0;
`;

const NavDeals = styled.div`
  list-style: none;
  display: flex;
  justify-content: center;
`;

const NavItem = styled.li`
  margin: 0 1rem;
  color: #F90;
  cursor: pointer;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: black;
  position: relative;

  ${NavItem}:hover & {
    color: #F90;
  }

  ${NavItem}:hover &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 100%;
    height: 2px;
    background-color: #F90; 
  }
`;
