import axios from "axios"
import {useEffect, useState } from "react"
import styled from "styled-components"

function Day(props){
const {name,day,arrayDays,setArrayDays,setDisponivel} = props
const [selecionado, setSelecionado] = useState(false)

function salvarInfos(props){
 const {num} = props

console.log(num)
 if (selecionado === true){
    setSelecionado(false)
    setArrayDays([...arrayDays.filter((ID)=> ID !== num)])
 }else{
    setSelecionado(true)
    setArrayDays([...arrayDays,num])
 }
    
 }
return(
    
    <Dias style={{ backgroundColor: `${ selecionado === false ?  "white": "#CFCFCF" }` 
    , color : `${ selecionado === false ?  "black": "white" }` }}  onClick={()=> {salvarInfos(day) }} >
        {name}
    </Dias>
)}

function Days(props){
const {arrayDays,setArrayDays,allDays,setDisponivel } = props

const day =  allDays.map((id)=>{ return( <Day setDisponivel={setDisponivel} arrayDays={arrayDays} setArrayDays={setArrayDays}  day={id} name={id.dia} key={id.num}  >      </Day> )})

return(<>{day}</>)}

export default function Habito({token}){
const [arrayHabitos, setArrayHabitos] = useState([])
const [habilitado, setHabilitado ] = useState(false)
const [arrayDays, setArrayDays] = useState([])
const [nameHabito, setNameHabito] = useState("")
const [newHabito, setNewHabito] = useState([])





const allDays = [
    {dia:"D" , num:0},
    {dia:"S" , num:1},
    {dia:"T" , num:2},
    {dia:"Q",  num:3},
    {dia:"Q" , num:4},
    {dia:"S" , num:5},
    {dia:"S" , num:6},
    ]



function novoHabito(event){
  event.preventDefault();
const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits`,
 {
    name: nameHabito,
    days: arrayDays,
}, config )
promise.then((resposta)=>{setNewHabito([...newHabito,resposta.data]);setArrayDays([]) ;getHabitos() })
promise.catch((err)=> console.log("DEU RUIM", err))

setHabilitado(false)
}

useEffect(()=> getHabitos(),[])


function getHabitos(){ 
    const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
const promise = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits`, config)
promise.then((resposta)=>{setArrayHabitos(resposta.data)})

    }



const HabitoFeito = arrayHabitos.map((habito)=>{
  const {name, days,id} = habito
    
  function excluirHabito(){
window.confirm("Você quer realmente excluir esse Habito ?")
const config = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};
const promise = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`,
config
);
promise.then((response)=> {getHabitos()})
promise.catch((err) => { console.log("NÂO FOI",err.data.response )})
  }
 
  return(
    <HabitoPronto>

      <span>
        <div>  <h1> {name}</h1>  <ion-icon onClick={()=>{excluirHabito()}} name="trash-outline"></ion-icon>  </div>
       
    {allDays.map((D)=>{
     const {dia,num} = D;
     return(
      days.includes(num)?(
       <Dias style={{ backgroundColor: "#CFCFCF" ,color: "white" }}>   {dia} </Dias>)
       :
       (<Dias> {dia} </Dias>

      )
     )

    })}
    
    </span>
     </HabitoPronto>
    
  )
 })

return (
<Main>
<Adicionar> <h1> Meus hábitos</h1>  <button onClick={()=>{setHabilitado(true)}} >  <span>+</span> </button> </Adicionar>

{habilitado === true ? <CriarH> 
    <input type="text" required onChange={(e)=> setNameHabito(e.target.value)}  />
    <div>
    <Days allDays={allDays} arrayDays={arrayDays} setArrayDays={setArrayDays} />  
     </div>
    <Opçoes> <Cancelar onClick={()=>{setHabilitado(false)}} > Cancelar </Cancelar> <Salvar onClick={novoHabito} > Salvar </Salvar> </Opçoes>
 
 </CriarH> : ""}


{ arrayHabitos.length === 0 ? <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p> 
 : 
<>  {HabitoFeito} </> 
}
</Main>

)
}
const Main = styled.div`
width: 100%;
margin-bottom: 70px;
min-height: 400px;
display: flex;
flex-direction: column;
align-items: center;
p{
margin-left: 15px;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 17.976px;
line-height: 22px;

color: #666666;
}
`
const Adicionar = styled.div`
margin-top: 70px;
width: 100%;
height: 70px;
display: flex;
align-items: center;
justify-content: space-between;

h1{
margin-left: 25px;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 22.976px;
line-height: 29px;
color: #126BA5;
}

button{
border: none;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
margin-right: 25px;
width: 40px;
height: 35px;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 26.976px;
color: #FFFFFF;
background: #52B6FF;
border-radius: 4.63636px;
}
`

const CriarH = styled.div`
max-width: 600px;
min-width: 340px;
height: 180px;
background: #FFFFFF;
border-radius: 5px;
display: flex;
align-items: center; 
justify-content: center;
flex-direction: column;
margin-bottom: 20px;
div{
display: flex;
}
input{
width: 303px;
height: 45px;
background: #FFFFFF;
border: 1px solid #D5D5D5;
border-radius: 5px;
}


`
const Dias = styled.button`
margin-top: 5px;
margin-left: 5px;
width: 30px;
height: 30px;
border: 1px solid #D5D5D5;
border-radius: 5px;
cursor: pointer;

`

const Opçoes = styled.div`
margin-top: 25px;
margin-left: 80px;
`
const Cancelar = styled.button`
cursor: pointer;
margin-left: 15px;
width: 84px;
height: 35px;
background-color: white;
border: none;
color: #52b6ff;
`
const Salvar = styled.button`
cursor: pointer;
width: 84px;
height: 35px;
left: 257px;
top: 277px;
background: #52B6FF;
border-radius: 5px;
color:white;
border: none;
`
const HabitoPronto = styled.div`

max-width: 600px;
min-width: 340px;
height: 91px;
background: #FFFFFF;
border-radius: 5px;
display: flex;
align-items: center; 
justify-content: center;
flex-direction: column;
margin-bottom: 20px;
div{
  position: relative;
display: flex;
justify-content: space-between;
}
ion-icon{
  position: absolute;
  left: 270px;
  top: -10px;
  cursor: pointer;
}

`