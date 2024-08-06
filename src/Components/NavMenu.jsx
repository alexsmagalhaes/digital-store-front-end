import { Link } from "react-router-dom";

const NavMenu = () => {

    return (

        <div className="flex flex-wrap justify-between">

            <nav >
                <ul  
                className="flex flex-wrap gap-10 pt-8">

                    <li 
                    className="text-gray-600 font-semibold
                    hover:text-pink-600 hover:underline ">

                        <Link to={""}>Home</Link>
                    </li>

                    <li className="text-gray-600 font-semibold
                    hover:text-pink-600 hover:underline ">

                        <Link to={""}>Produtos</Link>
                    </li>

                    <li className="text-gray-600 font-semibold
                     hover:text-pink-600 hover:underline ">
                        <Link to={""}>Categorias</Link>

                    </li>

                    <li className="text-gray-600 font-semibold
                     hover:text-pink-600 hover:underline">
                        
                        <Link to={""}>Meus Pedidos</Link>
                    </li>

                </ul>

            </nav>
        </div>

    );


}

export default NavMenu;