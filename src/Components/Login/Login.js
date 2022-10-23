import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/img/logo.png";
import { ThreeDots } from 'react-loader-spinner'
import { useContext } from "react";
import ContextInfo from "../../Context/ContextInfo";
import ContextUser from "../../Context/ContextUser";

export default function Login(props) {
    const {info,setInfos} = useContext(ContextInfo); 
    const {setImagem} = useContext(ContextUser);
  const { disable, setDisable, email, setEmail, senha, setSenha, setToken} = props;
  const navigate = useNavigate();
 
  function entrar(event) {
    event.preventDefault();
    setDisable(true);
    const promise = axios.post(
      `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login`,
      {
        email: `${email}`,
        password: `${senha}`,
      }
    );
    promise.then((response) => {setToken(response.data.token)
      mudarDeTela(response);
    });
    promise.catch(() => {
      setDisable(false)
        setInfos({
          ...info,
          email: "",
          password: "",
          name: "",
          image: "",
          token:"",
        });
        alert("Login ou senha inválidos");
      });
    
  }

  function mudarDeTela(response) {
    
    setInfos({...info,
        email: response.data.email,
        password: response.data.password,
        name: response.data.name,
        image: response.data.image,
        token:response.data.token,
      });
      setImagem(response.data.image)
    setDisable(false)
    navigate("/hoje");
  }

  return (
    <Main>
      <Logo src={logo} />
      <Inputs>
        <form onSubmit={entrar}>
          <input
            type="email"
            required
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="senha"
            onChange={(e) => setSenha(e.target.value)}
          />
          <button type="submit" disabled={disable}> {disable === true ? <ThreeDots 
height="36" 
width="36" 
radius="9"
color="white" 
ariaLabel="three-dots-loading"
wrapperStyle={{}}
wrapperClassName=""
visible={true}
 /> : 
 
 <p> Entrar</p> }
          </button>
        </form>
      </Inputs>
      <Link to="/cadastro">
        <Cadastro> Não tem uma conta? Cadastre-se! </Cadastro>
      </Link>
    </Main>
  );
}

const Main = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.img`
  margin-top: 80px;
`;
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
    background: #ffffff;
    border: 1px solid #d5d5d5;
    border-radius: 3px;
  }
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
    width: 303px;
    height: 45px;
    left: 36px;
    top: 381px;
    background: #52b6ff;
    border-radius: 4.63636px;
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 20.976px;
    line-height: 26px;
    text-align: center;
    cursor: pointer;
    color: #ffffff;
  }
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
const Cadastro = styled.h3`
  width: 232px;
  height: 17px;
  left: 74px;
  top: 451px;
  margin-top: 20px;
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 13.976px;
  line-height: 17px;
  text-align: center;
  text-decoration-line: underline;
  color: #52b6ff;
  cursor: pointer;
`;
