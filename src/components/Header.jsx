
import React from "react";
import Myntra from "../assets/Myntra.webp";

function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex h-[90px] items-center bg-white shadow-md px-6">

      {/* Logo */}
      <div className="w-[10%] flex justify-center">
        <img
          src={Myntra}
          alt="Myntra Logo"
          className="w-20 h-auto object-contain"
        />
      </div>

      {/* Menu */}
      <nav className="w-[50%] flex justify-center gap-6 font-bold text-sm cursor-pointer">
        <a href="#" className="hover:text-pink-600">MEN</a>
        <a href="#" className="hover:text-pink-600">WOMEN</a>
        <a href="#" className="hover:text-pink-600">KIDS</a>
        <a href="#" className="hover:text-pink-600">HOME & LIVING</a>
        <a href="#" className="hover:text-pink-600">BEAUTY</a>
      </nav>

      {/* Search */}
      <div className="w-[25%]">
        <div className="flex items-center bg-gray-100 rounded-md px-3 py-1 focus-within:bg-white focus-within:ring-1 focus-within:ring-gray-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5 text-gray-500 shrink-0"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>

          <input
            type="text"
            placeholder="Search for products, brands and more"
            className="w-full bg-transparent px-3 py-2 text-sm outline-none"
          />
        </div>
      </div>

      {/* Profile, Wishlist & Bag */}
      <div className="w-[15%] flex items-center justify-evenly text-xs font-semibold">

        {/* Profile */}
        <div className="flex flex-col items-center gap-1 cursor-pointer hover:text-pink-600">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          </svg>
          <p>Profile</p>
        </div>

        {/* Wishlist */}
        <div className="flex flex-col items-center gap-1 cursor-pointer hover:text-pink-600">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
          </svg>
          <p>Wishlist</p>
        </div>

        {/* Bag */}
        <div className="flex flex-col items-center gap-1 cursor-pointer hover:text-pink-600">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007Z" />
          </svg>
          <p>Bag</p>
        </div>

      </div>

 
    </header>
  );
}

export default Header;
