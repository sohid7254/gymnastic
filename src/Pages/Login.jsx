import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { loginUser } from "../api/auth";

const Login = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const [form, setForm] = useState({
        email: "",
        password: "",
        remember_me: false
    });

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm({ ...form, [name]: type === "checkbox" ? checked : value });
    };

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            const formData = new FormData();
            formData.append("email", form.email);
            formData.append("password", form.password);
            formData.append("remember_me", form.remember_me);

            const res = await loginUser(formData);
            const data = res.data;

            if (data.status === false || data.error) {
                 setError(data.message || data.error || "Invalid login credentials.");
                 setLoading(false);
                 return;
            }

            // Typical handling of token (you can customize token storage)
            if (data?.token) {
                localStorage.setItem("token", data.token);
            } else if (data?.data?.token) {
                localStorage.setItem("token", data.data.token);
            }

            // Check if login response provides an OTP directly (per request instructions "Use OTP from API response" we might auto-display it or just pass through)
            if (data?.otp || data?.data?.otp) {
                alert(`Login notice - OTP detected in response: ${data?.otp || data?.data?.otp}`);
                // if it requires another step of verification we could implement here, but instructions say "Once the user logs in successfully, navigate them to the Landing page"
            }

            navigate("/");
        } catch (err) {
            setError(err.response?.data?.message || err.response?.data?.error || "Network error occurred.");
        }
        setLoading(false);
    };

    return (
        <div className="min-h-screen bg-[#111] flex items-center justify-center p-4 relative overflow-hidden text-white font-satoshi">
            {/* Background elements */}
            <div className="absolute top-[-100px] right-[-100px] w-96 h-96 bg-[#85b839] blur-[150px] opacity-20 rounded-full"></div>
            <div className="absolute bottom-[-100px] left-[-100px] w-96 h-96 bg-[#71AC16] blur-[150px] opacity-20 rounded-full"></div>

            <div className="w-full max-w-lg bg-[#1a1a1a] shadow-2xl rounded-3xl p-8 sm:p-10 relative z-10 border border-white/10">
                <div className="text-center mb-8">
                    <h2 className="text-4xl font-black tilt text-white mb-2">WELCOME BACK</h2>
                    <p className="text-gray-400">Log in to unleash your capabilities.</p>
                </div>

                {error && (
                    <div className="bg-red-500/10 border border-red-500/50 text-red-500 p-3 rounded-xl mb-6 text-sm text-center">
                        {error}
                    </div>
                )}

                <form onSubmit={handleLoginSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-bold text-gray-300 mb-1">Email</label>
                        <input required type="email" name="email" value={form.email} onChange={handleInputChange} className="w-full bg-[#2a2a2a] border border-[#333] px-4 py-3 rounded-xl focus:outline-none focus:border-[#85b839] transition text-white" placeholder="user@example.com" />
                    </div>

                    <div>
                        <div className="flex justify-between items-center mb-1">
                            <label className="block text-sm font-bold text-gray-300">Password</label>
                            <a href="#" className="text-xs text-[#85b839] hover:underline">Forgot password?</a>
                        </div>
                        <input required type="password" name="password" value={form.password} onChange={handleInputChange} className="w-full bg-[#2a2a2a] border border-[#333] px-4 py-3 rounded-xl focus:outline-none focus:border-[#85b839] transition text-white" placeholder="••••••••" />
                    </div>

                    <div className="flex items-center gap-3">
                        <input type="checkbox" name="remember_me" checked={form.remember_me} onChange={handleInputChange} id="remember" className="w-5 h-5 accent-[#85b839] cursor-pointer" />
                        <label htmlFor="remember" className="text-sm text-gray-400 cursor-pointer">
                            Remember Me
                        </label>
                    </div>

                    <button disabled={loading} type="submit" className="w-full bg-[#85b839] hover:bg-[#71AC16] text-white py-4 rounded-xl font-bold text-lg transition duration-300 shadow-[0_0_15px_rgba(133,184,57,0.4)] disabled:opacity-50">
                        {loading ? "AUTHENTICATING..." : "LOGIN"}
                    </button>

                    <div className="text-center mt-6">
                        <p className="text-gray-400 text-sm">
                            Don't have an account? <Link to="/register" className="text-[#85b839] font-bold hover:underline">Sign up now</Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
