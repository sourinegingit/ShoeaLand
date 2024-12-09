import { useState } from "react";
import { FaPhone, FaUserAlt } from "react-icons/fa";
import { ImUsers } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { z } from "zod";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    repeatPassword: "",
    phone: "",
    gender: "male",
  });
  const [errorMessage, setErrorMessage] = useState("");

  // تعریف یک اسکیما کلی برای فرم
  const registerSchema = z.object({
    username: z
      .string()
      .min(5, "Username must have at least 5 characters")
      .regex(
        /^[A-Z][A-Za-z0-9]*$/,
        "Username must start with an uppercase letter and contain only alphanumeric characters"
      ),
    email: z.string().email("Invalid email format"),
    password: z
      .string()
      .min(8, "Password must have at least 8 characters")
      .max(16, "Password must have at most 16 characters")
      .regex(
        /[A-Za-z0-9!@#$]/,
        "Password must contain at least one alphanumeric character or special symbol (!@#$)"
      ),
    phone: z
      .string()
      .length(11, "Phone number must be exactly 11 digits")
      .regex(/^\d+$/, "Phone number must only contain digits"),
    firstName: z.string().min(1, "First Name is required"),
    lastName: z.string().min(1, "Last Name is required"),
    gender: z.enum(["male", "female"]),
    repeatPassword: z.string().min(8, "Repeat Password must have at least 8 characters")
  });

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // بررسی اعتبار فرم
      registerSchema.parse(formData);

      // بررسی تطابق پسوردها
      if (formData.password !== formData.repeatPassword) {
        setErrorMessage("Passwords do not match.");
      } else {
        setErrorMessage("Registration successful!");
        // ارسال داده‌ها به backend برای پردازش بیشتر
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        setErrorMessage(error.errors[0].message);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="flex flex-col h-[60rem] border-gray-400 border-4 w-[30rem] mx-auto bg-gray-300">
      <div className="w-96 p-2 h-screen mx-auto flex flex-col">
        <div className="flex justify-center items-center mt-8">
          <div className="text-[10rem]">
            <img
              src="../../public/assets/shoea.png"
              className="flex items-center justify-center"
            />
          </div>
        </div>
        <h2 className="font-semibold mt-4 text-2xl">Let’s Create an Account</h2>

        <form onSubmit={handleRegister}>
          {/* Username */}
          <div className="relative mt-8 flex flex-col items-center max-w-md mx-auto">
            <FaUserAlt className="absolute text-lg left-3 mt-3 text-gray-500" />
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="UserName..."
              className="pl-10 py-2 border border-gray-300 rounded-md w-full"
            />
            {errorMessage && errorMessage.includes("Username") && (
              <div className="text-red-500 mt-2">{errorMessage}</div>
            )}
          </div>

          {/* Email */}
          <div className="relative mt-8 flex flex-col items-center max-w-md mx-auto">
            <MdEmail className="absolute text-lg left-3 mt-3 text-gray-500" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email..."
              className="pl-10 py-2 border border-gray-300 rounded-md w-full"
            />
            {errorMessage && errorMessage.includes("email") && (
              <div className="text-red-500 mt-2">{errorMessage}</div>
            )}
          </div>

          {/* First Name / Last Name */}
          <div className="relative mt-8 flex justify-between gap-4 items-center max-w-md mx-auto">
            <div>
              <FaUserAlt className="absolute text-lg left-3 mt-3 text-gray-500" />
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name..."
                className="pl-10 py-2 border border-gray-300 rounded-md w-full"
              />
            </div>
            <div>
              <FaUserAlt className="absolute text-lg left-52 mt-3 text-gray-500" />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name..."
                className="pl-10 py-2 border border-gray-300 rounded-md w-full"
              />
            </div>
          </div>

          {/* Password */}
          <div className="relative mt-8 flex flex-col items-center max-w-md mx-auto">
            <RiLockPasswordFill className="absolute text-lg left-3 mt-4 text-gray-500" />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password..."
              className="pl-10 py-2 border border-gray-300 rounded-md w-full"
            />
            {errorMessage && errorMessage.includes("Password") && (
              <div className="text-red-500 mt-2">{errorMessage}</div>
            )}
          </div>

          {/* Repeat Password */}
          <div className="relative mt-8 flex flex-col items-center max-w-md mx-auto">
            <RiLockPasswordFill className="absolute text-lg left-3 mt-4 text-gray-500" />
            <input
              type="password"
              name="repeatPassword"
              value={formData.repeatPassword}
              onChange={handleChange}
              placeholder="Repeat Password..."
              className="pl-10 py-2 border border-gray-300 rounded-md w-full"
            />
            {errorMessage && errorMessage.includes("Passwords") && (
              <div className="text-red-500 mt-2">{errorMessage}</div>
            )}
          </div>

          {/* Gender and Phone */}
          <div className="relative mt-8 gap-4 flex justify-between items-center max-w-md mx-auto">
            <div className="flex items-center space-x-2">
              <ImUsers className="text-lg absolute left-2 text-gray-500" />
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-32 p-2 border left-4 rounded-md text-gray-700 focus:ring-2 focus:ring-indigo-500"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>

            <div>
              <FaPhone className="absolute text-lg left-40 mt-3 text-gray-500" />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number..."
                className="pl-10 py-2 border border-gray-300 rounded-md w-full"
              />
              {errorMessage && errorMessage.includes("Phone") && (
                <div className="text-red-500 mt-2">{errorMessage}</div>
              )}
            </div>
          </div>

          {/* Terms and Conditions */}
          <div className="mt-8 flex items-start gap-2 max-w-md mx-auto">
            <input type="checkbox" className="mt-2 flex items-start" />
            <p className="text-start">
              I have read and accept the User Agreement and Privacy Policy
            </p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="rounded-full mt-36 text-xl bg-black text-white w-full p-2"
          >
            Sign Up
          </button>

          {/* Login Link */}
          <div className="flex gap-16 p-4 items-center">
            <p className="text-gray-400">Don't have an account yet?</p>
            <h2>Login Now</h2>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
