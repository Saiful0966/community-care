
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { 
  Mail, 
  Lock, 
  Eye, 
  EyeOff 
} from 'lucide-react';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { authClient } from '@/lib/auth-client';
import toast, { Toaster } from 'react-hot-toast';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const loadingToast = toast.loading('Signing in...');

    const { data, error } = await authClient.signIn.email({
      email,
      password,
    }, {
      onSuccess: () => {
        toast.dismiss(loadingToast);
        toast.success('Signed in successfully!');
        router.push('/');
      },
      onError: (ctx) => {
        toast.dismiss(loadingToast);
        toast.error(ctx.error.message || 'Invalid email or password');
      }
    });

    if (error) {
      toast.dismiss(loadingToast);
      toast.error(error.message || 'Login failed');
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
      <Toaster position="top-right" reverseOrder={false} />

      <div className="bg-white w-full max-w-xl rounded-3xl shadow-xl p-10 border border-slate-100">
        
        {/* Logo  */}
        <div className="flex justify-center mb-6">
          <div className="relative w-16 h-16">
            <Image 
              src="/logo2.png" 
              alt="Logo" 
              fill 
              className="object-contain"
            />
          </div>
        </div>

        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Welcome Back</h1>
          <p className="text-base text-slate-500 mt-2">
            Please enter your details to sign in
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          
          {/* Email        */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
              Email Address
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                <Mail size={20} />
              </span>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email"
                className="w-full pl-11 pr-4 py-3 text-base bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-slate-800 placeholder:text-slate-400"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
                Password
              </label>
              {/* <Link 
                href="/forgot-password" 
                className="text-xs font-semibold text-blue-600 hover:underline"
              >
                Forgot password?
              </Link> */}
            </div>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                <Lock size={20} />
              </span>
              <input
                type={showPassword ? 'text' : 'password'}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-11 pr-12 py-3 text-base bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-slate-800 placeholder:text-slate-400"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-slate-600 focus:outline-none"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full mt-3 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold py-3.5 rounded-xl shadow-md transition-colors flex items-center justify-center gap-2 text-base"
          >
            <span>Login</span>
            <span>→</span>
          </button>
        </form>

        {/* Divider */}
        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-200"></div>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-white px-4 text-slate-400 font-semibold">OR</span>
          </div>
        </div>

        {/* Social Logins */}
        <div className="space-y-3.5">
          <button
            type="button"
            className="w-full flex items-center justify-center gap-3 py-3 px-4 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors text-slate-700 font-semibold text-sm shadow-sm"
          >
            <FcGoogle size={22} />
            <span>Sign in with Google</span>
          </button>

          <button
            type="button"
            className="w-full flex items-center justify-center gap-3 py-3 px-4 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors text-slate-700 font-semibold text-sm shadow-sm"
          >
            <FaGithub size={22} className="text-slate-900" />
            <span>Sign in with GitHub</span>
          </button>
        </div>

        {/* Footer Link */}
        <div className="text-center mt-8 text-sm text-slate-500">
          Don&apos;t have an account?{' '}
          <Link href="/signup" className="text-blue-600 font-semibold hover:underline">
            Register here
          </Link>
        </div>

      </div>
    </div>
  );
}