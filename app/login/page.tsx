"use client";

import { useState } from "react";
import Link from "next/link";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { loginUser } from "@/firebase/loginUser";
import { auth, googleProvider } from "@/firebase/config";
import { signInWithPopup } from "firebase/auth";

export default function Login() {
  const router = useRouter();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await loginUser(form.email, form.password);
      router.push("/dashboard");
    } catch (error: any) {
      toast.error(`Oops! ${error.message} 😬`);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      router.push("/dashboard");
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#FFFFFF]">
      <main className="flex flex-col md:flex-row w-full min-h-screen bg-[#FFFFFF]">
        <section className="hidden md:flex flex-1 bg-[url('/photo.png')] bg-no-repeat bg-cover"></section>

        <form
          onSubmit={handleLogin}
          className="flex flex-col items-center justify-center text-center flex-1 bg-gray-100 py-10"
        >
          <h1 className="font-bold mb-5 text-3xl mt-4">Welcome Back</h1>

          {/* Email */}
          <div className="flex flex-col items-start w-[80%] mb-7">
            <label className="font-medium text-sm">Email</label>
            <input
              className="w-full h-12 pl-4 rounded-sm mt-1 bg-[#FAFAFBFF]"
              type="email"
              placeholder="johndoe@gmail.com"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>

          {/* Password */}
          <div className="flex flex-col items-start w-[80%]">
            <div className="flex justify-between w-full">
              <label className="font-medium text-sm">Password</label>
              <Link href="/" className="text-sm text-[#3DA8F5FF] cursor-pointer">
                Forgot password?
              </Link>
            </div>

            <input
              className="w-full h-12 pl-4 rounded-sm mt-1 bg-[#FAFAFBFF]"
              type="password"
              placeholder="Enter your password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
          </div>

          {/* Login button */}
          <div className="mt-9 w-[80%]">
            <button
              type="submit"
              disabled={loading}
              className={`w-full h-13 text-white cursor-pointer rounded-sm mb-3 ${
                loading ? "bg-blue-300 cursor-not-allowed" : "bg-[#3DA8F5FF]"
              }`}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </div>

          <Link href="/register" className="text-sm">
            Don’t have an account? <strong>Register</strong>
          </Link>

          <p className="text-center py-7">OR</p>

          {/* Google Sign-In */}
          <nav className="w-[80%]">
            <button
              type="button"
              onClick={handleGoogleSignIn}
              className="bg-[#FAFAFBFF] w-full h-13 text-black cursor-pointer rounded-sm mb-3"
            >
              Continue with Google
            </button>
          </nav>
        </form>
      </main>
    </div>
  );
}
