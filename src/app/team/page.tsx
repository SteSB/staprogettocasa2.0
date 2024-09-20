'use client'

import Image from "next/image";
import { useEffect, useState } from "react";

interface TeamMember {
  nome: string;
  ruolo: string;
  descrizione: string;
  immagine: string;
  social: Record<string, string>;
}

interface TeamData {
  [id: string]: TeamMember;
}

export default function Team() {
  const [team, setTeam] = useState<TeamData | null>(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/team');
      const result: TeamData = await response.json();
      setTeam(result);
    }

    fetchData();
  }, []);

  console.log(team)

  if (!team) {
    return <div className="h-screen flex justify-center items-center"><p>Loading...</p></div>;
  }

  return (
    <div className="px-4 py-16 mx-auto max-w-screen-xl text-black mt-28 mb-16">
      <h2 className="text-5xl font-extrabold text-center mb-12">Il nostro team</h2>
      <p className="text-center text-xl mb-20">Insieme facciamo in modo che l'ordinario diventi straordinario.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {Object.keys(team).map((id, index) => {
          const member = team[id];
          return (
            <div key={id} className="flex flex-col items-center text-center shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
              <div className="relative w-full h-64 sm:h-80 overflow-hidden">
                <Image 
                  src={member.immagine}
                  alt={member.nome}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold mb-2">{member.nome}</h3>
                <p className="text-lg text-[#1F3B64] mb-4">{member.ruolo}</p>
                <p className="text-gray-600 mb-6">{member.descrizione}</p>

                <div className="flex justify-center gap-4">
                  {Object.keys(member.social).map((platform) => (
                    <a key={platform} href={member.social[platform]} target="_blank" rel="noopener noreferrer" className="text-[#1F3B64] hover:text-blue-500 transition-colors">
                      <i className={`fab fa-${platform} text-2xl`}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
