import React, { useState } from "react";

export const HeaderHero = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <header className="py-4 md:py-6">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-white">
            <h1
              className="text-xl md:text-2xl lg:text-3xl font-bold"
              style={{ color: "rgb(195, 88, 59)" }}
            >
              b&d
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button
              className="bg-white px-4 py-2 rounded-full transition-all duration-300 flex items-center space-x-3 font-semibold focus:outline-none hover:shadow-lg transform hover:scale-105 group"
              style={{
                color: "rgb(104, 102, 114)",
              }}
            >
              <span className="text-base text-black md:text-lg">
                Contáctanos
              </span>
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                style={{ backgroundColor: "rgb(195, 88, 59)" }}
              >
                <svg
                  className="w-5 h-5 text-white transform transition-transform duration-300 group-hover:translate-x-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="bg-white px-2 py-1 rounded-full transition-all duration-300 flex items-center space-x-3 font-semibold focus:outline-none hover:shadow-lg transform hover:scale-105 group"
          >
            <span className="text-sm text-black md:text-lg">Contáctanos</span>
          </button>
        </div>
      </div>
    </header>
  );
};
