import { useState } from "react"
function Condicional() {
   
   const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState() 
   
    function enviarEmail(e) {
        e.preventDefault()
        setUserEmail(email)
        console.log(userEmail)
    }
    return(
        <div>
            <h1>Condicional Renderização!</h1>
            <h2>Cadastre o seu email</h2>
            <form >
                <input type="email" placeholder="Digite o seu Email" />
                <button type="submit" onClick={enviarEmail} onChange={(e) => setEmail(e.target.value)}>Enviar Email </button>
                {userEmail}
            </form>
            
        </div>
    )
}
export default Condicional