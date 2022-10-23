import styled from "styled-components"
import Footer from "../Footer/Footer"
import Habito from "../Habito/Habito"
import Header from "../Header/Header"

export default function Habitos({token}){
    console.log(token)


return(

    <Main>
       <Header />
    <Habito token={token} />
       <Footer/>


    </Main>


)


}

const Main = styled.div`
width: 100%;
min-height: 800px;
background: #E5E5E5;
`
