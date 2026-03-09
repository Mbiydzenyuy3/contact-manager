import React from "react";
import { Link } from "react-router-dom";

const Logo = ({ className }) => {
  return (
    <Link
      to='/'
      className={`inline-flex items-center gap-3 hover:opacity-90 transition-opacity ${className || ""}`}
    >
      <span
        className='text-3xl font-extrabold tracking-tighter font-sans'
        style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
      >
        <span className='text-[#4285F4]'>K</span>
        <span className='text-[#34A853]'>I</span>
        <span className='text-[#FBBC05]'>T</span>
        <span className='text-[#751792]'>H</span>
      </span>
    </Link>
  );
};

export default Logo;
