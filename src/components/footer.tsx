import Image from 'next/image';

export default function Footer() {
  return (
    <div className="bg-gray-100 text-gray-600 flex flex-col items-center p-4">
      <div className="flex flex-col items-center gap-2 mb-4">
        <p className="text-sm">0461 510505</p>
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
          className="opacity-60 hover:opacity-80 transition-opacity"
        />
        <Image
          src="/assets/facebook.png"
          alt="Facebook"
          width={26}
          height={26}
          layout="fixed"
          className="opacity-40 hover:opacity-70 transition-opacity"
        />
      </div>
    </div>
  );
}
