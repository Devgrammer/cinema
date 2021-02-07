import styled from 'styled-components/macro'

export const Container = styled.div`
display: flex;
flex-direction: column;
border-bottom: 0px;
text-align: center; 
padding: 165px 45px;

`;
export const Title = styled.div`
color: white;
max-width: 640px;
font-size: 50px;
font-weight: 550;
margin: auto;

@media (max-width: 600px) {
    font-size: 35px;
}
`;
export const SubTitle = styled.div`
color: white;
font-size: 26px;
font-weight: normal;
margin: auto;

@media (max-width: 600px) {
    font-size: 18px;
}
`;
