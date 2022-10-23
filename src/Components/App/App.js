
import { useState } from "react";
import { BrowserRouter, Route, Routes  } from "react-router-dom";
import ContextInfo from "../../Context/ContextInfo";
import ContextUser from "../../Context/ContextUser";
import Cadastro from "../Cadastro/Cadastro";
import GlobalStyle from "../GlobalStyle";
import Habitos from "../Habitos/Habitos";
import Historico from "../Historico/Historico";
import Hoje from "../Hoje/Hoje";
import Login from "../Login/Login";

export default function App() {
  const [info,setInfos] = useState({
    email: "",
    password: "",
    name: "",
    image: "",
    token:"",
  });
const [disable, setDisable ] = useState(false)
const [email, setEmail] = useState("")
const [senha, setSenha] = useState("")
const [nome, setNome] = useState("")
const [perfil, setPerfil] = useState("")
const [imagem, setImagem ] = useState("https://thumbs.dreamstime.com/b/%C3%ADcone-do-usu%C3%A1rio-do-vetor-7337510.jpg")
const [token,setToken ] = useState("")
  return (
    <> 
  <ContextInfo.Provider value={{ info, setInfos }}> 
  <ContextUser.Provider value={{ imagem, setImagem }}>
<GlobalStyle/>
<BrowserRouter>
<Routes>
<Route path= "/" element = {<Login setToken={setToken} disable={disable} setDisable={setDisable}  email={email} setEmail={setEmail} senha={senha} setSenha={setSenha}  />}></Route>
<Route path= "/cadastro" element = {<Cadastro perfil={perfil} setPerfil={setPerfil}  disable={disable} setDisable={setDisable} nome = {nome} setNome={setNome} email={email} setEmail={setEmail} senha={senha} setSenha={setSenha}  />}></Route>
<Route path= "/habitos" element = {<Habitos token={token} />}></Route>
<Route path= "/hoje" element = {<Hoje token={token} />}></Route>
<Route path= "/historico" element = {<Historico/>}></Route>
</Routes>
</BrowserRouter>
    
</ContextUser.Provider>
</ContextInfo.Provider>
  </>
  );

  
}
