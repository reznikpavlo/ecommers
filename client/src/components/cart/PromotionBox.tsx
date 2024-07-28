import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

const PromotionBox = () => {
  return (
    <Wrapper>
      <PromotionContainer>
        <LeftSide>
          <Image src="https://m.media-amazon.com/images/G/15/credit/img19/CBCC/maple/cacbcc-vc_cardcircle-np._CB463993881_.png" alt="Amazon Card" />
          <ImageText><strong>$25 instant gift Card</strong></ImageText>
        </LeftSide>
        <Middle>
          <p>
            <strong>Daniel</strong>, get a <StyledLink to="/">$25 Amazon.ca Gift Card</StyledLink> instantly, plus up to 5% back for 6 months 
            after approval for the <strong>Amazon.ca Rewards Mastercard.</strong>
          </p>
        </Middle>
        <RightSide>
          <Button>Learn More</Button>
        </RightSide>
      </PromotionContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display:flex;
  justify-content: center;
`;

const PromotionContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  padding: 16px;
  background-color: #FFFFFF;
  margin-bottom: 16px;
  width: 700px;
`;

const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 16px;
`;

const Image = styled.img`
  max-width: 100px;
`;

const ImageText = styled.p`
  margin-top: 8px;
  font-size: 12px;
`;

const Middle = styled.div`
  flex-grow: 1;
  text-align: center;
`;

const StyledLink = styled(RouterLink)`
  color: #00FF00;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const RightSide = styled.div``;

const Button = styled.button`
  background-color: #FFFFFF;
  border: 1px solid rgba(54, 54, 54, 0.6);
  font-weight: 600;
  position: relative;
  outline: none;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  height: 45px;
  width: 130px;
  opacity: 1;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export default PromotionBox;
