import { Link } from "react-router-dom";

const NavMenu = () => {

    return (

        <div>

            <nav>
                <ul>
                    <li>
                        <Link to={""}>Home</Link>
                    </li>
                    <li>
                        <Link to={""}>Produtos</Link>
                    </li>
                    <li>
                        <Link to={""}>Categorias</Link>
                    </li>
                    <li>
                        <Link to={""}>Meus Pedidos</Link>
                    </li>

                </ul>

            </nav>
        </div>

    );


}

export default NavMenu;