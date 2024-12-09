import { useState } from "react";
import { MdEmail } from "react-icons/md";
import { PiLockKeyBold } from "react-icons/pi";
import { z } from "zod";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState('');

  const usernameSchema = z
    .string()
    .min(5, "Username must have at least 5 characters")
    .regex(
      /^[A-Za-z][A-Za-z0-9 -]*$/,
      "Username must be alphanumeric and cannot contain spaces"
    );

    const passwordSchema  = z
    .string()
    .min(8, "Password must have at least 8 characters").max(16, "Password must have at most 16 characters").
    .regex(
      /^[A-Za-z][A-Za-z0-9 -]*$/,
      "Username must be alphanumeric and cannot contain spaces"
    );
  return (
    <div className="flex flex-col h-screen border-2 bg-gray-300">
      <div className="w-96 p-2 border-black h-screen mx-auto flex flex-col ">
        <div className="text-[10rem]">📝</div>
        <h2 className="font-semibold mt-16 text-xl ">LOGIN TO YOUR ACCOUNT</h2>

        <form>
          <div className="relative mt-8 flex items-center max-w-md mx-auto">
            <MdEmail className="absolute left-3 text-gray-500" />
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="UserName..."
              className="pl-10 py-2 border border-gray-300 rounded-md w-full"
            />
          </div>

          <div className="relative mt-4 flex items-center max-w-md mx-auto">
            <PiLockKeyBold className="absolute left-3 text-gray-500" />

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password..."
              className="pl-10 py-2 border border-gray-300 rounded-md w-full"
            />
          </div>

          <button
            type="submit"
            className="rounded-full mt-52 text-xl bg-black text-white w-full p-2"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
