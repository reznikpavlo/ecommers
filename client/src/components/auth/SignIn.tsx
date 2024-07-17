import { useState } from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

interface HelpContentProps {
  show: boolean;
}

const SignIn = () => {

  const [showHelp, setShowHelp] = useState(false);

  const toggleHelp = () => {
    setShowHelp(!showHelp);
  };

  return (
    <SignInContainer>
      <AmazonTitleLogo>
        <Link to="/">
          <img src={"https://i.imgur.com/7I9Was5.png"} alt="Amazon Logo" />
        </Link>
      </AmazonTitleLogo>

      <SignInBox >
        <SignInTitle>Sign-In</SignInTitle>
        <SignInForm>
          <InputLabel>E-mail address or mobile phone number</InputLabel>
          <SignInInput type="text" />
          <SignInButton>Continue</SignInButton>
        </SignInForm>
        <ConditionsText>
          By continuing, you agree to Amazon's <StyledLink href="#">Conditions of Use</StyledLink> and{' '}
          <StyledLink href="#">Privacy Notice</StyledLink>.
        </ConditionsText>

        <HelpPanel>
          <HelpLink onClick={toggleHelp}>Need help?</HelpLink>
          <HelpDivider />
          <HelpContent show={showHelp}>
            <HelpItem href="#">Forgot Password</HelpItem>
            <HelpItem href="#">Other issues with Sign-In?</HelpItem>
          </HelpContent>
        </HelpPanel>
        <AdditionalLinks>
          <BuyTitle>Buying for work?</BuyTitle>
          <HelpLink href="#">Shop on Amazon Business</HelpLink>
        </AdditionalLinks>
      </SignInBox>

      <NewToAmazon>
        New to Amazon? <StyledLink href="#">Create your Amazon account</StyledLink>
      </NewToAmazon>

      <FooterText>
        <ConditionsText>
          <StyledLink href="#">Conditions of Use</StyledLink> | <StyledLink href="#">Privacy Notice</StyledLink> |{' '}
          <StyledLink href="#">Help</StyledLink>
        </ConditionsText>
        <Copyright>&copy; 1996-2024, Amazon.com, Inc. or its affiliates</Copyright>
      </FooterText>
    </SignInContainer>
  );
};

export default SignIn;

const AmazonTitleLogo = styled.div`
  img {
    width: 100px;
    margin-left: 11px;
  }
`;

const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  height: 100vh;
  background-color: #f3f3f3;
`;

const SignInBox = styled.div`
  width: 300px;
  padding: 20px;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const SignInTitle = styled.h1`
  font-size: 28px;
  font-weight: 400;
  font-family: 'Amazon Ember', Arial, sans-serif;
  color: rgb(17, 17, 17);
  margin-bottom: 20px;
  text-align: center;
`;

const SignInForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const InputLabel = styled.label`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const SignInInput = styled.input`
  display: flex;
  flex-grow: 1;
  height: 20px;
  border-radius: 4px;
  overflow: hidden;
  margin-left: 4px;
  padding: 10px;
  margin-bottom: 20px;
  background-color: white;

  &:focus-within {
    outline: none;
    box-shadow: 0 0 0 1px #0099ff;
  }
`;

const SignInButton = styled.button`
  padding: 10px;
  background-color: #f0c14b;
  border: 1px solid #a88734;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;

  &:hover {
    background-color: #e2b130;
  }
`;

const ConditionsText = styled.p`
  font-size: 12px;
  color: #555;
  margin-top: 10px;
  text-align: center;
`;

const StyledLink = styled.a`
  color: #0066c0;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const HelpPanel = styled.div`
  margin-top: 20px;
`;

const HelpLink = styled.a`
  font-size: 12px;
  cursor: pointer;
  margin-bottom: 10px;
  display: block;
  color: #0066c0;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const HelpDivider = styled.hr`
  margin: 10px 0;
  border: none;
  border-top: 1px solid #ddd;
`;

const HelpContent = styled.div<HelpContentProps>`
  display: ${props => (props.show ? 'block' : 'none')};
  margin-top: 10px;
`;

const HelpItem = styled.a`
  font-size: 12px;
  color: #0066c0;
  text-decoration: none;
  margin-bottom: 5px;
  display: block;

  &:hover {
    text-decoration: underline;
  }
`;

const AdditionalLinks = styled.div`
  margin-top: 10px;
`;

const BuyTitle = styled.div`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const NewToAmazon = styled.div`
  font-size: 14px;
  color: #555;
  margin-top: 20px;
  text-align: center;
`;

const FooterText = styled.div`
  position: absolute;
  bottom: 10px;
  font-size: 12px;
  color: #555;
  text-align: center;
  width: 100%;
`;

const Copyright = styled.span`
  font-weight: bold;
`;
