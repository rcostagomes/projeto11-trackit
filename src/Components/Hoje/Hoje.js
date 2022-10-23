
import { useContext } from "react";
import styled from "styled-components"
import ContextInfo from "../../Context/ContextInfo";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
export default function Hoje({token}){
console.log(token)
    const {info} = useContext(ContextInfo); 
    
function HabitoHoje(){
return(
<HabitoDay>
<NameHabito>
     <h1> Ler 1 capítulo de livro </h1>
     <h3> Sequência atual: 3 dias <br/>
        Seu recorde: 5 dias </h3>
 </NameHabito>
<div> <ion-icon name="checkmark-outline"></ion-icon>  </div>
</HabitoDay>

)


}



    console.log(info)
    return(
    
        <Main>
            <Header/>
            <Info> <h1> Segunda 17/05 </h1> <h2> Nenhum hábito concluído ainda </h2>   </Info>
            <HabitoHoje></HabitoHoje>
            <Footer/>
    
    
        </Main>
    
    
    )
    
    
    }
    
    const Main = styled.div`
    width: 100%;
    min-height: 800px;
    background: #E5E5E5;
    `
    const Info = styled.div`
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
    
   h2{
   font-family: 'Lexend Deca';
   font-style: normal;
   font-weight: 400;
   font-size: 17.976px;


color: #BABABA;
   }
    `

    const HabitoDay = styled.div`
    display: flex;
    width: 340px;
    height: 94px;
    margin-left: 25px;
    background: #FFFFFF;
    border-radius: 5px;
    h1{
    margin-left: 10px;    
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #666666;
    }
    h3{
    margin-left: 10px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 12.976px;
    line-height: 16px;
    color: #666666;
    }


    ion-icon {
    width: 69px;
    height: 69px;
    margin-left: 35px;
    margin-top: 10px;
    cursor: pointer;
    border-radius: 5px;
    font-size: 35px;
    font-weight: 400;
    color: #ffffff;
    background: #EBEBEB;
  }
 
    `

    const NameHabito = styled.div`
        
    `