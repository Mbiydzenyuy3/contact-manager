import { useState } from "react";
import { Link } from "react-router-dom";
import { SparklesIcon } from "@heroicons/react/outline";

export default function Home() {
  const [pasteText, setPasteText] = useState("");

  const handlePaste = (e) => {
    const text = e.target.value;
    setPasteText(text);
  };

  return (
    <>
      <div className='w-full min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex flex-col'>
        <div className='flex-1 flex flex-col items-center justify-center px-4'>
          <div className='max-w-4xl mx-auto text-center'>
            <h1 className='text-5xl md:text-7xl font-bold text-white mb-4'>
              KITH
            </h1>
            <p className='text-xl md:text-2xl text-purple-200 mb-2'>
              Never forget how you met.
            </p>
            <p className='text-lg text-gray-300 mb-12 max-w-2xl mx-auto'>
              Your brain is for having ideas, not for remembering email
              signatures.
            </p>

            <div className='mb-8'>
              <textarea
                value={pasteText}
                onChange={handlePaste}
                placeholder='Paste an email signature, LinkedIn profile, or any contact info here...'
                className='w-full max-w-2xl h-32 p-6 text-lg border-2 border-purple-400 rounded-xl bg-white/10 backdrop-blur-sm text-white placeholder-gray-400 focus:outline-none focus:border-purple-300 focus:ring-2 focus:ring-purple-500 resize-none'
              />
            </div>

            <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
              <Link
                to='/contact'
                className='inline-flex items-center px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg shadow-lg transition-all transform hover:scale-105'
              >
                <SparklesIcon className='w-5 h-5 mr-2' />
                Auto-Fill for Me{" "}
              </Link>
              <p className='text-sm text-gray-400'>
                No account required • Instant parsing
              </p>
            </div>
          </div>
        </div>

        <footer className='bg-black/20 backdrop-blur-sm py-8'>
          <div className='max-w-4xl mx-auto text-center'>
            <p className='text-gray-400'>
              © {new Date().getFullYear()} KITH. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
