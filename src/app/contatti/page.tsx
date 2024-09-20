'use client'

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
    telefono: "0461 510482",
    indirizzo: "Via Canopi, 4, 38057 Pergine Valsugana TN",
    email: "info@staprogettocasa.it"
  }

  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <div className="relative min-h-screen flex flex-col">
      {/* <div className="absolute inset-0"></div> */}

      <div className="relative flex flex-col xl:flex-row w-full bg-white">
        <div className="xl:w-2/3 w-full h-[800px] flex items-center justify-center text-center text-white xl:h-screen p-8 relative bg-cover bg-center bg-no-repeat overflow-hidden" style={{ backgroundImage: "url('/assets/progetti2.jpg')", backgroundAttachment: "fixed" }}>
          <div className="absolute inset-0 bg-black opacity-65"></div>
          <div className='relative z-10'>
            <h2 className="text-4xl font-bold mb-4">Contattaci</h2>
            <p className="text-xl font-light">Siamo qui per rispondere a tutte le tue domande.</p>
            <div className="mt-10 space-y-3">
              <p>{info.indirizzo}</p>
              <p>{info.email}</p>
              <a href={"tel:0461510482"} className="bg-[#1F3B64] text-white p-3 rounded-xl w-fit block mx-auto">
                Chiama {info.telefono}
              </a>
              <p>oppure</p>
              <a
                href="https://wa.me/0461510482"
                className="bg-[#20bd5b] text-white p-3 rounded-xl w-fit block mx-auto"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contattaci su WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="xl:w-1/3 w-full bg-white p-8 flex flex-col justify-between m-auto">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-4 xl:w-[90%] md:w-[70%] w-full m-auto">
            <div className="mb-4">
              <label htmlFor="nome" className="block text-gray-700 font-bold mb-2">Nome</label>
              <input
                id="nome"
                type="text"
                {...register('nome')}
                className={`w-full border-b ${errors.nome ? 'border-red-500' : 'border-gray-300'} p-2 outline-none focus:border-blue-500 transition-all  text-black`}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="cognome" className="block text-gray-700 font-bold mb-2">Cognome</label>
              <input
                id="cognome"
                type="text"
                {...register('cognome')}
                className={`w-full border-b ${errors.cognome ? 'border-red-500' : 'border-gray-300'} p-2 outline-none focus:border-blue-500 transition-all  text-black`}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
              <input
                id="email"
                type="email"
                {...register('email')}
                className={`w-full border-b ${errors.email ? 'border-red-500' : 'border-gray-300'} p-2 outline-none focus:border-blue-500 transition-all  text-black`}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="oggetto" className="block text-gray-700 font-bold mb-2">Oggetto</label>
              <input
                id="oggetto"
                type="text"
                {...register('oggetto')}
                className={`w-full border-b ${errors.oggetto ? 'border-red-500' : 'border-gray-300'} p-2 outline-none focus:border-blue-500 transition-all  text-black`}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="testo" className="block text-gray-700 font-bold mb-2">Testo</label>
              <textarea
                id="testo"
                {...register('testo')}
                className={`w-full border-b ${errors.testo ? 'border-red-500' : 'border-gray-300'} p-2 outline-none focus:border-blue-500 transition-all text-black h-32`}
              />
            </div>

            <button type="submit" className="bg-[#1F3B64] text-white p-3 rounded-xl w-full transition-all hover:bg-blue-800">
              Invia
            </button>
          </form>

        </div>

      </div>
      <iframe
        className="w-full h-72 lg:h-[500px]"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1384.1733857193906!2d11.239077650617483!3d46.064126292518075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47789d94020091f7%3A0xe628b12061f3d1ad!2sS.T.A.%20Progetto%20Casa!5e0!3m2!1sit!2sit!4v1726648528110!5m2!1sit!2sit"
        style={{ border: 0, pointerEvents: 'visible' }}
        loading="lazy"
      ></iframe>
    </div>
  );
}
