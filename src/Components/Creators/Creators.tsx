import { FaInstagram, FaYoutube } from "react-icons/fa";

type Creator = {
  name: string;
  instagram?: string;
  youtube?: string;
  image?: string;
  followers: string; // followers/subscribers count
};

const creators: Creator[] = [
  {
    name: "Ishan Sharma",
    instagram: "https://www.instagram.com/ishansharma7390/",
    image: "/creators/ishan.jpg",
    followers: "1M followers",
  },
  {
    name: "Kashish",
    instagram: "https://www.instagram.com/aapki_kashishhh/",
    image: "/creators/kashish.jpg",
    followers: "502K followers",
  },
  {
    name: "Saumya Singh",
    instagram: "https://www.instagram.com/saumya1singh/",
    followers: "483K followers",
  },
  {
    name: "Shreyansh Goyal",
    youtube: "https://www.youtube.com/@ShreyanshGoyal/featured",
    followers: "181K subscribers",
  },
  {
    name: "Siddharth",
    youtube: "https://www.youtube.com/@itssiddharthsingh",
    followers: "216K subscribers",
  },
  {
    name: "Harman Singh",
    instagram: "https://www.instagram.com/hustlewithharman/",
    followers: "888K followers",
  },
  {
    name: "Arsh Goyal",
    instagram: "https://www.instagram.com/arshgoyalyt/",
    followers: "481K followers",
  },
  {
    name: "Deepanshu Raj",
    instagram: "https://www.instagram.com/iqlipse_nova/",
    followers: "892K followers",
  },
  {
    name: "Striver",
    youtube: "https://www.youtube.com/@striver_79",
    followers: "305k subscribers",
  },
  {
    name: "Dr. Sid Warrier",
    instagram: "https://www.instagram.com/thesidwarrier/",
    followers: "287K followers",
  },
];

const CreatorsSection = () => {
  return (
    <section className="bg-[#0e0f1b] text-white py-20 px-6 sm:px-12 md:px-20">
      <h2 className="text-4xl sm:text-5xl font-bold font-oswald text-center mb-14">
        Creators We’ve Worked With
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {creators.map((creator, idx) => {
          const socialLink = creator.instagram || creator.youtube || "";
          const isInstagram = Boolean(creator.instagram);

          return (
            <div
              key={idx}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 flex flex-col items-center shadow-lg hover:shadow-orange-500/20 transition-transform duration-300 hover:-translate-y-2"
            >
              {/* Profile Image */}
              <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-white/20 mb-4">
                {creator.image ? (
                  <img
                    src={creator.image}
                    alt={creator.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-700 text-gray-300 text-xl">
                    {creator.name.charAt(0)}
                  </div>
                )}
              </div>

              {/* Name */}
              <h3 className="text-lg font-semibold text-center font-inter">
                {creator.name}
              </h3>

              {/* Social Icon */}
              {socialLink && (
                <a
                  href={socialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-3 p-2 rounded-full hover:scale-110 transition-transform ${
                    isInstagram
                      ? "bg-gradient-to-tr from-pink-500 to-yellow-400"
                      : "bg-red-600"
                  }`}
                >
                  {isInstagram ? (
                    <FaInstagram className="text-white text-lg" />
                  ) : (
                    <FaYoutube className="text-white text-lg" />
                  )}
                </a>
              )}

              {/* Followers */}
              <p className="mt-4 text-sm text-gray-300 font-inter">
                {creator.followers}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CreatorsSection;
