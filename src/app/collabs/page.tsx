"use client";

export default function CollabsPage() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold text-center mb-6">Collaborators</h1>
      <p className="text-center text-gray-600 mb-10">
        A huge thanks to everyone who has contributed to our projects!
      </p>

      {/* Contributors for the app */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold text-center mb-4">App Contributors</h2>
        <div className="flex justify-center">
          <a
            href="https://github.com/robok-engine/robok-engine/graphs/contributors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://contrib.rocks/image?repo=robok-engine/robok-engine"
              alt="App Contributors"
              className="rounded-md shadow-lg"
            />
          </a>
        </div>
      </div>

      {/* Contributors for the website */}
      <div>
        <h2 className="text-2xl font-semibold text-center mb-4">Website Contributors</h2>
        <div className="flex justify-center">
          <a
            href="https://github.com/robok-engine/robok-engine.github.io/graphs/contributors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://contrib.rocks/image?repo=robok-engine/robok-engine.github.io"
              alt="Website Contributors"
              className="rounded-md shadow-lg"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
