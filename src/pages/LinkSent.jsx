import { useLocation } from "react-router-dom";

export default function LinkSent() {
  const location = useLocation();
  const email = location.state?.email || "your email";

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-50'>
      <div className='bg-white p-8 rounded-xl shadow-lg w-full max-w-md text-center'>
        <h2 className='text-2xl font-bold text-gray-900 mb-4'>Link Sent!</h2>
        <p className='text-gray-600 mb-6'>
          A magic link has been sent to <strong>{email}</strong>. Please check
          your email and click the link to log in.
        </p>
        <p className='text-gray-500 text-sm'>
          You can wait here until you confirm the login from your email.
        </p>
      </div>
    </div>
  );
}
