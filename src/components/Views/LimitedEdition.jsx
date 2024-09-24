import Deadpool from "../../assets/images/deadpool-aviationgin.webp";
import { Link } from 'react-router-dom';
import CocktailList from "./CocktailsList";


function LimitedEdition() {
    return (
        <div className="bg-white">
            <div className="container mx-auto p-4 w-screen">
                <section className="relative text-center mb-8">
                    <img src={Deadpool} alt="Deadpool" className="w-full h-auto rounded-lg shadow-lg mb-8" />
                    <h3 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl font-bold text-white mb-2 text-right">
                    Welcome To The: Deadpool Cinematic Universe
                    </h3>
                    <h4 className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-2xl font-semibold font-bungee text-right">Deadpool &</h4>
                    <h4 className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-2xl font-semibold text-yellow-500 text-right">Wolverine</h4>
                </section>
                <main className="bg-gray-700 text-white p-8 rounded-lg shadow-lg">
                    <h1 className="text-4xl font-bold text-white mb-4 font-bungee">Marvel at the Cinematic Universe</h1>
                    <h2 className="text-2xl text-white mb-4">Aviation American Gin is introducing six new limited edition bottle variants, ginspired by Marvel Studios’ “Deadpool & Wolverine”</h2>
                    <p className="text-gray-300 mb-4 font-gothic">Our limited edition gin is made from the finest botanicals, including juniper, lavender, and orange peel. The unique distillation process ensures an unmistakable aroma and taste.</p>
                    <p className="text-gray-300 mb-8 font-gothic">The limited edition gin is available in six different bottle variants, each inspired by a different character from the Marvel Cinematic Universe. The bottles are designed to be collectible and are perfect for any Marvel fan.</p>
                </main>

                {/* Cocktails Section */}
                <CocktailList />

                {/* Video Section */}
                <div className="w-full max-w-2xl mb-8 mx-auto">
                    <iframe 
                        width="100%" 
                        height="200" 
                        src="https://www.youtube.com/embed/rtRl9HZGZEE?si=nIOyTdvDgM8Orebm" 
                        title="YouTube video player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerPolicy="strict-origin-when-cross-origin" 
                        allowFullScreen
                    ></iframe>
                </div>
            <Link to="/" className="bg-red-600 text-white p-4 rounded-lg hover:bg-red-800">Back to Home</Link>
            </div>
        </div>
    );
}

export default LimitedEdition;