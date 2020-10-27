import styled, { keyframes } from 'styled-components';
import { above } from '../styles';

export const colors = {
  red: "#fb383b",
  yellow: "#FFC107",
  blue: "#219ff3",
  white: "#ffffff",
  black: "#000",
  pink: "#f58b8d",
  fb: "#3b5998",
  twitter: "#00acee",
  instagram_yellow: "#f09433",
  instagram_orange: "#e6683c",
  instagram_red: "#dc2743",
  instagram_cherry: "#cc2366",
  instagram_purple: "#bc1888",
}
export const StyledSliderContainer = styled.section`
  position: relative;
  width: 100%;
`


const fade = keyframes`
  from{
    opacity: .4;
  }

  to{
    opacity: 1;
  }
`
export const SliderImages = styled.div`
  display: flex;
  height: 100%;
  width:100%;
  overflow:hidden;
  & > div {
    animation: ${fade} 1.8s ;
    max-height: 800px;
    height: 80vh;
    width: 100%;
    min-width:100vw;
    position: relative;
    background-color: ${colors.red};
    & > .gatsby-image-wrapper {
      height:100%;
      width:100%;
      object-fit: cover ;
    }
    & > .content_item{
      background-color: rgba(0,0,0,0.4);
      position: absolute;
      width: 100%;
      color:white;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      flex-direction: column; 
      & > h2{
        font-size:  7rem;
        margin-bottom: 10px;
        font-family: 'Montserrat', sans-serif;
        ${above.medium`
          font-size: 3.5rem ;
        `
  }
      }
      & > span{
        font-size:  1.1rem;
        text-transform: uppercase;
        font-family: 'Open Sans', sans-serif;
        letter-spacing: 6px;
        margin-bottom: 0px;
      }
  }
  }
`

export const NavButton = styled.button`
  position: absolute;
  cursor: pointer;
  outline: none;
  color: rgba( 255, 255, 255, 0.5 );
  width: 55px;
  box-sizing: content-box;
  display: flex;
  justify-content:center;
  align-items:center;
  align-content:center;
  border: none;
  background-color: transparent;
  padding: 8px 5px;
  font-size: 2rem;
  top: calc(50% - 50px);
  & > span{
    height: auto;
  }
  &:hover{
    transition: .3s;
    background-color:rgba( 0, 0, 0, 0.5 );
    ${above.small`
      transition: unset;
      background-color: transparent;
    `}
  }
`

export const PrevButton = styled(NavButton)`
  left: 0;
`
export const NextButton = styled(NavButton)`
  right:0;
`

export const StyledButton = styled.button`
  padding: 5px 10px;
  font-size: .8rem ;
  background-color: ${colors.black};
  color: ${colors.white};
  cursor:pointer;
  border: none;
  transition:1s;
  
  &:hover{
    transition:1s;
    background-color: ${colors.white};
    color:${colors.black}; 
  }
`

export const StyledContent = styled.div`
  /* padding: 40px 40px; */
  box-sizing: content-box;
  
  h2{
    color: ${colors.white};
  }
  p{
    color: ${colors.white};
    letter-spacing:1.3px;
    font-size:.8rem;
  }
`

export const StyledNews = styled.div`
  display:grid;
  overflow-y:hidden;
  grid-template-columns:repeat(2, 1fr);
  grid-auto-rows:255px;
  justify-items:stretch;
  grid-template-areas:"primary_image new_content"
  "primary_image secondary_image";
  ${above.medium`
    grid-auto-rows: 255px;
    grid-template-areas:"primary_image primary_image"
    "primary_image primary_image"
    "new_content new_content"
    "new_content new_content"
    "secondary_image secondary_image";
  `}
  .primary_image{
    grid-area:primary_image;
    padding:0;
    & > .gatsby-image-wrapper{
      height:100%;
    }
  }
  .new_content{
    grid-area:new_content;
    background-color:${colors.red};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0 30px;
    box-sizing:content-box;
  }
  .secondary_image{
    padding: 0px;
    grid-area:secondary_image;
    & > .gatsby-image-wrapper{
      min-height:255px;
      width:100%;
      object-fit:contain;
      height:100%;
    }
  }
`

export const StyledDots = styled.div`
  position: absolute;
  display: flex;
  justify-content:center;
  bottom: 10%;
  width: 100%;
  & > div{
    display: flex;
    min-width: 80px;
    max-width: 200px;
    justify-content: space-evenly;
    & > button{
      background-color: transparent;
      cursor: pointer;
      margin: auto;
      width: 18px;
      height: 18px;
      border-radius: 50%;
      border:2px solid white ;
    }
    & > .current{
      background-color: ${colors.red}
    }
  }
`

export const StyledHeader = styled.header`
  position: fixed;
  width: 100%;
  z-index: 2;
  display: flex;
  flex-wrap: wrap;
  padding: 20px 50px;
  align-items: center;
  justify-content: flex-end;
  &.active {
    ${above.small`
      transition: 1s;
      height: 120px;
      padding: 5px 20px ;
      align-items: flex-start;
      justify-content: flex-end;
    `}
  }
  &.disable{
    ${above.small`
      transition: 1s;
      height: 120px;
      padding: 5px 20px ;
      align-items: flex-end;
      justify-content: flex-start; 
  `}

  }
  & > .btn_container{
    display: flex;
    justify-content: space-between;
    width: 100px;
    & > .nav_btn{
      outline: none;
      border: none;
      padding:20px ;
      display:flex;
      align-items:center;
      justify-content:center;
      color:white;
      cursor: pointer;
      border-radius: 2px;
      height: 25px;
      width: 25px;
      background-color: rgba(0,0,0,.5); 
    }
  }
`

export const StyledNavBar = styled.div`
  width:10%;
  min-width: 300px;
  position: fixed;
  height: 100vh;
  flex-direction: column;
  display: flex;
  padding: 20px 30px;
  justify-content: flex-start;
  align-items: center;
  background-color: white;
  transition: .8s;
  z-index: 3;
  & > .navbar_close{
    align-self: flex-end;
    padding: 0 10px;
    cursor: pointer;
    border: .5px solid ${colors.red}; 
    background-color: transparent;
    outline: none;
    margin-bottom: 50px;
  }
  & > ul{
    margin: 20px auto;
    list-style: none;
    & > li {
      text-align: center;
      & > a{
        font-weight: bold;
        color: black;
        text-align: center;
        letter-spacing: 2px; 
        font-size: 14px;
        text-decoration: none;
        transition: .3s;

        &:hover{
          transition: .3s;
          color: ${colors.red};
        }
      }
    }
  }
  ${above.small`
    width: 100%;
    
  `}
`

export const Logo = styled.div`
position: absolute;
z-index: 2;
top: 5%;
display:flex;
text-align: center;
flex-direction: row;
width: 250px; 
justify-content:center;
margin-right:5px;
font-size: 1.2rem;
/* animation: ${fade} 1.8s ; */
  & > a{
    text-transform: uppercase;
    border: 1px solid white; 
    display: flex;
    text-decoration: none;
    & > span{
      background-color: white;
      color: black;
      padding: 0px 5px;
    }
    & > p{
      padding: 0px 5px;
      box-sizing: content-box;
      margin-bottom: 0px;
      background-color: transparent;
      color: white;

      }
 }
`

export const StyledNavigator = styled.ul`
  margin: 0px;
  display: flex;
  list-style: none;
  position: absolute;
  bottom: 10%;
  left: 5%;
  & > li{
    & > a{
      transition: .5s;
      color: white;
      text-decoration: none;
      & > i{
        padding:0 10px; 
        color: white;

        &:hover{
          color: white;
        }
      }
      
      &:hover{
        transition: .5s;
        color: ${colors.red};
      }
    }
  }
`

export const StyledOffers = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(5 , 140px);
  grid-template-areas: "firstContent firstImage"
                       "firstContent firstImage"
                       "firstContent secondContent"
                       "secondImage secondContent"
                       "secondImage secondContent";
  ${above.medium`
    grid-template-rows: repeat(3 , 300px);
    grid-template-areas:"firstContent firstContent" 
                        "firstImage firstImage"
                        "secondContent secondContent"
                        "secondImage secondImage";
    
  `}
 
  .firstImage{
    grid-area: firstImage;
    & > .gatsby-image-wrapper{
      height: 100%;
    }
  }
  .firstContent{
    display: flex;
    padding: 0 30px;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    background-color: ${colors.red} ;
    grid-area: firstContent;
  }
  .secondContent{
    grid-area: secondContent;
    display: flex;
    padding: 0 30px;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    background-color: ${colors.black} ;

    & > button {
      background-color: ${colors.red};
      transition: 1;
      &:hover{
        transition: 1;
        background-color: ${colors.white};

      }
    }
  }
  .secondImage{
    grid-area: secondImage;
    & > .gatsby-image-wrapper{
      height: 100%;
    }
  }
`

export const StyledFooter = styled.footer`
  display: grid;
  width: 100%;
  background-color: black;
  color: white;
  padding: 50px;
  grid-template-columns: repeat(3, 1fr);
  ${above.medium`
    grid-template-columns: repeat(1, 1fr);
    padding: 10px;

  `
  }
  & p{
    color: rgba(255,255,255, .5);
    letter-spacing: 1.5px;
    line-height: 1.8;
    font-size: .8rem;
  }
  & h3{
    font-weight: 500;
    letter-spacing: 1.2px;
    font-size: 1.2rem;

  }
  & h2{
    font-weight: 500;
    letter-spacing: 8px;
  }
  & > div{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 10px 30px;
    ${above.small`
      padding: 10px 20px;

    `}
    & > .social_icons{
      display: flex;
      width: 50%;
      margin: 0 0 auto;
      justify-content: space-between;
      & > div{
        box-sizing: content-box;
        width: 30px;
        height: 30px;
          padding: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        & > a{
          text-align: center;
          padding: 5px;
          color:white;  
          height:30px;
          display: inline-block;
          width:30px;
        }
      }
      & > .fb_icon{
        background-color: ${colors.fb};
      }
      & > .twitter_icon{
        background-color: ${colors.twitter};
      }
      & > .instagram_icon{
        background: -moz-linear-gradient(45deg, ${colors.instagram_yellow} 0%, ${colors.instagram_orange} 25%, ${colors.instagram_red} 50%, ${colors.instagram_cherry} 75%, ${colors.instagram_purple} 100%); 
        background: -webkit-linear-gradient(45deg, ${colors.instagram_yellow} 0%, ${colors.instagram_orange} 25%, ${colors.instagram_red} 50%, ${colors.instagram_cherry} 75%, ${colors.instagram_purple} 100%); 
        background: linear-gradient(45deg, ${colors.instagram_yellow} 0%, ${colors.instagram_orange} 25%, ${colors.instagram_red} 50%, ${colors.instagram_cherry} 75%, ${colors.instagram_purple} 100%); 
      }
    }

    & > ul{
      list-style: none;
      margin: 0;
      width:100%;
      & > li{
          display: flex;
          margin-bottom: 8px;
          justify-content: flex-start;
        & > a {
          text-decoration: none;
          font-size:14px;
          color: rgba(255,255,255,0.5);
          transition: .3s;
          &:hover{
            color: rgba(255,255,255,1);
            transition: .3s;
          }

        }
        & > .text_contact{
          & > h6{
            margin-bottom: 5px;
          }
          & > span{
            font-size: 14px;
            letter-spacing: 1.5px;
            color: rgba(255,255,255,0.5);
            & > a{
              color: ${colors.red};
              text-decoration:none;
              transition: .5s;
              &:hover{
                transition: 1s;
                color: rgba(255,255,255,1);
              }
            }
          }
        }
        & > .icon_contact{
            margin-right: 10px;
        }
      } 
    }

  }
`

export const Container = styled.div`
  width: 90%;
  margin-left: auto;
  margin-right: auto;

`

export const StyledShop = styled.div`
  padding: 20px  0 ;
  min-height: 700px;
  width:100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-areas: "filtersArea productsArea productsArea productsArea" ;
  gap: 20px;
  ${above.medium`
    grid-template-areas: "filtersArea filtersArea filtersArea filtersArea" 
                        "productsArea productsArea productsArea productsArea";

  `}
`
export const StyledSectionFilter = styled.div`
    display: flex;
    width: 100%; 
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    & a{ 
      color: black;
      text-decoration: none;
      font-size:15px;
    }

    & > h4.filterTitle{
      font-weight: 500;
      color: ${colors.red};
      text-align: start;
      font-size: 18px; 
      margin-bottom: 10px;
    }
    & > hr{
      color: ${colors.red};
      /* background-color: ${colors.red}; */
      width: 99%;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 10px;
    }
    
    & > ul{
      display: flex;
      flex-direction: column;
      list-style: none;
      margin-left: 0px;
      padding-bottom: 10px ; 
      margin-bottom: 5px;
      border-bottom: 1px rgba(0,0,0,0.2) solid;
      width: 100%;
      & > li{
        margin-bottom: 2px;
        & > a {
          /* font-size: 13px; */
          color: black;
          text-decoration: none;
        }
      }
      & > ul{
        margin-bottom: 0px;
        & >li{
          margin-bottom: 0px;
        }
      }
    }

`
export const StyledPriceRange = styled.div`
  width: 100%; 
   & > h4.filterTitle{
      font-weight: 500;
      color: ${colors.red};
      text-align: start;
      font-size: 18px; 
      margin-bottom: 10px;
    }

    & > ul{ 
      display: flex;
      margin-left: 0px;
      flex-direction: column;
      list-style: none;
      margin-left: 0px;
      padding-bottom: 10px;
      border-bottom: 1px rgba(0,0,0,0.2) solid;
      width: 100%;
      & > li{
        margin-bottom: 2px;
        font-size: 15px;
        & > ul{
          margin-left: 0px;
          margin-bottom: 0px;
          margin-top: 0px;
          & > li{
            width: 100%;
            display: flex;
            & > .priceRange{
              display: flex;
            }
          }
        }
      }
    }

`
export const DropDown = styled.button`
  width: 100%;
  display: flex;
  cursor: pointer;
  align-items: center;
  background-color: transparent;
  border:none;
  outline: none;
  justify-content: space-between;
  border-radius: 2px;
  padding: 2px; 
  &:active,&:focus{
    border: 1px solid ${colors.red};
    /* -webkit-box-shadow: 0px 0px 5px 0px ${colors.red};
    -moz-box-shadow: 0px 0px 5px 0px ${colors.red};
    box-shadow: 0px 0px 5px 0px ${colors.red}; */
  }
`

export const PriceRange = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  & > .dash{
    justify-self: center;
    align-self: flex-end;
  }
  & > div{
    max-width: 80px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    & > span{
      font-size: 14px;
      color: ${colors.red};
    }
    & > input{
      max-width: 100%; 
      padding: 5px;
      font-size: 12px;
      border: 1px solid black;
      border-radius: 4px; 
      outline: none;
      &:active,&:focus{
        -webkit-box-shadow: 0px 0px 2px 0px ${colors.red};
        -moz-box-shadow: 0px 0px 2px 0px ${colors.red};
        box-shadow: 0px 0px 2px 0px ${colors.red};
        border: 1px solid ${colors.red};

      }
    }
  }
`

export const ArrowDownButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  outline: none;
  border: none;
  padding: 4px;
`

export const StyledFilters = styled.div`
  border: 1px solid rgba(0,0,0,.2);
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  box-sizing: content-box;
  padding: 20px ;
  grid-area: filtersArea;
  ${above.medium`
    padding: 20px 10px;

  `}
`

export const StyledProducts = styled.div`
  border: 1px solid rgba(0,0,0,.2);
  grid-area: productsArea;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(400px, 450px);
  gap: 12px;
  display: grid;
  padding: 20px; 
  ${above.large`
    grid-template-columns: repeat(2, 1fr);
  `}
`
export const StyledItemProduct = styled.div`
  display: flex;
  flex-direction: column;
  align-items:flex-start;
  justify-content: flex-start;
  grid-column: span 1;
  border: 1px solid rgba(0,0,0,.2);
  padding: 10px;
 
  ${above.small`
    grid-column: span 3;
  `}
  & > a{
    cursor: pointer;
    width: 100%;
    text-decoration: none;
    color: unset;
    & > .productImage{
      width: 100%;
      height: 300px;
      margin-bottom: 15px;
      & > img{
        object-fit: contain;
        width: 100%;
        height: 100%;
        margin-bottom: 0px;
      }
    }
    & > hr{
      margin-bottom: 5px;
    }
    & > .productTitle{
      font-size: 16px;
      font-weight: bold;
      margin-bottom: 10px;
    }
    &:hover .productTitle{
      transition: .2s;
      color:${colors.red};
    }
    & > .priceSide{
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-areas: "original discount ."
                           "offer . btn_cart";
      align-items: center;
      align-content: center;                 
      flex-direction: column;
      & > .originalProductPrice{
        grid-area: original;
        font-size: 16px;
        font-weight: bold;
        text-decoration: line-through; 
        &.withOffer{
          color: rgba(0,0,0,.5);
        }
      }
        & > .discount{
        text-decoration: none; 
        font-size: 16px;
        font-weight: bold;
        grid-area: discount;
        }
      & > .priceOffered{
        grid-area: offer;
        font-size: 18px; 
        font-weight: bold;
        color: ${colors.red};
      }
      & > .btn_cart{
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 14px;
          margin-left: auto; 
          margin-right: auto; 
          grid-area: btn_cart;
          padding: 8px;
          color: white;
          background-color: #000;
          border: none; 
          cursor: pointer;
          transition: .5s;
          &:hover{
          transition: 1s;
            background-color: ${colors.red};
          }
        }
    }
  }
`

export const SearchField = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  & > span { 
    color: black;
  }
  & > div{
    display:flex;
    width: 100%;

    & > input{
      width: 80% ;
      background-color: rgba(0,0,0,.1);
      border:none;
      color: rgba(0,0,0,.5);
      box-sizing: content-box;
      outline: white;
      padding: 0px 5px;
      &::placeholder{
        color: rgba(0,0,0,.9);
      }
    }
    & > button{
      background-color: black;
      text-align:center;
      width: 30px;
      height: 30px;
      border: none;
      font-size:12px;
      color: white;
    }
  }
`

