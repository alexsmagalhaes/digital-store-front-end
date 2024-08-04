

import NavMenu from "./NavMenu";
const Header = () => {
    return (
        <header>

            <div>
                <h1>Logo</h1>
                <input type="text" />
                <button>Cadastrar</button>
                <button>Login</button>
            </div>

            <NavMenu/>

        </header>
    );

};

export default Header;
