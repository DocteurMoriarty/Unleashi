import React from 'react';

export default function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Sign up for Unleashi</h2>
        
        <form>
          {}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
              id="username"
              type="text"
              placeholder="Enter your username"
              required
            />
          </div>

          {}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
              id="email"
              type="email"
              placeholder="Enter your email"
              required
            />
          </div>

          {}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
              id="password"
              type="password"
              placeholder="Enter your password"
              required
            />
          </div>

          {}
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
              Phone Number (optional)
            </label>
            <input
              className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
              id="phone"
              type="tel"
              placeholder="Enter your phone number"
            />
          </div>

          {}
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Register
            </button>
          </div>
        </form>

        {}
        <div className="my-6 flex items-center">
          <hr className="flex-grow border-t border-gray-300" />
          <span className="mx-4 text-gray-500">OR</span>
          <hr className="flex-grow border-t border-gray-300" />
        </div>

        {}
        <div className="flex justify-center">
          <button
            className="w-full bg-red-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 mb-2"
          >
            Sign up with Google
          </button>
        </div>
        <div className="text-center text-gray-500 mt-4">
          Already have an account? <a href="/login" className="text-blue-500 hover:text-blue-700">Log in</a>
        </div>
      </div>
    </div>
  );
}
