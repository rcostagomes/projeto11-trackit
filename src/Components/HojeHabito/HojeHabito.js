import axios from "axios";
import styled from "styled-components";

export default function HojeHabito(props){
    const { id, name, done, token, currentSequence, highestSequence } = props;
    const { getHabitosHoje } = props;
    console.log(id)
    function ConcluirHabito() {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
  
      const promise = axios.post(
        `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`,
        {},
        config
      );
      promise.then(() => getHabitosHoje());
      promise.catch((e) => console.log(e));
    }
  
    return (
      <Habito>
        <InfoHabito>
          <h1>{name}</h1>
          {currentSequence === highestSequence ? (
            <>
              <h3>
                Sequência atual de dias:{" "}
                <Feito done={done}>{currentSequence} dias</Feito>
              </h3>
              <h3>
                Seu recorde de dias:{" "}
                <Feito > {highestSequence} dias</Feito>
              </h3>
            </>
          ) : (
            <>
              <h3>
                Sequência atual de dias:{" "}
                <Feito done={done}>{currentSequence} dias</Feito>
              </h3>
              <h3>
                Seu recorde de dias: <Feito>{highestSequence} dias</Feito>
              </h3>
            </>
          )}
        </InfoHabito>
        <Conclui style={{ backgroundColor: `${ done === false ?  "#E7E7E7" : "#8FC549" }`}} onClick={() => ConcluirHabito()} >
          <ion-icon name="checkmark-outline"></ion-icon>
        </Conclui>
      </Habito>
    );
  }

  const Habito = styled.section`
    width: 340px;
    height: 100px;
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    margin-bottom: 10px;
    margin-left: 15px;
  `;
  
  const InfoHabito = styled.div`
    width: 223px;
    height: 64px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin: 10px 0px;
    h1 {
      color: #666666;
      font-style: normal;
      font-weight: 400;
      font-size: 19.98px;
      line-height: 24.97px;
      margin-bottom: 5px;
    }
    h3 {
      color: #666666;
      font-style: normal;
      font-weight: 400;
      font-size: 12.98px;
      line-height: 16.22px;
    }
  `;
  
  const Feito = styled.p`
    color: ${(props) => (props.done ? "#8FC549" : "#666666")};
    font-style: normal;
    font-weight: 400;
    font-size: 12.98px;
    line-height: 16.22px;
  `;
  
  const Conclui = styled.div`
    width: 69px;
    height: 69px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: solid 1px #e7e7e7;
    border-radius: 5px;
    ion-icon {
      cursor: pointer;
      font-size: 35px;
      font-weight: 400;
      color: #ffffff;
      margin: 0px 5px;
      
    }
  `;

  