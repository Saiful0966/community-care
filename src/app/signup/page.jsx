
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import toast, { Toaster } from 'react-hot-toast'; 
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { FiEye, FiEyeOff, FiLock, FiMail, FiUser, FiCheck, FiX } from 'react-icons/fi';

export default function SignUp() {
  const router = useRouter();
  
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
  });

  const hasUppercase = /[A-Z]/.test(formData.password);
  const hasLowercase = /[a-z]/.test(formData.password);
  const hasMinLength = formData.password.length >= 6;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (hasUppercase && hasLowercase && hasMinLength) {
      console.log('Form Submitted:', formData);
      
      // toast notification
      toast.success('Account created successfully!');
      
      // redirect to login page after
      setTimeout(() => {
        router.push('/login');
      }, 1000);
      
    } else {
      // error toast notification 
      toast.error('Please all requirements.');
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4 sm:p-6">
      {/* 2. Toaster  notification */}
      <Toaster position="top-center" reverseOrder={false} />

      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-xl p-8 sm:p-12 border border-slate-100">

        {/* Logo Section */}
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 relative flex items-center justify-center">
            <img 
              src="/logo2.png" 
              alt="Logo" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* title */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
            Create Account
          </h1>
          <p className="text-slate-500 text-sm sm:text-base">
            Join the community and start driving social change
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Full Name */}
          <div>
            <label className="block text-xs font-bold text-slate-800 mb-2  tracking-wider">
              Full Name
            </label>
            <div className="relative">
              <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Full Name"
                required
                className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#1577FE] focus:border-transparent transition"
              />
            </div>
          </div>

          {/* Email Address */}
          <div>
            <label className="block text-xs font-bold text-slate-800 mb-2  tracking-wider">
              Email Address
            </label>
            <div className="relative">
              <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#1577FE] focus:border-transparent transition"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-xs font-bold text-slate-800 mb-2 tracking-wider">
              Password
            </label>
            <div className="relative">
              <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                required
                className="w-full pl-12 pr-12 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#1577FE] focus:border-transparent transition"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                {showPassword ? <FiEyeOff className="w-5 h-5" /> : <FiEye className="w-5 h-5" />}
              </button>
            </div>

            {/* Password Validation Rules */}
            <div className="mt-3 p-4 bg-slate-50 rounded-xl border border-slate-200/60 space-y-2 text-xs sm:text-sm">
              <div className={`flex items-center gap-2 ${hasUppercase ? 'text-emerald-600 font-medium' : 'text-slate-400'}`}>
                {hasUppercase ? <FiCheck className="w-4 h-4" /> : <FiX className="w-4 h-4" />}
                <span>At least one uppercase letter (A-Z)</span>
              </div>
              <div className={`flex items-center gap-2 ${hasLowercase ? 'text-emerald-600 font-medium' : 'text-slate-400'}`}>
                {hasLowercase ? <FiCheck className="w-4 h-4" /> : <FiX className="w-4 h-4" />}
                <span>At least one lowercase letter (a-z)</span>
              </div>
              <div className={`flex items-center gap-2 ${hasMinLength ? 'text-emerald-600 font-medium' : 'text-slate-400'}`}>
                {hasMinLength ? <FiCheck className="w-4 h-4" /> : <FiX className="w-4 h-4" />}
                <span>Minimum 6 characters length</span>
              </div>
            </div>
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-[#1577FE] hover:bg-[#0d66e0] text-white font-semibold py-4 rounded-xl shadow-lg shadow-[#1577FE]/30 transition duration-200 flex items-center justify-center gap-2 text-base"
          >
            Register &rarr;
          </button>
        </form>

        {/* Divider */}
        <div className="relative my-7 text-center">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-200"></div>
          </div>
          <span className="relative bg-white px-4 text-xs uppercase font-bold text-slate-400 tracking-wider">
            OR
          </span>
        </div>

        {/* Social Buttons */}
        <div className="space-y-3.5">
          <button
            type="button"
            className="w-full py-3.5 px-4 bg-white border border-slate-200 rounded-xl text-slate-700 font-semibold text-sm sm:text-base hover:bg-slate-50 transition flex items-center justify-center gap-3"
          >
            <FcGoogle className="w-5 h-5" />
            Sign in with Google
          </button>
          
          <button
            type="button"
            className="w-full py-3.5 px-4 bg-white border border-slate-200 rounded-xl text-slate-700 font-semibold text-sm sm:text-base hover:bg-slate-50 transition flex items-center justify-center gap-3"
          >
            <FaGithub className="w-5 h-5 text-slate-900" />
            Sign in with GitHub
          </button>
        </div>

        {/* Login Link */}
        <p className="mt-8 text-center text-xs sm:text-sm text-slate-500 font-medium">
          Already have an account?{' '}
          <Link href="/login" className="text-[#1577FE] font-bold hover:underline">
            Login here
          </Link>
        </p>

      </div>
    </div>
  );
}