import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Link } from "react-router-dom";
function Header() {
  return (
    <Container>
      <HeaderLogo>
        <Link to="/">
          <img src={"https://i.imgur.com/7I9Was5.png"} />
        </Link>
      </HeaderLogo>

      <HeaderOptionAddress>
        <LocationOnIcon />
        <OptionLineOne>Deliver to</OptionLineOne>
        <OptionLineTwo>Select Your Address</OptionLineTwo>
      </HeaderOptionAddress>

      <HeaderSearch>
        <HeaderSearchInput type="text" />

        <HeaderSearchIconContainer>
          <SearchIcon />
        </HeaderSearchIconContainer>
      </HeaderSearch>

      <HeaderNavItems>
        <HeaderOption>
        <OptionContainer>
           
           <Link to="/signin" style={{ color: 'inherit', textDecoration: 'none' }}>
           <OptionLineOne>Hello, Sign in</OptionLineOne>
           </Link>
          <br />
         Account & Lists
          </OptionContainer>
        </HeaderOption>


        <OptionContainer>
           <OptionLineOne>Returns</OptionLineOne>
          <br />
          &Orders
          </OptionContainer>
  
        <HeaderOptionCart>
          <Link to="/Cart">
            <ShoppingCartIcon />
            <CartCount>5</CartCount>
          </Link>
        </HeaderOptionCart>
      </HeaderNavItems>
    </Container>
  );
}
export default Header;

const Container = styled.div`
  height: 60px;
  background-color: #0f1111;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
`;
const HeaderLogo = styled.div`
  img {
    width: 100px;
    margin-left: 11px;
  }
`;
const HeaderOptionAddress = styled.div`
  display: flex;
  padding-left: 9px;
  align-items: center;
`;
const OptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2px;
  border-radius: 2px;
  text-align: center;

  &:hover {
 
    box-shadow: 0 0 0 3px #f90;
  }
`;

const OptionLineTwo = styled.div`
font-weight:500;
`


const OptionLineOne = styled.div`
  font-weight: 500;
  color: #FFFFFF;
  &:focus-within {
    outline: none;
    box-sizing: border-box;
    border: 2px solid #f90;
    box-shadow: 0 0 0 3px #f90;
  }
`;



const HeaderSearch = styled.div`
  display: flex;
  flex-grow: 1;
  height: 40px;
  border-radius: 4px;
  overflow: hidden;
  margin-left: 4px;
  background-color: white;
  &:focus-within {
    outline: none;
    box-shadow: 0 0 0 3px #f90;
  }
`;

const HeaderSearchInput = styled.input`
  flex-grow: 1;
  border: 0;

  :focus {
    outline: none;
  }
`;
const HeaderSearchIconContainer = styled.div`
  background-color: #febd69;
  width: 45px;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const HeaderNavItems = styled.div`
  display: flex;
`;
const HeaderOption = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 8px;
  padding: 8px;
  cursor: pointer;
`;
const HeaderOptionCart = styled.div`
  display: flex;

  a {
    color: white;
    align-items: center;
    padding-right: 9px;
  }
`;
const CartCount = styled.div`
  padding-left: 4px;
`;
