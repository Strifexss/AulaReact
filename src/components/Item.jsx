import { ReactPropTypes } from "react"
function Item({marca, Lancamento}) {
    return(
        <>
        <li>{marca} - {Lancamento}</li>
        </>
    )
}
export default Item