
import { useState } from "react";
import { BrowserRouter, Route, Routes  } from "react-router-dom";
import Cadastro from "../Cadastro/Cadastro";
import GlobalStyle from "../GlobalStyle";
import Habitos from "../Habitos/Habitos";
import Login from "../Login/Login";

export default function App() {
const [disable, setDisable ] = useState(false)
const [email, setEmail] = useState("")
const [senha, setSenha] = useState("")
const [nome, setNome] = useState("")
const [perfil, setPerfil] = useState("https://thumbs.dreamstime.com/b/%C3%ADcone-do-usu%C3%A1rio-do-vetor-7337510.jpg")



  return (
    <div> 
<GlobalStyle/>
<BrowserRouter>
<Routes>
<Route path= "/" element = {<Login disable={disable} setDisable={setDisable} />}></Route>
<Route path= "/cadastro" element = {<Cadastro nome = {nome} setNome={setNome} email={email} setEmail={setEmail} senha={senha} setSenha={setSenha} perfil={perfil} setPerfil={setPerfil}  />}></Route>
<Route path= "/habitos" element = {<Habitos perfil={perfil} />}></Route>
{/* 
<Route path= "" element = {}></Route>
<Route path= "" element = {}></Route> */}
</Routes>
</BrowserRouter>
    </div>
  );
}
