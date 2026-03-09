import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { CheckCircleIcon } from "@heroicons/react/outline";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function LinkSent() {
  const location = useLocation();
  const email = location.state?.email || "your email";

  useEffect(() => {
    document.body.style.backgroundColor = "#0f172a";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <div className='min-h-screen w-full flex items-center justify-center px-4 relative overflow-hidden text-white font-sans'>
      <div className='absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] -z-10 pointer-events-none' />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className='bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl shadow-2xl w-full max-w-md text-center relative overflow-hidden'
      >
        <div className='absolute top-0 right-0 w-32 h-32 bg-emerald-500/20 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none' />

        <div className='w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6 text-emerald-400'>
          <CheckCircleIcon className='w-8 h-8' />
        </div>

        <h2 className='text-2xl font-bold text-white mb-4'>Link Sent</h2>
        <p className='text-gray-300 mb-8 leading-relaxed'>
          A magic link has been sent to <br />
          <strong className='text-white'>{email}</strong>. Please check your
          email and click the link to log in.
        </p>

        <div className='space-y-4'>
          <p className='text-gray-500 text-sm'>You can close this tab now.</p>
          <Link
            to='/auth'
            className='block text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors'
          >
            Back to Sign In
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
