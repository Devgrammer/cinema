
import styled from 'styled-components/macro'
import {Link as ReactRouterLink} from 'react-router-dom'

export const Background = styled.div`
display: flex;
flex-direction: column;
background: url(${({ src }) => src ? `../images/misc/$(src).jpg` : 
`../images/misc/home-bg.jpg`}) 
top left / cover no-repeat;
max-height: 100vh;
border-bottom: 8px solid #222;
`;
export const ButtonLink = styled(ReactRouterLink )`
 display: block;
 background-color: #e50914;
 width: 84.19px;
 height: 34px;
line-height: auto;
 color: white;
 border: 0;
 font-size: 1rem;
 font-weight: 400px;
 border-radius: 3px;
 padding: 7px 17px;
 cursor: pointer;
 text-decoration: none;
 box-sizing: border-box;

 & : hover {
     background-color: #f40612;
 }
`;
export const  Frame = styled.div`

`;
export const Container = styled.div`
 display: flex;
 margin: 0 56px;
 height: 64px;
 padding: 18px 0;
 justify-content: space-between;
 align-items: center;

 a {
     display: flex;
 }

 @media (max-width: 1000px) {
     margin: 0 30px;
 }
`;
export const Logo = styled.img`
height: 32px;
width: 108px;
margin-right: 40px;

@media (min-width: 1449px) {
    height: 45px;
    width:  167px;

}
`;
