import Image1 from '../../assets/images/Image1.jpg';
import Image2 from '../../assets/images/Image2.jpg';
import Image3 from '../../assets/images/Image3.jpg';

function AboutPage() {
    return (
        <div className="bg-white font-gothic">
        <header className="bg-gray-800 text-white p-4">
            <h1 className="text-5xl font-bold text center">About Ryan Reynolds</h1>
            <p className="text-lg">Actor, Producer, Entrepreneur</p>
        </header>
        <div className="container mx-auto p-8">
            <p className="text-lg mb-4 leading-relaxed text-gray-800">
                Ryan Reynolds, born on October 23, 1976, in Vancouver, Canada, is a versatile actor, producer, and entrepreneur. With his charismatic personality and unique comedic talent, he has made a name for himself in Hollywood.
            </p>
            <h2 className="text-3xl font-bold mb-2 text-gray-800">Film Career</h2>
            <p className="mb-4 leading-relaxed text-gray-800">
                Reynolds is known for his roles in films such as "Deadpool," "The Proposal," and "Free Guy." His portrayal of Wade Wilson/Deadpool in the "Deadpool" films earned him widespread acclaim and popularity. Reynolds has also starred in a variety of genres, showcasing his versatility as an actor. 
            </p>
            <h2 className="text-3xl font-bold mb-2 text-gray-800">Aviation Gin</h2>
            <p className="mb-4 leading-relaxed text-gray-800 ">
                In 2016, Reynolds acquired the brand Aviation Gin and has since become its primary spokesperson. With his humorous marketing approach and passion for the brand, he has helped make Aviation Gin one of the most popular gins on the market.
            </p>
            
            {/* Gallery of Smaller Images */}
            <h3 className="text-xl font-semibold text-black mb-4">Gallery</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <img src={Image1} alt="Image 1" className="rounded-md shadow-md h-40 w-full object-cover transition-transform duration-300 hover:scale-105" />
                <img src={Image2} alt="Image 2" className="rounded-md shadow-md h-40 w-full object-cover transition-transform duration-300 hover:scale-105" />
                <img src={Image3} alt="Image 3" className="rounded-md shadow-md h-40 w-full object-cover transition-transform duration-300 hover:scale-105" />
            </div>

            <p className="text-lg mt-8 text-gray-800">
                Reynolds' talent, charisma, and entrepreneurial spirit have made him one of the most influential figures in the entertainment industry. His work as an actor and entrepreneur has earned him numerous accolades and recognition.
            </p>
        </div>
    </div> 
    );
};

export default AboutPage;