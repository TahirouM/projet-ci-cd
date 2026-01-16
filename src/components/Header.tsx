"use client";

import Link from "next/link";
import { Search, User, ShoppingBag } from "lucide-react";

export default function Header() {
  return (
    <>
      {/* Promo Banner */}
      <div className="bg-black text-white text-center py-2 text-sm">
        Get 25% Off This Summer: Sale. Grab It Fast! · <span className="font-medium">TEXT · 48M · 3375</span>
      </div>

      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-sm font-medium text-black hover:text-gray-700 transition">
                Men
              </a>
              <a href="#" className="text-sm font-medium text-black hover:text-gray-700 transition">
                Women
              </a>
              <a href="#" className="text-sm font-medium text-black hover:text-gray-700 transition">
                Kids
              </a>
              <a href="#" className="text-sm font-medium text-black hover:text-gray-700 transition">
                New & Featured
              </a>
              <a href="#" className="text-sm font-medium text-black hover:text-gray-700 transition">
                Gift
              </a>
            </nav>

            {/* Logo */}
            <div className="flex-1 flex justify-center md:justify-start md:absolute md:left-1/2 md:-translate-x-1/2">
              <Link href="/" className="text-2xl text-black font-bold tracking-[0.3em]">
                TOLUS
              </Link>
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-6">
              <button className="text-black hover:text-gray-700 transition">
                <Search className="w-5 h-5" />
              </button>
              <button className="text-black hover:text-gray-700 transition">
                <User className="w-5 h-5" />
              </button>
              <button className="text-black hover:text-gray-700 transition">
                <ShoppingBag className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

