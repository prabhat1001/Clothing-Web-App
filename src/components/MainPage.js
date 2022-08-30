import React,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import './MainPage.css'
import Popup from './Popup';


const MainPage = () => {

  const [buttonPopup,setButtonPopup] = useState(false);

  const [fake, setFake] = useState([]); 
  console.log(fake);
  useEffect(() => {
    fakestore();
  },[]); 

  const fakestore = async()=>{
    const response = await fetch("https://fakestoreapi.com/products?limit=5");
    // console.log(response);
    const jsonData = await response.json();
    // console.log(jsonData);
    setFake(jsonData);
  }

  return (
    <div>
      <Logo src="/images/logo.png" />
      <SearchContainer>
        <SearchBar id="searchInput" type="text" placeholder="Search here" onKeyPress={EnterKey}
          onClick={()=>{setButtonPopup(true)}}/>
        <Link to={"/shopArea"}><SearchIcon src="/images/search2-black.png" /></Link>
        <Popup trigger = {buttonPopup} setTrigger={setButtonPopup}>
            <h3>Latest Trends</h3>
            <div className='container'>
              {fake.map((values)=>{
                return(
                  <>
                    <div className='box'>
                      <img className="imgProd"  src={values.image} alt="image"/>
                      <div div className='content'>
                        <h5 className='title'>{values.title}</h5>
                      </div>
                    </div>
                  </>
                )
              })}
            </div>
            <h3>Popular Suggestions</h3>
            {fake.map((values)=>{
                return(
                  <>
                     <h5 className='suggestions'>{values.title}</h5>
                  </>
                )
              })}
            
        </Popup>
      </SearchContainer>
      <BgImage/>
    </div>
  )
}

function EnterKey(e){
  if(e.key === 'Enter'){
    window.location.href = '/shopArea';
  }
}

//====================================
// Styled Components
//====================================

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
  display:flex;
  flex-direction: column;
  @media screen and (max-width: 500px) {
    width: 70px;
    height: 70px;
  }
`;

const SearchContainer = styled.div`
  display: inline-flex;
  width: 60%;
  height: 50px;
  background-color: #fff;
  margin-top: 8%;
  margin-left: 20%;
  border-radius: 10px;
  box-shadow: 2px 2px 10px #a02c43;

`;

const SearchBar = styled.input`
  width: 80%;
  height: 95%;
  background-color: #fff;
  margin-left: 4%;
  padding-left: 20px;
  border: none;
  outline: none;
  font-size: 1.2rem;
  color: #888888;
`;
const SearchIcon = styled.img`
 
  width: 30px;
  height: 30px;
  margin-top: 10px;
  margin-left: 4%;
  @media screen and (max-width: 500px) {
    width: 25px;
    height: 25px;
    margin-left: -25px;
  }
  cursor: pointer;
`;

export default MainPage