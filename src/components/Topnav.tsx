'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Team', path: '/team' },
  { label: 'Progetti', path: '/progetti' },
  { label: 'Contattaci', path: '/contatti' },
];

export default function Topnav() {
  const router = useRouter();

  return (
    <div className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="flex justify-between items-center w-full max-w-screen-xl mx-auto p-4">
        <div className="flex items-center gap-4 text-black font-bold">
          <Image src="/assets/logo.png" alt="Logo" width={60} height={60} layout="fixed" />
          <p>STA Progetto Casa</p>
        </div>
        <div className="flex gap-8 text-black font-light">
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
    </div>
  );
}
