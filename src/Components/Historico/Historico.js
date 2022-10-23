import styled from "styled-components";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

export default function Historico(){
return (
<Main>
<Header/>
<DisplayHistorico> <h1> Histórico </h1>   </DisplayHistorico>
<h2> Em breve você poderá ver o histórico dos seus hábitos aqui! </h2> 

<Footer/>
</Main>



)}

const Main = styled.div`
width: 100%;
min-height: 800px;
background: #E5E5E5;
h2{
   font-family: 'Lexend Deca';
   font-style: normal;
   font-weight: 400;
   font-size: 17.976px;
   color: #666666;
   margin-left: 25px;
   }
`

const DisplayHistorico = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    flex-direction: column;
    margin-left: 40px;
    margin-top: 20px;
    
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