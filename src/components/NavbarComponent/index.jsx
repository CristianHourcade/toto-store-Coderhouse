export const NavbarComponent = ({cart}) => {
    let contador = 0;
    cart.forEach(element => {
        contador += element.price
    })
    console.log(contador)
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand">Titulo</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">Seccion 1</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">Seccion 2</a>
                    </li>
                    <li>
                    <a className="nav-link">Carrito: {cart.length}</a>
                        
                    </li>
                </ul>
            </div>
        </nav>
    )
}
