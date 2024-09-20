'use client'

import Image from 'next/image';

export default function Footer() {
  const urls = {
    instagram: "https://www.instagram.com/sta_progettocasa/",
    facebook: "",
    whatsapp: ""
  }

  const openUrl = (url: string) => {
    window.open(urls.instagram, "_blank", "noreferrer")
  }

  return (
    <div className="bg-gray-100 text-gray-600 flex flex-col items-center p-8">
      <div className="flex flex-col items-center gap-2 mb-4">
        <p className="text-sm">0461 510482</p>
        <p className="text-sm">info@staprogettocasa.it</p>
        <p className="text-sm">Via Canopi, 4, 38057 Pergine Valsugana TN</p>
        <p className="text-xs">© 2024</p>
      </div>
      <div className="flex gap-4">
        <Image
          src="/assets/instagram.png"
          alt="Instagram"
          width={26}
          height={26}
          layout="fixed"
          className="opacity-80 hover:opacity-100 transition-opacity cursor-pointer"
          onClick={() => openUrl(urls.instagram)}
        />
        <Image
          src="/assets/whatsapp.png"
          alt="Whatsapp"
          width={26}
          height={26}
          layout="fixed"
          className="opacity-80 hover:opacity-100 transition-opacity cursor-pointer"
        />
        <Image
          src="/assets/facebook.png"
          alt="Facebook"
          width={26}
          height={26}
          layout="fixed"
          className="opacity-80 hover:opacity-100 transition-opacity cursor-pointer"
        />
      </div>
    </div>
  );
}
