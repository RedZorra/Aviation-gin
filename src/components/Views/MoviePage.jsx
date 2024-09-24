import MoviePoster from "../../assets/images/deadpool-wolverine-movie.jpg";
import RecliningDeadpool from "../../assets/images/RecliningDeadPool.jpg";

function MoviePage() {
    return (
        <div className="bg-gray-600 py-12 ">
            <div className="container mx-auto text-center">
                <img src={MoviePoster} alt="Deadpool-Wolverine" className="rounded-lg shadow-lg mb-8" />
                <h1 className="text-5xl font-bold text-white mt-8"><span className="font-bungee">Deadpool</span> & <span className="text-yellow-400">Wolverine</span> <span className="text-black">Present</span></h1>
                <p className="text-2xl text-black mt-2 font-gothic">A Ryan Reynolds Film</p>
                <h2 className="text-2xl text-black mt-3 font-gothic">Only in Theaters: July 26, 2024</h2>
            </div>
            <div className="container mx-auto p-8 bg-grey-500">
                <div className="bg-gray-800 rounded-lg p-4">
                    <iframe 
                        width="100%" 
                        height="315" 
                        src="https://www.youtube.com/embed/73_1biulkYk?si=ARSkhbElpRdQEYmY" 
                        title="YouTube video player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerPolicy="strict-origin-when-cross-origin" 
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
            <div className="flex flex-col items-center mx-auto p-6 bg-white text-black">
                <h3 className="text-2xl font-bungee text-red-500 mb-4 ">Synopsis</h3>
                <p className="text-xl text-gray-900 mb-4 font-gothic">
                    In this action-packed film, Ryan Reynolds reprises his role as the wise-cracking mercenary Deadpool. When a mysterious figure from his past re-emerges, Deadpool must team up with the gruff mutant Wolverine to take down a common enemy. As they embark on a dangerous mission, they must confront their own demons and forge an unlikely alliance to save the world.
                </p>
                <h3 className="text-2xl font-bold text-red-500 mb-4 mt-8 font-bungee">Cast</h3>
                    <p className="text-2xl font-gothic mb-2 mt-4">Ryan Reynolds as Deadpool</p>
                    <p className="text-2xl font-gothic mb-2 mt-4">Hugh Jackman as Wolverine</p>
                    <p className="text-2xl font-gothic mb-2 mt-4">Morena Baccarin as Vanessa</p>
                    <p className="text-2xl font-gothic mb-2 mt-4" >Dafne Keen as Laura</p>
                    <p className="text-2xl font-gothic mb-2 mt-4">Blake Lively as Deadpool Woman</p>
                    <p className="text-2xl font-gothic mb-2 mt-4">Emma Corrin as Casandra Nova</p>
                    <p className="text-2xl font-gothic mb-2 mt-4">Channing Tatum as Remy Lebeau</p>
                    <p className="text-2xl font-gothic mb-2 mt-4">Wesley Snipes as Blade</p>
                    <p className="text-2xl font-gothic mb-2 mt-4">More cast members to be announced</p>
                    <img src={RecliningDeadpool} alt="ReclinigDeadpool" className="mt-8 rounded-lg  mx-auto" />
            </div>
            <div className="flex flex-col  items-center shadow-md">
            <h3 className="text-2xl font-bold text-white mb-4 mt-6 font-bungee">Fun Facts About the Film</h3>
                    <p className="font-gothic text-2xl mb-2">The film is a crossover between the Deadpool and Wolverine franchises.</p>
                    <p className="font-gothic text-2xl mb-2">Ryan Reynolds and Hugh Jackman have been friends for years and often joke
                    <br />
                     about their characters.</p>
                    <p className="font-gothic text-2xl mb-2">This film marks the first time Deadpool and Wolverine appear together
                    <br />
                     on screen in a feature film.</p>
                    <p className="font-gothic text-2xl mb-2">The production team used extensive CGI to enhance 
                    <br />
                    action sequences and character effects.</p>
                    <p className="font-gothic text-2xl mb-2">Filming took place in various locations including Vancouver and Los Angeles.</p>
            </div>
        </div>
    );
}

export default MoviePage;