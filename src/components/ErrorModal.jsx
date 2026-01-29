import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { ExclamationCircleIcon } from "@heroicons/react/outline";

const ErrorModal = ({ message, onClose }) => {
  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className='fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50'
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: -20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className='bg-slate-800 border border-white/10 rounded-2xl shadow-2xl w-full max-w-md relative p-8 text-white'
            onClick={(e) => e.stopPropagation()}
          >
            <div className='flex items-start gap-4'>
              <div className='w-12 h-12 flex-shrink-0 rounded-full bg-red-500/10 flex items-center justify-center text-red-400'>
                <ExclamationCircleIcon className='w-7 h-7' />
              </div>
              <div>
                <h3 className='text-lg font-bold text-white mb-2'>
                  Something went wrong
                </h3>
                <p className='text-gray-300'>{message}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className='mt-8 w-full py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-medium transition-all focus:outline-none focus:ring-2 focus:ring-purple-500/50'
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ErrorModal;
