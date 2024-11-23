'use client'

import Link from "next/link";
import FeaturesSection from '@/app/components/FeaturesSection'
import AdvantagesSection from '@/app/components/AdvantagesSection'
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="mt-20 shadow-xl" id='acceuil'>
      <div
        className="bg-accent h-[100vh] w-full bg-cover bg-center relative flex items-center justify-center flex-col"
        style={{ backgroundImage: `url('/logo.jpg')` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        <div className="relative z-10 text-white p-8">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl font-bold text-accent mb-2"
          >
            FacePresence <br /> La Révolution de la Gestion de Présence par l'IA
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-2xl pl-[8%]"
          >
            Automatisez la gestion des présences en toute simplicité grâce à la reconnaissance faciale intelligente.
          </motion.p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-20 w-full">
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href={'#why'}
              className="btn text-white btn-accent text-xl"
            >
              Pourquoi FacePresence?
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href={'#know-more'}
              className="btn text-white btn-accent btn-outline text-xl"
            >
              En savoir plus
            </motion.a>
          </div>
        </div>
      </div>

      <div className="mt-20 mb-20 w-full flex items-center justify-center">
        <ul className="steps  steps-vertical md:steps-horizontal md:w-[80%]">
          <li className="step step-accent">
            <Link href={''} className="badge badge-accent badge-outline text-xl p-3">
              Le problème résolu
            </Link>
          </li>

          <li className="step step-accent">
            <Link href={''} className="badge badge-outline text-xl p-3">
              La Valeur Ajoutée
            </Link>
          </li>
          <li className="step">
            <Link href={''} className="badge badge-outline text-xl p-3">
              Les Fonctionnalités
            </Link>
          </li>
          <li className="step">
            <Link href={''} className="badge badge-outline text-xl p-3">
              Avantages Clés
            </Link>
          </li>
        </ul>
      </div>

      <div className="bg-gray-100 py-12 px-6 md:px-12 text-center" id='know-more'>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            En savoir plus sur FacePresence
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8 text-justify">
            FacePresence est une solution innovante de gestion de présence basée sur la reconnaissance faciale.
            Elle simplifie le suivi des présences, améliore l'efficacité, et garantit la sécurité des données.
            Conçue pour s'intégrer facilement dans votre organisation, FacePresence est l'allié parfait pour les entreprises modernes.
          </p>
        </div>
      </div>

      <div className="bg-gray-100 p-8 rounded-lg shadow-md my-10">
        <h2 className="text-4xl font-bold text-center text-accent mb-6">
          Un Problème Courant : La Gestion Manuelle des Présences
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <p className="text-lg text-gray-700 text-2xl">
              <strong className="text-3xl ">Fraudes et erreurs :</strong> La saisie manuelle entraîne des inexactitudes et des abus.
            </p>
            <p className="text-lg text-gray-700 text-2xl">
              <strong className="text-3xl ">Perte de temps :</strong> RH et managers consacrent de précieuses heures à la gestion des présences.
            </p>
            <p className="text-lg text-gray-700 text-2xl">
              <strong className="text-3xl ">Difficulté de suivi :</strong> Suivre la ponctualité et la productivité devient un défi.
            </p>
          </div>

          <div className="relative flex justify-center gap-4">
            <div className="flex flex-col items-center">
              <img
                src="/img1.jpeg"
                alt="Tableau d'appel manuel"
                className="w-64 h-64 object-cover rounded-lg shadow-lg mb-4"
              />
              <p className="text-center text-gray-600 font-medium">Tableau d'appel manuel</p>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 left-[50%] transform -translate-x-1/2 text-gray-500 text-2xl">
              ➜
            </div>
            <div className="flex flex-col items-center ml-4">
              <img
                src="/img2.jpeg"
                alt="Système numérique"
                className="w-64 h-64 object-cover rounded-lg shadow-lg mb-4"
              />
              <p className="text-center text-gray-600 font-medium">FacePresence</p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3*/}
      <div className="bg-gray-100 py-16 px-8" id="why">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Pourquoi Choisir FacePresence ?</h2>
          <p className="text-2xl text-gray-600 mb-10">
            FacePresence révolutionne la gestion des présences en entreprise avec des technologies de pointe.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Points-clés */}
            <div className="flex flex-col justify-center">
              <ul className="list-disc list-inside text-left text-gray-700 text-lg space-y-4">
                <li className="text-2xl"><strong>99% de précision</strong> grâce à des modèles d'IA avancés.</li>
                <li className="text-2xl">Suivi en <strong>temps réel</strong> des entrées et sorties.</li>
                <li className="text-2xl"><strong>Automatisation</strong> des rapports d'assiduité quotidiens.</li>
                <li className="text-2xl">Compatible avec <strong>plusieurs caméras</strong> et appareils.</li>
              </ul>
            </div>

            {/* Visuel */}
            <div className="relative">
              <img
                src="/img3.jpeg"
                alt="Infographie sur l'intégration de FacePresence"
                className="rounded-lg shadow-lg w-full h-auto max-w-4xl mx-auto object-contain"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg flex items-center justify-center">
                <p className="text-white text-2xl font-semibold">FacePresence dans une entreprise</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id='fonctionnalites'>
        <FeaturesSection />
      </div>

      <div id="avantages">
        <AdvantagesSection />
      </div>


      <div className="bg-primary py-16 px-6 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Prêt à Transformer Votre Gestion de Présence ?
        </h2>
        <p className="mb-8 text-lg md:text-xl">
          Découvrez comment FacePresence peut améliorer l'efficacité de votre gestion de présence. Demandez une démo ou contactez-nous pour en savoir plus !
        </p>
        <div className="flex justify-center gap-6">
          <a
            href="#contact"
            className="bg-accent text-white py-3 px-6 rounded-md text-lg font-semibold hover:bg-accent-dark transition duration-300"
          >
            Demandez une Démo
          </a>
          <a
            href="#contact"
            className="bg-transparent border-2 border-white text-white py-3 px-6 rounded-md text-lg font-semibold hover:bg-white hover:text-black transition duration-300"
          >
            Contactez-nous
          </a>
        </div>
      </div>

      <section className="bg-white py-16 px-6 md:px-12 text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-8">
            Pourquoi choisir FacePresence ?
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-12">
            Découvrez en une minute pourquoi FacePresence est la solution idéale
            pour révolutionner la gestion de présence dans votre entreprise.
            Regardez cette vidéo pour en savoir plus sur ses avantages et son impact.
          </p>
          <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-lg shadow-lg">
            <video
              controls
              className="w-full h-auto"
              poster="/poster.png"
              preload="metadata">
              <source src="/video.mp4" type="video/mp4" />
              Votre navigateur ne supporte pas la lecture vidéo.
            </video>
          </div>
        </div>
      </section>

    </div>
  );
}
