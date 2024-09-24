import MoviePoster from "../../assets/images/deadpool-wolverine-movie.jpg";

function MoviePage() {
    return (
        <div className="bg-gray-900 py-12">
            <div className="container mx-auto">
                <img src={MoviePoster} alt="Deadpool-Wolverine" />
                <h1 className="text-5xl font-bold text-white text-center mt-8">Deadpool&Wolverine Present </h1>
                <p className="text-lg text-gray-300 text-center">A Ryan Reynolds Film</p>
                <h2 className="text-lg text-gray-300 text-center">Only in Theaters : JulY 26 2024</h2>
            </div>
            <div className="container mx-auto p-8">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/73_1biulkYk?si=ARSkhbElpRdQEYmY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div className="container mx-auto p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Synopsis</h3>
                <p className="text-lg text-gray-300">
                    In this action-packed film, Ryan Reynolds reprises his role as the wise-cracking mercenary Deadpool. When a mysterious figure from his past re-emerges, Deadpool must team up with the gruff mutant Wolverine to take down a common enemy. As they embark on a dangerous mission, they must confront their own demons and forge an unlikely alliance to save the world.
                </p>
                <h3 className="text-2xl font-bold text-white mb-4 mt-8">Cast</h3>
                <ul className="list-disc list-inside text-lg text-gray-300">
                    <li>Ryan Reynolds as Deadpool</li>
                    <li>Hugh Jackman as Wolverine</li>
                    <li>More cast members to be announced</li>
                </ul>
            </div>
        </div>
    );
}

export default MoviePage;