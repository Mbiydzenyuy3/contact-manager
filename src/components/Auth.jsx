import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContacts } from "../lib/ContactContext";

export default function Auth() {
  const { signIn } = useContacts();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await signIn(email);
      navigate("/link-sent", { state: { email } });
    } catch (error) {
      alert(error.message);
      setLoading(false);
    }
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-50 px-4'>
      <form
        onSubmit={handleSubmit}
        className='bg-white p-10 rounded-xl shadow-lg w-full max-w-sm md:max-w-md lg:max-w-lg'
      >
        <h2 className='text-3xl font-bold text-gray-900 mb-8 text-center'>
          Sign In to KITH
        </h2>
        <p className='text-gray-600 mb-6 text-center text-lg'>
          Enter your email to receive a magic link
        </p>
        <input
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='your@email.com'
          className='w-full p-4 border border-gray-300 rounded-lg transition-all focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 mb-6 text-lg'
          required
        />
        <button
          type='submit'
          disabled={loading}
          className='w-full bg-purple-500 text-white p-4 rounded-lg font-medium transition-all hover:bg-purple-600 disabled:opacity-50 text-lg'
        >
          {loading ? "Sending..." : "Send Link"}
        </button>
      </form>
    </div>
  );
}
