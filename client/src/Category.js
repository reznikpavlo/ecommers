import React from 'react'
import styled from 'styled-components'

function Category() {
  return (
    <CategoryContainer>
      <CategoryItem>
        <CategoryImage src="https://m.media-amazon.com/images/I/410ncqkqpmL._AC_SY170_.jpg" alt="Today’s Deals" />
        <CategoryTitle>Today’s Deals</CategoryTitle>
      </CategoryItem>
      <CategoryItem>
        <CategoryImage src="https://images-na.ssl-images-amazon.com/images/G/15/OHL_Marketing/Events/2023/XCM_CUTTLE_1416206_2243231_CA_CUTTLE_379x304_1X_en_CA._SY304_CB614401062_.jpg" alt="Home & Kitchen Store" />
        <CategoryTitle>Home & Kitchen Store</CategoryTitle>
      </CategoryItem>
      <CategoryItem>
        <CategoryImage src="https://images-na.ssl-images-amazon.com/images/G/15/Events/2024/FathersDay/FD_2024_88_GW_DesktopQuadCard_Deals_186x116_1x_VITWB._SY116_CB560597023_.jpg" alt="Great Gifts for Every Dad" />
        <CategoryTitle>Great Gifts for Every Dad</CategoryTitle>
      </CategoryItem>
      <CategoryItem>
        <CategoryImage src="https://images-na.ssl-images-amazon.com/images/G/15/CA-hq/2024/img/Consumer_Electronics/XCM_CUTTLE_1722400_3786570_379x304_1X_en_CA._SY304_CB556452718_.jpg" alt="Dad-approved Coupons" />
        <CategoryTitle>Dad-approved Coupons</CategoryTitle>
      </CategoryItem>
      <CategoryItem>
        <CategoryImage src="https://images-na.ssl-images-amazon.com/images/G/15/Events/2024/Gamingweek/gw/m24-151-qc2-d1x._SY116_CB557403285_.jpg" alt="Gaming Week is Here" />
        <CategoryTitle>Gaming Week is Here</CategoryTitle>
      </CategoryItem>
      <CategoryItem>
        <CategoryImage src="https://images-na.ssl-images-amazon.com/images/G/15/Programs/FathersDay/379x304en._SY304_CB556773339_.jpg" alt="Shop Handpicked TVs for Dad" />
        <CategoryTitle>Shop Handpicked TVs for Dad</CategoryTitle>
      </CategoryItem>
      <CategoryItem>
        <CategoryImage src="https://images-na.ssl-images-amazon.com/images/G/15/OHL_Marketing/Events/Pets_21/sns_gateway_desktop_sept_379x304._SY304_CB643689174_.jpg" alt="Treat Your Pet" />
        <CategoryTitle>Treat Your Pet</CategoryTitle>
      </CategoryItem>
    </CategoryContainer>
  )
}

export default Category

const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 20px;
  background-color: #f8f8f8;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`

const CategoryItem = styled.div`
  background-color: white;
  padding: 15px;
  text-align: center;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`

const CategoryTitle = styled.h3`
  font-size: 16px;
  font-weight: bold;
  color: #333;
  margin: 10px 0 0;
`

const CategoryImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
`
