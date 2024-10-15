// src/app/page.tsx (Exemple d'une page)

import ClientLayout from "../components/ClientLayout";
export default function ChatPage() {
  return (
    <ClientLayout>
      <div className="flex min-h-screen bg-gray-100">
        {/* Colonne de gauche : liste des discussions */}
        <div className="w-1/4 bg-white shadow-lg p-4">
          <h2 className="text-xl font-semibold mb-4">Liste des discussions</h2>
          <ul className="list-none space-y-2">
            <li className="p-2 bg-gray-200 rounded">Discussion 1</li>
            <li className="p-2 bg-gray-200 rounded">Discussion 2</li>
            <li className="p-2 bg-gray-200 rounded">Discussion 3</li>
            <li className="p-2 bg-gray-200 rounded">Discussion 4</li>
          </ul>
        </div>

        {/* Colonne du milieu : sujet de la discussion et chat */}
        <div className="flex-1 flex flex-col p-4">
          {/* Sujet de la discussion */}
          <div className="mb-4">
            <h2 className="text-2xl font-semibold mb-2">
              Sujet de la discussion
            </h2>
            <div className="p-4 bg-white shadow rounded">
              <p className="text-lg">Titre du sujet</p>
              <p className="text-gray-600">
                Description du sujet de discussion...
              </p>
            </div>
          </div>

          {/* Section de chat */}
          <div className="flex-1 bg-white shadow-lg rounded p-4">
            <h2 className="text-xl font-semibold mb-4">Chat</h2>
            <div className="overflow-y-auto h-64 mb-4 border border-gray-300 p-2">
              {/* Messages de chat (exemple statique) */}
              <div className="mb-2">
                <strong>User 1:</strong> Bonjour tout le monde !
              </div>
              <div className="mb-2">
                <strong>User 2:</strong> Salut ! Comment ça va ?
              </div>
              {/* Ajoutez d'autres messages ici */}
            </div>
            <input
              type="text"
              className="border border-gray-300 p-2 w-full rounded"
              placeholder="Votre message..."
            />
          </div>
        </div>

        {/* Colonne de droite : liste des abonnés et profil */}
        <div className="w-1/4 bg-white shadow-lg p-4">
          <h2 className="text-xl font-semibold mb-4">Liste des abonnés</h2>
          <ul className="list-none space-y-2">
            <li className="p-2 bg-gray-200 rounded">Abonné 1</li>
            <li className="p-2 bg-gray-200 rounded">Abonné 2</li>
            <li className="p-2 bg-gray-200 rounded">Abonné 3</li>
          </ul>

          {/* Profil */}
          <div className="mt-4 p-2 bg-gray-200 rounded">
            <h2 className="text-xl font-semibold">Profil</h2>
            <p>Nom d'utilisateur : Utilisateur 1</p>
            <p>Statut : En ligne</p>
          </div>
        </div>
      </div>{" "}
    </ClientLayout>
  );
}
