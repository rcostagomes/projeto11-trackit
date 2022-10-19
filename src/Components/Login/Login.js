
import { Link } from "react-router-dom"
import styled from "styled-components"
import logo from "../../assets/img/logo.png"



export default function Login(props){
    const {disable, setDisable} = props;

    function entrar(){
        setDisable(true)
    console.log("Entrou")
    
    }
    



    
console.log (disable) 
    return(
    <Main>
 <Logo src={logo} />
 <Inputs> 
<form onSubmit={()=> entrar(setDisable) } >
<input disabled={disable} type="email" placeholder="Email" /> 
<input disabled={disable} type="password" placeholder="Senha"  /> 
<button type="submit" disabled={disable} >Entrar</button>
</form>
</Inputs>
<Link to = "/cadastro"> 
<Cadastro> Não tem uma conta? Cadastre-se! </Cadastro>
</Link>
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

}
form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
`
const Cadastro = styled.h3`
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