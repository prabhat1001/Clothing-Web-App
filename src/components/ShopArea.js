import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import './ShopArea.css'

const ShopArea = () => {

  const [searchTerm, setSearchTerm] = useState("");

  const [fake, setFake] = useState([]); 
  console.log(fake);
  useEffect(() => {
    fakestore();
  },[]); 

  const fakestore = async()=>{
    const response = await fetch("https://fakestoreapi.com/products");
    // console.log(response);
    const jsonData = await response.json();
    // console.log(jsonData);
    setFake(jsonData);
  }

  return (
    <Container>
      <FilterContainer/>
      <ProductsContainer>
        <Logo src="/images/logo.png" />
        <SearchContainer>
            <SearchBar id="searchInput" type="text" placeholder="Search here" onChange={(event) => {
            setSearchTerm(event.target.value);
          }} />
            <SearchIcon src="/images/search2-black.png" />
        </SearchContainer>
        <div className='Container'>
            {fake
              .filter((values) => {
                if(searchTerm == ""){
                  return values;
                }else if(values.title.toLowerCase().includes(searchTerm.toLowerCase())){
                  return values;
                }
              })
              .map((values)=>{
              return(
                <>
                  <div className='Box'>
                    <div className='btn' id='btnh1'><i class="fa-solid fa-heart"></i></div>
                    <div className='btn' id='btnh2'><i class="fa-regular fa-heart"></i></div>
                    <img className="ImgProd"  src={values.image} alt="image"/>
                    <div className='Content'>
                      <h5 className='Title'>{values.title}</h5>
                      <p className='Amount'>$ {values.price}</p>
                      <div className='Rate'>
                      <img className="Stars" src="/images/star.png"></img>
                      <img className="Stars" src="/images/star.png"></img>
                      <img className="Stars" src="/images/star.png"></img>
                      <img className="Stars" src="/images/star.png"></img>
                      <img className="Stars" src="/images/star.png"></img>
                      <p className="Ratings">({values.rating.count})</p>
                      </div>
                      <div className='View'><p>VIEW PRODUCT</p></div>
                      
                    </div>
                  </div>
                </>
              )
            })}
        </div>
      </ProductsContainer>
    </Container>
  )
}



const Container = styled.div`
    width: 100%;
    height: 100vh;
    /* background-color: #fff; */
    display: flex;
`;

const FilterContainer = styled.div`
    width: 20%;
    height: 100%;
    /* background-color: #e1e1e1; */
`;

const ProductsContainer = styled.div`
    width: 80%;
    height: 100%;
    background-color: #fff;
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

const SearchContainer = styled.div`
  display: inline-flex;
  width: 40%;
  height: 40px;
  background-color: #fff;
  margin-top: 2%;
  margin-left: 15%;
  border-radius: 10px;
  border: 2px solid #e5e5e5;
  @media screen and (max-width: 500px) {
    width: 50%;
    height: 20px;
  }

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
  @media screen and (max-width: 500px) {
    font-size: 0.8rem;
   
  }
`;

const SearchIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-top: 10px;
  margin-left: 2%;
  @media screen and (max-width: 500px) {
    margin-top: 4px;
    width: 15px;
    height: 15px;
    margin-left: -25px;
  }
  cursor: pointer;
`;

export default ShopArea 