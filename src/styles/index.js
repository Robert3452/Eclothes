import { css ,createGlobalStyle} from 'styled-components';

export const sizes = {
    small: 480,
    medium: 768,
    large: 1024,
    extraLarge: 1440
}

export const above = Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
        @media (max-width:${sizes[label]}px){
            ${css(...args)}
        }
    `
    return acc
}, {});


export const GlobalStyles = createGlobalStyle`
   *,
   *::after,
   *::before{
       margin: 0;
       padding: 0;
   }
   ul{
       list-style:none;
       
   }
 `