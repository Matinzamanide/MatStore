import { useState } from "react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/auth-context";

export default function Login() {
  const [username, setUsername] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [strength, setStrength] = useState<string>("");
  const navigate = useNavigate();
  const calculateStrength = (password: string) => {
    if (password.length === 0) return "";
    if (password.length < 6) return "ضعیف";
    if (password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/))
      return "قوی";
    return "متوسط";
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
    setStrength(calculateStrength(value));
  };
  const { setIsLogin } = useAuthContext();
  const loginHandler = () => {
    setIsLogin(true);
    toast.success("با موفقیت وارد شدید");
    navigate("/cart");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-neutral-100">
      <div className="w-full max-w-sm p-6 bg-neutral-900 rounded-lg shadow-sm shadow-neutral-700">
        <h2 className="text-lg font-semibold mb-4">ایجاد حساب کاربری</h2>

        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="نام کاربری"
          className="w-full p-3 mb-4 text-sm text-neutral-100 border border-neutral-600 rounded-lg bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="شماره تماس"
          className="w-full p-3 mb-4 text-sm text-neutral-100 border border-neutral-600 rounded-lg bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="password"
          value={password}
          onChange={(e) => handlePasswordChange(e.target.value)}
          placeholder="رمز عبور"
          className="w-full p-3 mb-4 text-sm text-neutral-100 border border-neutral-600 rounded-lg bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div className="h-2 w-full rounded-full bg-neutral-700 relative overflow-hidden mb-2">
          <div
            className={`absolute top-0 left-0 h-full transition-all duration-500 ${
              strength === "قوی"
                ? "bg-green-400 w-full"
                : strength === "متوسط"
                ? "bg-yellow-500 w-2/3"
                : strength === "ضعیف"
                ? "bg-red-500 w-1/3"
                : "bg-neutral-700"
            }`}
          ></div>
        </div>

        <p
          className={`text-center text-sm font-medium transition-all duration-500 ${
            strength === "قوی"
              ? "text-green-400"
              : strength === "متوسط"
              ? "text-yellow-500"
              : strength === "ضعیف"
              ? "text-red-500"
              : "text-neutral-400"
          }`}
        >
          {strength ? ` قدرت رمز عبور: ${strength} ` : "رمز عبور وارد نشده"}
        </p>
        <input
          type="button"
          value="تایید"
          className="bg-emerald-600 text-gray-300 hover:bg-emerald-700 cursor-pointer w-full py-2 mt-4 rounded-md"
          onClick={() => loginHandler()}
        />
      </div>
    </div>
  );
}
