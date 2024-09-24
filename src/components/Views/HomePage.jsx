import RyanImage from "../../assets/images/Ryan_Reynolds_aviation.jpg";
import AviationGinBottle from "../../assets/images/aviation_gin_bottle_lineup.png";

function HomePage() {
  return (
    <div className=" bg-white-900">
      <main className="relative flex flex-col items-center justify-center flex-grow text-center p-8">
        <img
          src={RyanImage}
          alt="Ryan_Reynolds"
          className="w-full h-auto max-w-full rounded-lg shadow-lg mb-8"
        />
        <h1 className="absolute top-1/3 left-1/4 transform -translate-x-1/4 -translate-y-1/2 text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 text-shadow-lg font-gothic">
          Welcome to 
          <br />
          Aviation Gin
        </h1>
        <h2 className="text-2xl text-gray-800 mb-6 font-bungee">
          The Best Gin in the World
        </h2>
        <blockquote className="border-l-4 border-red-600 pl-4 italic text-gray-600 mb-8">
          "I've tried every gin on the planet and Aviation is, hands down, the
          best. Also, I don't recommend trying every gin on the planet. Stick
          with this one."
          <br />
          <span className="font-bold">
            – Ryan Reynolds, Co-Owner, Aviation American Gin
          </span>
        </blockquote>
      </main>
      <div className="w-full max-w-2xl mx-auto mb-12">
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/NjDCH6SiMgo?si=smVD-zL2QfmgRD94"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
      <div className="bg-white p-8 text-center mb-12">
        <h3 className="text-2xl text-center text-black bg-gray-400 mb-4 font-bungee p-2 rounded-md shadow-md">
          Experience the smoothest gin
        </h3>
        <p className="max-w-xl text-lg text-center text-black mb-8 font-gothic mx-auto shadow-md p-4">
          Aviation American Gin is made from a precise blend of botanicals,
          including juniper, lavender and orange peel. The unique distillation
          process ensures an unmistakable aroma and taste.
        </p>
        <img
          src={AviationGinBottle}
          alt="Aviation Gin Bottle Lineup"
          className="max-w-full h-auto rounded-lg shadow-lg mb-12 mx-auto"
        />
      </div>
      <div className=" py-12"> 
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white- text-center mb-8 font-bungee">
            Production Process
          </h2>
          <div className="bg-gray-600 p-6 rounded-lg">
            {/* STEP 1 */}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-black mb-2 font-gothic">
                STEP 1: INFUSION
              </h3>
              <p className="text-white font-gothic">
                It all starts with our precise blend of botanicals – cardamom,
                coriander, French lavender, anise seed, sarsaparilla, juniper,
                and two kinds of orange peel. The botanicals are suspended in a
                neutral grain spirit for 18 hours in macerating tanks.
              </p>
            </div>
            {/* STEP 2 */}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-black mb-2 font-gothic">
                STEP 2: DISTILLATION
              </h3>
              <p className="text-white font-gothic">
                The macerate is then pumped into a still along with pure water.
                Steam jackets heat the macerate, the vapors go into the
                condenser, which cools the vapors to form the gin distillate.
              </p>
            </div>
            {/* STEP 3 */}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-black mb-2 font-gothic">
                STEP 3: THE CUT
              </h3>
              <p className="text-white font-gothic">
                In a meticulously monitored process, the first fluid leaving the
                still, the "heads," is removed. Collecting the "heart of the
                spirit" throughout the run, the distillers then determine the
                end of the cycle and make the final cut, "the tails." This
                process takes approximately 7 hours and at this point, the
                "heart cut" is 142 proof.
              </p>
            </div>
            {/* STEP 4 */}
            <div>
              <h3 className="text-xl font-bold text-black mb-2 font-gothic">
                STEP 4: BLENDING & BOTTLING
              </h3>
              <p className="text-white font-gothic">
                The "heart cut" is transferred to a blending tank where pure
                water is added, bringing the gin to the desired 84 proof. It is
                then sent to the bottling line for filling, capping, and
                labeling. Aviation is then packed into boxes and ready to ship.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
