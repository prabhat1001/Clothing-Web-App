import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import * as AiIcons from 'react-icons/ai'
import './ShopArea.css'

const ShopArea = () => {

  const [searchTerm, setSearchTerm] = useState("");
  const [data, setFake] = useState([]); 
  const [filter, setFilter] = useState(data);
  
  console.log(data);
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


  const filterProduct = (e) => {
    setSearchTerm(e.target.value);
    const filtered = data.filter(item => {
      return item.title.toLowerCase().includes(e.target.value.toLowerCase());
    } );
    setFilter(filtered);
  }

  return (
    <Container>
      <FilterContainer>
        <div>
          <h1 className='filterHeading'>Search Results</h1>
          <h3 className='Categ'>CATEGORIES</h3>
          <div className='CheckList'>
            <input type="checkbox" id="all" onChange={() => filterProduct("all")}/>
            <label htmlFor="all">All</label><br></br>
            <input type="checkbox" id="clothes" onChange={() => filterProduct("clothes")}/>
            <label htmlFor="clothes">Clothes</label><br></br>
            <input type="checkbox" id="electronics" onChange={() => filterProduct("electronics")}/>
            <label htmlFor="electronics">Electronics</label><br></br>
            <input type="checkbox" id="furniture" onChange={() => filterProduct("furniture")}/>
            <label htmlFor="furniture">Furniture</label><br></br>
            <input type="checkbox" id="other" onChange={() => filterProduct("other")}/>
            <label htmlFor="other">Other</label><br></br>

          </div>
          <div className='line'></div>
          <h3 className='Categ'>PRICE RANGE</h3>
          <div className='CheckList'>
            <input type="checkbox" id="under" onChange={() => filterProduct("all")}/>
            <label htmlFor="under">Under 500</label><br></br>
            <input type="checkbox" id="between" onChange={() => filterProduct("clothes")}/>
            <label htmlFor="between">1000 to 3000</label><br></br>

          </div>
        </div>
      </FilterContainer>
      <ProductsContainer>
        <Logo src="/images/logo.png" />
        <SearchContainer>
            <SearchBar id="searchInput" type="text" placeholder="Search here" onChange={(event) => {
            setSearchTerm(event.target.value);
          }} />
            <SearchIcon src="/images/search2-black.png" />
        </SearchContainer>
        <div className='Container'>
            {data
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
                    <button className='btn1'><AiIcons.AiFillHeart /></button>
                    <img className="ImgProd"  src={values.image} alt="image"/>
                    <div className='Content'>
                      <h5 className='Title'>{values.title}</h5>
                      <p className='Amount'>$ {values.price}</p>
                      <div className='Rate'>
                      <img className="Stars" src="/images/star.png" alt=''></img>
                      <img className="Stars" src="/images/star.png" alt=''></img>
                      <img className="Stars" src="/images/star.png" alt=''></img>
                      <img className="Stars" src="/images/star.png" alt=''></img>
                      <img className="Stars" src="/images/star.png" alt=''></img>
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