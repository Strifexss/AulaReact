import Button from "./Button"
function Evento({numero}) {
    function meuEvento() {
        console.log(`Aqui tá o numero: ${numero}`)
    }
    
    return(
        <div>
            <p>Click para disparar um evento</p>
            <Button event={meuEvento} text="Primeiro Evento!"/>
        </div>
    )
}
export default Evento