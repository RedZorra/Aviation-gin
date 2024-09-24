import React from 'react';
import Vasectomy from '../../assets/images/TheVasectomy.jpg'; 
import Mule from '../../assets/images/AviationMuleImage.jpg';
import Sangria from '../../assets/images/AviationSangria.jpg';
import Botanical from '../../assets/images/BotanicalImage.jpg';
import BeesKnees from '../../assets/images/BeeKneesImage.jpg';
import Ovation from '../../assets/images/OvationImage.jpg';
import SweetSour from '../../assets/images/SweetSourImage.jpg';

function CocktailList() {
    const cocktails = [
        {
            image: Ovation,
            name: "Ovation",
            ingredients: [
                "1.5 oz Aviation American Gin",
                "3 oz Club Soda",
                "Orange Slice"
            ],
            description: "Pour Aviation Gin into Collins glass filled with Ice. Top with Club Soda and garnish with Orange Slice."
        },
        {
            image: BeesKnees,
            name: "Bee's Knees",
            ingredients: [
                "1.5 oz Aviation American Gin",
                "0.75 oz Lemon Juice",
                "0.75 oz Clover Honey Syrup"
            ],
            description: "Combine all ingredients into cocktail shaker with Ice. Shake, then strain into glass with Ice. Garnish with Lemon Peel."
        },
        {
            image: Botanical,
            name: "Botanical G & T",
            ingredients: [
                "1.5 oz Aviation American Gin",
                "3 oz Tonic Water",
                "Cinnamon Stick",
                "Orange Peel"
            ],
            description: "Pour Aviation Gin into glass filled with Ice and top with Tonic Water. Gently stir and garnish with Cinnamon Stick & Orange Peel."
        },
        {
            image: SweetSour,
            name: "Sweet & Sour G & T",
            ingredients: [
                "1.5 oz Aviation American Gin",
                "3 oz Tonic Water",
                "Passion Fruit Half"
            ],
            description: "Pour Aviation Gin into glass filled with Ice and top with Tonic Water. Gently stir and garnish with Passion Fruit Half & Lemon Wheel."
        },
        {
            image: Mule,
            name: "Aviation American Mule",
            ingredients: [
                "1.5 oz Aviation American Gin",
                "3 oz Ginger Beer",
                "Lime Wedge"
            ],
            description: "Pour Aviation Gin into glass filled with Ice and top with Ginger Beer. Gently stir and garnish with Lime Wedge."
        },
        {
            image: Vasectomy,
            name: "The Vasectomy",
            ingredients: [
                "1.5 oz Aviation American Gin",
                "3 oz Club Soda",
                "Lemon Slice"
            ],
            description: "Pour Aviation Gin into Collins glass filled with Ice. Top with Club Soda and garnish with Lemon Slice."
        },
        {
            image: Sangria,
            name: "Aviation Sangria",
            ingredients: [
                "1.5 oz Aviation American Gin",
                "1.5 oz Red Wine",
                "1.5 oz Orange Juice",
                "1.5 oz Pineapple Juice",
                "1 oz Simple Syrup"
            ],
            description: "Combine all ingredients into cocktail shaker with Ice. Quick shake, then strain into glass with Ice. Garnish with Berries."
        }
    ];

    return (
        <section className="bg-gray-100 p-8 rounded-lg">
            <h3 className="text-xl font-semibold text-black mb-4">Cocktails</h3>
            {cocktails.map((cocktail, index) => (
                <div key={index} className="flex bg-white rounded-lg shadow-md p-4 mb-4">
                    <img src={cocktail.image} alt={cocktail.name} className="h-32 w-32 object-cover rounded-md mr-4" />
                    <div className="flex-grow">
                        <h4 className="text-lg font-semibold text-gray-800">{cocktail.name}</h4>
                        <h5 className="text-md text-gray-600 mb-2"></h5>
                        <ul className="list-disc list-inside mb-2 text-gray-700">
                            {cocktail.ingredients.map((ingredient, index) => (
                                <li key={index}>{ingredient}</li>
                            ))}
                        </ul>
                        <p className="text-gray-500">{cocktail.description}</p>
                    </div>
                </div>
            ))}
        </section>
    );
}

export default CocktailList;