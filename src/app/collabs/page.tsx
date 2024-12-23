"use client";

export default function CollabsPage() {
  return (
    <div className="p-8">
      <h1 className="text-5xl font-extrabold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-blue-500 to-teal-500">
        Our Amazing Collaborators
      </h1>
      <p className="text-lg text-center text-gray-600 mb-12">
        We couldn’t have achieved this without the help of these incredible contributors. 💖
      </p>

      {/* Contributors for the app */}
      <div className="mb-16 bg-gray-100 p-6 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-6 text-purple-700">
          App Contributors
        </h2>
        <div className="flex justify-center">
          <a
            href="https://github.com/robok-engine/robok-engine/graphs/contributors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://contrib.rocks/image?repo=robok-engine/robok-engine"
              alt="App Contributors"
              className="rounded-lg border-2 border-purple-500 hover:shadow-2xl hover:scale-105 transition-transform duration-300"
            />
          </a>
        </div>
        <p className="text-center text-sm text-gray-500 mt-4">
          <a
            href="https://github.com/robok-engine/robok-engine/graphs/contributors"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-600 hover:underline"
          >
            View full list on GitHub
          </a>
        </p>
      </div>

      {/* Contributors for the website */}
      <div className="bg-gray-100 p-6 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-6 text-blue-700">
          Website Contributors
        </h2>
        <div className="flex justify-center">
          <a
            href="https://github.com/robok-engine/robok-engine.github.io/graphs/contributors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://contrib.rocks/image?repo=robok-engine/robok-engine.github.io"
              alt="Website Contributors"
              className="rounded-lg border-2 border-blue-500 hover:shadow-2xl hover:scale-105 transition-transform duration-300"
            />
          </a>
        </div>
        <p className="text-center text-sm text-gray-500 mt-4">
          <a
            href="https://github.com/robok-engine/robok-engine.github.io/graphs/contributors"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            View full list on GitHub
          </a>
        </p>
      </div>
    </div>
  );
}
