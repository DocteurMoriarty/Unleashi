import React from 'react';
export default function Home(){
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-6">
        🌟 Bienvenue sur <span className="text-blue-900">Unleashi</span> ! 🌟
      </h1>
      <p className="text-lg text-center mb-8">
        <strong>Découvrez un monde d’expression sans limites !</strong>
      </p>

      <section className="bg-white shadow-md rounded-lg p-6 mb-8 max-w-2xl w-full">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">
          Pourquoi rejoindre <span className="text-blue-500">Unleashi</span> ?
        </h2>
        <ul className="list-disc list-inside space-y-3">
          <li className="flex items-center">
            <span className="mr-2 text-green-500">🗣️</span>
            <span>Exprimez-vous sans retenue : Publiez vos pensées, idées et créations sans aucune censure. Ici, votre voix compte !</span>
          </li>
          <li className="flex items-center">
            <span className="mr-2 text-green-500">🤝</span>
            <span>Connectez-vous avec d'autres passionnés : Rejoignez une communauté dynamique d’utilisateurs partageant vos intérêts.</span>
          </li>
          <li className="flex items-center">
            <span className="mr-2 text-green-500">🌈</span>
            <span>Partagez vos expériences : Racontez vos histoires, partagez vos succès et vos défis.</span>
          </li>
          <li className="flex items-center">
            <span className="mr-2 text-green-500">📈</span>
            <span>Restez informé : Suivez les dernières tendances et les sujets qui vous passionnent.</span>
          </li>
        </ul>
      </section>

      <section className="bg-blue-500 text-white rounded-lg p-6 max-w-2xl w-full">
        <h2 className="text-2xl font-semibold mb-4">
          🚀 Rejoignez-nous aujourd'hui !
        </h2>
        <p className="mb-4">
          Inscrivez-vous dès maintenant et plongez dans un univers où votre créativité et votre voix sont à l’honneur.
        </p>
        <button className="bg-white text-blue-500 font-bold py-2 px-4 rounded hover:bg-gray-200">
          Faites entendre votre voix !
        </button>
      </section>
    </div>
  );
};