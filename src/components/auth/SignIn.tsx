import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import apiClient from "../../api/apiClient";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DOMPurify from "dompurify"; // Import DOMPurify for sanitization
import { FiEye, FiEyeOff } from "react-icons/fi"; // Import eye icons for visibility toggle

const SignIn: React.FC = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState<string | null>(null);
  const [passwordVisible, setPasswordVisible] = useState(false); // State for password visibility
  const navigate = useNavigate();

  useEffect(() => {
    const loggedOutFlag = localStorage.getItem("loggedOut");
    const signupSuccessFlag = localStorage.getItem("signupSuccess");

    if (loggedOutFlag === "true") {
      toast.success("Logged out successfully!", {
        onClose: () => {
          localStorage.removeItem("loggedOut");
        },
      });
    }

    if (signupSuccessFlag === "true") {
      toast.success("Sign-Up successful! Please sign in to continue.", {
        onClose: () => {
          localStorage.removeItem("signupSuccess");
        },
      });
    }
  }, []); // Run only once when the component mounts

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const sanitizedValue = DOMPurify.sanitize(e.target.value);
    setFormData({ ...formData, [e.target.name]: sanitizedValue });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Check for empty email or password
    if (!formData.email.trim() || !formData.password.trim()) {
      setError("Email and Password are required.");
      return;
    }
    try {
      const response = await apiClient.post("/auth/signin", formData);
      localStorage.setItem("token", response.data.accessToken);
      localStorage.setItem("userName", response.data.user.name);
      localStorage.setItem("loginSuccess", "true");
      navigate("/welcome");
    } catch (err) {
      setError("Sign-In Failed. Check your credentials.");
    }
  };

  const goToHome = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Section */}
      <header className="bg-blue-600 text-white py-4">
        <div className="flex items-center justify-between max-w-6xl mx-auto px-4">
          <h1 className="text-3xl font-bold">Welcome Back!</h1>
        </div>
      </header>

      {/* Main Content Section */}
      <main className="py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Sign In</h2>
            <p className="text-gray-700 mb-6">
              Please enter your credentials to sign in to your account.
            </p>

            {/* Form Section */}
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="email">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onChange={handleChange}
                  value={formData.email}
                />
              </div>
              <div className="mb-4 relative">
                <label className="block text-gray-700 mb-2" htmlFor="password">
                  Password <span className="text-red-500">*</span>
                </label>
                <input
                  type={passwordVisible ? "text" : "password"} // Toggle password visibility
                  id="password"
                  name="password"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onChange={handleChange}
                  value={formData.password}
                />
                <span
                  className="absolute top-3 right-3 cursor-pointer"
                  onClick={() => setPasswordVisible(!passwordVisible)} // Toggle visibility on click
                >
                  {passwordVisible ? <FiEyeOff /> : <FiEye />}
                </span>
              </div>
              {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
              >
                Sign In
              </button>
            </form>

            {/* Sign-Up Link Section */}
            <div className="mt-4 text-center">
              <p className="text-gray-600">
                Don't have an account?{" "}
                <a href="/signup" className="text-blue-500">
                  Sign Up
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Go to Home Button */}
      <div className="text-center py-4">
        <button
          onClick={goToHome}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
        >
          Go to Home
        </button>
      </div>

      {/* Toast Container */}
      <ToastContainer autoClose={3000} />
    </div>
  );
};

export default SignIn;
