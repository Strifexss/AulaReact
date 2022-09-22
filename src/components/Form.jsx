import { useState } from "react"
import style from "./Form.module.css"
function Form() {

    function cadastrarUsuario(e) {
        e.preventDefault()
        console.log('Cadastrou o usuario')
        console.log(name)
    }

    const[name, setName] = useState()

    return(
        <div className={style.alinhar}>
            <h1>Meu Cadastro</h1>
            <form onSubmit={cadastrarUsuario}></form>
            <div>
                <label htmlFor="name">Nome:</label>
                <input type="text" name="name" id="name" placeholder="Digite o seu nome" />
            </div>
            <div>
                <label htmlFor="password">Senha:</label>
                <input type="password"  id="password" name="password" placeholder="Digite a sua senha" onChange={(e)=> setName(e.target.value)}/>
            </div>
            <div>
                <input type="submit" value="Cadastrar" />
            </div>
        </div>
    )
}
export default Form