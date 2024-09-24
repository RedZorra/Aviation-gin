import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

function FooterHome() {
    return(
        <footer className="w-full bg-black shadow-md p-8">
            <div className="container mx-auto flex justify-center space-x-4">
                <p className="text-white">Follow us on social media:</p>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebookF className="text-blue-600 hover:text-blue-800" />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="text-purple-600 hover:text-purple-800" />
                </a>
                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                        <FaYoutube className="text-red-600 hover:text-red-800" />
                </a>
                <p className="text-white">Copyright © 2023 Aviation American Gin</p>
            </div>
        </footer>
    )
}

export default FooterHome;