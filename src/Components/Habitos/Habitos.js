import styled from "styled-components"

export default function Habitos(props){
    const {perfil} = props


return(

    <Main>
        <NavBar>
<h1> TrackIt</h1>
<Usuario src = {perfil} />
        </NavBar>
    
        <Footer>

        
        </Footer>


    </Main>


)


}

const Main = styled.div`
width: 100%;

`
const NavBar = styled.div`
width: 100%;
height: 70px;
display: flex;
align-items: center;
justify-content: space-between;
background: #126BA5;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

h1{
margin-left: 25px;
font-family: 'Playball';
font-style: normal;
font-weight: 400;
font-size: 38.982px;
line-height: 49px;
color: #FFFFFF;


}
`
const Usuario = styled.img`
margin-right: 25px;
width: 51px;
height: 51px;
border-radius: 98.5px;
`

const Footer = styled.div`

`