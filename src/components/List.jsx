import Item from "./Item"
function List() {
    return(
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca = "Ferrari" Lancamento= {1985}/>
                <Item marca = "Lamborguini" Lancamento={1964}/>
                <Item marca = "Bmw" Lancamento={1958}/>
            </ul>
        </>
    )
}
export default List