import Image1 from '../../assets/images/Image1.jpg';
import Image2 from '../../assets/images/Image2.jpg';
import Image3 from '../../assets/images/Image3.jpg';
import Image4 from '../../assets/images/Image4.jpg';
import Image5 from '../../assets/images/Image5.jpg';
import Image6 from '../../assets/images/Image6.jpg';
import Image7 from '../../assets/images/Image7.jpg';
import Image8 from '../../assets/images/Image8.jpg';


function AboutPage() {
    return (
        <div className="bg-white font-gothic">
        <header className="bg-gray-800 text-white p-4">
            <h1 className="text-5xl font-bold text center">About Ryan Reynolds</h1>
            <p className="text-lg">Actor, Producer, Entrepreneur</p>
        </header>
        <div className="container mx-auto p-8">
            <p className="text-lg mb-4 leading-relaxed text-gray-800 font-gothic">
                Ryan Reynolds, born on October 23, 1976, in Vancouver, Canada, is a versatile actor, producer, and entrepreneur. With his charismatic personality and unique comedic talent, he has made a name for himself in Hollywood.
            </p>
            <h2 className="text-3xl font-bold mb-2 text-gray-800 font-bungee text-center">Film Career</h2>
            <p className="mb-4 leading-relaxed text-gray-800 font-gothic">
                Reynolds is known for his roles in films such as "Deadpool," "The Proposal," and "Free Guy." His portrayal of Wade Wilson/Deadpool in the "Deadpool" films earned him widespread acclaim and popularity. 
                In addition to his comedic roles, he has also starred in dramatic films like "Woman in Gold" and action-packed thrillers such as "6 Underground."
            </p>
            <h2 className="text-3xl font-bold mb-2 text-gray-800 font-bungee text-center">Aviation Gin</h2>
            <p className="mb-4 leading-relaxed text-gray-800 font-gothic ">
                In 2016, Reynolds acquired the brand Aviation Gin and has since become its primary spokesperson. With his humorous marketing approach and passion for the brand, he has helped make Aviation Gin one of the most popular gins on the market.
                His involvement has not only elevated the brand's visibility but also contributed to its success in a competitive market.
            </p>
            
            {/* Gallery of Smaller Images */}
            <h3 className="text-xl font-semibold text-black mb-4 text-center">Gallery</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="rounded-md shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
                        <img src={Image1} alt="Image 1" className="w-full h-auto object-cover" />
                    </div>
                    <div className="rounded-md shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
                        <img src={Image2} alt="Image 2" className="w-full h-auto object-cover" />
                    </div>
                    <div className="rounded-md shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
                        <img src={Image3} alt="Image 3" className="w-full h-auto object-cover" />
                    </div>
                    <div className="rounded-md shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
                        <img src={Image4} alt="Image 4" className="w-full h-auto object-cover" />
                    </div>
                    <div className="rounded-md shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
                        <img src={Image5} alt="Image 5" className="w-full h-auto object-cover" />
                    </div>
                    <div className="rounded-md shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
                        <img src={Image6} alt="Image 6" className="w-full h-auto object-cover" />
                    </div>
                    <div className="rounded-md shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
                        <img src={Image7} alt="Image 7" className="w-full h-auto object-cover" />
                    </div>
                    <div className="rounded-md shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
                        <img src={Image8} alt="Image 8" className="w-full h-auto object-cover" />
                    </div>
                </div>
            {/* </Slider> */}

            <p className="text-lg mt-8 text-gray-800 font-gothic">
                Reynolds' talent, charisma, and entrepreneurial spirit have made him one of the most influential figures in the entertainment industry. His work as an actor and entrepreneur has earned him numerous accolades and recognition.
            </p>
            {/* Additional Resources Section */}
            <h2 className="text-xl font-bold mt-8 mb-4 text-gray-800 font-bungee text-center">Additional Resources</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-gray-200 p-4 rounded-md shadow-md">
                    <ul className="list-disc list-inside mb-4 text-gray-800 font-gothic">
                        <li>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/pb_-Pld42IY?si=L0Ga3EwIASsbaIR0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> 
                        </li>
                        <li>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/Szj1iqYanFM?si=xQjHn45VbvPhQC4f" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> 
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div> 
    );
};

export default AboutPage;