import { FaPhone, FaUserAlt } from "react-icons/fa";
import { ImUsers } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

const Register = () => {
  return (
    <div className="flex flex-col h-screen border-2 bg-gray-300">
      <div className="w-96 p-2 border-black h-screen mx-auto flex flex-col ">
        <div className="flex justify-center items-center mt-8">
          <div className="text-[10rem]  ">
            <img
              src="../../public/assets/shoea.png"
              className="flex items-center justify-center"
            />
          </div>
        </div>
        <h2 className="font-semibold mt-4 text-2xl ">
          Let’s To Create Account
        </h2>

        <form>
          <div className="relative mt-8 flex flex-col items-center max-w-md mx-auto">
            <FaUserAlt className="absolute text-lg left-3 mt-3 text-gray-500" />

            <input
              type="text"
              placeholder="UserName..."
              className="pl-10 py-2 border border-gray-300 rounded-md w-full"
            />
          </div>

          <div className="relative mt-8 flex flex-col items-center max-w-md mx-auto">
            <MdEmail className="absolute text-lg left-3 mt-3 text-gray-500" />
            <input
              type="password"
              placeholder="password..."
              className="pl-10 py-2 border border-gray-300 rounded-md w-full"
            />
            {/* {errorMessage && <div className="text-red-500 mt-2">{errorMessage}</div>} */}
          </div>

          <div className="relative mt-8 flex justify-between gap-4 items-center max-w-md mx-auto">
            <div>
              <FaUserAlt className="absolute text-lg left-3 mt-3 text-gray-500" />
              <input
                type="text"
                placeholder="firstName..."
                className="pl-10 py-2 border border-gray-300 rounded-md w-full"
              />
            </div>
            <div>
              <FaUserAlt className="absolute text-lg left-52 mt-3 text-gray-500" />

              <input
                type="text"
                placeholder="lastName..."
                className="pl-10 py-2 border border-gray-300 rounded-md w-full"
              />
            </div>
            {/* {errorMessage && <div className="text-red-500 mt-2">{errorMessage}</div>} */}
          </div>

          <div className="relative mt-8 flex flex-col items-center max-w-md mx-auto">
            <RiLockPasswordFill className="absolute text-lg left-3 mt-4 text-gray-500" />

            <input
              type="password"
              placeholder="password..."
              className="pl-10 py-2 border border-gray-300 rounded-md w-full"
            />
            {/* {errorMessage && <div className="text-red-500 mt-2">{errorMessage}</div>} */}
          </div>

          <div className="relative mt-8 flex flex-col items-center max-w-md mx-auto">
            <RiLockPasswordFill className="absolute text-lg left-3 mt-4 text-gray-500" />

            <input
              type="password"
              placeholder="Confirm password..."
              className="pl-10 py-2 border border-gray-300 rounded-md w-full"
            />
            {/* {errorMessage && <div className="text-red-500 mt-2">{errorMessage}</div>} */}
          </div>

          <div className="relative mt-8 gap-4 flex justify-between  items-center max-w-md mx-auto">
            <div className="flex items-center space-x-2">
              <ImUsers className="text-lg absolute left-2 text-gray-500" />
              <select className="w-32 p-2 border left-4 rounded-md text-gray-700 focus:ring-2 focus:ring-indigo-500">
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>

            <div>
              <FaPhone className="absolute text-lg left-40 mt-3 text-gray-500" />

              <input
                type="tel"
                placeholder="phoneNumber..."
                className="pl-10 py-2 border border-gray-300 rounded-md w-full"
              />
            </div>
            {/* {errorMessage && <div className="text-red-500 mt-2">{errorMessage}</div>} */}
          </div>

          <div className=" mt-8 flex  items-start gap-2 max-w-md mx-auto">
            <input type="checkbox"  className="mt-2 flex items-start"/>
            <p className="text-start">I have read and accept the User Aggrement and Privacy Policy </p>
          </div>

          <button
            type="submit"
            className="rounded-full mt-36 text-xl bg-black text-white w-full p-2"
          >
            Sign Up
          </button>
          <div className="flex gap-16 p-4 items-center">
            <p className="text-gray-400">dont have account yet</p>
            <h2>Login Now</h2>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
