import React from 'react'
import styled from 'styled-components'

const ShopArea = () => {
  return (
    <Container>
      <FilterContainer/>
      <ProductsContainer>
        <Logo src="/images/logo.png" />
      </ProductsContainer>
    </Container>
  )
}
const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #fff;
    position: fixed;
    display: flex;
    top: 0;
`;

const FilterContainer = styled.div`
    width: 20%;
    height: 100%;
    background-color: #e1e1e1;
`;

const ProductsContainer = styled.div`
    width: 80%;
    height: 100%;
    background-color: #ff7dae;
`;

const Logo = styled.img`
  position: fixed;
  right: 0;
  width: 100px;
  height: 100px;
  display:flex;
  flex-direction: column;
  @media screen and (max-width: 500px) {
    width: 70px;
    height: 70px;
  }
  z-index: 40;
`;
export default ShopArea 