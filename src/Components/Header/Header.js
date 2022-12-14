import { useContext } from "react";
import styled from "styled-components"
import ContextInfo from "../../Context/ContextInfo";

export default function Header(){
    const {info} = useContext(ContextInfo); 
    const {image} = info

return(
<>
<NavBar>
<h1> TrackIt</h1>
<Usuario src = {image} />
</NavBar>


</>

)



}

const NavBar = styled.div`
position: fixed;
z-index: 1;
width: 100%;
margin-bottom: 70px;
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
