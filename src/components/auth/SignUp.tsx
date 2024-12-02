import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import apiClient from "../../api/apiClient";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FiEye, FiEyeOff } from "react-icons/fi"; // Import eye icons from react-icons

const SignUp: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
  });

  const [passwordVisible, setPasswordVisible] = useState(false); // Toggle password visibility
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const navigate = useNavigate();

  // Function to handle form field changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const goToHome = () => {
    navigate("/");
  };

  // Function to validate form fields
  const validateForm = () => {
    const { email, password, confirmPassword, name } = formData;

    if (!email || !password || !confirmPassword || !name) {
      toast.error("All fields are required.");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.");
      return false;
    }

    const passwordLengthRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordLengthRegex.test(password)) {
      toast.error(
        "Password must be at least 8 characters long, contain at least one letter, one number, and one special character."
      );
      return false;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match.");
      return false;
    }

    return true;
  };

  // Function to handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return; // Prevent submission if validation fails

    try {
      await apiClient.post("/auth/signup", {
        email: formData.email,
        password: formData.password,
        name: formData.name,
      });
      toast.success("Sign-Up Successful!");
      localStorage.setItem("signupSuccess", "true");
      navigate("/signin");
    } catch (err: any) {
      const errorMessage =
        err.response?.data?.message || "Sign-Up Failed. Please try again.";
      toast.error(errorMessage);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Section */}
      <header className="bg-blue-600 text-white py-4">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl font-bold">Create Your Account</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Sign Up</h2>
            <p className="text-gray-700 mb-6">
              Please fill in the details below to create your account.
            </p>

            {/* Form Section */}
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 mb-2">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4 relative">
                <label htmlFor="password" className="block text-gray-700 mb-2">
                  Password <span className="text-red-500">*</span>
                </label>
                <input
                  type={passwordVisible ? "text" : "password"}
                  id="password"
                  name="password"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.password}
                  onChange={handleChange}
                />
                <span
                  className="absolute top-3 right-3 cursor-pointer"
                  onClick={() => setPasswordVisible(!passwordVisible)}
                >
                  {passwordVisible ? <FiEyeOff /> : <FiEye />}
                </span>
              </div>
              <div className="mb-4 relative">
                <label
                  htmlFor="confirmPassword"
                  className="block text-gray-700 mb-2"
                >
                  Confirm Password <span className="text-red-500">*</span>
                </label>
                <input
                  type={confirmPasswordVisible ? "text" : "password"}
                  id="confirmPassword"
                  name="confirmPassword"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
                <span
                  className="absolute top-3 right-3 cursor-pointer"
                  onClick={() =>
                    setConfirmPasswordVisible(!confirmPasswordVisible)
                  }
                >
                  {confirmPasswordVisible ? <FiEyeOff /> : <FiEye />}
                </span>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
              >
                Sign Up
              </button>
            </form>

            {/* Sign-In Link */}
            <div className="mt-4 text-center">
              <p className="text-gray-600">
                Already have an account?{" "}
                <a href="/signin" className="text-blue-500 font-semibold">
                  Sign In
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
      <ToastContainer />
    </div>
  );
};

export default SignUp;
