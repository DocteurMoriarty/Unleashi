import Image from 'next/image';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center text-white">
      <h1 className="text-9xl font-bold text-red-600 text-center pt-20"><span>ERREUR 404 !</span></h1>
      <p className="text-2xl text-center mb-4">
        Sodat ! Vous vous êtes trop éloigné du champ de bataille...
      </p>
      <div className="relative">
        <Image
          src="/images/vieuxfou.png"  // Chemin vers l'image dans le dossier public
          alt="Image"
          width={300}  // Ajustez la largeur selon vos besoins
          height={300}  // Ajustez la hauteur selon vos besoins
          objectFit="contain"
        />
      </div>
    </div>
  );
};

export default NotFound;



