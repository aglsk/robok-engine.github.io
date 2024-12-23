"use client";

export default function AboutPage() {
  return (
    <div className="p-8">
      <h1 className="text-5xl font-extrabold text-center mb-10">
        About Robok
      </h1>

      <p className="text-lg text-center text-gray-600 mb-12">
        Robok is a cutting-edge platform for developing 3D games using Java. Our goal is to empower developers to create immersive gaming experiences with ease and efficiency.
      </p>

      <div className="bg-gray-100 p-6 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-4 text-blue-700">
          Why Choose Robok?
        </h2>
        <ul className="list-disc list-inside text-lg text-gray-700">
          <li>Powerful tools to streamline 3D game development.</li>
          <li>Designed for developers who love the flexibility of Java.</li>
          <li>Community-driven platform with regular updates and improvements.</li>
          <li>Support for advanced graphics rendering and physics engines.</li>
        </ul>
      </div>

      <div className="mt-12 bg-gray-100 p-6 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-4 text-purple-700">
          Our Mission
        </h2>
        <p className="text-lg text-gray-700">
          At Robok, we aim to lower the barrier to entry for game development while fostering innovation and creativity. Our platform is designed to provide developers with all the tools they need to bring their visions to life.
        </p>
      </div>

      <div className="mt-12 bg-gray-100 p-6 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-4 text-teal-700">
          Get Started Today
        </h2>
        <p className="text-lg text-gray-700 text-center">
          Whether you're an experienced game developer or just getting started, Robok offers a robust and intuitive environment to turn your ideas into reality. <br />
          <a
            href="/versions"
            className="text-teal-500 font-semibold underline hover:text-teal-700"
          >
            Learn more and get started here.
          </a>
        </p>
      </div>
    </div>
  );
}
