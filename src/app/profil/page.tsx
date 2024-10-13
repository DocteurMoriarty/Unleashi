// src/app/user/[id]/page.tsx

import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Profil Utilisateur',
};

interface UserProfileProps {
  params: {
    id: string; // ID de l'utilisateur
  };
}

// Composant principal de la page de profil
const UserProfile: React.FC<UserProfileProps> = ({ params }) => {
  const username = `Utilisateur ${params.id}`; // Exemple de nom d'utilisateur
  const profilePicture = "https://via.placeholder.com/150"; // Image de profil
  const topics = [
    "Mon premier sujet",
    "Découvertes en programmation",
    "Voyages et aventures",
  ]; // Exemple de sujets créés

  return (
      <div className="bg-white shadow-md rounded-lg p-6 max-w-md w-full">
        <div className="flex flex-col items-center mb-6">
          <img
            src={profilePicture}
            alt={`${username}'s profile`}
            className="w-32 h-32 rounded-full border-2 border-blue-500 mb-4"
          />
          <h1 className="text-3xl font-bold text-blue-600">{username}</h1>
        </div>

        <h2 className="text-2xl font-semibold text-blue-600 mb-4">Sujets créés :</h2>
        {topics.length > 0 ? (
          <ul className="list-disc list-inside space-y-2">
            {topics.map((topic, index) => (
              <li key={index} className="text-lg text-gray-700">
                {topic}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-lg text-gray-500">Aucun sujet créé encore.</p>
        )}

        <div className="mt-4">
          <Link href="/" className="text-blue-500 hover:underline">
            Retour à l'accueil
          </Link>
        </div>
      </div>
  );
};

export default UserProfile;
