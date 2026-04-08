import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { IoCheckmarkCircle } from "react-icons/io5";
import { registerUser, verifyOtp } from "../api/auth";

const Register = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [otpMessage, setOtpMessage] = useState("");

    const [form, setForm] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        password_confirmation: "",
        terms: false,
    });

    const [otpForm, setOtpForm] = useState({
        otp: "",
    });

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm({ ...form, [name]: type === "checkbox" ? checked : value });
    };

    const handleRegisterSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            const formData = new FormData();
            formData.append("first_name", form.first_name);
            formData.append("last_name", form.last_name);
            formData.append("email", form.email);
            formData.append("password", form.password);
            formData.append("password_confirmation", form.password_confirmation);
            formData.append("terms", form.terms);

            const res = await registerUser(formData);
            const data = res.data;

            // Handle logical errors within 2xx response
            if (data.status === false || data.error) {
                setError(data.message || data.error || "Failed to register.");
                setLoading(false);
                return;
            }

            // Extract OTP from API response as requested
            // Note: Adjust the exact path to OTP based on API's actual JSON structure e.g. data.otp or data.data.otp
            const receivedOtp = data?.otp || data?.data?.otp || "Check API response for OTP";
            setOtpMessage(`Registration successful! Your OTP for verification is: ${receivedOtp}`);

            // Move to OTP step
            setStep(2);
        } catch (err) {
            setError(err.response?.data?.message || err.response?.data?.error || "Network error occurred.");
        }
        setLoading(false);
    };

    const handleOtpSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            const formData = new FormData();
            formData.append("email", form.email);
            formData.append("otp", otpForm.otp);

            const res = await verifyOtp(formData);
            const data = res.data;

            if (data.status === false || data.error) {
                setError(data.message || "OTP Verification failed.");
                setLoading(false);
                return;
            }

            // After successful registration & verification, redirect to Login
            navigate("/login");
        } catch (err) {
            setError(err.response?.data?.message || err.response?.data?.error || "Network error occurred.");
        }
        setLoading(false);
    };

    return (
        <div className="min-h-screen bg-[#111] flex items-center justify-center p-4 relative overflow-hidden text-white font-satoshi">
            {/* Background elements */}
            <div className="absolute top-[-100px] left-[-100px] w-96 h-96 bg-[#85b839] blur-[150px] opacity-20 rounded-full"></div>
            <div className="absolute bottom-[-100px] right-[-100px] w-96 h-96 bg-[#71AC16] blur-[150px] opacity-20 rounded-full"></div>

            <div className="w-full max-w-lg bg-[#1a1a1a] shadow-2xl rounded-3xl p-8 sm:p-10 relative z-10 border border-white/10">
                <div className="text-center mb-8">
                    <h2 className="text-4xl font-black tilt text-white mb-2">{step === 1 ? "JOIN THE SQUAD" : "VERIFY ACCOUNT"}</h2>
                    <p className="text-gray-400">{step === 1 ? "Power your potential with us." : "Enter the OTP sent to complete registration."}</p>
                </div>

                {error && <div className="bg-red-500/10 border border-red-500/50 text-red-500 p-3 rounded-xl mb-6 text-sm text-center">{error}</div>}

                {step === 1 && (
                    <form onSubmit={handleRegisterSubmit} className="space-y-5">
                        <div className="flex gap-4">
                            <div className="flex-1">
                                <label className="block text-sm font-bold text-gray-300 mb-1">First Name</label>
                                <input required type="text" name="first_name" value={form.first_name} onChange={handleInputChange} className="w-full bg-[#2a2a2a] border border-[#333] px-4 py-3 rounded-xl focus:outline-none focus:border-[#85b839] transition text-white" placeholder="John" />
                            </div>
                            <div className="flex-1">
                                <label className="block text-sm font-bold text-gray-300 mb-1">Last Name</label>
                                <input required type="text" name="last_name" value={form.last_name} onChange={handleInputChange} className="w-full bg-[#2a2a2a] border border-[#333] px-4 py-3 rounded-xl focus:outline-none focus:border-[#85b839] transition text-white" placeholder="Doe" />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-gray-300 mb-1">Email</label>
                            <input required type="email" name="email" value={form.email} onChange={handleInputChange} className="w-full bg-[#2a2a2a] border border-[#333] px-4 py-3 rounded-xl focus:outline-none focus:border-[#85b839] transition text-white" placeholder="user@example.com" />
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-gray-300 mb-1">Password</label>
                            <input required type="password" name="password" value={form.password} onChange={handleInputChange} className="w-full bg-[#2a2a2a] border border-[#333] px-4 py-3 rounded-xl focus:outline-none focus:border-[#85b839] transition text-white" placeholder="••••••••" />
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-gray-300 mb-1">Confirm Password</label>
                            <input
                                required
                                type="password"
                                name="password_confirmation"
                                value={form.password_confirmation}
                                onChange={handleInputChange}
                                className="w-full bg-[#2a2a2a] border border-[#333] px-4 py-3 rounded-xl focus:outline-none focus:border-[#85b839] transition text-white"
                                placeholder="••••••••"
                            />
                        </div>

                        <div className="flex items-center gap-3">
                            <input type="checkbox" name="terms" checked={form.terms} onChange={handleInputChange} id="terms" className="w-5 h-5 accent-[#85b839] cursor-pointer" />
                            <label htmlFor="terms" className="text-sm text-gray-400 cursor-pointer">
                                I agree to the <span className="text-[#85b839] hover:underline">Terms</span> & <span className="text-[#85b839] hover:underline">Conditions</span>
                            </label>
                        </div>

                        <button disabled={loading} type="submit" className="w-full bg-[#85b839] hover:bg-[#71AC16] text-white py-4 rounded-xl font-bold text-lg transition duration-300 shadow-[0_0_15px_rgba(133,184,57,0.4)] disabled:opacity-50">
                            {loading ? "PROCESSING..." : "REGISTER NOW"}
                        </button>

                        <div className="text-center mt-6">
                            <p className="text-gray-400 text-sm">
                                Already have an account?{" "}
                                <Link to="/login" className="text-[#85b839] font-bold hover:underline">
                                    Login here
                                </Link>
                            </p>
                        </div>
                    </form>
                )}

                {step === 2 && (
                    <form onSubmit={handleOtpSubmit} className="space-y-6">
                        {otpMessage && (
                            <div className="bg-[#85b839]/10 border border-[#85b839]/50 text-[#85b839] p-4 rounded-xl text-center flex flex-col items-center gap-2">
                                <IoCheckmarkCircle className="text-3xl" />
                                <span className="font-bold">{otpMessage}</span>
                            </div>
                        )}

                        <div>
                            <label className="block text-sm font-bold text-gray-300 mb-1">Enter Verification Code</label>
                            <input
                                required
                                type="text"
                                name="otp"
                                value={otpForm.otp}
                                onChange={(e) => setOtpForm({ otp: e.target.value })}
                                className="w-full bg-[#2a2a2a] border border-[#333] px-4 py-3 rounded-xl focus:outline-none focus:border-[#85b839] text-center text-2xl tracking-[0.5em] transition text-white uppercase"
                                placeholder="-----"
                            />
                        </div>

                        <button disabled={loading} type="submit" className="w-full bg-[#85b839] hover:bg-[#71AC16] text-white py-4 rounded-xl font-bold text-lg transition duration-300 shadow-[0_0_15px_rgba(133,184,57,0.4)] disabled:opacity-50">
                            {loading ? "VERIFYING..." : "VERIFY OTP"}
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default Register;
