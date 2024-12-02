import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const Home: React.FC = () => {
  return (
    <div>
      {/* Top Section with Buttons */}
      <div className="bg-blue-50 py-8">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
          <h1 className="text-4xl font-bold text-blue-600">Easy Gen</h1>
          <div>
            <Link to="/signup">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg mr-4 hover:bg-blue-700">
                Sign Up
              </button>
            </Link>
            <Link to="/signin">
              <button className="bg-transparent text-blue-600 border-2 border-blue-600 px-6 py-2 rounded-lg hover:bg-blue-100">
                Sign In
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          Welcome to Easy Gen!
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          Easy Gen is the ultimate tool for creating high-quality content
          quickly and efficiently. Whether you're a developer, content creator,
          or business owner, we provide the resources you need to generate
          impactful material in seconds.
        </p>

        {/* Features Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          <div className="bg-blue-50 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-blue-600 mb-4">
              Fast & Efficient
            </h3>
            <p className="text-gray-600">
              Generate content with ease and speed. Focus on your ideas while we
              handle the rest.
            </p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-blue-600 mb-4">
              Customizable Outputs
            </h3>
            <p className="text-gray-600">
              Tailor content to your specific needs. Choose from various
              templates and customize outputs.
            </p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-blue-600 mb-4">
              User-Friendly Interface
            </h3>
            <p className="text-gray-600">
              Our platform is designed for ease of use. No steep learning curve
              – just straightforward tools.
            </p>
          </div>
        </div>

        {/* Additional Information Section */}
        <p className="text-lg text-gray-700 mb-8">
          At Easy Gen, we believe in empowering individuals and teams to
          maximize their creativity. Our platform leverages the latest
          technology to bring you high-quality content in a fraction of the time
          it would take to do manually.
        </p>
      </div>

      {/* Footer Section */}
      {<Footer />}
    </div>
  );
};

export default Home;
