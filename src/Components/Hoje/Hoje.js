
import { useState, useEffect, useContext } from "react";
import styled from "styled-components"
import PorcentagemContext from "../../Context/PorcentagemContext";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import HojeHabito from "../HojeHabito/HojeHabito";
import axios from "axios";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";



export default function Hoje({token}){
    const [habitos, setHabitos] = useState([]);
    console.log(habitos)
    const [status, setStatus] = useState([]);
  console.log(status)
    const { porcentagem, setPorcentagem } = useContext(PorcentagemContext);
  
    dayjs.locale("pt-br");
    let Diadasemana = dayjs().format("dddd, DD/MM");
   
  
    useEffect(() => getHabitosHoje(), []);
  
    function getHabitosHoje() {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
  
      const promise = axios.get(
        "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",
        config
      );
      promise.then((response) => {
        console.log(response.data)
        const { data } = response;
        const statusSelecionado = data.map((habito) => habito.done);
        const done = statusSelecionado.filter((status) => status === true);
        const PorcentagemAtual = (
          (done.length / (statusSelecionado.length || 1)) *
          100
        ).toFixed(0);
        setHabitos(data);
        setStatus(statusSelecionado);
        setPorcentagem(PorcentagemAtual);
      });
      promise.catch((e) => console.log(e));
    }
  
    return (
      <>
        
        <Main>
        <Header />
          <InfoDay>
            <h1>{Diadasemana}</h1>
            {status.includes(true) ? (
              <HabitosFeitos>{porcentagem}% dos hábitos concluídos</HabitosFeitos>
            ) : (
              <SemHabito>Nenhum hábito concluído ainda</SemHabito>
            )}
          </InfoDay>
          <Habitos>
            {habitos.map((habito) => {
              const { id, name, done, currentSequence, highestSequence } = habito;
              return (
                <HojeHabito
                  id={id}
                  name={name}
                  done={done}
                  token={token}
                  currentSequence={currentSequence}
                  highestSequence={highestSequence}
                  getHabitosHoje={getHabitosHoje}
                />
              );
            })}
          </Habitos>
        </Main>
        <Footer />
      </>
    );
  }
    
    const Main = styled.div`
    width: 100%;
    min-height: 800px;
    background: #E5E5E5;
    position: relative;
    `
    export const InfoDay = styled.div`
    position: absolute;
    top:90px;
    left: 20px;
    width: 375px;
    height: 53px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h1 {
      font-size: 22.98px;
      font-weight: 400;
      font-style: normal;
      line-height: 28.72px;
      color: #126BA5;
      margin-left: 17px;
    }
    p{
      font-size: 17.98px;
      font-weight: 400;
      font-style: normal;
      line-height: 22.47px;
      color: #BABABA;
      margin-left: 17px;
    }
  `;
  
  export const SemHabito = styled.p`
    font-size: 17.98px;
    font-weight: 400;
    font-style: normal;
    line-height: 22.47px;
    color: #bababa;
    margin-left: 17px;
    margin-top: 10px;
  `;
  
  export const HabitosFeitos = styled.h3`
    font-size: 18px;
    font-weight: 400;
    font-style: normal;
    line-height: 22.47px;
    color: #8FC549;
    margin-left: 17px;
    margin-top: 10px;
  `;
  
  export const Habitos = styled.div`
    width: 375px;
    height: 302px;
    margin-top: 25px;
    position: absolute;
    top:150px;
    left: 20px;
  `;