import styled from "styled-components"
import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';
import PorcentagemContext from "../../Context/PorcentagemContext";
import { Link } from "react-router-dom";
import { useContext } from "react";

export default function Footer(){
  const { porcentagem } = useContext(PorcentagemContext);
return(
<Botoes>
            <Link to= "/habitos">  
            <Habitos><h2> Habitos </h2></Habitos> </Link>
            <Link to="/hoje"> <Progresso>  <CircularProgressbar
            value={porcentagem}
            text= "Hoje"
            background
            backgroundPadding={6}
            valueStart={0}
            valueEnd={100}
            duration={1.4}
            styles= {buildStyles( {
              
              backgroundColor: "#3e98c7",
              textColor: "#fff",
              pathColor: "#fff",
              trailColor: "transparent",
              textSize: "18px",
            })}
          />  </Progresso> </Link>
           
            <Link to= "/historico"> 
            <Historico> <h2> Historico </h2></Historico>
            </Link>
            </Botoes>

)

}

const Botoes = styled.div`
    z-index: 1;
    position: fixed;
    height: 70px;
    width:100%;
    justify-content:center;
    top: 92%;
    position: fixed;
    display: flex; 
    align-items: center;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    background-color: white;
    
    `

const Habitos = styled.div`
    margin-right: 50px;
    margin-top:-8px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    color: #52B6FF;
    `
    const Historico = styled.div`
 
    margin-left: 50px;
    margin-top:-8px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    color: #52B6FF;
    `
const Progresso = styled.div`
margin-bottom: 30px;
margin-top: -25px;
width: 80px;
height: 80px;
`