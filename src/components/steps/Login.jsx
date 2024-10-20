import { useContext } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import { StepperContext } from "../../contexts/StepperContext";

export default function Login() {
  const { userData, setUserData } = useContext(StepperContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-col items-center p-4">
      {/* Welcome Message */}
      <h2 className="text-2xl font-bold text-green-600 mb-4">Welcome Back!</h2>

      {/* Login Form */}
      <form action="" onSubmit={handleSubmit} className="w-full max-w-lg">
        {/* Email Field */}
        <div className="flex flex-col mb-4">
          <label className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
            Email
          </label>
          <div className="bg-transparent backdrop-blur-lg my-2 p-1 flex border border-gray-200 rounded focus-within:border-green-400">
            <input
              onChange={handleChange}
              value={userData["email"] || ""}
              name="email"
              placeholder="Email"
              type="email"
              className="p-1 px-2 appearance-none outline-none w-full text-gray-800 bg-transparent focus:border-green-400"
            />
          </div>
        </div>

        {/* Password Field */}
        <div className="flex flex-col mb-4">
          <label className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
            Password
          </label>
          <div className="bg-transparent backdrop-blur-lg my-2 p-1 flex border border-gray-200 rounded focus-within:border-green-400">
            <input
              onChange={handleChange}
              value={userData["password"] || ""}
              name="password"
              placeholder="Password"
              type="password"
              className="p-1 px-2 appearance-none outline-none w-full text-gray-800 bg-transparent focus:border-green-400"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="w-full mb-4">
          <button
            type="submit"
            className="bg-green-500 text-white uppercase py-2 px-4 rounded-xl font-semibold cursor-pointer hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out w-full"
          >
            Login
          </button>
        </div>
      </form>

      {/* Register Link */}
      <div className="mt-4 text-center">
        <p className="text-sm text-gray-500">
          Don’t have an account?{" "}
          <Link to="/register" className="text-blue-500 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
