import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Welcome: React.FC = () => {
  const navigate = useNavigate();
  const userName = localStorage.getItem("userName"); // Retrieve the user's name from localStorage

  useEffect(() => {
    // Show "Login successful" toast if loginSuccess flag is present
    const loginSuccessFlag = localStorage.getItem("loginSuccess");

    if (loginSuccessFlag === "true") {
      toast.success("Login successful! Welcome to EasyGen.", {
        onClose: () => {
          localStorage.removeItem("loginSuccess");
        },
      });
    }
  }, []);

  const handleGenerateContent = () => {
    alert("Content generated!");
  };

  const handleLogout = () => {
    // Clear token and name from localStorage and navigate to sign-in page
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    // Set the 'loggedOut' flag to show toast on the SignIn page
    localStorage.setItem("loggedOut", "true");
    navigate("/signin");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Section */}
      <header className="bg-blue-600 text-white py-4">
        <div className="flex items-center justify-between max-w-6xl mx-auto px-4">
          <h1 className="text-3xl font-bold">Welcome to EasyGen</h1>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600"
          >
            Log out
          </button>
        </div>
      </header>

      {/* Main Content Section */}
      <main className="py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Welcome to the application, {userName || "User"}!{" "}
              {/* Display the user's name */}
            </h2>
            <p className="text-gray-700 mb-6">
              You have successfully signed in. Now you can generate content,
              view previously generated content, and more!
            </p>

            {/* Content Sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Generate Content Section */}
              <div className="bg-blue-500 text-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                <h3 className="text-lg font-semibold mb-3">Generate Content</h3>
                <p className="text-gray-200 mb-4">
                  Create fresh and unique content instantly with just a click.
                  Try it now!
                </p>
                <button
                  onClick={handleGenerateContent}
                  className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all duration-300"
                >
                  Generate Now
                </button>
              </div>

              {/* View Previously Generated Content */}
              <div className="bg-green-500 text-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                <h3 className="text-lg font-semibold mb-3">
                  View Previous Content
                </h3>
                <p className="text-gray-200 mb-4">
                  Access all the content you've generated previously and edit or
                  reuse them.
                </p>
                <button
                  onClick={() => navigate("/view-content")}
                  className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-all duration-300"
                >
                  View Content
                </button>
              </div>

              {/* Manage Account Section */}
              <div className="bg-yellow-500 text-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                <h3 className="text-lg font-semibold mb-3">
                  Manage Your Account
                </h3>
                <p className="text-gray-200 mb-4">
                  Update your account settings, change your password, and manage
                  other preferences.
                </p>
                <button
                  onClick={() => navigate("/account-settings")}
                  className="w-full bg-yellow-600 text-white py-2 rounded-lg hover:bg-yellow-700 transition-all duration-300"
                >
                  Manage Account
                </button>
              </div>

              {/* Explore More Section */}
              <div className="bg-purple-500 text-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                <h3 className="text-lg font-semibold mb-3">Explore More</h3>
                <p className="text-gray-200 mb-4">
                  Explore more features and capabilities offered by EasyGen.
                  There's always something new to discover!
                </p>
                <button
                  onClick={() => navigate("/explore")}
                  className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-all duration-300"
                >
                  Explore Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Toast Container */}
      <ToastContainer autoClose={3000} />
    </div>
  );
};

export default Welcome;
