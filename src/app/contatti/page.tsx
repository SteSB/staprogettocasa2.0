'use client'

import Image from "next/image";
import { useEffect, useState } from "react";
import { useForm } from 'react-hook-form';
import { z, ZodError } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
  nome: z.string().nonempty('Nome richiesto'),
  cognome: z.string().nonempty('Cognome richiesto'),
  email: z.string().email('Email non valida'),
  oggetto: z.string().nonempty('Oggetto richiesto'),
  testo: z.string().nonempty('Testo richiesto'),
});

type FormValues = z.infer<typeof schema>;

export default function ContactForm() {
  const info = {
    telefono: "0461 510505",
    indirizzo: "Via Canopi, 4, 38057 Pergine Valsugana TN",
    email: "info@staprogettocasa.it"
  }

  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormValues) => {
    // Invia i dati via email o gestisci l'invio
    console.log(data);
  };

  return (
    <div className="text-black mt-40 flex flex-col items-center">
      <div className="w-full max-w-4xl flex flex-col lg:flex-row lg:justify-between lg:space-x-8 p-4">
        <div className="mb-8 lg:mb-0 lg:w-1/2">
          <p className="font-medium text-2xl">Contattaci</p>
          <p className="font-light text-md">Chiamaci o compila il form per chiedere informazioni.</p>
          <div className="mt-8 flex flex-col gap-4">
            <p>{info.indirizzo}</p>
            <p>{info.email}</p>
            <a href={"tel:0461510505"} className="bg-[#1F3B64] text-white p-2 rounded-xl w-fit">{info.telefono}</a>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 lg:w-1/2">
          <div className="mb-4">
            <label htmlFor="nome" className="block text-gray-700 font-bold mb-2">Nome</label>
            <input
              id="nome"
              type="text"
              {...register('nome')}
              className={`w-full border-b ${errors.nome ? 'border-red-500' : 'border-black'} p-2 outline-none focus:border-blue-500`}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="cognome" className="block text-gray-700 font-bold mb-2">Cognome</label>
            <input
              id="cognome"
              type="text"
              {...register('cognome')}
              className={`w-full border-b ${errors.cognome ? 'border-red-500' : 'border-black'} p-2 outline-none focus:border-blue-500`}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
            <input
              id="email"
              type="email"
              {...register('email')}
              className={`w-full border-b ${errors.email ? 'border-red-500' : 'border-black'} p-2 outline-none focus:border-blue-500`}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="oggetto" className="block text-gray-700 font-bold mb-2">Oggetto</label>
            <input
              id="oggetto"
              type="text"
              {...register('oggetto')}
              className={`w-full border-b ${errors.oggetto ? 'border-red-500' : 'border-black'} p-2 outline-none focus:border-blue-500`}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="testo" className="block text-gray-700 font-bold mb-2">Testo</label>
            <textarea
              id="testo"
              {...register('testo')}
              className={`w-full border-b ${errors.testo ? 'border-red-500' : 'border-black'} p-2 outline-none focus:border-blue-500`}
            />
          </div>

          <button type="submit" className="bg-[#1F3B64] text-white p-2 rounded-xl w-full">
            Invia
          </button>
        </form>
      </div>
      <iframe className="w-full mt-8" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1384.1733857193906!2d11.239077650617483!3d46.064126292518075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47789d94020091f7%3A0xe628b12061f3d1ad!2sS.T.A.%20Progetto%20Casa!5e0!3m2!1sit!2sit!4v1726648528110!5m2!1sit!2sit" width="600" height="450" style={{ border: 0 }} loading="lazy"></iframe>
    </div>
  );
}
