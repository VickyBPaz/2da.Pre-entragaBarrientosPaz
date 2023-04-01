import CartWidget from "../CartWidget/CartWidget"

const Navbar = () => {
    return (
        <nav>
            <h3>Dr. House</h3>
            <div>
                <button type="button" class="btn btn-primary">Aire Acondicionado</button>
                <button type="button" class="btn btn-secondary">Plomeria</button>
                <button type="button" class="btn btn-dark">Reparaciones</button>
            </div>
            <CartWidget />
        </nav>
    )
}   

export default Navbar