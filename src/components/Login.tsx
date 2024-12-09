import { useState } from "react";
import { MdEmail } from "react-icons/md";
import { PiLockKeyBold } from "react-icons/pi";

const Login = () => {
  const [username,setUsername]=useState("");
  const [password, setPassword] = useState('');
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
