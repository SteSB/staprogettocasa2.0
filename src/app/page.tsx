'use client'

import Image from "next/image";
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex flex-col">
      
      <div
        className="relative bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{ height: '800px', backgroundImage: "url('/assets/home1.jpg')", backgroundAttachment: "fixed" }}
      >
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="relative flex flex-col justify-center items-center h-full p-8 text-white z-10">
          <p className="text-5xl lg:text-8xl font-bold text-center mb-10">
            STA <br className="lg:hidden" />
            PROGETTO <br className="lg:hidden" />
            CASA
          </p>
          <p className="text-base lg:text-lg xl:w-1/2 text-center mb-16">
            Lorem ipsum dolor sit amet consectetur. Libero magna in ut elementum cursus enim tincidunt.
            ultrices viverra turpis amet cras adipiscing. Dictumst pellentesque sagittis turpis blandit.
            sit nulla vestibulum auctor viverra.
          </p>
          <p className="text-lg cursor-pointer underline">Vedi Brochure</p>
        </div>
      </div>

      
      <div className="h-20 bg-white"></div>

      
      <div className="flex flex-col max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col-reverse lg:flex-row gap-8 lg:gap-12">
          <div className="lg:w-1/2 w-full flex items-center justify-center">
            <img
              src="/assets/home2.jpg"
              alt="Seconda immagine"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          <div className="lg:w-1/2 w-full flex flex-col justify-center text-black">
            <h2 className="text-2xl lg:text-4xl font-bold mb-4">Professionisti del Mercato Edilizio</h2>
            <p className="text-sm lg:text-base text-gray-700 mb-4">
              Lo studio nasce nel 1997 dalla volontà di alcuni professionisti di unire le singole potenzialità
              e le specifiche competenze al fine di creare una struttura tecnica multidisciplinare in grado di
              rispondere al meglio alle esigenze nell’ambito mercato edilizio.
            </p>

            <h3 className="text-lg lg:text-xl font-bold mt-4">Cliente Coinvolto</h3>
            <p className="text-sm lg:text-base text-gray-700">
              Si ritiene di importanza il rapporto con il cliente che, fin dalle fasi iniziali, viene coinvolto
              nel processo progettuale, in modo da renderlo partecipe della progettazione trovando soluzioni
              più idonee e personalizzate.
            </p>

            <h3 className="text-lg lg:text-xl font-bold mt-4">Lavoro di squadra</h3>
            <p className="text-sm lg:text-base text-gray-700">
              Affrontiamo incarico con entusiasmo e determinazione, puntando sul lavoro di squadra, dove l’azione
              di ognuno è indispensabile e complementare a quella degli altri ed in modo che i numerosi e continui
              confronti possano valorizzare il nel suo complesso coinvolgendo nelle scelte anche il committente.
            </p>

            <h3 className="text-lg lg:text-xl font-bold mt-4">Obiettivo Comune</h3>
            <p className="text-sm lg:text-base text-gray-700">
              Non basta l’addizione di figure professionali per arrivare alla certezza del risultato, ma serve
              l’abilità, la diversificazione delle competenze e il continuo aggiornamento per raggiungere
              l’obiettivo comune.
            </p>
          </div>
        </div>

        
        <div className="text-black mt-24">
          <h2 className="text-2xl lg:text-4xl font-bold text-center mb-8">I nostri servizi</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { title: "Perizie di stima", description: "Non basta l’addizione di figure professionali per arrivare alla certezza del risultato, ma serve l’abilità," },
              { title: "Sicurezza cantieri", description: "Non basta l’addizione di figure professionali per arrivare alla certezza del risultato, ma serve l’abilità," },
              { title: "Topografia", description: "Non basta l’addizione di figure professionali per arrivare alla certezza del risultato, ma serve l’abilità," },
              { title: "Catasto - Libro fondario", description: "Non basta l’addizione di figure professionali per arrivare alla certezza del risultato, ma serve l’abilità," },
            ].map((service, idx) => (
              <div key={idx} className="flex flex-col items-center w-full sm:w-1/2 lg:w-1/4 gap-2">
                <h3 className="text-lg lg:text-xl font-bold text-[#1F3B64]">{service.title}</h3>
                <p className="text-sm lg:text-base text-center">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        
        <div className="text-black mt-24">
          <h2 className="text-2xl lg:text-4xl font-bold text-center mb-8">Progetti</h2>
          <div className="flex flex-wrap gap-8 justify-center">
            {["/assets/progetti1.jpg", "/assets/progetti2.jpg", "/assets/progetti1.jpg"].map((src, idx) => (
              <div key={idx} className="relative w-full sm:w-[45%] md:w-[30%] overflow-hidden group">
                <div className="relative pb-[100%]">
                  <img
                    src={src}
                    alt={`Img progetto ${idx + 1}`}
                    className="absolute inset-0 w-full h-full object-cover rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-xl">Visualizza</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-10">
            <p className="underline cursor-pointer" onClick={() => router.push('/progetti')}>Vedi altro</p>
          </div>
        </div>

       
        <div className="flex gap-16 items-center justify-center mt-32">
          <Image src="/assets/arca.jpg" alt="Arca" width={80} height={50} layout="fixed" />
          <Image src="/assets/odatech.png" alt="Odatech" width={180} height={50} layout="fixed" />
          <Image src="/assets/casaClima.png" alt="CasaClima" width={100} height={50} layout="fixed" />
        </div>
      </div>
    </div>
  );
}
