import styled from "styled-components";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";


export default function Historico(){
return (

<Main>
<Header/>

<DisplayH> <h1> Histórico </h1>   </DisplayH>
<p> Em breve você poderá ver o histórico dos seus hábitos aqui! </p> 

<Footer/>
</Main>



)}

const Main = styled.div`
width: 100%;
min-height: 800px;
background: #E5E5E5;
position: relative;
overflow-x: hidden;

p{
   margin-left: 35px;
   font-family: 'Lexend Deca';
   font-style: normal;
   font-weight: 400;
   font-size: 17.976px;
   color: #BABABA;
   margin-top: 150px;
   position: absolute;
   }
`

const DisplayH = styled.div`
    margin-top: 150px;
    width: 100%;
    height: 70px;
    display: flex;
    flex-direction: column;
    margin-left: 40px;
    margin-top: 90px;
    position: absolute;
    
    
    h1{
    margin-left: 25px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 22.976px;
    line-height: 29px;
    color: #126BA5;
    }
    
    `

