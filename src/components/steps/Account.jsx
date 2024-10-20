import { useContext } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import { StepperContext } from "../../contexts/StepperContext";

export default function Account() {
  const { userData, setUserData } = useContext(StepperContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <form className="flex flex-col space-y-4">
      {/* Name Field */}
      <div className="w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
          Name
        </div>
        <div className="bg-transparent backdrop-blur-lg my-2 p-1 flex border border-gray-200 rounded focus-within:border-green-400">
          <input
            onChange={handleChange}
            value={userData["name"] || ""}
            name="name"
            placeholder="Name"
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800 bg-transparent focus:border-green-400"
          />
        </div>
      </div>

      {/* Username Field */}
      <div className="w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
          Username
        </div>
        <div className="bg-transparent backdrop-blur-lg my-2 p-1 flex border border-gray-200 rounded focus-within:border-green-400">
          <input
            onChange={handleChange}
            value={userData["username"] || ""}
            name="username"
            placeholder="Username"
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800 bg-transparent focus:border-green-400"
          />
        </div>
      </div>

      {/* Email and Password Fields in a Row */}
      <div className="grid grid-cols-2 gap-4 mx-2">
        {/* Email Field */}
        <div className="flex-1">
          <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
            Email
          </div>
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
        <div className="flex-1">
          <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
            Password
          </div>
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
      </div>

      {/* Login Link */}
      <div className="mt-4 text-center">
        <p className="text-sm text-gray-500">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </form>
  );
}
