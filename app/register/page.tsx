"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { registerUser } from "@/firebase/registerUser";

export default function Register() {
  const router = useRouter();

  const [form, setForm] = useState({
    email: "",
    username: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await registerUser(form.email, form.username, form.password);

      alert("Account created successfully!");
      setForm({ email: "", username: "", password: "" });

      router.push("/dashboard");
    } catch (error: any) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#FFFFFF]">
      <main className="flex flex-col md:flex-row w-full min-h-screen">
        {/* Left Image Side (hidden on mobile) */}
        <section className="hidden md:flex flex-1 bg-[url('/photo.png')] bg-no-repeat bg-cover bg-center"></section>

        {/* Register Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center text-center flex-1 bg-gray-100 py-10 px-6"
        >
          <h1 className="text-3xl font-bold mb-6">Register</h1>

          {/* Email */}
          <label className="w-full mb-1 text-sm font-semibold text-left">Email</label>
          <input
            className="w-full mb-4 p-3 rounded border"
            type="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          {/* Username */}
          <label className="w-full mb-1 text-sm font-semibold text-left">Username</label>
          <input
            className="w-full mb-4 p-3 rounded border"
            type="text"
            placeholder="Enter your username"
            value={form.username}
            onChange={(e) => setForm({ ...form, username: e.target.value })}
          />

          {/* Password */}
          <label className="w-full mb-1 text-sm font-semibold text-left">Password</label>
          <input
            className="w-full mb-4 p-3 rounded border"
            type="password"
            placeholder="Enter your password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />

          {/* Register Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full text-white p-3 rounded mb-4 ${
              loading ? "bg-blue-300 cursor-not-allowed" : "bg-[#3DA8F5FF]"
            }`}
          >
            {loading ? "Registering..." : "Register"}
          </button>

          <Link href="/login" className="text-sm text-[#3DA8F5FF]">
            Already have an account? Login
          </Link>
        </form>
      </main>
    </div>
  );
}
