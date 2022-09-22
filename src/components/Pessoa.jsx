function Pessoa(props) {
    return(
        <div>
            <img src={props.foto} alt={props.nome}/>
            <h2>Nome: {props.nome}</h2>
            <h2>Idade: {props.idade}</h2>
            <h2>Profissão: {props.profissao}</h2>
        </div>


    )
}

export default Pessoa