'use client'

import Image from "next/image";
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const attivita = [
    { title: "Progettazione integrata", description: "Lo studio segue un processo decisionale basato sull’inclusione fra committente e tecnici costituito da scelte ponderate che partono dagli obiettivi di progetto e dalla valutazione sistematica delle varie proposte per massimizzare l’efficienza di tutti i processi" },
    { title: "Sostenibilità", description: "La sostenibilità è uno dei temi più importanti della società contemporanea, soprattutto per ciò che riguarda il settore delle costruzioni. L’impegno dello studio per la sostenibilità ambientale nelle costruzioni in bioedilizia e a basso impatto energetico è stato riconosciuto dalle certificazioni Casaclima, Arca e Odatech" },
    { title: "Topografia", description: "Offriamo soluzioni complete ed integrate in campo topografico. Ci occupiamo di eseguire rilievi con le migliori tecnologie ed elaborare i dati acquisiti fornendo al cliente un prodotto con elevati standard di precisione" },
    { title: "Catasto - Libro fondario", description: "Lo studio si interfaccia con gli uffici catastali e notarili per la redazione di planimetrie ed elaborati planimetrici, visure e rilievi catastali. Concludendo le pratiche richieste dal cliente con professionalità e in tempi brevi" },
    { title: "Certificazione energetica", description: "Siamo accreditati per la redazione di certificazioni energetiche (APE) degli edifici residenziali e non avvalendoci si software sempre aggiornati e certificati dagli enti nazionali" },
    { title: "Sicurezza cantieri", description: "Il rispetto delle normative delle norme in ottemperanza al D.lgs. 81/08 titolo IV “Cantieri temporanei o mobili” contribuiscono alla buona riuscita dell’intero progetto. Nel corso degli anni si è avuta la possibilità di acquisire ed incrementare l’esperienza, di conseguire maggiore competenza grazie allo svolgimento di corsi specifici di aggiornamento" },
    { title: "Perizie di stima", description: "Monitoriamo il mercato immobiliare grazie alla  collaborazione con altri professionisti del settore, redigiamo relazioni tecniche e perizie estimative anche asseverate su qualsiasi immobile applicando le linee guida imposte dalle normative del settore" },
    { title: "Consulenza", description: "Lo studio offre servizi di consulenza e supporto completo al cliente in area tecnico-progettuale e in tutti le fasi applicative dell’attività edilizia. Dal progetto preliminare alla direzione lavori e sicurezza del cantiere" },
  ];

  return (
    <div className="flex flex-col mt-20 mb-16">

      
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
            Potete immaginare, creare e costruire il luogo più meraviglioso della terra ma occorreranno sempre le persone perché il sogno diventi realtà (Walt Disney)
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
            <h2 className="text-4xl font-bold mb-4">Professionisti del Mercato Edilizio</h2>
            <p className="text-sm lg:text-base text-gray-700 mb-4">
              Lo studio nasce nel 1997 dalla volontà di alcuni professionisti di unire
              le singole potenzialità e le specifiche competenze al fine di creare una struttura
              tecnica multidisciplinare in grado di rispondere al meglio alle
              esigenze nell’ambito mercato edilizio.
            </p>

            <h3 className="text-lg lg:text-xl font-bold mt-4">Cliente Coinvolto</h3>
            <p className="text-sm lg:text-base text-gray-700">
              Si ritiene di importanza il rapporto con il cliente che, fin dalle fasi iniziali, viene coinvolto
              nel processo progettuale, in modo da renderlo partecipe della progettazione
              trovando soluzioni più idonee e personalizzate
            </p>

            <h3 className="text-lg lg:text-xl font-bold mt-4">Lavoro di squadra</h3>
            <p className="text-sm lg:text-base text-gray-700">
              Affrontiamo incarico con entusiasmo e determinazione, puntando sul lavoro di squadra,
              dove l’azione di ognuno è indispensabile e complementare a quella degli altri
              ed in modo che i numerosi e continui confronti possano valorizzare il nel suo complesso
              coinvolgendo nelle scelte anche il committente
            </p>

            <h3 className="text-lg lg:text-xl font-bold mt-4">Obiettivo Comune</h3>
            <p className="text-sm lg:text-base text-gray-700">
              Non basta l’addizione di figure professionali per arrivare alla certezza del risultato, ma serve l’abilità,
              la diversificazione delle competenze e il continuo aggiornamento raggiungere l’obiettivo comune
            </p>
          </div>
        </div>

        
        <div className="text-black mt-24">
          <h2 className="text-2xl lg:text-4xl font-bold text-center mb-8">I nostri servizi</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {attivita.map((service, idx) => (
              <div key={idx} className="flex flex-col items-center gap-2 p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <h3 className="text-lg lg:text-xl font-bold text-[#1F3B64]">{service.title}</h3>
                <p className="text-sm lg:text-base text-center text-gray-700">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

       
        <div className="flex flex-wrap gap-8 items-center justify-center mt-32">
          <Image src="/assets/arca.jpg" alt="Arca" width={80} height={50} />
          <Image src="/assets/odatech.png" alt="Odatech" width={170} height={30} />
          <Image src="/assets/evaluations.png" alt="Evaluations" width={100} height={50} />
          <Image src="/assets/casaClima.png" alt="CasaClima" width={100} height={50} />
        </div>
      </div>
    </div>
  );
}
