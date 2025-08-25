import React from 'react';

const Success = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-green-50 px-4">
      <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center gap-4 max-w-sm text-center">
        <h1 className="text-2xl font-bold text-gray-800">
          Login Successful!
        </h1>
       <p className="text-gray-600">You have successfully logged in. Welcome back!</p>

        <button onClick={() => window.location.href = '/'}className="mt-4 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded-md transition">
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default Success;
