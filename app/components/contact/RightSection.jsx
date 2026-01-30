"use client";
import React from 'react'
import {
  FaPaperPlane,
} from "react-icons/fa";

const RightSection = () => {
  return (
    <>
    
            {/* Right Form */}
        <form className="">
          <input
            type="text"
            placeholder="Full Name"
            defaultValue="Tery Humfy D. Tawez"
            className="w-full bg-gray-900 text-white px-4 py-3 rounded border border-gray-700 focus:outline-none focus:border-pink-500"
          />
          <input
            type="email"
            placeholder="Email Address"
            defaultValue="teryy@humfy.org"
            className="w-full bg-gray-900 text-white px-4 py-3 rounded border border-gray-700 focus:outline-none focus:border-pink-500"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            defaultValue="+821 (123) 45678"
            className="w-full bg-gray-900 text-white px-4 py-3 rounded border border-gray-700 focus:outline-none focus:border-pink-500"
          />
          <input
            type="text"
            placeholder="Subject"
            className="w-full bg-gray-900 text-white px-4 py-3 rounded border border-gray-700 focus:outline-none focus:border-pink-500"
          />
          <textarea
            placeholder="Write your message..."
            rows="5"
            className="w-full bg-gray-900 text-white px-4 py-3 rounded border border-gray-700 focus:outline-none focus:border-pink-500"
          ></textarea>
          <button
            type="submit"
            className="flex items-center gap-2 bg-pink-500 text-white px-6 py-3 rounded hover:bg-pink-600 transition duration-300 font-semibold"
          >
            <FaPaperPlane /> Send Message
          </button>
        </form>
    
    </>
  )
}

export default RightSection