import styled from 'styled-components'

function TopFooter() {
  return (
    <FooterContainer>
      <FooterSection>
        <FooterTitle>Get to Know Us</FooterTitle>
        <FooterLink>Careers</FooterLink>
        <FooterLink>Amazon and Our Planet</FooterLink>
        <FooterLink>Modern Slavery Statement</FooterLink>
        <FooterLink>Investor Relations</FooterLink>
        <FooterLink>Press Releases</FooterLink>
        <FooterLink>Amazon Science</FooterLink>
      </FooterSection>
      <FooterSection>
        <FooterTitle>Make Money with Us</FooterTitle>
        <FooterLink>Sell on Amazon</FooterLink>
        <FooterLink>Supply to Amazon</FooterLink>
        <FooterLink>Become an Affiliate</FooterLink>
        <FooterLink>Protect & Build Your Brand</FooterLink>
        <FooterLink>Sell on Amazon Handmade</FooterLink>
        <FooterLink>Advertise Your Products</FooterLink>
        <FooterLink>Independently Publish with Us</FooterLink>
        <FooterLink>Host an Amazon Hub</FooterLink>
      </FooterSection>
      <FooterSection>
        <FooterTitle>Amazon Payment Products</FooterTitle>
        <FooterLink>Amazon.ca Rewards Mastercard</FooterLink>
        <FooterLink>Shop with Points</FooterLink>
        <FooterLink>Reload Your Balance</FooterLink>
        <FooterLink>Amazon Currency Converter</FooterLink>
      </FooterSection>
      <FooterSection>
        <FooterTitle>Gift Cards</FooterTitle>
        <FooterLink>Amazon Cash</FooterLink>
      </FooterSection>
      <FooterSection>
        <FooterTitle>Let Us Help You</FooterTitle>
        <FooterLink>Shipping Rates & Policies</FooterLink>
        <FooterLink>Amazon Prime</FooterLink>
        <FooterLink>Returns Are Easy</FooterLink>
        <FooterLink>Manage Your Content and Devices</FooterLink>
        <FooterLink>Recalls and Product Safety Alerts</FooterLink>
        <FooterLink>Customer Service</FooterLink>
      </FooterSection>
    </FooterContainer>
  )
}

export default TopFooter;

const FooterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 40px 20px;
  background-color: #232F3E;
  color: white;
`

const FooterSection = styled.div`
  flex: 1;
  min-width: 200px;
  margin: 10px;
`

const FooterTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
  color: #ffffff;
`

const FooterLink = styled.a`
  display: block;
  color: #ffffff;
  margin-bottom: 8px;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.3s;

  &:hover {
    color: #ff9900;
  }
`
