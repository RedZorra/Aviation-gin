// import DeadpoolLogo from '../assets/DeadpoolWolverineLogo..png';
import { Link } from 'react-router-dom';

function HeaderLimited() {
    return(
        <header className="flex items-center justify-between bg-white-800 text-white p-4 shadow-md sticky top-0 z-10">
            {/* <img src={DeadpoolLogo} alt="DeadpoolLogo" className="h-12" /> */}
            <nav className="container mx-auto flex justify-between items-center p-4">
                <ul className="flex space-x-4">
                    <li><a href="#about" className="text-gray-700 hover:text-red-500">About</a></li>
                    <li>
                        <Link to="/limited-edition" className="hover:text-red-500">Limited Edition</Link>
                    </li>
                    <li><a href="#film" className="text-gray-700 hover:text-red-500">Movie</a></li>
                </ul>
            </nav>
        </header>   
    );
}

export default HeaderLimited;