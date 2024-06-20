import React from 'react';
import styled from 'styled-components';

function LanguageFooter() {
  // Handle click event for logo link
  const handleClick = () => {
    window.location.href = '/'; 
  };

  return (
    <FooterContainer>
      <LogoLink href="/" onClick={handleClick}>
        <Logo src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon Logo" />
      </LogoLink>
      <RightContainer>
        <LanguageSelect>
          <option value="en">English</option>
          <option value="ar">العربية</option>
          <option value="fr">Français</option>
          <option value="nl">Nederlands</option>
        </LanguageSelect>
        <CountryBox>
          <span>🇺🇸 United States</span>
        </CountryBox>
      </RightContainer>
    </FooterContainer>
  );
}

export default LanguageFooter;

const FooterContainer = styled.div`
  display: flex;
  justify-content: center; /* Center align horizontally */
  align-items: center; /* Center align vertically */
  padding: 10px 20px;
  background-color: #232F3E;
  color: white;
`;

const LogoLink = styled.a`
  display: flex; /* Ensure the link takes up the entire space of the Logo */
  align-items: center; /* Center align vertically */
  text-decoration: none;
`;

const Logo = styled.img`
  width: 80px;
  margin-right: 20px; /* Add space between logo and right container */
`;

const RightContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LanguageSelect = styled.select`
  background-color: #232F3E;
  color: white;
  border: 1px solid #ccc;
  padding: 5px;
  margin-right: 20px; /* Add space between language select and country box */
  border-radius: 5px;

  &:hover {
    cursor: pointer;
    border-color: #ff9900;
  }

  option {
    background-color: #232F3E;
    color: white;
  }
`;

const CountryBox = styled.div`
  background-color: #232F3E;
  color: white;
  border: 1px solid #ccc;
  padding: 5px 10px;
  border-radius: 5px;

  &:hover {
    cursor: pointer;
    border-color: #ff9900;
  }
`;
