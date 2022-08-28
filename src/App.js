import React from 'react'
import styled from 'styled-components';

const App = () => {
  return (
    <div>
      
      <Logo src="/images/logo.png" />
      <BgImage/>
    </div>
  )
}
const BgImage = styled.div`
    height: 100%;
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("/images/bg1.png");
    position: absolute;
    top:0;
    right:0;
    left:0;
    z-index:-1;
`;

const Logo = styled.img`
  position: fixed;
  right: 0;
  width: 100px;
  height: 100px;
  margin-right: 20px;
`;

export default App