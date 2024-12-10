import { useState } from "react";
import { RiLockPasswordFill } from "react-icons/ri";
import { z } from "zod"; 
import { toast, ToastContainer } from "react-toastify"; 
import 'react-toastify/dist/ReactToastify.css'; 
const resetPasswordSchema = z.object({
  password: z.string().min(6, "Password must be at least 6 characters."),
  repeatPassword: z.string().min(6, "Password must be at least 6 characters."),
  email: z.string().email("Please enter a valid email address."),
});

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validationResult = resetPasswordSchema.safeParse({
      password,
      repeatPassword,
    });

    if (!validationResult.success) {
      // const error = validationResult.error.errors[0];
      toast.error("رمز عبور ها مظابقت ندارند"); 
      return;
    }

    if (password !== repeatPassword) {
      toast.error("Passwords do not match."); 
      return;
    }

    setMessage("Password reset link has been sent to your email.");
    setErrorMessage('');
    toast.success("Password reset link has been sent to your email."); // Show success toast
  };

  return (
    <div className="flex flex-col h-screen border-2 bg-gray-300">
      <div className="w-96 p-2 border-black h-screen mx-auto flex flex-col ">
        <div className="flex justify-center items-center mt-28">
          <div className="text-[10rem]">
            <img
              src="../../public/assets/shoea.png"
              className="flex items-center justify-center"
            />
          </div>
        </div>
        <h2 className="font-semibold mt-16 text-xl">Reset Password</h2>
        <form onSubmit={handleSubmit}>

          {/* Password */}
          <div className="relative mt-8 flex flex-col items-center max-w-md mx-auto">
            <RiLockPasswordFill className="absolute text-lg left-3 mt-4 text-gray-500" />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              name="password"
              placeholder="Password..."
              className="pl-10 py-2 border border-gray-300 rounded-md w-full"
            />
          </div>

          {/* Repeat Password */}
          <div className="relative mt-8 flex flex-col items-center max-w-md mx-auto">
            <RiLockPasswordFill className="absolute text-lg left-3 mt-4 text-gray-500" />
            <input
              type="password"
              name="repeatPassword"
              value={repeatPassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
              placeholder="Repeat Password..."
              className="pl-10 py-2 border border-gray-300 rounded-md w-full"
            />
          </div>

          <button
            type="submit"
            className="rounded-full mt-8 text-xl bg-black text-white w-full p-2"
          >
            Reset
          </button>
        </form>
      </div>

      <ToastContainer />
    </div>
  );
};

export default ResetPassword;
