'use client'

import Image from "next/image";
import { useEffect, useState } from "react";

interface TeamMember {
  nome: string;
  ruolo: string;
  descrizione: string;
  immagine: string;
  social: Record<string, string>; // sistemare
}

interface TeamData {
  [id: string]: TeamMember;
}

export default function Team() {
  const [team, setTeam] = useState<TeamData | null>(null)

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/team')
      const result: TeamData = await response.json()
      setTeam(result)
    }

    fetchData()
  }, [])

  if (!team) {
    return <div className="h-screen"></div>;
  }

  return (
    <div className="text-black mt-40 p-5 mx-auto max-w-screen-xl">
      <p className="font-medium text-4xl text-center mb-28">Il nostro team</p>

      {Object.keys(team).map((id, index) => {
        const member = team[id];
        return (
          <div
            key={id}
            className={`flex items-center gap-10 mb-32 justify-center lg:text-left text-center 
        ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col`}
          >
            <img
              src={member.immagine}
              alt={member.nome}
              width={300}
              className="w-60 h-60 rounded-full object-cover"
            />
            <div>
              <h3 className="font-bold text-4xl w-fit lg:m-0 m-auto">{member.nome}</h3>
              <p className="font-bold text-lg text-[#1F3B64] w-fit mt-5 mb-5 lg:ml-0 m-auto">
                {member.ruolo}
              </p>
              <p className="max-w-lg">{member.descrizione}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
