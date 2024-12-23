"use client";

export default function CollabsPage() {
  const appContributors = [
    {
      name: "trindadedev13",
      avatar: "https://avatars.githubusercontent.com/u/171992413?v=4",
      profile: "https://github.com/trindadedev13",
    },
    {
      name: "ThDev-only",
      avatar: "https://avatars.githubusercontent.com/u/174269512?v=4",
      profile: "https://github.com/ThDev-only",
    },
    {
      name: "gampiot-bot",
      avatar: "https://avatars.githubusercontent.com/u/178045596?v=4",
      profile: "https://github.com/gampiot-bot",
    },
    {
      name: "SyntaxSpins",
      avatar: "https://avatars.githubusercontent.com/u/86142168?v=4",
      profile: "https://github.com/SyntaxSpins",
    },
    {
      name: "RohitKushvaha01",
      avatar: "https://avatars.githubusercontent.com/u/99863818?v=4",
      profile: "https://github.com/RohitKushvaha01",
    },
    {
      name: "weblate",
      avatar: "https://avatars.githubusercontent.com/u/1607653?v=4",
      profile: "https://github.com/weblate",
    },
    {
      name: "OSilvaDev",
      avatar: "https://avatars.githubusercontent.com/u/148734093?v=4",
      profile: "https://github.com/OSilvaDev",
    },
    {
      name: "Kefir2105",
      avatar: "https://avatars.githubusercontent.com/u/103105829?v=4",
      profile: "https://github.com/Kefir2105",
    },
    {
      name: "teixeira0x",
      avatar: "https://avatars.githubusercontent.com/u/134708771?v=4",
      profile: "https://github.com/teixeira0x",
    },
    {
      name: "Yamenher",
      avatar: "https://avatars.githubusercontent.com/u/164387611?v=4",
      profile: "https://github.com/Yamenher",
    },
    {
      name: "itsvks19",
      avatar: "https://avatars.githubusercontent.com/u/102840735?v=4",
      profile: "https://github.com/itsvks19",
    },
    {
      name: "Paxsenix0",
      avatar: "https://avatars.githubusercontent.com/u/126800641?v=4",
      profile: "https://github.com/Paxsenix0",
    },
    {
      name: "Xori71",
      avatar: "https://avatars.githubusercontent.com/u/101265862?v=4",
      profile: "https://github.com/Xori71",
    },
  ];

  const websiteContributors = [
    {
      name: "aglsk",
      avatar: "https://avatars.githubusercontent.com/u/113151786?v=4",
      profile: "https://github.com/aglsk",
    },
    {
      name: "trindadedev13",
      avatar: "https://avatars.githubusercontent.com/u/171992413?v=4",
      profile: "https://github.com/trindadedev13",
    },
    {
      name: "ojefersoncode",
      avatar: "https://avatars.githubusercontent.com/u/134572153?v=4",
      profile: "https://github.com/ojefersoncode",
    },
  ];

  return (
    <div className="p-8">
      <h1 className="text-5xl font-extrabold text-center mb-10">
        Our Amazing Collaborators
      </h1>

      <p className="text-lg text-center text-gray-600 mb-12">
        Meet the people who made this project possible! 🌟
      </p>

      {/* App Contributors */}
      <div className="mb-16 bg-gray-100 p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center mb-6 text-purple-700">
          App Contributors
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {appContributors.map((contributor, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition"
            >
              <a
                href={contributor.profile}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={contributor.avatar}
                  alt={contributor.name}
                  className="w-24 h-24 rounded-full mb-3 border-2 border-purple-500"
                />
              </a>
              <p className="text-lg font-semibold">{contributor.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Website Contributors */}
      <div className="bg-gray-100 p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center mb-6 text-blue-700">
          Website Contributors
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {websiteContributors.map((contributor, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition"
            >
              <a
                href={contributor.profile}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={contributor.avatar}
                  alt={contributor.name}
                  className="w-24 h-24 rounded-full mb-3 border-2 border-blue-500"
                />
              </a>
              <p className="text-lg font-semibold">{contributor.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
