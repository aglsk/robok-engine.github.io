"use client";

export default function CollabsPage() {
  const appContributors = [
    {
      name: "Contributor 1",
      avatar: "https://github.com/contributor1.png",
      profile: "https://github.com/contributor1",
    },
    {
      name: "Contributor 2",
      avatar: "https://github.com/contributor2.png",
      profile: "https://github.com/contributor2",
    },
    {
      name: "Contributor 3",
      avatar: "https://github.com/contributor2.png",
      profile: "https://github.com/contributor2",
    },
    {
      name: "Contributor 4",
      avatar: "https://github.com/contributor2.png",
      profile: "https://github.com/contributor2",
    },
    {
      name: "Contributor 2",
      avatar: "https://github.com/contributor2.png",
      profile: "https://github.com/contributor2",
    },
    {
      name: "Contributor 2",
      avatar: "https://github.com/contributor2.png",
      profile: "https://github.com/contributor2",
    },
    {
      name: "Contributor 2",
      avatar: "https://github.com/contributor2.png",
      profile: "https://github.com/contributor2",
    },
    {
      name: "Contributor 2",
      avatar: "https://github.com/contributor2.png",
      profile: "https://github.com/contributor2",
    },
    {
      name: "Contributor 2",
      avatar: "https://github.com/contributor2.png",
      profile: "https://github.com/contributor2",
    },
    {
      name: "Contributor 2",
      avatar: "https://github.com/contributor2.png",
      profile: "https://github.com/contributor2",
    },
    {
      name: "Contributor 2",
      avatar: "https://github.com/contributor2.png",
      profile: "https://github.com/contributor2",
    },
    {
      name: "Contributor 2",
      avatar: "https://github.com/contributor2.png",
      profile: "https://github.com/contributor2",
    },
    {
      name: "Contributor 2",
      avatar: "https://github.com/contributor2.png",
      profile: "https://github.com/contributor2",
    }
  ];

  const websiteContributors = [
    {
      name: "AGL SK",
      avatar: "https://avatars.githubusercontent.com/u/113151786?v=4",
      profile: "https://github.com/aglsk",
    },
    {
      name: "Aquiles Trindade",
      avatar: "https://avatars.githubusercontent.com/u/171992413?v=4",
      profile: "https://github.com/trindadedev13",
    },
    {
      name: "Jeferson Code",
      avatar: "https://avatars.githubusercontent.com/u/134572153?v=4",
      profile: "https://github.com/ojefersoncode",
    },
  ];

  return (
    <div className="p-8">
      <h1 className="text-5xl font-extrabold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-blue-500 to-teal-500">
        Our Amazing Collaborators
      </h1>
      <p className="text-lg text-center text-gray-600 mb-12">
        Meet the people who made this project possible! 🌟
      </p>

      {/* App Contributors Section */}
      <div className="mb-16 bg-gray-100 p-6 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-6 text-purple-700">
          App Contributors
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {appContributors.map((contributor, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <a
                href={contributor.profile}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={contributor.avatar}
                  alt={contributor.name}
                  className="w-20 h-20 rounded-full mb-3 border-2 border-purple-500"
                />
              </a>
              <p className="text-lg font-semibold">{contributor.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Website Contributors Section */}
      <div className="bg-gray-100 p-6 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-6 text-blue-700">
          Website Contributors
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {websiteContributors.map((contributor, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <a
                href={contributor.profile}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={contributor.avatar}
                  alt={contributor.name}
                  className="w-20 h-20 rounded-full mb-3 border-2 border-blue-500"
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
