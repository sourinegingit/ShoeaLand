import { useState } from "react";
import { MdEmail } from "react-icons/md";
import { PiLockKeyBold } from "react-icons/pi";
import { z } from "zod";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [failedAttempts, setFailedAttempts] = useState<number>(0); //نعداد نلاش ناموفق
  const [blockedUntil, setBlockedUntil] = useState<number>(0);
  const [errorMessage, setErrorMessage] = useState("");

  const usernameSchema = z
    .string()
    .min(5, "Username must have at least 5 characters")
    .regex(
      /^[A-Za-z][A-Za-z0-9 -]*$/,
      "Username must be alphanumeric and cannot contain spaces"
    );

  const passwordSchema = z
    .string()
    .min(8, "Password must have at least 8 characters")
    .max(16, "Password must have at most 16 characters")
    .regex(
      /[A-Za-z0-9!@#$]/,
      "Password must contain at least one alphanumeric character or special symbol (!@#$)"
    );

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      usernameSchema.parse(username);
      passwordSchema.parse(password);
      if (password !== "correctPassword") {
        setFailedAttempts((prev) => {
          const newFailedAttempts = prev + 1;
          if (newFailedAttempts >= 5) {
            const blockedTime = Date.now() + 5 * 60 * 1000;
            localStorage.setItem("blockedUntil", String(blockedTime));
            setBlockedUntil(blockedTime);
          }
          localStorage.setItem("failedAttempts", String(newFailedAttempts));
          return newFailedAttempts;
       
        });
        setErrorMessage("The entered password is not correct.");
      }else{
        setErrorMessage("Login successful!");
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        setErrorMessage(error.errors[0].message);
      }    }
  };
  return (
    <div className="flex flex-col h-screen border-2 bg-gray-300">
      <div className="w-96 p-2 border-black h-screen mx-auto flex flex-col ">
        <div className="text-[10rem]">📝</div>
        <h2 className="font-semibold mt-16 text-xl ">LOGIN TO YOUR ACCOUNT</h2>

        <form onSubmit={handleLogin}>
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

        <button type="submit" disabled={Date.now() < blockedUntil} className="rounded-full mt-44 text-xl bg-black text-white w-full p-2">Login</button>
          {errorMessage && <div className="text-red-500 mt-2">{errorMessage}</div>}
       
        </form>
      </div>
    </div>
  );
};

export default Login;
