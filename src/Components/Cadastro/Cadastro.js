import axios from "axios"
import { ThreeDots } from "react-loader-spinner"
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import logo from "../../assets/img/logo.png"
export default function Cadastro(props){
const {setNome,email,nome,senha,perfil,setEmail,setPerfil,setSenha,disable,setDisable} = props
const navigate = useNavigate();
function cadastrar(event){
    setDisable(true)
    event.preventDefault();
const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up`,{
	email: `${email}`,
	name: `${email}` ,
	image: `${perfil}` ,
	password: `${senha}`
});
promise.then((response)=>{cadastrou(response)})
promise.catch((err)=> alert("Preencha os campos corretamente"), setDisable(false) )

console.log(email)
console.log(senha)
console.log(perfil)
console.log(nome)
}

function cadastrou(response){
    console.log(response)
    setDisable(false)
    navigate("/")

}


return(
<Main>
<Logo src={logo} />
<Inputs>
<form onSubmit={cadastrar}>
<input type="email" required placeholder="email" onChange={(e)=> setEmail(e.target.value)} />
<input type= "password" placeholder="senha" onChange={(e)=> setSenha(e.target.value)} />
<input type="text" placeholder="name" onChange={(e)=> setNome(e.target.value)} />
<input type="url" placeholder="foto" onChange={(e)=> setPerfil(e.target.value)} />
<button style={{alignItens:"Center"}} type="submit" disabled = {disable}> 
{disable === true ? <ThreeDots 
height="36" 
width="36" 
radius="9"
color="white" 
ariaLabel="three-dots-loading"
wrapperStyle={{}}
wrapperClassName=""
visible={true}
 /> : 
 
 <p> Cadatrar </p> } </button>

</form> 
<Link to = "/" > 
<Login> Já tem uma conta? Faça login! </Login>
</Link>
</Inputs>

</Main>

)


}
const Main = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;


`

const Logo = styled.img`
margin-top: 80px;

`

const Inputs = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;


input {
display: flex;
align-items: center;
justify-content: center;
margin-top: 10px;
margin-left: 10px;
width: 327px;
height: 51px;
background: #FFFFFF;
border: 1px solid #D5D5D5;
border-radius: 3px;
}
button{
margin-top: 40px;
width: 303px;
height: 45px;
left: 36px;
top: 381px;
background: #52B6FF;
border-radius: 4.63636px;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 20.976px;
line-height: 26px;
text-align: center;
cursor: pointer;
color: #FFFFFF;
align-items: center;
justify-content: center;
display: flex;
}
form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
`
const Login = styled.h3`
width: 232px;
height: 17px;
left: 74px;
top: 451px;
margin-top: 20px;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 13.976px;
line-height: 17px;
text-align: center;
text-decoration-line: underline;
color: #52B6FF;
cursor: pointer;
`