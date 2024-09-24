import HeaderLimited from "../HeaderLimited";
import Deadpool from "../../assets/images/deadpool-aviationgin.webp";
import { Link } from 'react-router-dom';
import Vasectomy from "../../assets/images/TheVasectomy.jpg";


function LimitedEdition() {
    return (
        <div className="bg-black">
            <div className="container mx-auto p-4 w-screen">
                <section className="relative text-center mb-8">
                    <img src={Deadpool} alt="Deadpool" className="w-screen h-auto rounded-lg shadow-lg mb-8" />
                    <h3 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl font-bold text-white mb-2">Welcome To The : Deadpool Cinematic Universe</h3>
                    <h4 className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-2xl font-semibold text-red-500">Deadpool & Wolverine</h4>
                </section>
            <main>
                <h1 className="text-4xl font-bold text-black mb-4">Marvel at the cinematic Universe</h1>
                <h2 className="text-2xl text-blue-800">Aviation American Gin is introducing six new limited edition bottle variants, ginspired by Marvel Studios’ “Deadpool & Wolverine”</h2>
                    <p className="text-gray-700 mb-4">Our limited edition gin is made from the finest botanicals, including juniper, lavender, and orange peel. The unique distillation process ensures an unmistakable aroma and taste.</p>
                    <p className="text-gray-700 mb-8">The limited edition gin is available in six different bottle variants, each inspired by a different character from the Marvel Cinematic Universe. The bottles are designed to be collectible and are perfect for any Marvel fan.</p>
            </main>
            <section>
                <h3 className="text-xl font-semibold text-black mb-2">Cocktails:</h3>
                <ul className="list-disc list-inside mb-8">
                    <li><strong>The Vasectomy:</strong>1 oz Cranberry Juice , 3 oz Tonic, Dash of Lemon Juice, 1.5 oz Aviation American Gin, Tall Glass of Ice
                    <img src={Vasectomy} alt="The Vasectomy" className="h-24 w-24 object-cover rounded-md ml-2"/></li>
                    <li><strong>Gin & Tonic:</strong> 1 oz Aviation American Gin, 0.5 oz Bitter Red Liqueur, topped with tonic water</li>
                    <li><strong>Deadpool Martini:</strong> 1 oz Aviation American Gin, 0.5 oz Bitter Red Liqueur, 0.5 oz Vermouth</li>
                </ul>
                <div className="w-full max-w-2xl mb-8">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/rtRl9HZGZEE?si=nIOyTdvDgM8Orebm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </section>
            <Link to="/" className="bg-red-600 text-white p-4 rounded-lg hover:bg-red-800">Back to Home</Link>
            </div>
        </div>
    );
}

export default LimitedEdition;