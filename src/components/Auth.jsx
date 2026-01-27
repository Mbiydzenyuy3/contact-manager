import React, { useState, useEffect } from "react";
import { supabase } from "../lib/supabaseClient";
import { useNavigate, Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
  MailIcon,
  ArrowRightIcon,
  SparklesIcon
} from "@heroicons/react/outline";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.backgroundColor = "#0f172a";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        throw new Error("Please enter a valid email address");
      }

      const { error } = await supabase.auth.signInWithOtp({
        email,
        options: {
          emailRedirectTo: window.location.origin
        }
      });
      if (error) throw error;
      navigate("/link-sent", { state: { email } });
    } catch (error) {
      // Provide more user-friendly error messages
      if (
        error.message?.includes("fetch") ||
        error.message?.includes("network")
      ) {
        alert(
          "Unable to connect to the server. Please check your internet connection and try again."
        );
      } else if (error.message?.includes("Invalid email")) {
        alert("Please enter a valid email address");
      } else {
        alert(
          error.error_description ||
            error.message ||
            "An error occurred. Please try again."
        );
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='min-h-screen w-full flex flex-col items-center justify-center px-4 relative overflow-hidden text-white font-sans selection:bg-purple-500 selection:text-white'>
      {/* Background Effects */}
      <div className='absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] -z-10 pointer-events-none' />

      <nav className='absolute top-0 w-full p-6 flex justify-between items-center'>
        <Link to='/' className='inline-flex items-center gap-2'>
          <div className='w-8 h-8 bg-gradient-to-tr from-purple-600 to-blue-500 rounded-lg flex items-center justify-center shadow-lg shadow-purple-500/20'>
            <span className='font-bold text-lg text-white'>K</span>
          </div>
          <span className='text-xl font-bold tracking-tight text-white'>
            KITH
          </span>
        </Link>
      </nav>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className='w-full max-w-md'
      >
        <div className='bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl shadow-2xl relative overflow-hidden'>
          <div className='absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none' />

          <div className='mb-8 text-center'>
            <div className='inline-flex items-center justify-center w-12 h-12 rounded-xl bg-purple-500/20 text-purple-300 mb-4'>
              <SparklesIcon className='w-6 h-6' />
            </div>
            <h1 className='text-2xl font-bold mb-2'>Welcome Back</h1>
            <p className='text-gray-400'>Sign in to manage your connections</p>
          </div>

          <form onSubmit={handleLogin} className='space-y-6'>
            <div>
              <label className='block text-sm font-medium text-gray-300 mb-2'>
                Email Address
              </label>
              <div className='relative'>
                <MailIcon className='absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500' />
                <input
                  type='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder='you@example.com'
                  className='w-full bg-slate-900/50 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all'
                  required
                />
              </div>
            </div>

            <button
              type='submit'
              disabled={loading}
              className='w-full py-3.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl text-white font-bold shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2'
            >
              {loading ? (
                "Sending Magic Link..."
              ) : (
                <>
                  <span>Sign In with Magic Link</span>
                  <ArrowRightIcon className='w-4 h-4' />
                </>
              )}
            </button>
          </form>

          <div className='mt-6 text-center'>
            <p className='text-xs text-gray-500'>
              By signing in, you agree to our Terms of Service and Privacy
              Policy.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
