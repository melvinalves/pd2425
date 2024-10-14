import React from 'react';
import 'tailwindcss/tailwind.css';

function App() {
  return (
      <div className="min-h-screen bg-gray-100 text-black font-sans">
        <header className="flex justify-between items-center bg-gray-800 text-white p-4">
          <div className="text-2xl">Fix4You</div>
          <button className="bg-yellow-600 text-white py-2 px-4 rounded hover:bg-yellow-500">Login</button>
        </header>
        <div className="flex justify-around my-16">
          <div className="bg-yellow-100 p-8 w-1/3 shadow-lg rounded-lg">
            <h2 className="text-3xl font-bold mb-4">Register as a professional</h2>
            <p className="mb-4">
              Looking for a place to promote your services? ⛏️<br />
              Whether you're a carpenter, plumber, electrician, or any other skilled professional, Fix4You is the right platform for you! 🌟
            </p>
            <p className="mb-6">Join **** today and start growing your business!</p>
            <button className="bg-yellow-600 text-white py-2 px-4 rounded hover:bg-yellow-500">Register</button>
          </div>
          <div className="bg-yellow-100 p-8 w-1/3 shadow-lg rounded-lg">
            <h2 className="text-3xl font-bold mb-4">Contact professionals</h2>
            <p className="mb-4">
              Ready to find the perfect professional for your request? 🤝<br />
              At Fix4You, we connect you with skilled professionals in carpentry, plumbing, electrical work, and much more. Whether you need a quick repair or a full renovation, we've got you covered!
            </p>
            <p className="mb-6">It's simple, fast, and free! 🔧</p>
            <button className="bg-yellow-600 text-white py-2 px-4 rounded hover:bg-yellow-500">Register</button>
          </div>
        </div>
        <footer className="text-center bg-gray-800 text-white p-8">
          <p>© 2024 Fix4You, Inc. All rights reserved.</p>
          <div className="mt-4">
          </div>
        </footer>
      </div>
  );
}

export default App;
