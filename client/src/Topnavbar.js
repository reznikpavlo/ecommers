// TopNavbar.js
import React from 'react';
import styled from 'styled-components';



const Navbar = () => {
  return (
    <NavContainer>
        <Leftshop>
        <NavItem>
          <NavLink href="#">All</NavLink>
        </NavItem>
        </Leftshop>

      <Centershop>
        
        <NavItem>
          <NavLink href="#">Best Sellers</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Prime</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">New Releases</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Deal Store</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Music</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Gift Ideas</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Books</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Fashion</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Toys & Games</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">New Releases</NavLink>
        </NavItem>
       
      </Centershop>

      <RightShop>
      <NavItem>
          <NavLink href="#">Watch Now</NavLink>
      </NavItem>
      </RightShop>


    </NavContainer>
  );
};

export default Navbar;

const NavContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #333;
  color: #fff;
  padding: 1rem;
  margin: 0px 0 1px 0;
`;

const ShopSection = styled.div`
  list-style: none;
  display: flex;
  justify-content: center;
`;

const Leftshop = styled(ShopSection)``;
const Centershop = styled(ShopSection)``;
const RightShop = styled(ShopSection)``;

const NavItem = styled.li`
  margin: 0 1rem;
  font-size: 1.2rem;
  color: #fff;
  cursor: pointer;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: #fff;

  ${NavItem}:hover & {
    border: 1px solid white; 
    border-radius: 5px ; 
    font-color: #F90;
  }
`;
