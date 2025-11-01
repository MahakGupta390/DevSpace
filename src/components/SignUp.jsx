import { useNavigate } from "react-router-dom";
import { useState } from "react";
const SignUp = () => {
    const navigate = useNavigate();
     const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Check if both fields are filled
  const isFormValid = email.trim() !== "" && password.trim() !== "";

  const handleSignIn = () => {
    if (isFormValid) {
      // later you'll check login credentials here
      navigate("/dashboard");
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-n-8 text-n-1">
      <div className="bg-n-7 p-8 rounded-2xl shadow-lg w-[90%] max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center">Sign In</h2>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Full Name"
            className="p-3 rounded bg-n-8 border border-n-6"
          />
          <input
            type="email"
            placeholder="Email"
             onChange={(e) => setEmail(e.target.value)}
            className="p-3 rounded-lg border mb-4 w-full"
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          className="p-3 rounded-lg border mb-6 w-full"
          />
          <button   onClick={handleSignIn}
          disabled={!isFormValid}
          className={`py-3 rounded font-semibold w-full transition-opacity ${
            isFormValid
              ? "bg-color-1 text-white hover:opacity-90 cursor-pointer"
              : "bg-gray-400 text-gray-200 cursor-not-allowed"
          }`}>
            Sign In
          </button>
        </form>

       
      </div>
    </div>
  );
};

export default SignUp;
