import styled from 'styled-components';



// Component definition
const BottomFooter = () => {
  return (
    <Footer>
      <div>
        <FooterColumn>
          <h5>Amazon Music</h5>
          <a href="/">Stream millions of songs</a>
        </FooterColumn>

        <FooterColumn>
          <h5>Goodreads</h5>
          <a href="/">Book reviews & recommendations</a>
        </FooterColumn>
      </div>

      <div>
        <FooterColumn>
          <h5>Amazon Advertising</h5>
          <a href="/">Find, attract and engage customers</a>
        </FooterColumn>

        <FooterColumn>
          <h5>IMDb</h5>
          <a href="/">Movies, TV & Celebrities</a>
        </FooterColumn>

        <FooterColumn>
          <h5>Whole Foods Market</h5>
          <a href="/">We Believe in Real Food</a>
        </FooterColumn>
      </div>

      <div>
        <FooterColumn>
          <h5>Amazon Business</h5>
          <a href="/">Everything for your business</a>
        </FooterColumn>

        <FooterColumn>
          <h5>Amazon Photos</h5>
          <a href="/">Unlimited Photo Storage Free With Prime</a>
        </FooterColumn>

        <FooterColumn>
          <h5>Amazon Renewed</h5>
          <a href="/">Like-new products you can trust</a>
        </FooterColumn>
      </div>

      <div>
        <FooterColumn>
          <h5>Amazon Drive</h5>
          <a href="/">Cloud storage from Amazon</a>
        </FooterColumn>

        <FooterColumn>
          <h5>Shopbop</h5>
          <a href="/">Designer Fashion Brands</a>
        </FooterColumn>

        <FooterColumn>
          <h5>Blink</h5>
          <a href="/">Smart Security for Every Home</a>
        </FooterColumn>
      </div>

      <div>
        <FooterColumn>
          <h5>Amazon Web Services</h5>
          <a href="/">Scalable Cloud Computing Services</a>
        </FooterColumn>

        <FooterColumn>
          <h5>Warehouse Deals</h5>
          <a href="/">Open-Box Discounts</a>
        </FooterColumn>
      </div>

      <LegalInfo>
        <notice>
          <a href="/">Conditions of Use</a>
          <a href="/">Privacy Notice</a>
          <a href="/">Interest-Based Ads</a>
        </notice>
        <p>© 1996-2024, Amazon.com, Inc. or its affiliates</p>
        <p>Amazon.com.ca ULC | 40 King Street W 47th Floor, Toronto, Ontario, Canada, M5H 3Y2 | 1-877-586-3230</p>
      </LegalInfo>
    </Footer>
  );
};

export default BottomFooter;

// Styled components for the footer and columns
const Footer = styled.footer`
  background-color: Black;
  color: #ffffff;
  padding: 40px 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  font-family: Arial, sans-serif;
`;

const FooterColumn = styled.div`
  flex: 1 0 180px;
  margin-bottom: 20px;

  h5 {
    font-size: 12px;
    margin-bottom: 6px;
  }

  a {
    font-size: 12px;
    line-height: 1.4;
    color: #ffffff;
    text-decoration: none;
    display: block;
    margin-bottom: 8px;

    &:hover {
      color: #f90; /* Orange color on hover */
    }
  }
`;

const LegalInfo = styled.div`
  flex: 1 0 100%;
  text-align: center;
  font-size: 12px;
  margin-top: 20px;

  a {
    color: #ffffff;
    text-decoration: none;
    margin: 0 10px;
    &:hover {
      color: #f90; /* Orange color on hover */
    }
  }
    
    
`;
