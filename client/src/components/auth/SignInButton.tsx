import styled from 'styled-components';
import { Link } from "react-router-dom";
const SignInButton = () => {
  return (
    <SignInContainer>
      <SignInMessage>
        See personalized recommendations
      </SignInMessage>


      <SignInBox to="/signIn">
        Sign in
      </SignInBox>

      <SignUpBox to="/signUp">
        New Customer start Here
      </SignUpBox>
    </SignInContainer>
  );
};

export default SignInButton;

const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-color: white;
  border: 1px solid #ccc;
`;


const SignInMessage = styled.h2`
  font-size: 14px;
  margin-bottom: 10px;
`;

const SignInBox = styled(Link)`
  padding: 10px 120px;
  background-color: #f90;
  text-decoration: none;
  color: #fff;
  border: none;
  border-radius: 5px;
  box-sizing: border-box;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ffaa00;
  }
`;

const SignUpBox = styled(Link)`
  margin-top: 10px;
  font-size: 14px;
  color: #666;
  text-decoration: none;
`;

const StartHereLink = styled.a`
  color: green;
  text-decoration: none;
  margin-left: 5px; /* Add space between "New customer?" and "Start here." */
  
  &:hover {
    text-decoration: underline;
  }
`;