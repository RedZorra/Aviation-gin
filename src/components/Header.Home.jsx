import Logo from '../assets/images/Logo-Aviationgin.jpg';
import { Link } from 'react-router-dom';

function HeaderHome() {
  return (
    <header className="flex items-center justify-between bg-black text-white p-4 shadow-md sticky top-0 z-10 font-gothic">
        <div className="flex-grow flex justify-center">
            <img src={Logo} alt="Aviation Gin" className="h-12" />
        </div>
        <nav className="flex items-center">
            <ul className="flex space-x-4">
                <li>
                    <Link to="/" className="text-gray-300 hover:text-red-500">Home</Link>
                </li>
                <li>
                    <Link to="/about" className="text-gray-300 hover:text-red-500">About</Link>
                </li>
                <li>
                    <Link to="/limited-edition" className="text-gray-300 hover:text-red-500">Limited Edition</Link>
                </li>
                <li>
                    <Link to="/movie" className="text-gray-300 hover:text-red-500">Movie</Link>
                </li>
            </ul>
        </nav>
    </header>   
  );
}

export default HeaderHome;