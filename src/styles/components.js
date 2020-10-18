import styled from 'styled-components';
import { above } from '../styles';

export const colors = {
  red: "#fb383b",
  yellow: "#FFC107",
  blue: "#219ff3",
  white: "#ffffff",
  black: "#000",
  pink: "#f58b8d",
}

export const StyledSliderContainer = styled.section`
  position: relative;
  width: 100%;
`
export const SliderImages = styled.div`
  display: flex;
  height: 100%;
  width:100%;
  overflow:hidden;
  & > div {
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
  }
`

export const NavButton = styled.a`
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
  padding: 40px 40px;
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
    grid-template-rows:unset;
    grid-auto-rows: unset;
    grid-template-areas:"primary_image primary_image"
    "new_content new_content"
    "secondary_image secondary_image";
  `}
  .primary_image{
    grid-area:primary_image;
    padding:0;
  }
  .new_content{
    grid-area:new_content;
    background-color:${colors.red}
  }
  .secondary_image{
    padding: 0px;
    grid-area:secondary_image;
    & > .gatsby-image-wrapper{
      min-height:255px;
    }
  }

`