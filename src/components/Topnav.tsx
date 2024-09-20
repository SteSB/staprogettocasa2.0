'use client'

import Image from 'next/image'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const navItems = [
  { label: 'Team', path: '/team' },
  { label: 'Lavora con noi', path: '/lavoraconnoi' },
  { label: 'Progetti', path: '/progetti' },
  { label: 'Contattaci', path: '/contatti' },
];

export default function Topnav() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  return (
    <div className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="flex justify-between items-center w-full max-w-screen-xl mx-auto p-4">
        <div className="flex items-center gap-4 text-black font-bold" onClick={() => router.push('/')}>
          <Image src="/assets/logo.png" alt="Logo" width={60} height={60} layout="fixed" className="cursor-pointer" />
          <p>STA Progetto Casa</p>
        </div>

        <div className="lg:hidden">
          <button onClick={() => setMenuOpen(!isMenuOpen)} className="text-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>

        <div className="hidden lg:flex gap-8 text-black font-light">
          {navItems.map(({ label, path }) => (
            <p
              key={label}
              className="cursor-pointer hover:text-blue-600 transition-colors"
              onClick={() => router.push(path)}
            >
              {label}
            </p>
          ))}
        </div>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-max-height duration-500 ease-in-out ${isMenuOpen ? 'max-h-96' : 'max-h-0'
          }`}
      >
        <div className="bg-white w-full p-4">
          {navItems.map(({ label, path }) => (
            <>
              <p
                key={label}
                className="cursor-pointer py-2 hover:text-blue-600 transition-colors text-black"
                onClick={() => {
                  router.push(path);
                  setMenuOpen(false);
                }}
              >
                {label}
              </p>
              <hr />
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
