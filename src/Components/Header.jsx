import 'primeicons/primeicons.css';
import NavMenu from './NavMenu';

const Header = () => {
    return (
        <header className="bg-white p-10">
            <div className="flex justify-between  items-center gap-1">

                <i className="pi pi-bars @tablet:hidden" style={{ color: '#1F1F1F', fontSize: '1.5rem' }}></i>
                <h1 className="text-pink-600 text-lg font-medium hover:text-pink-700 ">Digital Store</h1>

                <div className="w-auto bg-transparent
                 @tablet:w-1/4 bg-gray-100 rounded-md p-1
                 @desktop:w-5/12">

                    <input  className="bg-transparent hidden 
                    @tablet:inline p-1 rounded-md focus:outline-none w-9/12 
                    @desktop:w-11/12" type="text" placeholder="Pesquise" />

                    <i className="pi pi-search bg-transparent" 
                    style={{ color: '#CECECE', fontSize: '1.5rem' }}></i>

                </div>

                <button className="hidden @tablet:flex underline text-pink-600 font-medium hover:text-pink-700 hover:underline">Cadastre-se</button>
                <button className="hidden @tablet:flex text-white bg-pink-600 p-2 rounded-md w-24 hover:bg-pink-700 ">Login</button>

                <button>
                    <i className="pi pi-cart-plus" style={{ color: '#C92071', fontSize: '1.5rem' }}></i>
                </button>

            </div>

            <div className="hidden @desktop:flex">
                <NavMenu />
            </div>

        </header>
    );
};

export default Header;
